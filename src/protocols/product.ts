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
