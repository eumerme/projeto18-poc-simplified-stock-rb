import { Request, Response } from "express";
import { STATUS_CODE } from "../enums/status.code.js";
import { InsertProduct, ListProducts, QueryCategory, TotalProducts } from "../protocols/protocols.js";
import * as productsRepository from "../repositories/products.repository.js";

async function createProduct(req: Request, res: Response) {
	const product = req.body as InsertProduct;
	try {
		const nameExists = (await productsRepository.selectProductByName(product.name)).rows[0];
		if (nameExists) {
			return res.sendStatus(STATUS_CODE.CONFLICT);
		}

		await productsRepository.insertProduct(product);
		return res.sendStatus(STATUS_CODE.CREATED);
	} catch (error) {
		return res.sendStatus(STATUS_CODE.SERVER_ERROR);
	}
}

async function productSold(req: Request, res: Response) {
	const name: string = req.body.name;
	try {
		const product = (await productsRepository.selectProductByName(name)).rows[0];
		if (!product) {
			return res.sendStatus(STATUS_CODE.NOT_FOUND);
		}
		if (product.quantity > 0) {
			await productsRepository.updateProductQuantity(name);
		} else {
			return res.status(STATUS_CODE.BAD_REQUEST).send({ message: "Produto esgotado" });
		}

		await productsRepository.insertSoldProduct(name);
		return res.sendStatus(STATUS_CODE.OK);
	} catch (error) {
		return res.sendStatus(STATUS_CODE.SERVER_ERROR);
	}
}

async function getProducts(req: Request, res: Response) {
	const query = req.query as QueryCategory;
	try {
		const category: string = query.category;
		if (category) {
			const products = (await productsRepository.listProductsByCategory(category)).rows as ListProducts[];
			return res.status(STATUS_CODE.OK).send(products);
		}

		const products = (await productsRepository.listProducts()).rows as ListProducts[];
		return res.status(STATUS_CODE.OK).send(products);
	} catch (error) {
		return res.sendStatus(STATUS_CODE.SERVER_ERROR);
	}
}

async function getProductById(req: Request, res: Response) {
	const id: number = Number(req.params.id);
	try {
		const product = (await productsRepository.selectProductById(id)).rows[0] as ListProducts;
		if (!product) {
			return res.sendStatus(STATUS_CODE.NOT_FOUND);
		}

		return res.status(STATUS_CODE.OK).send(product);
	} catch (error) {
		return res.sendStatus(STATUS_CODE.SERVER_ERROR);
	}
}

async function totalProductsAvailable(req: Request, res: Response) {
	const query = req.query as QueryCategory;
	try {
		const category: string = query.category;
		if (category) {
			const total = (await productsRepository.totalProductsByCategoryAvailable(category)).rows[0] as TotalProducts;
			return res.status(STATUS_CODE.OK).send(total);
		}

		const total = (await productsRepository.totalAllProductsAvailable()).rows[0] as TotalProducts;
		return res.status(STATUS_CODE.OK).send(total);
	} catch (error) {
		return res.sendStatus(STATUS_CODE.SERVER_ERROR);
	}
}

async function totalProductsSold(req: Request, res: Response) {
	const query = req.query as QueryCategory;
	try {
		const category: string = query.category;
		if (category) {
			const total = (await productsRepository.totalProductsSoldByCategory(category)).rows[0] as TotalProducts;
			return res.status(STATUS_CODE.OK).send(total);
		}

		const total = (await productsRepository.totalAllProductsSold()).rows[0] as TotalProducts;
		return res.status(STATUS_CODE.OK).send(total);
	} catch (error) {
		return res.sendStatus(STATUS_CODE.SERVER_ERROR);
	}
}

async function updateProduct(req: Request, res: Response) {
	const quantity: number = req.body.quantity;
	const id: number = Number(req.params.id);
	try {
		const product = (await productsRepository.selectProductById(id)).rows[0] as ListProducts;
		if (!product) {
			return res.sendStatus(STATUS_CODE.NOT_FOUND);
		}

		await productsRepository.updateProduct(quantity, id);
		return res.sendStatus(STATUS_CODE.OK);
	} catch (error) {
		return res.sendStatus(STATUS_CODE.SERVER_ERROR);
	}
}

async function deleteProduct(req: Request, res: Response) {
	const id: number = Number(req.params.id);
	try {
		const product = (await productsRepository.selectProductById(id)).rows[0] as ListProducts;
		if (!product) {
			return res.sendStatus(STATUS_CODE.NOT_FOUND);
		}

		await productsRepository.deleteProductById(id);
		return res.sendStatus(STATUS_CODE.OK);
	} catch (error) {
		return res.sendStatus(STATUS_CODE.SERVER_ERROR);
	}
}

export {
	createProduct,
	productSold,
	getProducts,
	getProductById,
	totalProductsAvailable,
	totalProductsSold,
	updateProduct,
	deleteProduct,
};
