import { Router } from "express";

import {
  getReceipts,
  createReceipt,
} from "../controllers/receipts/receiptController";

const router = Router();

router.get("/", getReceipts);

router.post("/", createReceipt);

export default router;