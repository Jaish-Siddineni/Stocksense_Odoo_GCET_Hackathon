import {
  Request,
  Response,
} from "express";

import * as receiptService from "../../services/receiptService";

export const getReceipts =
  async (
    req: Request,
    res: Response
  ) => {
    const receipts =
      await receiptService.getReceipts();

    res.json(receipts);
  };

export const createReceipt =
  async (
    req: Request,
    res: Response
  ) => {
    const receipt =
      await receiptService.createReceipt(
        req.body
      );

    res.status(201).json(receipt);
  };