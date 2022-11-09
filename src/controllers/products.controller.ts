import { Request, Response } from "express";
import { STATUS_CODE } from "../enums/status.code.js";
import { Product } from "../protocols/product.js";
import * as productsRepository from "../repositories/products.repository.js";

async function createProduct(req: Request, res: Response) {
	const product = req.body as Product;
	try {
		await productsRepository.insertProduct(product);
		return res.sendStatus(STATUS_CODE.CREATED);
	} catch (error) {
		return res.sendStatus(STATUS_CODE.SERVER_ERROR);
	}
}

export { createProduct };
