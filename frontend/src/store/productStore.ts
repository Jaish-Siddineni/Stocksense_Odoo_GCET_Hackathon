import { create } from "zustand";

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  stock: number;
  price: number;
}

interface ProductStore {
  products: Product[];

  addProduct: (product: Product) => void;

  updateProduct: (
    id: string,
    product: Product
  ) => void;

  deleteProduct: (id: string) => void;
}

export const useProductStore =
  create<ProductStore>((set) => ({
    products: [],

    addProduct: (product) =>
      set((state) => ({
        products: [...state.products, product],
      })),

    updateProduct: (id, product) =>
      set((state) => ({
        products: state.products.map((p) =>
          p.id === id ? product : p
        ),
      })),

    deleteProduct: (id) =>
      set((state) => ({
        products: state.products.filter(
          (p) => p.id !== id
        ),
      })),
  }));