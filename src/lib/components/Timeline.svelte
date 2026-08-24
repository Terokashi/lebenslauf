<script lang="ts">
	import type { Entry } from '$lib/types';

	export interface Props {
		entries: Entry[];
	}

	let { entries }: Props = $props();
</script>

<!-- constructs timeline -->
<ul class="timeline">
	{#each entries as entry (entry.id)}
		<li>
			<strong>{entry.zeitraum}</strong>
			<span>{entry.titel}</span>
			<p>{entry.beschreibung}</p>
		</li>
	{/each}
</ul>

<style>
	/* CSS hier */
	.timeline {
		list-style: none;
		padding: 0;
	}
	li {
		margin-bottom: 1rem;
		border-left: 2px solid #ccc;
		padding-left: 1rem;
	}
</style>
