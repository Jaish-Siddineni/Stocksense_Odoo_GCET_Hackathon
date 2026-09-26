// import {
//   Request,
//   Response,
// } from "express";

// import * as authService from "../../services/authService";

// export const register =
//   async (
//     req: Request,
//     res: Response
//   ) => {
//     const {
//       name,
//       email,
//       password,
//     } = req.body;

//     const user =
//       await authService.register(
//         name,
//         email,
//         password
//       );

//     res.status(201).json(user);
//   };

// export const login =
//   async (
//     req: Request,
//     res: Response
//   ) => {
//     const {
//       email,
//       password,
//     } = req.body;

//     const data =
//       await authService.login(
//         email,
//         password
//       );

//     res.json(data);
//   };

import {
  Request,
  Response,
} from "express";

import * as authService from "../../services/authService";

export const register = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;

    const user = await authService.register(
      name,
      email,
      password
    );

    res.status(201).json({
      message: "Registration successful",
      user,
    });
  } catch (error) {
    console.error("Registration error:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Registration failed";

    if (message === "Email already registered") {
      res.status(409).json({
        message,
      });
      return;
    }

    res.status(500).json({
      message: "Registration failed",
    });
  }
};

export const login = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      email,
      password,
    } = req.body;

    const data = await authService.login(
      email,
      password
    );

    res.status(200).json(data);
  } catch (error) {
    console.error("Login error:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Login failed";

    if (message === "Invalid credentials") {
      res.status(401).json({
        message,
      });
      return;
    }

    res.status(500).json({
      message: "Login failed",
    });
  }
};