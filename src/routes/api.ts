import { Hono } from "hono";
import type { Env } from "../types/env.js";
import { getSupabase } from "../config/database.js";
import {
  getSpaInfo,
  getStats,
  getDashboardSummary,
} from "../controllers/spa.controller.js";
import {
  getClients,
  createClient,
  updateClient,
  deleteClient,
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
import { updateCurrentUser } from "../controllers/user.controller.js";
import {
  createBooking,
  getBookings,
  updateBookingStatus,
} from "../controllers/booking.controller.js";

const router = new Hono<{ Bindings: Env }>();

// ── Role Guards ──────────────────────────────────────────────────────────────
const checkAdmin = async (c: any, next: any) => {
  const sb = getSupabase(c.env);
  const { data: user } = await sb.from("CurrentUser").select("role").single();
  if (user?.role !== "admin") {
    return c.json(
      {
        error: "Quyền truy cập bị từ chối. Chỉ Quản trị viên mới thực hiện được hành động này.",
      },
      403
    );
  }
  await next();
};

const checkNotTechnician = async (c: any, next: any) => {
  const sb = getSupabase(c.env);
  const { data: user } = await sb.from("CurrentUser").select("role").single();
  if (user?.role === "technician") {
    return c.json(
      {
        error: "Quyền truy cập bị từ chối. Kỹ thuật viên không được thực hiện hành động này.",
      },
      403
    );
  }
  await next();
};

// ── General Spa & Dashboard ──────────────────────────────────────────────────
router.get("/spa-info", getSpaInfo);
router.get("/stats", getStats);
router.get("/dashboard-summary", getDashboardSummary);

// ── User Management (Demo Switcher) ──────────────────────────────────────────
router.put("/current-user", updateCurrentUser);

// ── Clients ──────────────────────────────────────────────────────────────────
router.get("/clients", getClients);
router.post("/clients", createClient);
router.put("/clients/:id", updateClient);
router.delete("/clients/:id", deleteClient);

// ── Services & Therapists ────────────────────────────────────────────────────
router.get("/services", getServices);
router.get("/therapists", getTherapists);
router.post("/therapists", checkAdmin, createTherapist);
router.put("/therapists/:id", checkAdmin, updateTherapist);
router.delete("/therapists/:id", checkAdmin, deleteTherapist);

// ── Appointments ─────────────────────────────────────────────────────────────
router.get("/appointments", getAppointments);
router.post("/appointments", checkNotTechnician, createAppointment);
router.put("/appointments/:id", updateAppointment);
router.put("/appointments/:id/status", checkNotTechnician, updateAppointmentStatus);
router.delete("/appointments/:id", checkNotTechnician, deleteAppointment);

// ── Workflows ────────────────────────────────────────────────────────────────
router.get("/workflows", getWorkflows);
router.put("/workflows/:id/toggle", checkAdmin, toggleWorkflow);

// ── Notifications ────────────────────────────────────────────────────────────
router.get("/notifications", getNotifications);
router.post("/notifications/read-all", markAllNotificationsAsRead);
router.delete("/notifications/:id", deleteNotification);

// ── Bookings (Public & Admin) ────────────────────────────────────────────────
router.post("/bookings", createBooking); // Public
router.get("/bookings", getBookings);    // Admin/Staff only (could add checkNotTechnician if needed)
router.put("/bookings/:id/status", updateBookingStatus); // Admin/Staff only

export default router;
