import api from "./api";

export const getProducts = async () => {
  const response =
    await api.get("/products");

  return response.data;
};

export const createProduct =
  async (payload: any) => {
    const response =
      await api.post(
        "/products",
        payload
      );

    return response.data;
  };