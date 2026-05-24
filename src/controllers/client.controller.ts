import type { Context } from "hono";
import type { Env } from "../types/env.js";
import { getSupabase } from "../config/database.js";
import { serialize } from "../lib/serializer.js";

export const getClients = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const { data, error } = await sb
      .from("Client")
      .select("*")
      .order("name", { ascending: true });
    if (error) return c.json({ error: error.message }, 500);
    return c.json(serialize(data));
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

export const createClient = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const body = await c.req.json();
    const { name, avatar, tier, phone, email, notes } = body;

    if (!name || !phone) {
      return c.json({ error: "Tên và số điện thoại là bắt buộc" }, 400);
    }

    const { data, error } = await sb
      .from("Client")
      .insert({
        name,
        avatar: avatar || "",
        tier: tier || "Thành Viên",
        phone,
        email: email || "",
        totalVisits: 0,
        totalSpent: 0,
        memberPoints: 0,
        lastVisit: new Date().toISOString().split("T")[0],
        joinDate: new Date().toISOString().split("T")[0],
        notes: notes || null,
      })
      .select()
      .single();

    if (error) return c.json({ error: error.message }, 500);
    return c.json(serialize(data), 201);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
