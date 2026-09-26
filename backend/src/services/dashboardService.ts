import { prisma } from "../config/db";

export const getDashboardData =
  async () => {
    const [
      products,
      warehouses,
      locations,
      receipts,
      deliveries,
    ] = await Promise.all([
      prisma.product.count(),
      prisma.warehouse.count(),
      prisma.location.count(),
      prisma.receipt.count(),
      prisma.delivery.count(),
    ]);

    const stock =
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
        stock._sum.stock || 0,
    };
  };