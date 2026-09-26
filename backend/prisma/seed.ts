import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    const password = await bcrypt.hash("manager123", 10);

    await prisma.user.upsert({
        where: {
            email: "manager@stocksense.com",
        },
        update: {
            role: "INVENTORY_MANAGER",
        },
        create: {
            name: "StockSense Manager",
            email: "manager@stocksense.com",
            password,
            role: "INVENTORY_MANAGER",
        },
    });

    console.log("Initial manager created");
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());