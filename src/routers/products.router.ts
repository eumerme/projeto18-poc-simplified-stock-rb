import { Router } from "express";
import {
	createProduct,
	getProducts,
	getProductsByCategory,
	updateProduct,
	deleteProduct,
	getProductById,
	totalProducts,
} from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post("/product", createProduct);
productsRouter.get("/products", getProducts);
productsRouter.get("/products/:category", getProductsByCategory);
productsRouter.get("/product/:id", getProductById);
productsRouter.patch("/update-product/:id", updateProduct);
productsRouter.delete("/delete-product/:id", deleteProduct);
productsRouter.get("/total-products", totalProducts);

export { productsRouter };
