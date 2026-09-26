import {
  Request,
  Response,
} from "express";

import * as warehouseService from "../../services/warehouseService";

export const getWarehouses =
  async (
    req: Request,
    res: Response
  ) => {
    const warehouses =
      await warehouseService.getWarehouses();

    res.json(warehouses);
  };

export const createWarehouse =
  async (
    req: Request,
    res: Response
  ) => {
    const warehouse =
      await warehouseService.createWarehouse(
        req.body
      );

    res.status(201).json(
      warehouse
    );
  };