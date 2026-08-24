import { db } from '$lib/db/index';
import { entries, skills, projects, contactFormEntries } from '$lib/db/schema';

// loads databases for accessability in home page
export async function load() {
    const [entryList, skillList, projectList, contactList] = await Promise.all([
        db.select().from(entries).orderBy(entries.zeitraum),
        db.select().from(skills).orderBy(skills.name),
        db.select().from(projects).orderBy(projects.id),
        db.select().from(contactFormEntries).orderBy(contactFormEntries.id)
    ]);
    return { entries: entryList, skills: skillList, projects: projectList, contacts: contactList };
}