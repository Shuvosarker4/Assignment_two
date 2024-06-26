import { Request, Response } from "express";
import { ProductService } from "./product.service";
import productSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const zodParsedData = productSchema.parse(productData);
  // console.log(zodParsedData);
  const result = await ProductService.createProduct(zodParsedData);
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
      message: "Could not fetch products!",
      error: err,
    });
  }
};

const getAProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getAProduct(productId);

    res.json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await ProductService.deleteProduct(productId);
  res.json({
    success: true,
    message: "Product fetched successfully!",
    data: result,
  });
};

// const updateAProduct = async (req: Request, res: Response) => {
//   const { productId } = req.params;
//   const { data } = req.body;
//   console.log(data);
//   const result = await ProductService.updateAProduct(productId, data);

//   res.json({
//     success: true,
//     message: "Product fetched successfully!",
//     data: result,
//   });
// };

export const ProductController = {
  createProduct,
  getAllProduct,
  getAProduct,
  deleteProduct,
  // updateAProduct,
};
