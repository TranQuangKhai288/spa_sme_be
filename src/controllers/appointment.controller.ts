import type { Context } from "hono";
import type { Env } from "../types/env.js";
import { getSupabase } from "../config/database.js";
import { serialize } from "../lib/serializer.js";

export const getAppointments = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const { data, error } = await sb
      .from("Appointment")
      .select("*")
      .order("date", { ascending: false })
      .order("startTime", { ascending: true });
    if (error) return c.json({ error: error.message }, 500);
    return c.json(serialize(data));
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

export const createAppointment = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const {
      clientId,
      therapistId,
      service,
      serviceIcon,
      startTime,
      endTime,
      date,
      price,
      notes,
    } = await c.req.json();

    if (!clientId || !therapistId || !startTime || !date) {
      return c.json(
        {
          error: "Thiếu thông tin đặt lịch bắt buộc (Mã KH, Mã KTV, Ngày hẹn, Giờ bắt đầu)",
        },
        400
      );
    }

    // Fetch client and therapist concurrently
    const [clientRes, therapistRes] = await Promise.all([
      sb.from("Client").select("id, name, tier, avatar").eq("id", clientId).single(),
      sb.from("Therapist").select("id, name").eq("id", therapistId).single(),
    ]);

    if (clientRes.error || !clientRes.data)
      return c.json({ error: "Khách hàng không tồn tại" }, 404);
    if (therapistRes.error || !therapistRes.data)
      return c.json({ error: "Nhân viên không tồn tại" }, 404);

    const dbClient = clientRes.data;
    const dbTherapist = therapistRes.data;
    const apptPrice = Number(price || 0);

    // Create appointment, update client stats, create notification in parallel
    const [apptRes, , ,] = await Promise.all([
      sb
        .from("Appointment")
        .insert({
          clientId,
          clientName: dbClient.name,
          clientTier: dbClient.tier,
          clientAvatar: dbClient.avatar,
          service: service || null,
          serviceIcon: serviceIcon || null,
          therapist: dbTherapist.name,
          therapistId,
          startTime,
          endTime: endTime || startTime,
          date,
          status: "confirmed",
          statusLabel: "Đã xác nhận",
          price: apptPrice,
          notes: notes || null,
        })
        .select()
        .single(),
      sb.rpc("increment_client_stats", {
        p_client_id: clientId,
        p_price: apptPrice,
        p_date: date,
      }),
      sb.from("Notification").insert({
        type: "success",
        title: "Đã tạo lịch hẹn mới",
        message: `${dbClient.name} đã đặt lịch lúc ${startTime}`,
        time: "Vừa xong",
        read: false,
        priority: "normal",
      }),
    ]);

    if (apptRes.error) return c.json({ error: apptRes.error.message }, 500);
    return c.json(serialize(apptRes.data), 201);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

export const updateAppointment = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const id = c.req.param("id");
    const {
      service,
      serviceIcon,
      price,
      date,
      startTime,
      endTime,
      therapistId,
      notes,
      status,
    } = await c.req.json();

    const updateData: Record<string, unknown> = {};
    if (service !== undefined) updateData.service = service;
    if (serviceIcon !== undefined) updateData.serviceIcon = serviceIcon;
    if (price !== undefined) updateData.price = Number(price || 0);
    if (date !== undefined) updateData.date = date;
    if (startTime !== undefined) updateData.startTime = startTime;
    if (endTime !== undefined) updateData.endTime = endTime;
    if (notes !== undefined) updateData.notes = notes;

    if (status !== undefined) {
      updateData.status = status;
      const labels: Record<string, string> = {
        in_progress: "Đang xử lý",
        completed: "Hoàn tất",
        cancelled: "Đã hủy",
        confirmed: "Đã xác nhận",
      };
      updateData.statusLabel = labels[status] || "Đã xác nhận";
    }

    if (therapistId) {
      const { data: th, error: thErr } = await sb
        .from("Therapist")
        .select("id, name")
        .eq("id", therapistId)
        .single();
      if (thErr || !th) return c.json({ error: "Nhân viên không tồn tại" }, 404);
      updateData.therapistId = therapistId;
      updateData.therapist = th.name;
    }

    const { data, error } = await sb
      .from("Appointment")
      .update(updateData)
      .eq("id", id)
      .select()
      .single();

    if (error) return c.json({ error: error.message }, 500);
    return c.json(serialize(data));
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

export const updateAppointmentStatus = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const id = c.req.param("id");
    const { status } = await c.req.json();

    if (!status) return c.json({ error: "Trạng thái là bắt buộc" }, 400);

    const labels: Record<string, string> = {
      in_progress: "Đang xử lý",
      completed: "Hoàn tất",
      cancelled: "Đã hủy",
      confirmed: "Đã xác nhận",
    };

    const { data, error } = await sb
      .from("Appointment")
      .update({ status, statusLabel: labels[status] || "Đã xác nhận" })
      .eq("id", id)
      .select()
      .single();

    if (error) return c.json({ error: error.message }, 500);
    return c.json(serialize(data));
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

export const deleteAppointment = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const id = c.req.param("id");
    const { error } = await sb.from("Appointment").delete().eq("id", id);
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true, message: "Đã xóa lịch hẹn" });
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
