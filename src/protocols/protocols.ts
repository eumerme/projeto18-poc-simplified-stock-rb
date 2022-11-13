export type InsertProduct = {
	categoryId: number;
	name: string;
	quantity: number;
};

export type UpdateProduct = Omit<InsertProduct, "categoryId" | "name">;

export type SoldName = Omit<InsertProduct, "categoryId" | "quantity">;

export type ListProducts = {
	name: string;
	quantity: number;
	category: string;
};

export type QueryCategory = { category: string };

export type ParamsId = { id: number };

export type TotalProducts = { total: number };

//fazer o schema com joi e terminar de tipar as funções
