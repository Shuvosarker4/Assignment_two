import { Request, Response } from "express";
import { OrderService } from "./order.service";

const orderCreate = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await OrderService.orderCreate(data);
    res.json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Order not found",
    });
  }
};

export const OrderController = {
  orderCreate,
};
