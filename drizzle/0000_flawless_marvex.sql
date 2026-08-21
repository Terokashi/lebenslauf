CREATE TABLE "entries" (
	"id" serial PRIMARY KEY NOT NULL,
	"zeitraum" text NOT NULL,
	"titel" text NOT NULL,
	"beschreibung" text
);
--> statement-breakpoint
CREATE TABLE "skills" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"level" text,
	"detail" text
);
