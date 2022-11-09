import { Router } from "express";
import { createProduct, getProducts } from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post("/product", createProduct);
productsRouter.get("/products", getProducts);

export { productsRouter };
