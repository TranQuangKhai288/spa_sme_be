/**
 * Cloudflare Workers Bindings (Environment Variables & Secrets)
 *
 * Non-secret vars → defined in wrangler.jsonc under [vars]
 * Secrets         → set via: wrangler secret put <KEY>
 */
export interface Env {
  /** Supabase project URL — e.g. https://<ref>.supabase.co */
  SUPABASE_URL: string;
  /** Supabase anon/public key */
  SUPABASE_ANON_KEY: string;
}
