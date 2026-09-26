// import { Router } from "express";

// import {
//   register,
//   login,
// } from "../controllers/auth/authController";

// const router = Router();

// router.post(
//   "/register",
//   register
// );

// router.post(
//   "/login",
//   login
// );

// export default router;

import { Router } from "express";

import {
  register,
  login,
} from "../controllers/auth/authController";

import {
  registerValidator,
  loginValidator,
} from "../validators/authValidator";

const router = Router();

router.post(
  "/register",
  registerValidator,
  register
);

router.post(
  "/login",
  loginValidator,
  login
);

export default router;