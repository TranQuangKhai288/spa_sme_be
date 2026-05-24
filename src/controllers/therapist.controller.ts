import type { Context } from "hono";
import type { Env } from "../types/env.js";
import { getSupabase } from "../config/database.js";
import { serialize } from "../lib/serializer.js";

export const getTherapists = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const { data, error } = await sb
      .from("Therapist")
      .select("*")
      .order("name", { ascending: true });
    if (error) return c.json({ error: error.message }, 500);
    return c.json(serialize(data));
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

export const createTherapist = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const body = await c.req.json();
    const { name, avatar, specialty, experience, bio, services } = body;

    if (!name || !specialty) {
      return c.json({ error: "Tên và chuyên môn là bắt buộc" }, 400);
    }

    const { data, error } = await sb
      .from("Therapist")
      .insert({
        name,
        avatar: avatar || "",
        specialty,
        experience: experience || "0 năm",
        rating: 5.0,
        totalReviews: 0,
        availability: "available",
        bio: bio || "",
        services: services || [],
      })
      .select()
      .single();

    if (error) return c.json({ error: error.message }, 500);
    return c.json(serialize(data), 201);
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

export const updateTherapist = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const id = c.req.param("id");
    const body = await c.req.json();
    const { name, avatar, specialty, experience, bio, services, availability } = body;

    const updateData: Record<string, unknown> = {};
    if (name !== undefined) updateData.name = name;
    if (avatar !== undefined) updateData.avatar = avatar;
    if (specialty !== undefined) updateData.specialty = specialty;
    if (experience !== undefined) updateData.experience = experience;
    if (bio !== undefined) updateData.bio = bio;
    if (services !== undefined) updateData.services = services;
    if (availability !== undefined) updateData.availability = availability;

    const { data, error } = await sb
      .from("Therapist")
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

export const deleteTherapist = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const id = c.req.param("id");
    const { error } = await sb.from("Therapist").delete().eq("id", id);
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true, message: "Đã xóa nhân viên" });
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
