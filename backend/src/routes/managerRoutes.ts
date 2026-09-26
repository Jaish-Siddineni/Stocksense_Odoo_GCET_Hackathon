import { Router } from "express";
import { createManager } from "../controllers/auth/managerController";
import {
    authMiddleware,
    managerOnly,
} from "../middleware/authMiddleware";

const router = Router();

router.post(
    "/",
    authMiddleware,
    managerOnly,
    createManager
);

export default router;