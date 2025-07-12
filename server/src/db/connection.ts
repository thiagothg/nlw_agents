import postgres from "postgres";
import { env } from "../env.ts";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema/index.ts";

export const sql = postgres(env.DATABASE_URL, {
    prepare: false,
});

export const db = drizzle(sql, { schema });