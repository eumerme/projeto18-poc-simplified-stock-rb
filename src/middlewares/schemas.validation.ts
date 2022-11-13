import { STATUS_CODE } from "../enums/status.code.js";
import { schemas } from "../schemas/schemas.js";
import { Request, Response, NextFunction } from "express";

function schemasValidation(req: Request, res: Response, next: NextFunction) {
	const path: string = req.route.path;
	let result;
}
