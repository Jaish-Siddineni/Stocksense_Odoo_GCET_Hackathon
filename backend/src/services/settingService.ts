import { prisma } from "../config/db";

export const getSettings = async () => {
  return prisma.setting.findFirst();
};

export const saveSettings = async (
  companyName: string,
  adminEmail: string
) => {
  const existing =
    await prisma.setting.findFirst();

  if (existing) {
    return prisma.setting.update({
      where: { id: existing.id },
      data: {
        companyName,
        adminEmail,
      },
    });
  }

  return prisma.setting.create({
    data: {
      companyName,
      adminEmail,
    },
  });
};