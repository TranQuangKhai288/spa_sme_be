import type { Context } from "hono";
import type { Env } from "../types/env.js";
import { getSupabase } from "../config/database.js";
import { serialize } from "../lib/serializer.js";

export const getWorkflows = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const { data, error } = await sb.from("Workflow").select("*");
    if (error) return c.json({ error: error.message }, 500);
    return c.json(serialize(data));
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

export const toggleWorkflow = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const id = c.req.param("id");

    const { data: workflow, error: fetchError } = await sb
      .from("Workflow")
      .select("id, active")
      .eq("id", id)
      .single();

    if (fetchError || !workflow) {
      return c.json({ error: "Workflow không tồn tại" }, 404);
    }

    const { data, error } = await sb
      .from("Workflow")
      .update({ active: !workflow.active })
      .eq("id", id)
      .select()
      .single();

    if (error) return c.json({ error: error.message }, 500);
    return c.json(serialize(data));
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

export const getNotifications = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const { data, error } = await sb
      .from("Notification")
      .select("*")
      .order("id", { ascending: false });
    if (error) return c.json({ error: error.message }, 500);
    return c.json(serialize(data));
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

export const markAllNotificationsAsRead = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const { error } = await sb
      .from("Notification")
      .update({ read: true })
      .eq("read", false);
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true, message: "Đã đánh dấu đọc tất cả thông báo" });
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

export const deleteNotification = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const id = c.req.param("id");
    const { error } = await sb.from("Notification").delete().eq("id", id);
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true, message: "Đã xóa thông báo" });
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
