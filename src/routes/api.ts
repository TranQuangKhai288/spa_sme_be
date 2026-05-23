import { Router } from "express";
import {
  getSpaInfo,
  getStats,
  getDashboardSummary,
} from "../controllers/spa.controller.js";
import {
  getClients,
  createClient,
} from "../controllers/client.controller.js";
import {
  getServices,
  getTherapists,
} from "../controllers/service.controller.js";
import {
  getAppointments,
  createAppointment,
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

const router = Router();

// General Spa & Dashboard Info
router.get("/spa-info", getSpaInfo);
router.get("/stats", getStats);
router.get("/dashboard-summary", getDashboardSummary);

// Clients
router.get("/clients", getClients);
router.post("/clients", createClient);

// Services & Therapists
router.get("/services", getServices);
router.get("/therapists", getTherapists);

// Appointments
router.get("/appointments", getAppointments);
router.post("/appointments", createAppointment);
router.put("/appointments/:id/status", updateAppointmentStatus);
router.delete("/appointments/:id", deleteAppointment);

// Workflows
router.get("/workflows", getWorkflows);
router.put("/workflows/:id/toggle", toggleWorkflow);

// Notifications
router.get("/notifications", getNotifications);
router.post("/notifications/read-all", markAllNotificationsAsRead);
router.delete("/notifications/:id", deleteNotification);

export default router;
