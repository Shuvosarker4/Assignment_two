import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/product.route";
const app = express();
//parser
app.use(express.json());

//application route
app.use("/api/products", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Shuvo");
});

export default app;
