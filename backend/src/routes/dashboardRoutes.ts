import { Router } from "express";
import { getDashboardData } from "../controllers/dashboard/dashboardController";

const router = Router();

router.get("/stats", getDashboardData);

export default router;