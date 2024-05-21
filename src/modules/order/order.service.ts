import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const orderCreate = async (playLoad: TOrder) => {
  const result = await Order.create(playLoad);
  return result;
};

const getAllOrder = async () => {
  const result = await Order.find();
  return result;
};

export const OrderService = {
  orderCreate,
  getAllOrder,
};
