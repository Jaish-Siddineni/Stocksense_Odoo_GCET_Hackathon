import { prisma } from "../config/db";

export const getLocations =
  async () => {
    return prisma.location.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  };

export const getLocationById =
  async (id: string) => {
    return prisma.location.findUnique({
      where: { id },
    });
  };

export const createLocation =
  async (data: any) => {
    return prisma.location.create({
      data,
    });
  };

export const updateLocation =
  async (
    id: string,
    data: any
  ) => {
    return prisma.location.update({
      where: { id },
      data,
    });
  };

export const deleteLocation =
  async (id: string) => {
    return prisma.location.delete({
      where: { id },
    });
  };