import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const orderCreate = async (playLoad: TOrder) => {
  const result = await Order.create(playLoad);
  return result;
};

export const OrderService = {
  orderCreate,
};
