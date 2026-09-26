import { Router } from "express";

import {
  getMovements,
} from "../controllers/movement/movementController";

const router = Router();

router.get("/", getMovements);

export default router;