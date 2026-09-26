import { prisma } from "../config/db";

export const getMovementHistory =
  async () => {
    const receipts =
      await prisma.receipt.findMany();

    const deliveries =
      await prisma.delivery.findMany();

    return {
      receipts,
      deliveries,
    };
  };