import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes";
import managerRoutes from "./routes/managerRoutes";
import productRoutes from "./routes/productRoutes";
import receiptRoutes from "./routes/receiptRoutes";
import deliveryRoutes from "./routes/deliveryRoutes";
import warehouseRoutes from "./routes/warehouseRoutes";
import locationRoutes from "./routes/locationRoutes";
import movementRoutes from "./routes/movementRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "StockSense API Running",
  });
});

app.use("/api/auth", authRoutes);

app.use("/api/managers", managerRoutes);

app.use("/api/products", productRoutes);

app.use("/api/receipts", receiptRoutes);

app.use("/api/deliveries", deliveryRoutes);

app.use("/api/warehouses", warehouseRoutes);

app.use("/api/locations", locationRoutes);

app.use("/api/movements", movementRoutes);

app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});