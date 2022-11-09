import { Router } from "express";
import {
	createProduct,
	getProducts,
	getProductsByCategory,
	updateProduct,
} from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post("/product", createProduct);
productsRouter.get("/products", getProducts);
productsRouter.get("/products/:category", getProductsByCategory);
productsRouter.put("/update-product/:id", updateProduct);

export { productsRouter };
