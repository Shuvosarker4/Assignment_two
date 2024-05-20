import express, { Request, Response } from "express";
const app = express();
//parser
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Shuvo");
});

export default app;
