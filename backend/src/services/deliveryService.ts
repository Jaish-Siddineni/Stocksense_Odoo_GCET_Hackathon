import { prisma } from "../config/db";

export const getDeliveries =
  async () => {
    return prisma.delivery.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  };

export const createDelivery =
  async (data: any) => {
    const delivery =
      await prisma.delivery.create({
        data,
      });

    await prisma.product.update({
      where: {
        id: data.productId,
      },
      data: {
        stock: {
          decrement:
            data.quantity,
        },
      },
    });

    return delivery;
  };