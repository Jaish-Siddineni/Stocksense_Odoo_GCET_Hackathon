// import {
//   Request,
//   Response,
// } from "express";

// import * as deliveryService from "../services/deliveryService";

// export const getDeliveries =
//   async (
//     req: Request,
//     res: Response
//   ) => {
//     const deliveries =
//       await deliveryService.getDeliveries();

//     res.json(deliveries);
//   };

// export const createDelivery =
//   async (
//     req: Request,
//     res: Response
//   ) => {
//     const delivery =
//       await deliveryService.createDelivery(
//         req.body
//       );

//     res.status(201).json(delivery);
//   };

import { Router } from "express";

import {
  getDeliveries,
  createDelivery,
} from "../controllers/deliveries/deliveryController";

const router = Router();

router.get("/", getDeliveries);

router.post("/", createDelivery);

export default router;