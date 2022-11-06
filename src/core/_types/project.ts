import { CaseStudy } from './caseStudy';
export type Project = {
    title: string;
    excerpt: string;
    thumbnail: string;
    slug: string;
    completionYear: string,
    services: string,
    technologies: string,
    liveUrl: string,
    description: string;
    caseStudy: CaseStudy[]
}