import { Request, Response } from "express";
import * as dashboardService from "../services/dashboardService";

export const getDashboardStats =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const data =
        await dashboardService.getDashboardData();

      res.json(data);
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message:
          "Failed to load dashboard",
      });
    }
  };