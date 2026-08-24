<script lang="ts">
    import { enhance } from "$app/forms";
	let {form} = $props()
</script>

<form method="POST" action="?/saveContact" use:enhance>
	<label>
		name
		<input name="name">
	</label>
	<label>
		email
		<input name="email">
	</label>
	<button type="submit">Save contact</button>
	
	<!-- check if contact was entered properly & display appropriate message -->
	{#if form?.success}
		<p class="success">{form?.message}</p>
	{:else if form?.success === false}
		<p class="fail">{form?.message}</p>
	{/if}
</form>

<style>
	.success { color: green; }
	.fail { color: red; }
</style>