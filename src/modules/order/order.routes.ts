import express, { Request, Response } from "express";
import { OrderController } from "./order.controllers";
const router = express.Router();

router.post("/", OrderController.orderCreate);

export const OrderRoutes = router;
