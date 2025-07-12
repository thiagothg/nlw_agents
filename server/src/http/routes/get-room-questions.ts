import { eq } from "drizzle-orm";
import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";

export const getRoomQuetionsRoute: FastifyPluginCallbackZod = async (app) => {
  app.get(
    "/rooms/:roomId/questions",
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
      },
    },
    async (request, reply) => {
      try {
        const { roomId } = request.params;

        console.log("RoomId received:", roomId, typeof roomId);

        const result = await db
          .select({
            id: schema.questions.id,
            question: schema.questions.question,
            answer: schema.questions.answer,
            createdAt: schema.questions.createdAt,
          })
          .from(schema.questions)
          .where(eq(schema.questions.roomId, roomId))
          .orderBy(schema.questions.createdAt);

        return reply.status(200).send(result);
      } catch (error) {
        console.error("Error fetching questions:", error);
        return reply.status(500).send({
          error: "Internal server error",
          details: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }
  );
};
