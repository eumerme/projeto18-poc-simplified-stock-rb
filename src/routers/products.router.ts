import { Router } from "express";
import { createProduct } from "../controllers/products.controller.js";
import { connection } from "../database/db.js";

const productsRouter = Router();

productsRouter.get("/status", async (req, res) => {
	try {
		const { rows: result } = await connection.query(`SELECT * FROM users;`);
		res.status(200).send(result);
	} catch (error) {}
});

productsRouter.post("/product", createProduct);

export { productsRouter };
