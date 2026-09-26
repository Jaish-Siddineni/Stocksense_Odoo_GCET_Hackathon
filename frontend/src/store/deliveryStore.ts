import { create } from "zustand";

export interface Delivery {
  id: string;
  productId: string;
  quantity: number;
  customer: string;
  deliveryDate: string;
}

interface DeliveryStore {
  deliveries: Delivery[];

  addDelivery: (
    delivery: Delivery
  ) => void;

  deleteDelivery: (
    id: string
  ) => void;
}

export const useDeliveryStore =
  create<DeliveryStore>((set) => ({
    deliveries: [],

    addDelivery: (delivery) =>
      set((state) => ({
        deliveries: [
          ...state.deliveries,
          delivery,
        ],
      })),

    deleteDelivery: (id) =>
      set((state) => ({
        deliveries:
          state.deliveries.filter(
            (delivery) =>
              delivery.id !== id
          ),
      })),
  }));