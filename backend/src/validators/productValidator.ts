import { body } from "express-validator";

export const productValidator = [
  body("sku")
    .notEmpty()
    .withMessage("SKU required"),

  body("name")
    .notEmpty()
    .withMessage("Name required"),

  body("category")
    .notEmpty()
    .withMessage("Category required"),

  body("price")
    .isNumeric()
    .withMessage("Price must be numeric"),

  body("stock")
    .isInt()
    .withMessage("Stock must be integer"),
];