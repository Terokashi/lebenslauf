export interface Entry {
    id: number;
    zeitraum: string;
    titel: string;
    beschreibung?: string | null;
}

export interface Skill {
    id: number;
    name: string;
    level?: 'basic' | 'working' | 'strong' | null;
    detail?: string | null;
}

export interface Project {
    id: number;
    title: string;
    description: string | null;
    tags: string[] | null;
    githubUrl?: string | null;
    demoUrl?: string | null;
}