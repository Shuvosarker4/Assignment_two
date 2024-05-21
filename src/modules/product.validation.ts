import { z } from "zod";

const variantSchema = z.object({
  type: z.string().nonempty({ message: "Variant type is required." }),
  value: z.string().nonempty({ message: "Variant value is required." }),
});

const inventorySchema = z.object({
  quantity: z
    .number()
    .positive({ message: "Quantity must be a positive number." }),
  inStock: z.boolean(),
});

const productSchema = z.object({
  name: z.string().nonempty({ message: "Product name is required." }),
  description: z
    .string()
    .nonempty({ message: "Product description is required." }),
  price: z
    .number()
    .positive({ message: "Product price must be a positive number." }),
  category: z.string().nonempty({ message: "Product category is required." }),
  tags: z.array(z.string()).nonempty({ message: "Product tags are required." }),
  variants: z.array(variantSchema),
  inventory: inventorySchema,
});

export default productSchema;
