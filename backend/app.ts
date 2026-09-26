import express from "express";
import cors from "cors";

import productRoutes from "./routes/productRoutes";
import receiptRoutes from "./routes/receiptRoutes";
import deliveryRoutes from "./routes/deliveryRoutes";
import warehouseRoutes from "./routes/warehouseRoutes";
import locationRoutes from "./routes/locationRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/receipts",
  receiptRoutes
);

app.use(
  "/api/deliveries",
  deliveryRoutes
);

app.use(
  "/api/warehouses",
  warehouseRoutes
);

app.use(
  "/api/locations",
  locationRoutes
);

app.use(
  "/api/dashboard",
  dashboardRoutes
);

export default app;