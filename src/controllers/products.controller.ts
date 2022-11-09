import { Request, Response } from "express";
import { STATUS_CODE } from "../enums/status.code.js";
import { InsertProduct, ListProducts } from "../protocols/product.js";
import * as productsRepository from "../repositories/products.repository.js";

async function createProduct(req: Request, res: Response) {
	const product = req.body as InsertProduct;
	try {
		await productsRepository.insertProduct(product);
		return res.sendStatus(STATUS_CODE.CREATED);
	} catch (error) {
		return res.sendStatus(STATUS_CODE.SERVER_ERROR);
	}
}

async function getProducts(req: Request, res: Response) {
	try {
		const products = (await productsRepository.listProducts()).rows as ListProducts[];
		return res.status(STATUS_CODE.OK).send(products);
	} catch (error) {
		return res.sendStatus(STATUS_CODE.SERVER_ERROR);
	}
}

async function getProductsByCategory(req: Request, res: Response) {
	const category: string = req.params.category;
	try {
		const products = (await productsRepository.listProductsByCategory(category)).rows as ListProducts[];
		return res.status(STATUS_CODE.OK).send(products);
	} catch (error) {
		return res.sendStatus(STATUS_CODE.SERVER_ERROR);
	}
}

async function updateProduct(req: Request, res: Response) {
	const quantity: number = req.body.quantity;
	const id: number = Number(req.params.id);
	try {
		await productsRepository.updateProductById(quantity, id);
		return res.sendStatus(STATUS_CODE.OK);
	} catch (error) {
		return res.sendStatus(STATUS_CODE.SERVER_ERROR);
	}
}

export { createProduct, getProducts, getProductsByCategory, updateProduct };
