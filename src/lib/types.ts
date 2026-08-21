export interface Entry {
    id: number;
    zeitraum: string;
    titel: string;
    beschreibung: string;
}

export interface Skill {
    id: number;
    name: string;
    level?: 'basic' | 'working' | 'strong';
    detail: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
}