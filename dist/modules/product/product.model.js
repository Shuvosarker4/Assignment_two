"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const variantSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});
const inventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: [true, "Quantity is required."] },
    inStock: { type: Boolean, required: [true, "In stock status is required."] },
});
const productSchema = new mongoose_1.Schema({
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
exports.Product = (0, mongoose_1.model)("Product", productSchema);
