export type InsertProduct = {
	categoryId: number;
	name: string;
	quantity: number;
};

export type ListProducts = {
	id: number;
	name: string;
	quantity: number;
	category: string;
};

export type Category = { category: string };

export type TotalProducts = { total: number };
