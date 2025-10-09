export interface Language {
    en: string;
    fa: string;
}

export interface LanguageProps {
    language: 'en' | 'fa';
}

export interface HeaderProps extends LanguageProps {
    setLanguage: (lang: 'en' | 'fa') => void;
}

export interface Skill {
    name: Language;
    level: number;
    category: 'devops' | 'data' | 'cloud' | 'programming';
    icon: string;
}

export interface Experience {
    title: Language;
    company: Language;
    location: Language;
    period: Language;
    description: Language[];
    technologies: string[];
}

export interface Project {
    title: Language;
    description: Language;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    image?: string;
    category: 'devops' | 'data' | 'web' | 'infrastructure';
}

export interface ContactInfo {
    email: string;
    phone: string;
    location: Language;
    linkedin: string;
    github: string;
    telegram: string;
}