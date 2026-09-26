import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../../config/db";

export const createManager = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            res.status(409).json({
                message: "Email already registered",
            });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const manager = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: "INVENTORY_MANAGER",
            },
        });

        res.status(201).json({
            message: "Manager created successfully",
            manager: {
                id: manager.id,
                name: manager.name,
                email: manager.email,
                role: manager.role,
            },
        });
    } catch (error) {
        console.error("Create manager error:", error);

        res.status(500).json({
            message: "Failed to create manager",
        });
    }
};