import type { Request, Response } from "express";
import { prisma } from "../config/database.js";

export const getTherapists = async (req: Request, res: Response) => {
  try {
    const therapists = await prisma.therapist.findMany({
      orderBy: { name: "asc" }
    });
    return res.json(therapists);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const createTherapist = async (req: Request, res: Response) => {
  try {
    const { name, avatar, specialty, experience, bio, services } = req.body;

    if (!name || !specialty) {
      return res.status(400).json({ error: "Tên và Chuyên môn KTV là bắt buộc" });
    }

    const therapist = await prisma.therapist.create({
      data: {
        name,
        avatar: avatar || `https://i.pravatar.cc/150?u=${encodeURIComponent(name)}`,
        specialty,
        experience: experience || "1 năm",
        rating: 5.0,
        totalReviews: 0,
        availability: "available",
        bio: bio || "",
        services: services || [],
      },
    });

    return res.status(201).json(therapist);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateTherapist = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, avatar, specialty, experience, availability, bio, services } = req.body;

    const dbTherapist = await prisma.therapist.findUnique({
      where: { id }
    });
    if (!dbTherapist) {
      return res.status(404).json({ error: "Nhân viên không tồn tại" });
    }

    const therapist = await prisma.therapist.update({
      where: { id },
      data: {
        name: name !== undefined ? name : undefined,
        avatar: avatar !== undefined ? avatar : undefined,
        specialty: specialty !== undefined ? specialty : undefined,
        experience: experience !== undefined ? experience : undefined,
        availability: availability !== undefined ? availability : undefined,
        bio: bio !== undefined ? bio : undefined,
        services: services !== undefined ? services : undefined,
      },
    });

    return res.json(therapist);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteTherapist = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Check if therapist exists
    const dbTherapist = await prisma.therapist.findUnique({
      where: { id }
    });
    if (!dbTherapist) {
      return res.status(404).json({ error: "Nhân viên không tồn tại" });
    }

    await prisma.therapist.delete({
      where: { id }
    });

    return res.json({ success: true, message: "Đã xóa Nhân viên thành công" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
