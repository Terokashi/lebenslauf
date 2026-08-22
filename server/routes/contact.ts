import { Hono } from 'hono';
import { db } from '$lib/db/index';
import { contacts } from '$lib/db/schema';

const app = new Hono();

app.post('/contact', async (c) => {
    const data = await c.req.json();
    try {
        await db.insert(contacts).values(data);
        return c.text('Contact saved successfully', 201);
    } catch (error) {
        console.error(error);
        return c.text('Error saving contact', 500);
    }   
});

export default app;