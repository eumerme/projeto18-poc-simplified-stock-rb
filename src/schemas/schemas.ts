import Joi from "joi";
import { InsertProduct, ListProducts, ParamsId, ParamsQuery } from "../protocols/protocols.js";

const schemas = {
	insertProduct: Joi.object<InsertProduct>().keys({
		categoryId: Joi.number().positive().required(),
		name: Joi.string().trim().required(),
		quantity: Joi.number().positive().required(),
	}),
	listProducts: Joi.object<ListProducts>().keys({
		name: Joi.string().trim().required(),
		quantity: Joi.number().positive().required(),
		category: Joi.string().trim().valid("brinco", "anel", "cordão", "pulseira", "quadro").required(),
	}),
	paramsId: Joi.object<ParamsId>().keys({
		id: Joi.number().positive().integer(),
	}),
	paramsCategory: Joi.object<ParamsQuery>().keys({
		category: Joi.string().trim().required(),
	}),
	paramsProduct: Joi.object<ParamsQuery>().keys({
		product: Joi.string().trim().required(),
	}),
};

export { schemas };
