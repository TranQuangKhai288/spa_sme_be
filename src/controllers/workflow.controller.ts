import type { Request, Response } from "express";
import { prisma } from "../config/database.js";

export const getWorkflows = async (req: Request, res: Response) => {
  try {
    const workflows = await prisma.workflow.findMany();
    return res.json(workflows);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const toggleWorkflow = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const workflow = await prisma.workflow.findUnique({ where: { id } });
    if (!workflow) {
      return res.status(404).json({ error: "Workflow không tồn tại" });
    }

    const updated = await prisma.workflow.update({
      where: { id },
      data: {
        active: !workflow.active,
      },
    });
    return res.json(updated);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const getNotifications = async (req: Request, res: Response) => {
  try {
    const notifications = await prisma.notification.findMany({
      orderBy: { id: "desc" }, // newest first
    });
    return res.json(notifications);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const markAllNotificationsAsRead = async (req: Request, res: Response) => {
  try {
    await prisma.notification.updateMany({
      data: { read: true },
    });
    return res.json({ success: true, message: "Đã đánh dấu đọc tất cả thông báo" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteNotification = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.notification.delete({ where: { id } });
    return res.json({ success: true, message: "Đã xóa thông báo" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
