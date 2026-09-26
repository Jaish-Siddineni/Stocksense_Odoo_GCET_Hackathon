import { Router } from "express";

import {
  getWarehouses,
  createWarehouse,
} from "../controllers/warehouse/warehouseController";

const router = Router();

router.get("/", getWarehouses);

router.post("/", createWarehouse);

export default router;