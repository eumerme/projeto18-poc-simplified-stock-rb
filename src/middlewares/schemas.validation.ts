import { STATUS_CODE } from "../enums/status.code.js";
import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

function validateBody<T>(schema: ObjectSchema<T>): ValidationMiddleware {
	return validate(schema, "body");
}

function validateParams<T>(schema: ObjectSchema<T>): ValidationMiddleware {
	return validate(schema, "params");
}

function validateQuery<T>(schema: ObjectSchema<T>): ValidationMiddleware {
	return validate(schema, "query");
}

function validate(schema: ObjectSchema, type: "body" | "params" | "query") {
	return (req: Request, res: Response, next: NextFunction) => {
		const { error } = schema.validate(req[type], {
			abortEarly: false,
		});

		if (error) {
			const message = error.details.map((detail) => detail.message).join(",");
			return res.status(STATUS_CODE.UNPROCESSABLE_ENTITY).send({ message });
		} else {
			next();
		}
	};
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;

export { validateBody, validateParams, validateQuery };
