import { Router } from "express";
import { validateBody, validateParams, validateQuery } from "../middlewares/schemas.validation.js";
import { insertProduct, paramsId, queryCategory, soldName, updateQuantity } from "../schemas/schemas.js";
import {
	createProduct,
	productSold,
	getProducts,
	getProductById,
	totalProductsAvailable,
	totalProductsSold,
	updateProduct,
	deleteProduct,
} from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter
	.post("/product", validateBody(insertProduct), createProduct)
	.post("/product-sold", validateBody(soldName), productSold)
	.get("/products", validateQuery(queryCategory), getProducts)
	.get("/product/:id", validateParams(paramsId), getProductById)
	.get("/total-products-available", validateQuery(queryCategory), totalProductsAvailable)
	.get("/total-products-sold", validateQuery(queryCategory), totalProductsSold)
	.patch("/update-product/:id", validateParams(paramsId), validateBody(updateQuantity), updateProduct)
	.delete("/delete-product/:id", validateParams(paramsId), deleteProduct);

export { productsRouter };
