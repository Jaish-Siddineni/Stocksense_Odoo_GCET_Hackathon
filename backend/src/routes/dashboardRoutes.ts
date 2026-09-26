import { Router } from "express";

import {
  getDashboard,
} from "../controllers/dashboard/dashboardController";

const router = Router();

router.get("/", getDashboard);

export default router;