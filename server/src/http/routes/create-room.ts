import { db } from "../../db/connection.ts";
import { z } from "zod/v4";
import type{ FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { schema } from "../../db/schema/index.ts";

export const createRoomRoute: FastifyPluginCallbackZod = async (app) => {
    app.post("/rooms", {
        schema: {
            body: z.object({
                name: z.string().min(1),
                description: z.string().optional(),
            })
        },
    }, async (request, reply) => {
        try {
            const { name, description } = request.body;
            
            const result = await db
                .insert(schema.rooms)
                .values({ 
                    name, 
                    description: description || null 
                })
                .returning();

            const createdRoom = result[0];
            
            if (!createdRoom) {
                return reply.status(500).send({ error: "Failed to create room" });
            }

            return reply.status(201).send({ 
                roomId: createdRoom.id,
                room: createdRoom  
            });
        } catch (error) {
            console.error("Error creating room:", error);
            return reply.status(500).send({ 
                error: "Internal server error",
                details: error instanceof Error ? error.message : "Unknown error"
            });
        }
    });
};