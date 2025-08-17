import type { Request, Response } from 'express';
import prisma from '../config/db';

export const createAppointment = async (req: Request, res: Response): Promise<void> => {
  const { date, userId, professionalId } = req.body;

  try {
    const appointment = await prisma.appointment.create({
      data: { date, userId, professionalId },
    });
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar agendamento" });
  }
};