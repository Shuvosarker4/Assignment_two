import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  //   console.log(productData);
  const result = await ProductService.createProduct(productData);
  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

//get product
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProduct();
    res.json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch movies!",
      error: err,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
};
