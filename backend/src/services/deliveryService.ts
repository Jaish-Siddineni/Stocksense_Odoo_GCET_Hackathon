import { prisma } from "../config/db";

export const getDeliveries =
  async () => {
    return prisma.delivery.findMany({
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },

      orderBy: {
        deliveryDate: "desc",
      },
    });
  };

export const getDeliveryById =
  async (id: string) => {
    return prisma.delivery.findUnique({
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

export const createDelivery =
  async (data: any) => {
    const delivery =
      await prisma.delivery.create({
        data: {
          customer:
            data.customer,

          items: {
            create: [
              {
                productId:
                  data.productId,

                quantity:
                  Number(
                    data.quantity
                  ),
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
          decrement:
            Number(
              data.quantity
            ),
        },
      },
    });

    return delivery;
  };