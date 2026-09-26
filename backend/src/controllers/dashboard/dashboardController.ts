import { Request, Response } from "express";
import * as dashboardService from "../../services/dashboardService";

export const getDashboardData = async (
  req: Request,
  res: Response
) => {
  try {
    const data =
      await dashboardService.getDashboardData();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to load dashboard",
    });
  }
};