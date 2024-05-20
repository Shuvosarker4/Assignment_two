import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (playLoad: TProduct) => {
  const result = await Product.create(playLoad);
  return result;
};

export const ProductService = {
  createProduct,
};
