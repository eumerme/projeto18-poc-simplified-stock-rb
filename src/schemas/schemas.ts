import Joi from "joi";
import { ProductName, InsertProduct, ParamsId, QueryCategory, UpdateProduct } from "../protocols/protocols.js";

const insertProduct = Joi.object<InsertProduct>().keys({
	categoryId: Joi.number().positive().required(),
	name: Joi.string().trim().required(),
	quantity: Joi.number().positive().required(),
});

const updateQuantity = Joi.object<UpdateProduct>().keys({
	name: Joi.string().trim().required(),
	quantity: Joi.number().positive().required(),
});

const productName = Joi.object<ProductName>().keys({
	name: Joi.string().trim().required(),
});

const paramsId = Joi.object<ParamsId>().keys({
	id: Joi.number().positive().integer(),
});

const queryCategory = Joi.object<QueryCategory>().keys({
	category: Joi.string().valid("brinco", "anel", "colar", "pulseira", "quadro").trim(),
});

export { insertProduct, updateQuantity, productName, paramsId, queryCategory };
