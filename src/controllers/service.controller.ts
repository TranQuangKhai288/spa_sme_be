import type { Context } from "hono";
import type { Env } from "../types/env.js";
import { getSupabase } from "../config/database.js";
import { serialize } from "../lib/serializer.js";

export const getServices = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const { data, error } = await sb
      .from("Service")
      .select("*")
      .order("name", { ascending: true });
    if (error) return c.json({ error: error.message }, 500);
    return c.json(serialize(data));
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
