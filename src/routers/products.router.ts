import { Router } from "express";
import {
	createProduct,
	getProducts,
	getProductsByCategory,
	updateProduct,
	deleteProduct,
	getProductById,
	totalProducts,
	productSold,
} from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post("/product", createProduct);
productsRouter.post("/product-sold", productSold);
productsRouter.get("/products", getProducts);
//productsRouter.get("/products-available", getProducts);
productsRouter.get("/products/:category", getProductsByCategory);
productsRouter.get("/product/:id", getProductById);
productsRouter.get("/total-products", totalProducts);
productsRouter.patch("/update-product/:id", updateProduct);
productsRouter.delete("/delete-product/:id", deleteProduct);
//productsRouter.get("/total-products-sold", totalProductsSold);

export { productsRouter };
