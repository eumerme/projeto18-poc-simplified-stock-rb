import Joi from "joi";
import { SoldName, InsertProduct, ParamsId, QueryCategory, UpdateProduct } from "../protocols/protocols.js";

const insertProduct = Joi.object<InsertProduct>().keys({
	categoryId: Joi.number().positive().required(),
	name: Joi.string().trim().required(),
	quantity: Joi.number().positive().required(),
});

const updateQuantity = Joi.object<UpdateProduct>().keys({
	quantity: Joi.number().positive().required(),
});

const soldName = Joi.object<SoldName>().keys({
	name: Joi.string().trim().required(),
});

const paramsId = Joi.object<ParamsId>().keys({
	id: Joi.number().positive().integer(),
});

const queryCategory = Joi.object<QueryCategory>().keys({
	category: Joi.string().valid("brinco", "anel", "cordão", "pulseira", "quadro").trim(),
});

export { insertProduct, updateQuantity, soldName, paramsId, queryCategory };
