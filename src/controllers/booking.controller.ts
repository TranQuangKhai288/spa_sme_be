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

// 1. PUBLIC: Khách hàng tạo Booking từ Landing Page
export const createBooking = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const body = await c.req.json();
    const { guestName, guestPhone, serviceRequested, preferredDate, preferredTime, notes } = body;

    if (!guestName || !guestPhone || !preferredDate || !preferredTime) {
      return c.json({ error: "Vui lòng nhập đầy đủ Họ tên, Số điện thoại, Ngày và Giờ." }, 400);
    }

    // Insert vào bảng Booking
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
export const updateBookingStatus = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const id = c.req.param("id");
    const { status } = await c.req.json(); // "confirmed" or "rejected"

    if (!["confirmed", "rejected"].includes(status)) {
      return c.json({ error: "Trạng thái không hợp lệ. Phải là 'confirmed' hoặc 'rejected'." }, 400);
    }

    const { data, error } = await sb
      .from("Booking")
      .update({ status })
      .eq("id", id)
      .select()
      .single();

    if (error) return c.json({ error: error.message }, 500);
    return c.json(serialize(data));
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
