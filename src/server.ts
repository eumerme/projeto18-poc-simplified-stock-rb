import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { productsRouter } from "./routers/products.router.js";
dotenv.config();

const server = express();

server
	.use(cors())
	.use(express.json())
	.use(productsRouter)
	.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`));
