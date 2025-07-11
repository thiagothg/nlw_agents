import postgres from "postgres";
import { env } from "../env.ts";
import { drizzle } from "drizzle-orm/postgres-js";
import { shemas } from "./schema/index.ts";

export const sql = postgres(env.DATABASE_URL, {
    prepare: false,
});

export const db = drizzle(sql, { schema: shemas, casing: "snake_case" });