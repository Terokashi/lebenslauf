import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { db } from '$lib/db/index';
import { entries, skills } from '$lib/db/schema';
import { eq } from 'drizzle-orm';


export const actions: Actions = {
    'addEntry': async ({ request }: {request : Request}) =>{
        const data = await request.formData();

        await db.insert(entries).values({
            zeitraum: data.get('zeitraum') as string,
            titel: data.get('titel') as string,
            beschreibung: (data.get('beschreibung') as string) || null
        });
        redirect(303, '/admin');
    },

    addSkill: async ({ request }: {request : Request}) =>{
        const data = await request.formData();

        await db.insert(skills).values({
            name: data.get('name') as string,
            level: (data.get('level')) as 'basic' | 'working' | 'strong' || null,
            detail: (data.get('detail') as string) || null
        });
        redirect(303, '/admin');
    },

    deleteEntry: async ({ request }: {request: Request}) =>{
        const data = await request.formData();
        const id = Number(data.get('id'));
        await db.delete(entries).where(eq(entries.id, id));
        redirect(303, '/admin');
    },

    deleteSkill: async ({ request }: {request: Request}) =>{
        const data = await request.formData();
        const id = Number(data.get('id'));
        await db.delete(skills).where(eq(skills.id, id));
        redirect(303, '/admin');
    },
};