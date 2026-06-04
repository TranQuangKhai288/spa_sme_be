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
        id: crypto.randomUUID(),
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

export const updateClient = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const id = c.req.param("id");
    const body = await c.req.json();
    const { name, avatar, tier, phone, email, notes, totalVisits, totalSpent, memberPoints, lastVisit, joinDate } = body;

    const updateData: Record<string, any> = {};
    if (name !== undefined) updateData.name = name;
    if (avatar !== undefined) updateData.avatar = avatar;
    if (tier !== undefined) updateData.tier = tier;
    if (phone !== undefined) updateData.phone = phone;
    if (email !== undefined) updateData.email = email;
    if (notes !== undefined) updateData.notes = notes;
    if (totalVisits !== undefined) updateData.totalVisits = totalVisits;
    if (totalSpent !== undefined) updateData.totalSpent = totalSpent;
    if (memberPoints !== undefined) updateData.memberPoints = memberPoints;
    if (lastVisit !== undefined) updateData.lastVisit = lastVisit;
    if (joinDate !== undefined) updateData.joinDate = joinDate;

    const { data, error } = await sb
      .from("Client")
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

export const deleteClient = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const id = c.req.param("id");
    const { error } = await sb.from("Client").delete().eq("id", id);
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true, message: "Đã xóa khách hàng" });
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

