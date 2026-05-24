import { createClient } from "@supabase/supabase-js";
import type { Env } from "../types/env.js";

/**
 * Returns a Supabase client using the project URL and anon key from env.
 *
 * createClient() is lightweight and works in Cloudflare Workers via fetch().
 * No TCP sockets, no WebSockets required — pure HTTP/REST.
 */
export function getSupabase(env: Env) {
  return createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
    auth: { persistSession: false },
  });
}
