import type { Request, Response } from "express";
import { prisma } from "../config/database.js";

export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await prisma.service.findMany();
    return res.json(services);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
