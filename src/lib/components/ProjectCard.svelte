<script lang="ts">
	import { resolve } from '$app/paths';
	import { type Project } from '$lib/types';

	export interface Props {
		projects: Project[];
	}

	let { projects }: Props = $props();
</script>

{#each projects as project (project.id)}
	<article class="card">
		<h3>{project.title}</h3>
		<p>{project.description}</p>

		<!-- TODO: Tags einfügen-->
		<div class="tags">
			{#each project.tags as tag (tag)}
				<p class="tag">{tag}</p>
			{/each}
		</div>

		<!-- TODO: Links einfügen -->
		<div class="links">
			{#if project.demoUrl}
				<a href={project.demoUrl}>{project.demoUrl}</a>
			{/if}

			{#if project.githubUrl}
				<a href={project.githubUrl}>{project.githubUrl}</a>
			{/if}
		</div>
	</article>
{/each}

<style>
	.card {
		border: 1px solid #e5e7eb;
		border-radius: 0.625rem;
		padding: 1.25rem 1.5rem;
		margin-bottom: 1rem;
		background: #fff;
		transition:
			box-shadow 0.2s,
			border-color 0.2s;
	}
	.card:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
		border-color: #d1d5db;
	}

	.card h3 {
		margin: 0 0 0.35rem;
		font-size: 1.05rem;
		font-weight: 600;
		color: #111827;
	}

	.card p {
		margin: 0 0 0.85rem;
		font-size: 0.9rem;
		line-height: 1.5;
		color: #4b5563;
	}

	/*TODO: .tags Styling*/
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-bottom: 0.85rem;
	}

	.tag {
		font-size: 0.72rem;
		font-weight: 500;
		letter-spacing: 0.02em;
		padding: 0.2rem 0.55rem;
		border-radius: 999px;
		background: #f0f4ff;
		color: #374151;
	}

	.links {
		display: flex;
		gap: 1rem;
	}

	.links a {
		font-size: 0.82rem;
		font-weight: 500;
		color: #2563eb;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
	}

	.links a:hover {
		text-decoration: underline;
		color: #1d4ed8;
	}
</style>
