import { create } from "zustand";

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
}

interface ProductStore {
  products: Product[];

  addProduct: (product: Product) => void;

  updateStock: (
    productId: string,
    quantity: number
  ) => void;

  deleteProduct: (
    productId: string
  ) => void;
}

export const useProductStore =
  create<ProductStore>((set) => ({
    products: [],

    addProduct: (product) =>
      set((state) => ({
        products: [
          ...state.products,
          product,
        ],
      })),

    updateStock: (
      productId,
      quantity
    ) =>
      set((state) => ({
        products: state.products.map(
          (product) =>
            product.id === productId
              ? {
                  ...product,
                  stock:
                    product.stock +
                    quantity,
                }
              : product
        ),
      })),

    deleteProduct: (productId) =>
      set((state) => ({
        products:
          state.products.filter(
            (product) =>
              product.id !== productId
          ),
      })),
  }));