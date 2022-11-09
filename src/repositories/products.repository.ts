import { connection } from "../database/db.js";
import { InsertProduct } from "../protocols/product.js";

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

async function updateProductById(quantity: number, id: number) {
	return connection.query(`UPDATE products SET quantity = $1 WHERE products.id = $2;`, [quantity, id]);
}

export { insertProduct, listProducts, listProductsByCategory, updateProductById };
