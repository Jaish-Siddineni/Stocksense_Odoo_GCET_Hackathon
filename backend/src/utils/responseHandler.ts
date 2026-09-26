import { Response } from "express";

export const successResponse = (
  res: Response,
  data: any,
  message = "Success"
) => {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (
  res: Response,
  message: string
) => {
  return res.status(400).json({
    success: false,
    message,
  });
};