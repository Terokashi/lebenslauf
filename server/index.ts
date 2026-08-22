import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const app = new Hono();

app.get('/export/pdf', (c) => {
  return c.text('PDF Export Endpoint');
});

serve(app);