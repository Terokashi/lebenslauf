import { pgTable, serial, text, pgEnum, timestamp } from 'drizzle-orm/pg-core';

export const entries = pgTable('entries', {
  id:           serial('id').primaryKey(),
  zeitraum:     text('zeitraum').notNull(),
  titel:        text('titel').notNull(),
  beschreibung: text('beschreibung'),
});

export const levelEnum = pgEnum('level', ['basic', 'working', 'strong']);
export const skills = pgTable('skills', {
  id:     serial('id').primaryKey(),
  name:   text('name').notNull(),
  level:  levelEnum(),
  detail: text('detail'),
});

export const projects = pgTable('projects', {
  id:           serial('id').primaryKey(),
  title:        text('name').notNull(),
  description:  text('description'),
  tags:         text('tags').array(),
  githubUrl:    text('githubUrl'),
  demoUrl:      text('demoUrl')
});

export const contactFormEntries = pgTable('contact_form_entries', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});