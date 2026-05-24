import { Hono } from "hono";
import { cors } from "hono/cors";
import type { Env } from "./types/env.js";
import apiRouter from "./routes/api.js";

// ─────────────────────────────────────────────────────────────────────────────
// App
// ─────────────────────────────────────────────────────────────────────────────
const app = new Hono<{ Bindings: Env }>();

// ─────────────────────────────────────────────────────────────────────────────
// Middleware
// ─────────────────────────────────────────────────────────────────────────────

// Request correlation ID  (replaces uuid + express middleware)
app.use("*", async (c, next) => {
  c.set("requestId" as never, crypto.randomUUID());
  await next();
});

// CORS  (replaces the cors npm package)
app.use(
  "*",
  cors({
    origin: "*", // allow all origins — lock to your frontend domain in production
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
);

// Request logger  (replaces express-winston — logs go to Cloudflare dashboard / Logpush)
app.use("*", async (c, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(
    JSON.stringify({
      requestId: c.get("requestId" as never),
      method: c.req.method,
      path: c.req.path,
      status: c.res.status,
      durationMs: ms,
    })
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// Routes
// ─────────────────────────────────────────────────────────────────────────────

// Health check
app.get("/health", (c) =>
  c.json({ status: "OK", timestamp: new Date().toISOString() })
);

// All API routes
app.route("/api", apiRouter);

// 404 fallback
app.notFound((c) =>
  c.json({ error: "Not Found", path: c.req.path }, 404)
);

// Global error handler
app.onError((err, c) => {
  console.error(
    JSON.stringify({
      requestId: c.get("requestId" as never),
      error: err.message,
      stack: err.stack,
    })
  );
  return c.json({ error: "Internal Server Error" }, 500);
});

// ─────────────────────────────────────────────────────────────────────────────
// Export as Cloudflare Workers handler
// ─────────────────────────────────────────────────────────────────────────────
export default app;
