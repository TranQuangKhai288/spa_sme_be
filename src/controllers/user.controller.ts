import type { Context } from "hono";
import type { Env } from "../types/env.js";
import { getSupabase } from "../config/database.js";
import { serialize } from "../lib/serializer.js";

export const updateCurrentUser = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const { role } = await c.req.json();

    if (!role || !["admin", "cashier", "technician"].includes(role)) {
      return c.json({ error: "Vai trò không hợp lệ" }, 400);
    }

    // Fetch the current user to get their ID
    const { data: user, error: fetchErr } = await sb
      .from("CurrentUser")
      .select("*")
      .single();

    if (fetchErr || !user) {
      return c.json({ error: "Không tìm thấy người dùng hiện tại" }, 404);
    }

    let updateData = {
      role,
      name: "Nguyễn Minh Admin",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      greeting: "Chào mừng Quản trị viên",
    };

    if (role === "cashier") {
      updateData = {
        role,
        name: "Trần Thanh Thu Ngân",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
        greeting: "Chào mừng Thu ngân",
      };
    } else if (role === "technician") {
      updateData = {
        role,
        name: "Lê An Kỹ Thuật Viên",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
        greeting: "Chào Kỹ thuật viên",
      };
    }

    const { data, error } = await sb
      .from("CurrentUser")
      .update(updateData)
      .eq("id", user.id)
      .select()
      .single();

    if (error) return c.json({ error: error.message }, 500);
    return c.json(serialize(data));
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
