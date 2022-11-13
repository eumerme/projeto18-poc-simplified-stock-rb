export type InsertProduct = {
	categoryId: number;
	name: string;
	quantity: number;
};

export type UpdateProduct = Omit<InsertProduct, "categoryId">;

export type ProductName = Omit<InsertProduct, "categoryId" | "quantity">;

export type ListProducts = {
	name: string;
	quantity: number;
	category: string;
};

export type QueryCategory = { category: string };

export type ParamsId = { id: number };

export type TotalProducts = { total: number };
