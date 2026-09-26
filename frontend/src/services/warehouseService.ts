import api from "./api";

export const getWarehouses =
  async () => {
    const response =
      await api.get("/warehouses");

    return response.data;
  };