import { json } from '@sveltejs/kit';
import { db } from '$lib/db';
import { entries } from '$lib/db/schema';

export async function GET() {
  const all = await db.select().from(entries);
  return json({ ok: true, count: all.length, data: all });}