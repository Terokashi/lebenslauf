<script lang="ts">
	let { children } = $props();
    import "../app.css";
</script>

<svelte:head>
	<meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Kilian Stelling – Lebenslauf</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      	href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      	rel="stylesheet"
    />
</svelte:head>

<nav>
    <a href="#werdegang">Werdegang</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projekte</a>
    <a href="/contact">Kontaktieren</a>
    <button class="print-bttn" onclick={() => window.print()}>Drucken</button>
</nav>

<style>
    nav {
        position: sticky;
        top: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-content: center;
        gap: 1.5rem;
        padding: 0.75rem 0;
        margin-bottom: 2rem;
        background: var(--bg);
        border-bottom: 1px solid var(--border);
    }

    nav a, .print-bttn {
        text-align: center;
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--muted);
        text-decoration: none;
        transition: color 0.15s;
    }

    nav a:hover, .print-bttn:hover {
        color: var(--accent);
    }
</style>

{@render children()}
