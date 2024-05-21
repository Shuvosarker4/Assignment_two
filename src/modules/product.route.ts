import express, { Request, Response } from "express";
import { ProductController } from "./product.controller";
const router = express.Router();

router.post("/", ProductController.createProduct);
router.get("/", ProductController.getAllProduct);
router.get("/:productId", ProductController.getAProduct);

export const ProductRoutes = router;
