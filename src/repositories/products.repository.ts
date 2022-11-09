import { connection } from "../database/db.js";
import { Product } from "../protocols/product.js";

async function insertProduct(product: Product) {
	const { categoryId, name, quantity } = product;
	return connection.query(
		`INSERT INTO products ("categoryId", name, quantity) VALUES ($1, $2, $3);`,
		[categoryId, name, quantity]
	);
}

export { insertProduct };
