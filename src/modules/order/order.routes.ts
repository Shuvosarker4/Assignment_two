import express, { Request, Response } from "express";
import { OrderController } from "./order.controllers";
const router = express.Router();

router.post("/", OrderController.orderCreate);
router.get("/", OrderController.getAllOrder);

export const OrderRoutes = router;
