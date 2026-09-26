import {api} from "./api";

export interface DashboardStats {
  products: number;
  receipts: number;
  deliveries: number;
  warehouses: number;
  locations: number;
}

export const getDashboardStats =
  async (): Promise<DashboardStats> => {
    const response =
      await api.get(
        "/dashboard/stats"
      );

    return response.data;
  };