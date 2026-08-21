<script lang="ts">
	import { SvelteSet } from 'svelte/reactivity';
	import type { Skill } from '$lib/types';

	export interface Props {
		skills: Skill[];
	}

	let { skills }: Props = $props();

	const levelColors: Record<string, string> = {
		basic: '#9ca3af', // grau
		working: '#f59e0b', // orange
		strong: '#10b981' // grün
	};

	// TODO $state für "open?"
	let openIds = new SvelteSet<number>();

	// TODO: Funktion zum toggle
	function toggle(id: number) {
		if (openIds.has(id)) {
			openIds.delete(id);
		} else {
			openIds.add(id);
		}
	}
</script>

<div class="skills">
	{#each skills as skill (skill.id)}
		<div class="skill-item">
			<button class="badge" onclick={() => toggle(skill.id)}>
				<p>{skill.name}</p>

				<!-- TODO: {#if skill.level} -> kleiner farbpunkt-->
				<span class="dot" style="background-color: {levelColors[skill.level ?? 'basic']}"></span>
			</button>

			<!-- TODO: {#if open} -> <p> mit skill.detail -->
			{#if openIds.has(skill.id) && skill.detail}
				<p class="detail">{skill.detail}</p>
			{/if}
		</div>
	{/each}
</div>

<style>
	.skills {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(120px, max-content));
		gap: 0.5rem 1rem;
		align-items: start;
	}
	.skill-item {
		display: flex;
		flex-direction: column;
	}
	.badge {
		border: 1px solid #ccc;
		border-radius: 1rem;
		padding: 0.25rem;
	}
	.dot {
		display: inline-block;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		margin-right: 0.4rem;
	}
	.detail {
		flex-wrap: wrap;
		margin-top: 0.25rem;
		font-size: 0.85rem;
		color: #555;
		max-width: 200px;
	}
</style>
