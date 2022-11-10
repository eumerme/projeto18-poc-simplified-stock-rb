export type InsertProduct = {
	categoryId: number;
	name: string;
	quantity: number;
	available: boolean;
};

export type ListProducts = {
	name: string;
	quantity: number;
	category: string;
};

export type Category = { category: string };

export type TotalProducts = { total: number };
