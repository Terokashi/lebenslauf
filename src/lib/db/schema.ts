import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const entries = pgTable('entries', {
  id: serial('id').primaryKey(),
  zeitraum: text('zeitraum').notNull(),
  titel: text('titel').notNull(),
  beschreibung: text('beschreibung'),
});

export const skills = pgTable('skills', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  level: text('level'),
  detail: text('detail'),
});