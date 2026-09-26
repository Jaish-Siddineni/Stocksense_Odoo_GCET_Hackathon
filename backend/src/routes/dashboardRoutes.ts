import { Router } from "express";

import {
  getDashboardData,
} from "../controllers/dashboard/dashboardController";

const router = Router();

router.get("/", getDashboardData);

export default router;