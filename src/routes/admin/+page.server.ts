import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { db } from '$lib/db/index';
import { contactFormEntries, entries, skills, projects } from '$lib/db/schema';
import { eq } from 'drizzle-orm';

// connection to db to add and delete skills, entries and contacts
export const actions: Actions = {
    addEntry: async ({ request }) =>{
        const data = await request.formData();

        await db.insert(entries).values({
            zeitraum: data.get('zeitraum') as string,
            titel: data.get('titel') as string,
            beschreibung: (data.get('beschreibung') as string) || null
        });
        redirect(303, '/admin');
    },

    addSkill: async ({ request }) =>{
        const data = await request.formData();

        await db.insert(skills).values({
            name: data.get('name') as string,
            level: (data.get('level')) as 'basic' | 'working' | 'strong' || null,
            detail: (data.get('detail') as string) || null
        });
        redirect(303, '/admin');
    },

    addProject: async ({ request }) =>{
        const data = await request.formData();
        const tagsString = data.get('tags') as string;

        const tags = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);

        await db.insert(projects).values({
            title: data.get('title') as string,
            description: data.get('description') as string,
            tags,
            githubUrl: data.get('githubUrl') as string || null,
            demoUrl: data.get('demoUrl') as string | null
        });
    },

    deleteEntry: async ({ request }) =>{
        const data = await request.formData();
        const id = Number(data.get('id'));
        await db.delete(entries).where(eq(entries.id, id));
        redirect(303, '/admin');
    },

    deleteSkill: async ({ request }) =>{
        const data = await request.formData();
        const id = Number(data.get('id'));
        await db.delete(skills).where(eq(skills.id, id));
        redirect(303, '/admin');
    },

    deleteProject: async ({ request }) =>{
        const data = await request.formData();
        const id = Number(data.get('id'));
        await db.delete(projects).where(eq(projects.id, id));
        redirect(303, '/admin');
    },

    deleteContact: async ({ request }) =>{
        const data = await request.formData();
        const id = Number(data.get('id'));
        await db.delete(contactFormEntries).where(eq(contactFormEntries.id, id));
    }
};