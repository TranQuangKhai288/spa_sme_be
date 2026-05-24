import { Hono } from "hono";
import type { Env } from "../types/env.js";
import {
  getSpaInfo,
  getStats,
  getDashboardSummary,
} from "../controllers/spa.controller.js";
import {
  getClients,
  createClient,
} from "../controllers/client.controller.js";
import { getServices } from "../controllers/service.controller.js";
import {
  getTherapists,
  createTherapist,
  updateTherapist,
  deleteTherapist,
} from "../controllers/therapist.controller.js";
import {
  getAppointments,
  createAppointment,
  updateAppointment,
  updateAppointmentStatus,
  deleteAppointment,
} from "../controllers/appointment.controller.js";
import {
  getWorkflows,
  toggleWorkflow,
  getNotifications,
  markAllNotificationsAsRead,
  deleteNotification,
} from "../controllers/workflow.controller.js";

const router = new Hono<{ Bindings: Env }>();

// ── General Spa & Dashboard ──────────────────────────────────────────────────
router.get("/spa-info", getSpaInfo);
router.get("/stats", getStats);
router.get("/dashboard-summary", getDashboardSummary);

// ── Clients ──────────────────────────────────────────────────────────────────
router.get("/clients", getClients);
router.post("/clients", createClient);

// ── Services & Therapists ────────────────────────────────────────────────────
router.get("/services", getServices);
router.get("/therapists", getTherapists);
router.post("/therapists", createTherapist);
router.put("/therapists/:id", updateTherapist);
router.delete("/therapists/:id", deleteTherapist);

// ── Appointments ─────────────────────────────────────────────────────────────
router.get("/appointments", getAppointments);
router.post("/appointments", createAppointment);
router.put("/appointments/:id", updateAppointment);
router.put("/appointments/:id/status", updateAppointmentStatus);
router.delete("/appointments/:id", deleteAppointment);

// ── Workflows ────────────────────────────────────────────────────────────────
router.get("/workflows", getWorkflows);
router.put("/workflows/:id/toggle", toggleWorkflow);

// ── Notifications ────────────────────────────────────────────────────────────
router.get("/notifications", getNotifications);
router.post("/notifications/read-all", markAllNotificationsAsRead);
router.delete("/notifications/:id", deleteNotification);

export default router;
