<script lang="ts">
    import type {PageData} from './$types';
    import {enhance} from '$app/forms';
    let { data }: {data: PageData} = $props();
</script>

<form method="POST" action="?/addEntry" use:enhance>
    <label>
        zeitraum
        <input name="zeitraum">
    </label>
    <label>
        titel
        <input name="titel">
    </label>
    <label>
        beschreibung
        <input name="beschreibung">
    </label>
    <button type="submit">Speichern</button>
</form>

<form method="POST" action="?/addSkill" use:enhance>
    <label>
        name
        <input name="name">
    </label>
    <label>
        level
        <select name="level">
            <option value="basic">basic</option>
            <option value="working">working</option>
            <option value="strong">strong</option>
        </select>
    </label>
    <label>
        detail
        <input name="detail">
    </label>
    <button type="submit">Speichern</button>
</form>

<section>
    <h2>Einträge ({data.entries.length})</h2>

    {#each data.entries as entry (entry.id)}
        <div class="row">
            <span>{entry.zeitraum}</span>
            <strong>{entry.titel}</strong>
            <form method="POST" action="?/deleteEntry" use:enhance>
                <input type="hidden" name="id" value={entry.id}>
                <button type="submit">x</button>
            </form>
        </div>
    {/each}
</section>

<section>
    <h2>skills {data.skills.length}</h2>

    {#each data.skills as skill (skill.id)}
        <div class="row">
            <strong>{skill.name}</strong>
            <span>{skill.level}</span>
            <form method="POST" action="?/deleteSkill" use:enhance>
                <input type="hidden" name="id" value={skill.id}>
                <button type="submit">x</button>
            </form>
        </div>
    {/each}
</section>