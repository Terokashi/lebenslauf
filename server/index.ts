import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import contactApp from './routes/contact';

const app = new Hono();

app.get('/test', (c) => {
  return c.text('test success');
});

app.route('/contact', contactApp)

serve(app);

console.log("hono is now running");