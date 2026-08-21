import {defineConfig} from 'drizzle-kit';
import process from 'node:process';

export default defineConfig({
    dialect: 'postgresql',
    schema: './src/lib/db/schema.ts',
    out: './drizzle',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
        password: process.env.POSTGRES_PASSWORD,
        user: process.env.POSTGRES_USER,
    },
});