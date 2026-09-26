// import {
//   Request,
//   Response,
//   NextFunction,
// } from "express";

// import jwt from "jsonwebtoken";

// export const authMiddleware =
//   (
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
//     const token =
//       req.headers.authorization?.split(
//         " "
//       )[1];

//     if (!token) {
//       return res.status(401).json({
//         message:
//           "Unauthorized",
//       });
//     }

//     try {
//       jwt.verify(
//         token,
//         process.env.JWT_SECRET || ""
//       );

//       next();
//     } catch {
//       return res.status(401).json({
//         message:
//           "Invalid Token",
//       });
//     }
//   };

import {
  Request,
  Response,
  NextFunction,
} from "express";

import jwt from "jsonwebtoken";

interface AuthPayload {
  id: string;
  email: string;
  role: string;
}

export interface AuthRequest
  extends Request {
  user?: AuthPayload;
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const authorization =
    req.headers.authorization;

  if (!authorization) {
    res.status(401).json({
      message: "Authorization token required",
    });
    return;
  }

  const [scheme, token] =
    authorization.split(" ");

  if (
    scheme !== "Bearer" ||
    !token
  ) {
    res.status(401).json({
      message: "Invalid authorization format",
    });
    return;
  }

  try {
    const decoded =
      jwt.verify(
        token,
        process.env.JWT_SECRET || ""
      ) as AuthPayload;

    req.user = decoded;

    next();
  } catch {
    res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export const managerOnly = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  if (!req.user) {
    res.status(401).json({ message: "Authentication required" });
    return;
  }

  if (req.user.role !== "INVENTORY_MANAGER") {
    res.status(403).json({ message: "Manager access required" });
    return;
  }

  next();
};