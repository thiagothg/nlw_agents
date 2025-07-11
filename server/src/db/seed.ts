import { reset, seed } from "drizzle-seed";
import { db, sql } from "./connection.ts";
import { shemas } from "./schema/index.ts";

await reset(db, shemas);

await seed(db, shemas).refine(faker => ({
    rooms: {
        count: 10,
        columns: {
            name: faker.companyName(),
            description: faker.loremIpsum(),
        },
    },
}));

await sql.end();

// biome-ignore lint/style/noConsoleLog: <explanation> only used for testing
console.log("Seed completed");