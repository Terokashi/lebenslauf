<script lang="ts">
    // enable form to work with ts instead of js exclusive
    import {enhance} from '$app/forms';
    // import types for displaying data
    import type {PageData} from './$types';
    
    let { data }: {data: PageData} = $props();
</script>

<!-- create new job -->
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

<!-- add new skill -->
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

<!-- add new project -->
<form method="POST" action="?/addProject" use:enhance>
    <label>
        title
        <input name='title'>
    </label>
    <label>
        description
        <input name='description'>
    </label>
    <label>
        tags (separeted by comma)
        <input name='tags'>
    </label>
    <label>
        githubUrl
        <input name='githubUrl'>
    </label>
    <label>
        demoUrl
        <input name='demoUrl'>
    </label>
    <button type="submit">Speichern</button>
</form>

<!-- show jobs and delete them -->
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

<!-- show skills and delete them -->
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

<!-- show projects and delete them -->
<section>
    <h2>projects {data.projects.length}</h2>

    {#each data.projects as project (project.id)}
        <div class="row">
            <strong>{project.title}</strong>
            <span>{project.description}</span>
                        <form method="POST" action="?/deleteSkill" use:enhance>
                <input type="hidden" name="id" value={project.id}>
                <button type="submit">x</button>
            </form>
        </div>
    {/each}
</section>

<!-- shows contacts and delete them -->
<section>
    <h2>contacts {data.contacts.length}</h2>

    {#each data.contacts as contact (contact.id)}
        <div class="row">
            <strong>{contact.name}</strong>
            <span>{contact.email}</span>
            <form method="POST" action="?/deleteContact" use:enhance>
                <input type="hidden" name="id" value={contact.id}>
                <button type="submit">x</button>
            </form>
        </div>
    {/each}
</section>