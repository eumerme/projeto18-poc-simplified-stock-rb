import { Router } from "express";
import {
	createProduct,
	productSold,
	getProducts,
	getProductsByCategory,
	getProductById,
	totalProducts,
	totalProductsAvailable,
	totalProductsSold,
	updateProduct,
	deleteProduct,
} from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter
	.post("/product", createProduct)
	.post("/product-sold", productSold)
	.get("/products", getProducts)
	.get("/products/:category", getProductsByCategory)
	.get("/product/:id", getProductById)
	.get("/total-products", totalProducts)
	.get("/total-products-available", totalProductsAvailable)
	.get("/total-products-sold", totalProductsSold)
	.patch("/update-product/:id", updateProduct)
	.delete("/delete-product/:id", deleteProduct);

export { productsRouter };
