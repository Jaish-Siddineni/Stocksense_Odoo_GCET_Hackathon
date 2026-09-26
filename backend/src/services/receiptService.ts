import { prisma } from "../config/db";

export const getReceipts = async () => {
  return prisma.receipt.findMany({
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      receiptDate: "desc",
    },
  });
};

export const getReceiptById = async (
  id: string
) => {
  return prisma.receipt.findUnique({
    where: { id },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });
};

export const createReceipt = async (
  data: any
) => {
  const receipt =
    await prisma.receipt.create({
      data: {
        supplier: data.supplier,

        items: {
          create: [
            {
              productId:
                data.productId,

              quantity:
                Number(data.quantity),
            },
          ],
        },
      },

      include: {
        items: true,
      },
    });

  await prisma.product.update({
    where: {
      id: data.productId,
    },

    data: {
      stock: {
        increment:
          Number(data.quantity),
      },
    },
  });

  return receipt;
};