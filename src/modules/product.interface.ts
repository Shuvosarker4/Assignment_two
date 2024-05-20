export type TTypes = {
  type: string;
  value: string;
};
export type TVariant = {
  type: TTypes;
  value: TTypes;
};

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariant[];
  inventory: TInventory;
};
