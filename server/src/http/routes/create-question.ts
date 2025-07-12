import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";

export const createRoomQuestionRoute: FastifyPluginCallbackZod = async (
  app
) => {
  app.post(
    "/rooms/:roomId/questions",
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
        body: z.object({
          question: z.string().min(1),
        }),
      },
    },
    async (request, reply) => {
      try {
        const { roomId } = request.params;
        const { question } = request.body;

        const result = await db
          .insert(schema.questions)
          .values({
            question,
            roomId,
          })
          .returning();

        const createdQuestion = result[0];

        if (!createdQuestion) {
          return reply.status(500).send({ error: "Failed to create room" });
        }

        return reply.status(201).send({
          questionId: createdQuestion.id,
          question: createdQuestion,
        });
      } catch (error) {
        console.error("Error creating room:", error);
        return reply.status(500).send({
          error: "Internal server error",
          details: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }
  );
};
