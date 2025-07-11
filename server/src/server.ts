import fastify from "fastify";
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
import { env } from "./env.ts";
import { sql } from "./db/connection.ts";
import { getRoomsRoute } from "./http/routes/get-rooms.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: "http://localhost:5173",
    // methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    // allowedHeaders: ["Content-Type", "Authorization"],
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get("/health", () => {
    return {
        status: "ok",
    };
});

app.register(getRoomsRoute);

app.listen({ port: env.PORT }, (err, address) => {
    console.log(`Server is running on ${address}`);
});


