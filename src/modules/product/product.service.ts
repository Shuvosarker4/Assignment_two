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

const deleteProduct = async (id: string) => {
  const result = await Product.findOneAndDelete({ id });
  return result;
};

// const updateAProduct = async (id: string, data: unknown) => {
//   const result = await Product.findByIdAndUpdate(id, {
//     data,
//   });
// };

export const ProductService = {
  createProduct,
  getAllProduct,
  getAProduct,
  deleteProduct,
  // updateAProduct,
};
