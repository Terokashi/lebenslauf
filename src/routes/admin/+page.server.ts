import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { db } from '$lib/db/index';
import { entries } from '$lib/db/schema';
import { skills } from '$lib/db/schema'

export const actions: Actions = {
    'add-entry': async ({ request }: {request : Request}) =>{
        const data = await request.formData();
        await db.insert(entries).values({
            zeitraum: data.get('zeitraum') as string,
            titel: data.get('titel') as string,
            beschreibung: (data.get('beschreibung') as string) ?? null
        });
        redirect(303, '/admin');
    },
    
    'add-skill': async ({ request }: {request : Request}) =>{
        const data = await request.formData();
        await db.insert(skills).values({
            name: data.get('name') as string,
            level: (data.get('level') as string) ?? null,
            detail: (data.get('detail') as string) ?? null
        });
        redirect(303, '/admin')
    }
}