import { object } from "zod";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (playLoad: TProduct) => {
  const result = await Product.create(playLoad);
  return result;
};

const getAllProduct = async () => {
  const result = Product.find();
  return result;
};

const getAProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

export const ProductService = {
  createProduct,
  getAllProduct,
  getAProduct,
};
