import { Pool } from "pg";
import dotenv from 'dotenv'

dotenv.config()

export const database = new Pool({
  connectionString: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}?schema=public`,
});
