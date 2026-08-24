import { Hono } from 'hono';
import { db } from '../../src/lib/db/index';
import { contactFormEntries } from '../../src/lib/db/schema';

const contactApp = new Hono();

contactApp.post('/', async (c) => {
    const data = await c.req.json();
    try {
        await db.insert(contactFormEntries).values(data);
        console.log('Contact saved successfully');
        return c.text('Contact saved successfully', 201);
    } catch (error) {
        console.error(error);
        return c.text('Error saving contact', 500);
    }   
});

export default contactApp;