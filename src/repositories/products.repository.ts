import { connection } from "../database/db.js";
import { InsertProduct } from "../protocols/products.js";

async function insertProduct(product: InsertProduct) {
	const { categoryId, name, quantity } = product;
	return connection.query(`INSERT INTO products ("categoryId", name, quantity) VALUES ($1, $2, $3);`, [
		categoryId,
		name,
		quantity,
	]);
}

async function listProducts() {
	return connection.query(
		`SELECT products.id
			, products.name
			, products.quantity
			, categories."name" AS category
		FROM products
		JOIN categories ON products."categoryId" = categories.id;`
	);
}

async function listProductsByCategory(category: string) {
	return connection.query(
		`SELECT products.id
			, products.name
			, products.quantity
			, categories."name" AS category
		FROM products
		JOIN categories ON products."categoryId" = categories.id
		WHERE categories.name LIKE $1;`,
		[category]
	);
}

async function selectProductById(id: number) {
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

async function updateProductById(quantity: number, id: number) {
	return connection.query(`UPDATE products SET quantity = $1 WHERE products.id = $2;`, [quantity, id]);
}

async function deleteProductById(id: number) {
	return connection.query(`DELETE FROM products WHERE id = $1;`, [id]);
}

async function totalProductsByCategory(category: string) {
	return connection.query(
		`SELECT SUM(products.quantity) AS total
		FROM products
		JOIN categories ON products."categoryId" = categories.id
		WHERE categories.name LIKE $1;`,
		[category]
	);
}

async function totalAllProducts() {
	return connection.query(`SELECT SUM(products.quantity) AS total FROM products;`);
}

export {
	insertProduct,
	listProducts,
	listProductsByCategory,
	selectProductById,
	updateProductById,
	deleteProductById,
	totalProductsByCategory,
	totalAllProducts,
};
