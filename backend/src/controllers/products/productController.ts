import { Request, Response } from "express";

import * as productService from "../../services/productService";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products =
      await productService.getAllProducts();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error,
    });
  }
};

export const getProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product =
      await productService.getProductById(
        String(req.params.id)
      );

    if (!product) {
      res.status(404).json({
        message: "Product not found",
      });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch product",
      error,
    });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product =
      await productService.createProduct(
        req.body
      );

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create product",
      error,
    });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product =
      await productService.updateProduct(
        String(req.params.id),
        req.body
      );

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update product",
      error,
    });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await productService.deleteProduct(
      String(req.params.id)
    );

    res.status(200).json({
      message: "Product deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete product",
      error,
    });
  }
};