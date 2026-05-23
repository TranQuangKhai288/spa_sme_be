import type { Request, Response } from "express";
import { prisma } from "../config/database.js";

export const getClients = async (req: Request, res: Response) => {
  try {
    const clients = await prisma.client.findMany({
      orderBy: { name: "asc" },
    });
    return res.json(clients);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const createClient = async (req: Request, res: Response) => {
  try {
    const { name, avatar, tier, phone, email, notes } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: "Tên và Số điện thoại là bắt buộc" });
    }

    const client = await prisma.client.create({
      data: {
        name,
        avatar: avatar || `https://i.pravatar.cc/150?u=${phone}`,
        tier: tier || "Mới",
        phone,
        email: email || "",
        totalVisits: 0,
        totalSpent: 0n,
        memberPoints: 0,
        lastVisit: "Chưa có",
        joinDate: new Date().toLocaleDateString("vi-VN"),
        notes: notes || "",
      },
    });

    // Create a system notification
    await prisma.notification.create({
      data: {
        type: "info",
        title: "Khách hàng mới đăng ký",
        message: `${name} đã được thêm vào hệ thống quản lý.`,
        time: "Vừa xong",
        read: false,
        priority: "normal",
      },
    });

    return res.status(201).json(client);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
