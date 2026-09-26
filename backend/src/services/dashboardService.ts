import { prisma } from "../config/db";

export const getDashboardData =
  async () => {
    const products =
      await prisma.product.count();

    const warehouses =
      await prisma.warehouse.count();

    const locations =
      await prisma.location.count();

    const receipts =
      await prisma.receipt.count();

    const deliveries =
      await prisma.delivery.count();

    const stockValue =
      await prisma.product.aggregate({
        _sum: {
          stock: true,
        },
      });

    return {
      products,
      warehouses,
      locations,
      receipts,
      deliveries,
      totalStock:
        stockValue._sum.stock || 0,
    };
  };