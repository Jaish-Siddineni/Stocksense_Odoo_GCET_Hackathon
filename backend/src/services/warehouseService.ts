import { prisma } from "../config/db";

export const getWarehouses =
  async () => {
    return prisma.warehouse.findMany();
  };

export const createWarehouse =
  async (data: any) => {
    return prisma.warehouse.create({
      data,
    });
  };