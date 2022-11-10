import { QueryResult } from "pg";
import { connection } from "../database/db.js";
import { InsertProduct, ListProducts } from "../protocols/products.js";

async function insertProduct(product: InsertProduct): Promise<QueryResult<InsertProduct>> {
	const { categoryId, name, quantity } = product;
	return connection.query(`INSERT INTO products ("categoryId", name, quantity) VALUES ($1, $2, $3);`, [
		categoryId,
		name,
		quantity,
	]);
}

async function insertSoldProduct(name: string) {
	return connection.query(`INSERT INTO sold (name) VALUES ($1);`, [name]);
}

async function listProducts(): Promise<QueryResult<ListProducts>> {
	return connection.query(
		`SELECT products.id 
			, products.name
			, products.quantity
			, categories."name" AS category
		FROM products
		JOIN categories ON products."categoryId" = categories.id;`
	);
}

async function listProductsByCategory(category: string): Promise<QueryResult<ListProducts>> {
	return connection.query(
		`SELECT products.id 
			, products.name
			, products.quantity
			, categories."name" AS category
		FROM products
		JOIN categories ON products."categoryId" = categories.id
		WHERE categories.name = $1;`,
		[category]
	);
}

async function selectProductById(id: number): Promise<QueryResult<ListProducts>> {
	return connection.query(
		`SELECT products.id 
			, products.name
			, products.quantity
			, categories."name" AS category
		FROM products
		JOIN categories ON products."categoryId" = categories.id
		WHERE products.id = $1;`,
		[id]
	);
}

async function selectProductByName(name: string): Promise<QueryResult<ListProducts>> {
	return connection.query(
		`SELECT products.id 
			, products.name
			, products.quantity
			, categories."name" AS category
		FROM products
		JOIN categories ON products."categoryId" = categories.id
		WHERE products.name = $1;`,
		[name]
	);
}

async function totalAllProducts() {
	return connection.query(`SELECT SUM(products.quantity) AS total FROM products;`);
}

async function totalProductsByCategory(category: string) {
	return connection.query(
		`SELECT SUM(products.quantity) AS total
		FROM products
		JOIN categories ON products."categoryId" = categories.id
		WHERE categories.name = $1;`,
		[category]
	);
}

async function totalAllProductsSold() {
	return connection.query(`SELECT COUNT(sold.name) AS total FROM sold;`);
}

async function totalProductsSoldByProduct() {
	return connection.query(
		`SELECT COUNT(sold.name) AS total
			, sold.name
		FROM sold
		GROUP BY sold.name;`
	);
}

async function totalProductsSoldByCategory() {
	return connection.query(
		`SELECT COUNT(sold.name) AS total
			, categories.name AS category
		FROM sold
		JOIN products ON sold.name = products.name
		JOIN categories ON products."categoryId" = categories.id
		GROUP BY category;`
	);
}

async function updateProduct(quantity: number, id: number) {
	return connection.query(`UPDATE products SET quantity = $1 WHERE products.id = $2;`, [quantity, id]);
}

async function updateProductQuantity(name: string) {
	return connection.query(`UPDATE products SET quantity = (quantity - 1) WHERE products.name = $1;`, [name]);
}

async function deleteProductById(id: number) {
	return connection.query(`DELETE FROM products WHERE id = $1;`, [id]);
}

export {
	insertProduct,
	insertSoldProduct,
	listProducts,
	listProductsByCategory,
	selectProductByName,
	selectProductById,
	totalAllProducts,
	totalProductsByCategory,
	totalAllProductsSold,
	totalProductsSoldByProduct,
	totalProductsSoldByCategory,
	updateProduct,
	updateProductQuantity,
	deleteProductById,
};
