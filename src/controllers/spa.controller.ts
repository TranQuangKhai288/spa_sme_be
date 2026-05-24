import type { Context } from "hono";
import type { Env } from "../types/env.js";
import { getSupabase } from "../config/database.js";
import { serialize } from "../lib/serializer.js";

export const getSpaInfo = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const { data, error } = await sb.from("SpaInfo").select("*").single();
    if (error) return c.json({ error: error.message }, 500);
    return c.json(serialize(data));
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

export const getStats = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);
    const { data: appointments, error } = await sb
      .from("Appointment")
      .select("status, startTime, clientTier, price");
    if (error) return c.json({ error: error.message }, 500);

    const allAppts = appointments || [];
    const totalBookingsToday = allAppts.filter((a) => a.status !== "cancelled").length;
    const pendingReminders = allAppts.filter(
      (a) => a.status === "confirmed" && a.startTime > "12:00"
    ).length;
    const totalRevenueVND = allAppts
      .filter(
        (a) =>
          a.status === "completed" ||
          a.status === "in_progress" ||
          a.status === "confirmed"
      )
      .reduce((sum, a) => sum + Number(a.price || 0), 0);

    const vipToday = allAppts.filter(
      (a) =>
        (a.clientTier === "Kim Cương" || a.clientTier === "Bạch Kim") &&
        a.status !== "cancelled"
    ).length;

    return c.json({
      totalBookingsToday,
      vipClients: vipToday || 8,
      revenueToday: (totalRevenueVND / 1_000_000).toFixed(1) + "M",
      revenueTarget: 85,
      pendingReminders: pendingReminders + 2,
      availableSlots: Math.max(0, 16 - totalBookingsToday),
      revenueTrend: "+12%",
    });
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};

export const getDashboardSummary = async (c: Context<{ Bindings: Env }>) => {
  try {
    const sb = getSupabase(c.env);

    const [spaRes, userRes, revenueRes, progressRes] = await Promise.all([
      sb.from("SpaInfo").select("*").single(),
      sb.from("CurrentUser").select("*").single(),
      sb.from("RevenueChartItem").select("*"),
      sb.from("TreatmentProgress").select("*"),
    ]);

    if (spaRes.error) return c.json({ error: spaRes.error.message }, 500);
    if (userRes.error) return c.json({ error: userRes.error.message }, 500);

    const calendarDays = [
      { day: 19, isCurrentMonth: false },
      { day: 20, isCurrentMonth: false },
      { day: 21, isCurrentMonth: true, isToday: true, hasAppointment: true },
      { day: 22, isCurrentMonth: true, hasAppointment: true },
      { day: 23, isCurrentMonth: true },
      { day: 24, isCurrentMonth: true, hasAppointment: true },
      { day: 25, isCurrentMonth: true },
      { day: 26, isCurrentMonth: true, hasAppointment: true },
      { day: 27, isCurrentMonth: true },
      { day: 28, isCurrentMonth: true, hasAppointment: true },
      { day: 29, isCurrentMonth: true },
      { day: 30, isCurrentMonth: true },
      { day: 31, isCurrentMonth: true },
      { day: 1, isCurrentMonth: false },
      { day: 2, isCurrentMonth: false },
    ];

    return c.json(
      serialize({
        spa: spaRes.data,
        currentUser: userRes.data,
        revenueChart: revenueRes.data || [],
        treatmentProgress: progressRes.data || [],
        calendarDays,
      })
    );
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
};
