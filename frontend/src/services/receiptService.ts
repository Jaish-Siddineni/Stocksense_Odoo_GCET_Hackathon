import { api } from "./api";

export const getReceipts =
  () =>
    api.get("/receipts");

export const createReceipt =
  (data: any) =>
    api.post(
      "/receipts",
      data
    );