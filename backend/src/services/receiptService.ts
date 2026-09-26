import { prisma } from "../config/db";

export const getReceipts =
  async () => {
    return prisma.receipt.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  };

export const createReceipt =
  async (data: any) => {
    const receipt =
      await prisma.receipt.create({
        data,
      });

    await prisma.product.update({
      where: {
        id: data.productId,
      },
      data: {
        stock: {
          increment:
            data.quantity,
        },
      },
    });

    return receipt;
  };