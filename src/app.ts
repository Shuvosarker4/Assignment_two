import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/product/product.route";
import { OrderRoutes } from "./modules/order/order.routes";
const app = express();
//parser
app.use(express.json());

//application route
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Shuvo");
});

export default app;
