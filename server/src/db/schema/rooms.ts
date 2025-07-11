import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";

export const rooms = pgTable("rooms", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    description: text("description"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});