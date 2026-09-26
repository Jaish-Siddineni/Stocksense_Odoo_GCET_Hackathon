import { body } from "express-validator";

export const receiptValidator = [
  body("supplier")
    .notEmpty()
    .withMessage("Supplier required"),

  body("items")
    .isArray({ min: 1 })
    .withMessage(
      "At least one item required"
    ),
];