export type InsertProduct = {
	categoryId: number;
	name: string;
	quantity: number;
};

export type ListProducts = {
	name: string;
	quantity: number;
	category: string;
};

export type ParamsQuery = { category?: string; product?: string };

export type ParamsId = { id: number };

export type TotalProducts = { total: number };

//fazer o schema com joi e terminar de tipar as funções
