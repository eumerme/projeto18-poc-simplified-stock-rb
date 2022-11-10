import { Request, Response } from "express";
import { STATUS_CODE } from "../enums/status.code.js";
import { Category, InsertProduct, ListProducts, TotalProducts } from "../protocols/products.js";
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

async function productSold(req: Request, res: Response) {
	const name: string = req.body.name;
	try {
		await productsRepository.insertSoldProduct(name);

		const product = (await productsRepository.selectProductByName(name)).rows[0];
		if (product.quantity > 0) {
			await productsRepository.updateProductQuantity(name);
		} else {
			return res.status(STATUS_CODE.BAD_REQUEST).send({ message: "Produto esgotado" });
		}

		return res.sendStatus(STATUS_CODE.OK);
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

async function getProductById(req: Request, res: Response) {
	const id: number = Number(req.params.id);
	try {
		const product = (await productsRepository.selectProductById(id)).rows[0] as ListProducts;
		return res.status(STATUS_CODE.OK).send(product);
	} catch (error) {
		return res.sendStatus(STATUS_CODE.SERVER_ERROR);
	}
}

async function totalProducts(req: Request, res: Response) {
	const query = req.query as Category;
	try {
		const category: string = query.category;
		if (category) {
			const products = (await productsRepository.totalProductsByCategory(category)).rows[0] as TotalProducts;
			return res.status(STATUS_CODE.OK).send(products);
		}
		const products = (await productsRepository.totalProducts()).rows[0] as TotalProducts;
		return res.status(STATUS_CODE.OK).send(products);
	} catch (error) {
		return res.sendStatus(STATUS_CODE.SERVER_ERROR);
	}
}

async function updateProduct(req: Request, res: Response) {
	const quantity: number = req.body.quantity;
	const id: number = Number(req.params.id);
	try {
		const product = (await productsRepository.selectProductById(id)).rows[0] as ListProducts;

		await productsRepository.updateProduct(quantity, id);
		return res.sendStatus(STATUS_CODE.OK);
	} catch (error) {
		return res.sendStatus(STATUS_CODE.SERVER_ERROR);
	}
}

async function deleteProduct(req: Request, res: Response) {
	const id: number = Number(req.params.id);
	try {
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
	getProductsByCategory,
	getProductById,
	totalProducts,
	updateProduct,
	deleteProduct,
};
