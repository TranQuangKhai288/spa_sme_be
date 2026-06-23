import type { Context } from "hono";
import type { Env } from "../types/env.js";
import { getSupabase } from "../config/database.js";
import { serialize } from "../lib/serializer.js";

// Helper to push to Pusher via REST API
async function triggerPusherEvent(env: Env, channel: string, event: string, data: any) {
  if (!env.PUSHER_APP_ID || !env.PUSHER_KEY || !env.PUSHER_SECRET || !env.PUSHER_CLUSTER) {
    console.warn("Pusher environment variables are missing. Skipping real-time notification.");
    return;
  }

  // Import CryptoJS to generate signature (or use Web Crypto API)
  // We will use standard Web Crypto API available in Cloudflare Workers
  // Pusher expects double JSON encoding for 'data'
  const eventDataString = JSON.stringify(data);
  const postBodyObject = { name: event, channels: [channel], data: eventDataString };
  const postBodyString = JSON.stringify(postBodyObject);

  // MD5 of the ENTIRE request body
  const md5Hash = await crypto.subtle.digest("MD5", new TextEncoder().encode(postBodyString));
  const bodyMd5 = Array.from(new Uint8Array(md5Hash)).map(b => b.toString(16).padStart(2, '0')).join('');

  const timestamp = Math.floor(Date.now() / 1000);
  const method = "POST";
  const path = `/apps/${env.PUSHER_APP_ID}/events`;
  const query = `auth_key=${env.PUSHER_KEY}&auth_timestamp=${timestamp}&auth_version=1.0&body_md5=${bodyMd5}`;
  
  const stringToSign = `${method}\n${path}\n${query}`;
  
  // HMAC-SHA256 signature
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(env.PUSHER_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signatureBuffer = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(stringToSign));
  const signature = Array.from(new Uint8Array(signatureBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');

  const url = `https://api-${env.PUSHER_CLUSTER}.pusher.com${path}?${query}&auth_signature=${signature}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: postBodyString
    });
    if (!res.ok) {
      console.error("Pusher trigger failed:", await res.text());
    }
  } catch (error) {
    console.error("Error sending Pusher event:", error);
  }
}

// 0. PUBLIC: Lấy trạng thái các khung giờ trong ngày
export const getAvailability = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const date = new URL(c.req.url).searchParams.get("date");

    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return c.json({ error: "Tham số date không hợp lệ (định dạng YYYY-MM-DD)" }, 400);
    }

    const parseTimeToMinutes = (t: string) => {
      if (!t) return 0;
      const [h, m] = t.split(":").map(Number);
      return (isNaN(h) ? 0 : h) * 60 + (isNaN(m) ? 0 : m);
    };

    // Lấy song song: tổng therapist available + appointments của ngày đó
    const [therapistRes, appointmentsRes] = await Promise.all([
      sb.from("Therapist").select("id", { count: "exact" }).eq("availability", "available"),
      sb.from("Appointment")
        .select("startTime, endTime, therapistId")
        .eq("date", date)
        .neq("status", "cancelled"),
    ]);

    const totalTherapists = therapistRes.count ?? 0;
    const appointments = appointmentsRes.data ?? [];

    // Tạo tất cả slot 30 phút từ 08:00 đến 20:00
    const slots: { time: string; available: boolean; busyCount: number; totalTherapists: number }[] = [];

    for (let h = 8; h < 20; h++) {
      for (const m of [0, 30]) {
        const slotTime = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
        const slotStart = parseTimeToMinutes(slotTime);
        const slotEnd = slotStart + 60; // mỗi ca 60 phút

        // Đếm số therapist bận trong khung giờ này
        const busyTherapistIds = new Set<string>();
        for (const apt of appointments) {
          const aptStart = parseTimeToMinutes(apt.startTime);
          const aptEnd = parseTimeToMinutes(apt.endTime || apt.startTime);
          if (!(aptEnd <= slotStart || aptStart >= slotEnd)) {
            busyTherapistIds.add(apt.therapistId);
          }
        }

        const busyCount = busyTherapistIds.size;
        slots.push({
          time: slotTime,
          available: totalTherapists === 0 || busyCount < totalTherapists,
          busyCount,
          totalTherapists,
        });
      }
    }

    return c.json({ date, slots, totalTherapists });
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

// 1. PUBLIC: Khách hàng tạo Booking từ Landing Page
export const createBooking = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const body = await c.req.json();
    const { guestName, guestPhone, serviceRequested, preferredDate, preferredTime, notes } = body;

    if (!guestName || !guestPhone || !preferredDate || !preferredTime) {
      return c.json({ error: "Vui lòng nhập đầy đủ Họ tên, Số điện thoại, Ngày và Giờ." }, 400);
    }

    // ──────────────────────────────────────────────────────────────────────
    // Kiểm tra thời gian: tính khoảng cách từ hiện tại đến giờ muốn đặt
    // ──────────────────────────────────────────────────────────────────────
    const nowVN = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }));
    const [year, month, day] = preferredDate.split("-").map(Number);
    const [hour, minute] = preferredTime.split(":").map(Number);
    const bookingDatetime = new Date(year, month - 1, day, hour, minute, 0);
    const minutesUntilBooking = Math.floor((bookingDatetime.getTime() - nowVN.getTime()) / 60000);

    if (minutesUntilBooking < 0) {
      return c.json({ error: "Không thể đặt lịch cho thời gian đã qua." }, 400);
    }

    // ──────────────────────────────────────────────────────────────────────
    // Kiểm tra nhân viên còn rảnh: lấy tổng số therapist và số đang bận
    // Giả định mỗi ca dịch vụ kéo dài 60 phút
    // ──────────────────────────────────────────────────────────────────────
    const slotStart = preferredTime; // e.g. "14:00"
    const [slotH, slotM] = preferredTime.split(":").map(Number);
    const slotEndDate = new Date(0, 0, 0, slotH, slotM + 60);
    const slotEnd = `${String(slotEndDate.getHours()).padStart(2, "0")}:${String(slotEndDate.getMinutes()).padStart(2, "0")}`;

    const parseTimeToMinutes = (t: string) => {
      if (!t) return 0;
      const [h, m] = t.split(":").map(Number);
      return (isNaN(h) ? 0 : h) * 60 + (isNaN(m) ? 0 : m);
    };

    const slotStartMin = parseTimeToMinutes(slotStart);
    const slotEndMin = parseTimeToMinutes(slotEnd);

    const [therapistRes, appointmentsRes] = await Promise.all([
      sb.from("Therapist").select("id", { count: "exact" }).eq("availability", "available"),
      sb.from("Appointment")
        .select("startTime, endTime, therapistId")
        .eq("date", preferredDate)
        .neq("status", "cancelled"),
    ]);

    const totalTherapists = therapistRes.count ?? 0;

    // Đếm therapist đang bận trong khung giờ yêu cầu
    const busyTherapistIds = new Set<string>();
    for (const apt of (appointmentsRes.data ?? [])) {
      const aptStart = parseTimeToMinutes(apt.startTime);
      const aptEnd = parseTimeToMinutes(apt.endTime || apt.startTime);
      // Overlap nếu không phải (aptEnd <= slotStart || aptStart >= slotEnd)
      if (!(aptEnd <= slotStartMin || aptStart >= slotEndMin)) {
        busyTherapistIds.add(apt.therapistId);
      }
    }

    const isFullyBooked = totalTherapists > 0 && busyTherapistIds.size >= totalTherapists;

    if (isFullyBooked) {
      // Tìm các khung giờ còn trống trong ngày (08:00 – 20:00, step 30 phút)
      const allSlots: string[] = [];
      for (let h = 8; h < 20; h++) {
        for (const m of [0, 30]) {
          allSlots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
        }
      }

      const availableSlots = allSlots.filter((slot) => {
        const sStart = parseTimeToMinutes(slot);
        const sEnd = sStart + 60;
        // Khung giờ trống nếu số therapist bận < tổng
        const busyInSlot = new Set<string>();
        for (const apt of (appointmentsRes.data ?? [])) {
          const aptStart = parseTimeToMinutes(apt.startTime);
          const aptEnd = parseTimeToMinutes(apt.endTime || apt.startTime);
          if (!(aptEnd <= sStart || aptStart >= sEnd)) {
            busyInSlot.add(apt.therapistId);
          }
        }
        return busyInSlot.size < totalTherapists;
      });

      // Nếu < 60 phút: đặt fail hoàn toàn
      if (minutesUntilBooking < 60) {
        return c.json({
          error: `Rất tiếc! Đã hết lịch vào lúc ${preferredTime}. Chúng tôi cần ít nhất 60 phút để chuẩn bị.`,
          availableSlots,
          availableSlotsMessage: availableSlots.length > 0
            ? `Các khung giờ còn trống trong ngày ${preferredDate}: ${availableSlots.join(", ")}`
            : `Rất tiếc, không còn khung giờ trống nào trong ngày ${preferredDate}.`,
        }, 409);
      }

      // Nếu >= 60 phút: đặt fail và thông báo giờ trống
      return c.json({
        error: `Rất tiếc! Đã hết lịch vào lúc ${preferredTime} ngày ${preferredDate}.`,
        availableSlots,
        availableSlotsMessage: availableSlots.length > 0
          ? `Các khung giờ còn trống trong ngày: ${availableSlots.join(", ")}`
          : `Rất tiếc, không còn khung giờ trống nào trong ngày ${preferredDate}.`,
      }, 409);
    }

    // ──────────────────────────────────────────────────────────────────────
    // Còn slot → tạo booking bình thường
    // ──────────────────────────────────────────────────────────────────────
    const { data: booking, error } = await sb
      .from("Booking")
      .insert({
        guestName,
        guestPhone,
        serviceRequested: serviceRequested || "Tư vấn",
        preferredDate,
        preferredTime,
        notes: notes || "",
        status: "pending"
      })
      .select()
      .single();

    if (error) {
      console.error("Lỗi khi tạo booking:", error);
      return c.json({ error: error.message || JSON.stringify(error) }, 500);
    }

    // Kích hoạt Pusher báo cho màn hình Dashboard
    c.executionCtx.waitUntil(
      triggerPusherEvent(c.env, "spa-channel", "new-booking", booking)
    );

    // Cảnh báo nếu đặt gấp (< 60 phút) nhưng vẫn còn slot
    if (minutesUntilBooking < 60) {
      return c.json({
        success: true,
        booking: serialize(booking),
        warning: `Lưu ý: Lịch hẹn của bạn còn ${minutesUntilBooking} phút nữa. Vui lòng đến sớm để không bị trễ.`,
      }, 201);
    }

    return c.json({ success: true, booking: serialize(booking) }, 201);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};


// 2. ADMIN: Lấy danh sách Bookings (có thể lọc theo status)
export const getBookings = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const url = new URL(c.req.url);
    const status = url.searchParams.get("status");

    let query = sb.from("Booking").select("*").order("createdAt", { ascending: false });
    
    if (status) {
      query = query.eq("status", status);
    }

    const { data, error } = await query;

    if (error) return c.json({ error: error.message }, 500);
    return c.json(serialize(data));
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

// 3. ADMIN: Cập nhật trạng thái Booking (Confirm/Reject)
// Khi "confirmed" → tự động tạo Appointment tương ứng
export const updateBookingStatus = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const id = c.req.param("id");
    const { status } = await c.req.json(); // "confirmed" or "rejected"

    if (!["confirmed", "rejected"].includes(status)) {
      return c.json({ error: "Trạng thái không hợp lệ. Phải là 'confirmed' hoặc 'rejected'." }, 400);
    }

    // Lấy thông tin booking trước
    const { data: booking, error: fetchErr } = await sb
      .from("Booking")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchErr || !booking) {
      return c.json({ error: "Không tìm thấy đơn đặt chỗ." }, 404);
    }

    if (booking.status !== "pending") {
      return c.json({ error: "Đơn đặt chỗ này đã được xử lý trước đó." }, 409);
    }

    let appointment = null;

    if (status === "confirmed") {
      // 1. Kiểm tra / tự động tạo Client mới nếu số điện thoại chưa tồn tại
      let clientId = "";
      let clientTier = "Thành Viên";
      let clientAvatar = `https://i.pravatar.cc/150?u=${booking.guestPhone}`;

      const { data: existingClient, error: clientFetchErr } = await sb
        .from("Client")
        .select("id, name, avatar, tier")
        .eq("phone", booking.guestPhone)
        .maybeSingle();

      if (existingClient && !clientFetchErr) {
        clientId = existingClient.id;
        clientTier = existingClient.tier;
        clientAvatar = existingClient.avatar || clientAvatar;
      } else {
        // Tạo khách hàng mới
        const newClientId = crypto.randomUUID();
        const { data: newClient, error: clientCreateErr } = await sb
          .from("Client")
          .insert({
            id: newClientId,
            name: booking.guestName,
            avatar: clientAvatar,
            tier: "Mới",
            phone: booking.guestPhone,
            email: "",
            totalVisits: 0,
            totalSpent: 0,
            memberPoints: 0,
            lastVisit: new Date().toISOString().split("T")[0],
            joinDate: new Date().toISOString().split("T")[0],
            notes: "Tự động tạo từ đặt lịch trực tuyến",
          })
          .select()
          .single();

        if (!clientCreateErr && newClient) {
          clientId = newClient.id;
          clientTier = newClient.tier;
        } else {
          console.error("Lỗi tự động tạo Client từ Booking:", clientCreateErr?.message);
          return c.json({ error: `Không thể tạo hồ sơ khách hàng: ${clientCreateErr?.message || "Lỗi không xác định"}` }, 500);
        }
      }

      // 2. Đảm bảo therapist "unassigned" có trong DB
      const { data: existingTh, error: thFetchErr } = await sb
        .from("Therapist")
        .select("id")
        .eq("id", "unassigned")
        .maybeSingle();

      if (!existingTh && !thFetchErr) {
        const { error: thCreateErr } = await sb.from("Therapist").insert({
          id: "unassigned",
          name: "Chưa phân bổ",
          avatar: "https://i.pravatar.cc/150?u=unassigned",
          specialty: "N/A",
          experience: "0 năm",
          rating: 5.0,
          totalReviews: 0,
          availability: "available",
          bio: "Hệ thống tự động sử dụng",
          services: [],
        });
        if (thCreateErr) {
          console.error("Lỗi tự động tạo Therapist mặc định:", thCreateErr.message);
        }
      }

      // 3. Tính giờ kết thúc = giờ bắt đầu + 60 phút
      const endTime = (() => {
        const [h, m] = (booking.preferredTime || "08:00").split(":").map(Number);
        const d = new Date(0, 0, 0, h, m + 60);
        return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
      })();

      // 4. Tạo Appointment trước
      const apptId = crypto.randomUUID();
      const { data: apptData, error: apptErr } = await sb
        .from("Appointment")
        .insert({
          id: apptId,
          clientId,
          clientName: booking.guestName,
          clientTier,
          clientAvatar,
          service: booking.serviceRequested || "Tư vấn",
          serviceIcon: "spa",
          therapist: "Chưa phân bổ",
          therapistId: "unassigned",
          startTime: booking.preferredTime,
          endTime,
          date: booking.preferredDate,
          status: "confirmed",
          statusLabel: "Đã xác nhận",
          price: 0,
          notes: booking.notes
            ? `${booking.notes} | SĐT: ${booking.guestPhone}`
            : `Đặt chỗ trực tuyến | SĐT: ${booking.guestPhone}`,
          reminderTime: 1440,
        })
        .select()
        .single();

      if (apptErr) {
        console.error("Lỗi tạo Appointment từ Booking:", apptErr.message);
        return c.json({ error: `Lỗi tạo lịch hẹn: ${apptErr.message}` }, 500);
      }

      appointment = serialize(apptData);

      // 5. Cập nhật trạng thái Booking
      const { data: updatedBooking, error: updateErr } = await sb
        .from("Booking")
        .update({ status })
        .eq("id", id)
        .select()
        .single();

      if (updateErr) {
        // Rollback appointment nếu không cập nhật được trạng thái booking
        await sb.from("Appointment").delete().eq("id", apptId);
        return c.json({ error: `Lỗi cập nhật đặt chỗ: ${updateErr.message}` }, 500);
      }

      // 6. Tạo Notification nhắc nhân viên phân bổ
      await sb.from("Notification").insert({
        type: "info",
        title: "Lịch hẹn mới cần phân bổ nhân viên",
        message: `${booking.guestName} – ${booking.preferredTime} ngày ${booking.preferredDate}. SĐT: ${booking.guestPhone}`,
        time: "Vừa xong",
        read: false,
        priority: "high",
      });

      return c.json({ success: true, booking: serialize(updatedBooking), appointment });
    } else {
      // Đối với trạng thái rejected, chỉ cần cập nhật Booking
      const { data: updatedBooking, error: updateErr } = await sb
        .from("Booking")
        .update({ status })
        .eq("id", id)
        .select()
        .single();

      if (updateErr) return c.json({ error: updateErr.message }, 500);
      return c.json({ success: true, booking: serialize(updatedBooking), appointment: null });
    }
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
