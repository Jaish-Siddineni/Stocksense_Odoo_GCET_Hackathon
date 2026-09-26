import {
  Request,
  Response,
} from "express";

import * as movementService from "../../services/movementService";

export const getMovements =
  async (
    req: Request,
    res: Response
  ) => {
    const data =
      await movementService.getMovementHistory();

    res.json(data);
  };