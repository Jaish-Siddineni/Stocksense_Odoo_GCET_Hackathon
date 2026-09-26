import { api } from "./api";

export const getDeliveries =
  () =>
    api.get("/deliveries");

export const createDelivery =
  (data: any) =>
    api.post(
      "/deliveries",
      data
    );