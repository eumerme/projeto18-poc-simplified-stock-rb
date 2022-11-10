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

productsRouter.post("/product", createProduct);
productsRouter.post("/product-sold", productSold);
productsRouter.get("/products", getProducts);
productsRouter.get("/products/:category", getProductsByCategory);
productsRouter.get("/product/:id", getProductById);
productsRouter.get("/total-products", totalProducts);
productsRouter.get("/total-products-available", totalProductsAvailable);
productsRouter.get("/total-products-sold", totalProductsSold);
productsRouter.patch("/update-product/:id", updateProduct);
productsRouter.delete("/delete-product/:id", deleteProduct);

export { productsRouter };
