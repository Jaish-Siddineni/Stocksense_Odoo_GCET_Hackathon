import { body } from "express-validator";

export const deliveryValidator = [
  body("customer")
    .notEmpty()
    .withMessage("Customer required"),

  body("items")
    .isArray({ min: 1 })
    .withMessage(
      "At least one item required"
    ),
];