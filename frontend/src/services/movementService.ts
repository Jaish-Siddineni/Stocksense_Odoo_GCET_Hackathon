import api from "./api";

export const getMovements =
  async () => {
    const response =
      await api.get("/movements");

    return response.data;
  };