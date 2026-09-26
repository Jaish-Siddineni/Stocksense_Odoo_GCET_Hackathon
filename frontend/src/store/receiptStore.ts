import { create } from "zustand";

export interface Receipt {
  id: string;
  productId: string;
  quantity: number;
  supplier: string;
  receiptDate: string;
}

interface ReceiptStore {
  receipts: Receipt[];

  addReceipt: (
    receipt: Receipt
  ) => void;

  deleteReceipt: (
    id: string
  ) => void;
}

export const useReceiptStore =
  create<ReceiptStore>((set) => ({
    receipts: [],

    addReceipt: (receipt) =>
      set((state) => ({
        receipts: [
          ...state.receipts,
          receipt,
        ],
      })),

    deleteReceipt: (id) =>
      set((state) => ({
        receipts:
          state.receipts.filter(
            (receipt) =>
              receipt.id !== id
          ),
      })),
  }));