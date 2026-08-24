<script lang="ts">
	// displays relevant data dynamically
	import Timeline from '$lib/components/Timeline.svelte';
	import SkillBadge from '$lib/components/SkillBadge.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	
	// import types for displaying data 
	import type {PageData} from './$types';
	// database entries to display
	// entries, skills, projects
	let { data }: {data: PageData} = $props();
</script>

<div class="page">
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
