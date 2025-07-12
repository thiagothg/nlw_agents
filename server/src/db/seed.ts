import { reset, seed } from "drizzle-seed";
import { db, sql } from "./connection.ts";
import { schema } from "./schema/index.ts";

await reset(db, schema);

await seed(db, schema).refine(faker => ({
    rooms: {
        count: 10,
        columns: {
            name: faker.companyName(),
            description: faker.loremIpsum(),
        },
        with: {
           
        }
    },
    questions: {
        count: 20,
    }
}));

await sql.end();

// biome-ignore lint/style/noConsoleLog: <explanation> only used for testing
console.log("Seed completed");