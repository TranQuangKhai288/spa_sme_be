import { getSupabase } from "../config/database.js";
import type { Env } from "../types/env.js";

/**
 * Xử lý quét và gửi nhắc nhở lịch hẹn
 */
export async function processReminders(env: Env) {
  console.log("[CRON] Bắt đầu quét lịch hẹn cần nhắc...");
  const sb = getSupabase(env);

  // Lấy thời gian hiện tại
  const now = new Date();
  
  // Tính thời gian hiện tại theo phút trong ngày để so sánh
  // Vì trong DB lưu startTime dạng "HH:MM" và date dạng "YYYY-MM-DD"
  
  // Lấy danh sách lịch hẹn: chưa nhắc, đã xác nhận
  // Không giới hạn ngày để đơn giản, nhưng trên thực tế nên chỉ query các ngày gần
  const today = now.toISOString().split("T")[0];
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  // Fetch appointments AND their related clients to get the phone number
  const { data: appointments, error } = await sb
    .from("Appointment")
    .select("*, Client(phone)")
    .eq("status", "confirmed")
    .eq("reminderSent", false)
    .in("date", [today, tomorrow]); // Chỉ quét hôm nay và ngày mai

  if (error) {
    console.error("[CRON] Lỗi truy vấn lịch hẹn:", error);
    return;
  }

  if (!appointments || appointments.length === 0) {
    console.log("[CRON] Không có lịch hẹn nào cần xử lý.");
    return;
  }

  const notificationsToInsert = [];
  const appointmentsToUpdate = [];

  for (const appt of appointments) {
    // Phân tích thời gian hẹn
    const apptDate = new Date(`${appt.date}T${appt.startTime}:00`);
    const timeDiffMs = apptDate.getTime() - now.getTime();
    const timeDiffMinutes = Math.floor(timeDiffMs / 60000);

    const reminderTimeMinutes = appt.reminderTime ?? 1440; // Mặc định 24h

    // Nếu thời gian còn lại nhỏ hơn hoặc bằng thời gian nhắc và vẫn trong tương lai (không tính lịch quá khứ quá sâu)
    if (timeDiffMinutes > 0 && timeDiffMinutes <= reminderTimeMinutes) {
      console.log(`[CRON] Đã tìm thấy lịch hẹn cần nhắc: ${appt.id} (còn ${timeDiffMinutes} phút)`);
      
      // Chuẩn bị Notification
      notificationsToInsert.push({
        type: "warning", // dùng màu cam/vàng cho nhắc lịch
        title: "⏰ Nhắc lịch sắp tới",
        message: `Lịch hẹn với khách hàng ${appt.clientName || "Khách hàng"} lúc ${appt.startTime} ngày ${appt.date.split("-").reverse().join("/")} sắp diễn ra.`,
        time: "Vừa xong",
        read: false,
        priority: "high",
      });

      // Chuẩn bị update
      appointmentsToUpdate.push(appt.id);

      // GỬI SMS QUA SPEEDSMS
      const clientPhone = appt.Client?.phone;
      if (clientPhone && env.SPEEDSMS_TOKEN) {
        try {
          const smsRes = await fetch("https://api.speedsms.vn/index.php/sms/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Basic " + btoa(env.SPEEDSMS_TOKEN + ":x")
            },
            body: JSON.stringify({
              to: clientPhone,
              content: `Serenity Spa: Nhac lich hen cua quy khach ${appt.clientName} vao luc ${appt.startTime} ngay ${appt.date}. Vui long den dung gio.`,
              sms_type: 2,
              sender: "SerenitySpa" // Hoặc số mặc định
            })
          });
          const smsData = await smsRes.json();
          console.log(`[CRON] Đã gửi SMS cho ${clientPhone}:`, smsData);
        } catch (smsErr) {
          console.error(`[CRON] Lỗi gửi SMS cho ${clientPhone}:`, smsErr);
        }
      } else {
        console.log(`[CRON] Bỏ qua gửi SMS cho ${appt.clientName} vì thiếu SĐT hoặc token.`);
      }
    }
  }

  if (notificationsToInsert.length > 0) {
    // Insert notifications
    const { error: notifError } = await sb.from("Notification").insert(notificationsToInsert);
    if (notifError) {
      console.error("[CRON] Lỗi khi tạo notifications:", notifError);
    } else {
      console.log(`[CRON] Đã tạo ${notificationsToInsert.length} notifications.`);
    }

    // Update appointments
    // Supabase update cho mảng ID có thể dùng "in"
    const { error: updateError } = await sb
      .from("Appointment")
      .update({ reminderSent: true })
      .in("id", appointmentsToUpdate);
      
    if (updateError) {
      console.error("[CRON] Lỗi khi cập nhật trạng thái reminderSent:", updateError);
    } else {
      console.log(`[CRON] Đã cập nhật trạng thái reminderSent cho ${appointmentsToUpdate.length} lịch hẹn.`);
    }
  } else {
    console.log("[CRON] Chưa đến giờ nhắc cho các lịch hẹn sắp tới.");
  }
}
