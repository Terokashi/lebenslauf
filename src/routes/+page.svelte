<script lang="ts">
	import Timeline from '$lib/components/Timeline.svelte';
	import SkillBadge from '$lib/components/SkillBadge.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	// import { type Skill } from '$lib/types';
	// import { type Project } from '$lib/types';

	import type {PageData} from './$types';
	let { data }: {data: PageData} = $props();

	/*
	const werdegang = [
		{
			id: 0,
			zeitraum: '2022–heute',
			titel: 'IT-Ausbildung',
			beschreibung: 'Fachinformatiker Anwendungsentwicklung'
		},
		{ id: 1, zeitraum: '2020–2022', titel: 'Schule', beschreibung: 'Abitur' }
	];
	const gelerntes: Skill[] = [
		{ id: 0, name: 'TypeScript', level: 'working', detail: 'kann mit arbeiten' },
		{ id: 1, name: 'Python', level: 'strong', detail: 'Projekte schon mit durchgeführt' },
    { id: 2, name: 'ollama', level: 'basic', detail: 'Für dieses projekt eingerichtet' }
	];
	const projekte: Project[] = [
		{
			id: 1,
			title: 'Kaffeepunkt',
			description: 'Kleines Web-Tool zur Planung von Kaffeepausen im Team.',
			tags: ['Svelte', 'TypeScript', 'Docker'],
			githubUrl: 'https://github.com/du/kaffeepunkt'
		},
		{
			id: 2,
			title: 'CLI-Helper',
			description: 'Bun-Skripte für repetitive Dev-Aufgaben.',
			tags: ['Bun', 'Shell'],
			demoUrl: 'https://helper.example.com'
		}
	];
	*/
</script>

<div class="page">
  <nav>
    <a href="#werdegang">Werdegang</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projekte</a>
	<button class="print-bttn" onclick={() => window.print()}>Drucken</button>
  </nav>

  <div class="header">
    <h1>Kilian Stelling</h1>
    <p class="subtitle">Fachinformatiker</p>
    <address>
      <a href="mailto:kilian.stelling@gmx.de">kilian.stelling@gmx.de</a>
    </address>
  </div>

  <section id="werdegang">
    <h2>Erfahrungen</h2>
    <Timeline entries={data.entries} />
  </section>

  <section id="skills">
    <h2>Meine skills</h2>
    <SkillBadge skills={data.skills} />
  </section>

  <section id="projects">
    <h2>Projekte</h2>
    <ProjectCard projects={data.projects} />
  </section>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root {
		--bg: #fafafa;
		--surface: #fff;
		--text: #111827;
		--muted: #6b7280;
		--accent: #2563eb;
		--border: #e5e7eb;
		--radius: 0.625rem;
	}

	.page {
		max-width: 720px;
		margin: 0 auto;
		padding: 2rem 1.25rem 4rem;
	}

	nav {
		position: sticky;
		top: 0;
		z-index: 10;
		display: flex;
		gap: 1.5rem;
		padding: 0.75rem 0;
		margin-bottom: 2rem;
		background: var(--bg);
		border-bottom: 1px solid var(--border);
	}

	nav a, .print-bttn {
		font-size: 0.85rem;
		font-weight: 500;
		color: var(--muted);
		text-decoration: none;
		transition: color 0.15s;
	}

	nav a:hover, .print-bttn:hover {
		color: var(--accent);
	}

	.header {
		margin-bottom: 2.5rem;
	}

	.header h1 {
		font-size: 1.75rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		margin-bottom: 0.25rem;
	}

	.header .subtitle {
		font-size: 1rem;
		color: var(--accent);
		font-weight: 500;
		margin-bottom: 0.75rem;
	}

	.header address {
		font-style: normal;
		font-size: 0.85rem;
		color: var(--muted);
		line-height: 1.7;
	}

	.header address a {
		color: var(--accent);
		text-decoration: none;
	}

	section {
		margin-bottom: 2.5rem;
	}

	section h2 {
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 1rem;
		padding-bottom: 0.4rem;
		border-bottom: 2px solid var(--border);
	}
</style>
