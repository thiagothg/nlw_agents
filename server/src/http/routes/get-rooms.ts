import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { db } from "../../db/connection.ts";
import { shemas } from "../../db/schema/index.ts";

export const getRoomsRoute: FastifyPluginAsyncZod = async (app) => {
    app.get("/rooms", async (request, reply) => {
        const rooms = await db.select({
            id: shemas.rooms.id,
            name: shemas.rooms.name,
            description: shemas.rooms.description,
            createdAt: shemas.rooms.createdAt,
            updatedAt: shemas.rooms.updatedAt,
        }).from(shemas.rooms).orderBy(shemas.rooms.createdAt);
        return reply.status(200).send(rooms);
    });
};