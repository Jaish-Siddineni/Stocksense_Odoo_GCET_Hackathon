import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const warehouse =
    await prisma.warehouse.create({
      data: {
        name: "Main Warehouse",
        shortCode: "WH01",
        address: "Bangalore",
      },
    });

  const location =
    await prisma.location.create({
      data: {
        name: "Rack A",
        shortCode: "A01",
        warehouseId: warehouse.id,
      },
    });

  await prisma.product.create({
    data: {
      name: "Laptop",
      sku: "LAP001",
      category: "Electronics",
      price: 50000,
      stock: 25,
    },
  });

  console.log(
    "Seed data inserted"
  );
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });