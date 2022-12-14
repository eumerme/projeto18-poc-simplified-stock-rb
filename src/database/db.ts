import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

type pgConfig = {
	connectionString: string;
	ssl?: {
		rejectUnauthorized: boolean;
	};
};

const databaseConfig: pgConfig = {
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
};

const { Pool } = pg;
const connection = new Pool(databaseConfig);

export { connection };
