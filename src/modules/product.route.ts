import express, { Request, Response } from "express";
const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const result = req.body;
  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
});

export const ProductRoutes = router;
