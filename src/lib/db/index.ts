import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const client = postgres('postgres://postgres:postgres@localhost:5432/lebenslauf');

export const db = drizzle(client, { schema });