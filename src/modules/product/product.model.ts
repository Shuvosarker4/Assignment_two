import { Schema, model } from "mongoose";
import { TProduct, TInventory, TVariant } from "./product.interface";

const variantSchema = new Schema<TVariant>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: [true, "Quantity is required."] },
  inStock: { type: Boolean, required: [true, "In stock status is required."] },
});

const productSchema = new Schema<TProduct>({
  name: { type: String, required: [true, "Product name is required."] },
  description: {
    type: String,
    required: [true, "Product description is required."],
  },
  price: { type: Number, required: [true, "Product price is required."] },
  category: { type: String, required: [true, "Product category is required."] },
  tags: { type: [String], required: [true, "Product tags are required."] },
  variants: [variantSchema],
  inventory: { type: inventorySchema, required: true },
});

//model

export const Product = model<TProduct>("Product", productSchema);
