export interface Project {
    id: string;
    title: string;
    shortTagline: string;
    description: string;
    category: string;
    techStack: string[];
    githubUrl: string;
    demoUrl?: string;
    impact: string;
    gradient: string;
    featured?: boolean;
}

export interface Experience {
    id: string;
    title: string;
    role: string;
    company: string;
    period: string;
    location: string;
    achievements: string[];
}

export interface Education {
    id: string;
    degree: string;
    institution: string;
    period: string;
    location: string;
    highlights: string[];
}

export interface Certification {
    id: string;
    title: string;
    issuer: string;
    icon: string;
}

export interface SkillCategory {
    id: string;
    category: string;
    color: string;
    skills: string[];
}
