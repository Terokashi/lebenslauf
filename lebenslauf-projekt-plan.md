# Projekt: Lebenslauf als Svelte/SvelteKit-Webseite mit Backend

**Ziel-Deadline:** Freitag in 2 Wochen
**Lernender Stand:** Solide JS-Grundlagen, neu bei Svelte. SvelteKit-CLI ("sv") bereits installiert. Docker-Kenntnisse vorhanden.

## Zu lernender Stack

- **Svelte / SvelteKit** – Frontend, Routing, Server-Routes
- **Bun** – JS-Runtime, ersetzt Node
- **Hono** – leichtgewichtiges API-Framework (bewusst erst in Woche 2 eingeführt)
- **Drizzle ORM** – Schema, Migrations, Queries
- **PostgreSQL** – lokal via Docker

**Zeitbudget:** ca. 1–2 Std/Tag

## Grobplan (14 Tage)

### Woche 1 – Frontend

<!-- DONE -->

- **Tag 1–2:** Svelte-Grundlagen (Reactivity, Components, Props, Events, `{#if}`/`{#each}`)
- **Tag 3–4:** SvelteKit-Routing, Layouts, `+page.svelte` vs. `+page.server.ts`
- **Tag 5–7:** Lebenslauf-UI bauen (Timeline, SkillBadge, ProjectCard Komponenten)

### Woche 2 – Backend

- **Tag 8:** Bun als Runtime, Hono als API-Framework (separater Microservice, z. B. für PDF-Export)
- **Tag 9–10:** Postgres via Docker, Drizzle Setup (Schema, Migrations) <!-- DONE -->
- **Tag 11–12:** Frontend-Backend-Integration (z. B. Kontaktformular → Hono-API → Postgres)
- **Tag 13–14:** Deployment, Feinschliff, Puffer

## Architektur-Entscheidung

SvelteKit übernimmt die meisten Server-Aufgaben nativ (`+page.server.ts`, `+server.ts`), um Komplexität am Anfang gering zu halten. Hono wird bewusst separat/später ergänzt, damit es trotzdem gezielt gelernt wird, statt die App unnötig früh zu verkomplizieren.

## Setup-Schritte

1. Bun installieren
   - Linux/Mac: `curl -fsSL https://bun.sh/install | bash`
   - Windows: `powershell -c "irm bun.sh/install.ps1 | iex"`
   - Prüfen: `bun --version`
2. SvelteKit-Projekt anlegen: `npx sv create lebenslauf` (TypeScript, Adapter "auto")
3. Ordnerstruktur planen (Monorepo, `server/`-Ordner für spätere Hono-API)
4. Postgres via `docker-compose.yml` starten (Image `postgres:16`, Port 5432)
   - Start: `docker compose up -d`
5. Drizzle einrichten
   - `bun add drizzle-orm postgres`
   - `bun add -D drizzle-kit`
   - `drizzle.config.ts` anlegen, erstes Schema definieren (z. B. Kontaktformular-Einträge)
6. Verbindung testen: SvelteKit-Route → Drizzle-Query → Postgres

## Nächster Schritt

Nutzer führt Setup-Schritte 1–4 aus, danach folgen die Svelte-Grundlagen direkt am Beispiel der ersten Lebenslauf-Komponente (`Timeline`).
