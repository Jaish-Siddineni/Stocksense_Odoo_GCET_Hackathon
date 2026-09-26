import { create } from "zustand";

export interface Warehouse {
  id: string;
  name: string;
  shortCode: string;
  address: string;
}

interface WarehouseStore {
  warehouses: Warehouse[];

  addWarehouse: (warehouse: Warehouse) => void;

  deleteWarehouse: (id: string) => void;
}

export const useWarehouseStore =
  create<WarehouseStore>((set) => ({
    warehouses: [],

    addWarehouse: (warehouse) =>
      set((state) => ({
        warehouses: [
          ...state.warehouses,
          warehouse,
        ],
      })),

    deleteWarehouse: (id) =>
      set((state) => ({
        warehouses:
          state.warehouses.filter(
            (w) => w.id !== id
          ),
      })),
  }));