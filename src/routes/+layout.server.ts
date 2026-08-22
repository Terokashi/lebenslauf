import { db } from '$lib/db/index';
import { entries, skills, projects } from '$lib/db/schema';

export async function load() {
  const [entryList, skillList, projectList] = await Promise.all([
    db.select().from(entries).orderBy(entries.zeitraum),
    db.select().from(skills).orderBy(skills.name),
    db.select().from(projects).orderBy(projects.id),
  ]);
  return { entries: entryList, skills: skillList, projects: projectList };
}