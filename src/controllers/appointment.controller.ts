import type { Request, Response } from "express";
import { prisma } from "../config/database.js";

export const getAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: [
        { date: "desc" },
        { startTime: "asc" }
      ],
    });
    return res.json(appointments);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const createAppointment = async (req: Request, res: Response) => {
  try {
    const {
      clientId,
      clientName,
      clientTier,
      clientAvatar,
      service,
      serviceIcon,
      therapist,
      therapistId,
      startTime,
      endTime,
      date,
      price,
    } = req.body;

    if (!clientId || !therapistId || !service || !startTime || !date) {
      return res.status(400).json({ error: "Thiếu thông tin đặt lịch bắt buộc" });
    }

    // Verify Client exists
    const dbClient = await prisma.client.findUnique({
      where: { id: clientId }
    });
    if (!dbClient) {
      return res.status(404).json({ error: "Khách hàng không tồn tại" });
    }

    // Verify Therapist exists
    const dbTherapist = await prisma.therapist.findUnique({
      where: { id: therapistId }
    });
    if (!dbTherapist) {
      return res.status(404).json({ error: "Kỹ thuật viên không tồn tại" });
    }

    const apptPrice = BigInt(price || 0);

    // Create appointment and update client total visits / spend / points in a transaction
    const [appointment] = await prisma.$transaction([
      prisma.appointment.create({
        data: {
          clientId,
          clientName: dbClient.name,
          clientTier: dbClient.tier,
          clientAvatar: dbClient.avatar,
          service,
          serviceIcon: serviceIcon || "spa",
          therapist: dbTherapist.name,
          therapistId,
          startTime,
          endTime: endTime || startTime,
          date,
          status: "confirmed",
          statusLabel: "Đã xác nhận",
          price: apptPrice,
        },
      }),
      prisma.client.update({
        where: { id: clientId },
        data: {
          totalVisits: { increment: 1 },
          totalSpent: { increment: apptPrice },
          memberPoints: { increment: Math.floor(Number(apptPrice) / 10000) },
          lastVisit: date,
        }
      }),
      // Create system notification
      prisma.notification.create({
        data: {
          type: "success",
          title: "Đã tạo lịch hẹn mới",
          message: `${dbClient.name} đã đặt lịch ${service} lúc ${startTime}`,
          time: "Vừa xong",
          read: false,
          priority: "normal",
        }
      })
    ]);

    return res.status(201).json(appointment);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateAppointmentStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ error: "Trạng thái là bắt buộc" });
    }

    const labels: Record<string, string> = {
      in_progress: "Đang xử lý",
      completed: "Hoàn tất",
      cancelled: "Đã hủy",
      confirmed: "Đã xác nhận",
    };

    const statusLabel = labels[status] || "Đã xác nhận";

    const appointment = await prisma.appointment.update({
      where: { id },
      data: {
        status,
        statusLabel,
      },
    });

    return res.json(appointment);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteAppointment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.appointment.delete({
      where: { id },
    });
    return res.json({ success: true, message: "Đã xóa lịch hẹn" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
