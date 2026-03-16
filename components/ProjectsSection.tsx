'use client';
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Filter = 'All' | 'AI' | 'Backend' | 'Full Stack' | 'Mobile';

const projects = [
    {
        name: 'Optevo: AI Knowledge Base',
        outcome: 'Semantic document search integrated into an enterprise collaboration platform.',
        highlights: [
            'OpenAI embeddings + Azure Cognitive Search for natural language queries',
            'Document upload pipeline (PDF, DOCX, XLSX) with smart chunking',
            'Secure multi-tenant file validation and metadata indexing',
        ],
        tags: ['Python', 'Flask', 'OpenAI', 'Azure', 'PostgreSQL'],
        category: 'AI' as Filter,
        link: 'https://www.optevo.com/',
    },
    {
        name: 'LexOrbit: Legal AI Platform',
        outcome: 'End-to-end AI research engine for legal professionals powered by GPT-4.',
        highlights: [
            'ETL pipeline from CourtListener API with pgvector semantic search',
            'Judge analytics, case prediction AI, and PDF utilities',
            'Multi-tenant Django REST API with JWT auth and background jobs',
        ],
        tags: ['Django', 'OpenAI', 'pgvector', 'PostgreSQL', 'Azure'],
        category: 'AI' as Filter,
        link: 'https://getlexorbit.com/',
    },
    {
        name: 'Veriport: Compliance Platform',
        outcome: 'Automated drug & alcohol testing compliance platform deployed on AWS.',
        highlights: [
            'Full AWS setup: EC2, S3, RDS, CloudFront, CloudWatch monitoring',
            'CI/CD pipeline with CodePipeline + CodeBuild',
            'Resolved React–Django integration issues and optimized API performance',
        ],
        tags: ['AWS', 'Django', 'React', 'PostgreSQL', 'CI/CD'],
        category: 'Full Stack' as Filter,
        link: 'https://veriport.ca/',
    },
    {
        name: 'Multi-Agent Supervisor',
        outcome: 'FastAPI orchestration layer coordinating multiple specialized AI agents.',
        highlights: [
            'Central supervisor routes tasks to GDP, Math, and domain agents',
            'Built with LangChain agent framework and LangGraph',
            'Clean REST interface for agent invocation and result streaming',
        ],
        tags: ['FastAPI', 'LangChain', 'Python', 'AI Agents'],
        category: 'AI' as Filter,
        github: 'https://github.com/rehmat11872/Multi_Agent_FastAPI_Langchain',
    },
    {
        name: 'CIDB Malaysia: Quality Assessment',
        outcome: 'Government-grade building quality assessment platform for Malaysia CIDB.',
        highlights: [
            'Django-based scoring system for construction workmanship standards',
            'Role-based access for assessors, contractors, and administration',
            'Deployed and maintained in a regulated government environment',
        ],
        tags: ['Django', 'PostgreSQL', 'Python'],
        category: 'Backend' as Filter,
        link: 'https://qlassic.cidb.gov.my/',
        github: 'https://github.com/PipelineNetwork/cidb-qlassic-prod',
    },
    {
        name: 'HRM System',
        outcome: 'Full-featured Human Resource Management system for enterprise teams.',
        highlights: [
            'Employee lifecycle management: onboarding, payroll, leave tracking',
            'RESTful Django backend with React.js admin dashboard',
            'Role-based permissions and comprehensive reporting',
        ],
        tags: ['Django', 'React', 'PostgreSQL'],
        category: 'Full Stack' as Filter,
        link: 'https://hrm.samaritan-technologies.com/',
        github: 'https://github.com/SamaritanTechnologies/HRM-backend',
    },
];

const filters: Filter[] = ['All', 'AI', 'Backend', 'Full Stack', 'Mobile'];

export default function ProjectsSection() {
    const [active, setActive] = useState<Filter>('All');

    const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

    return (
        <section id="projects" className="section-padding bg-white dark:bg-slate-800/30">
            <div className="section-container">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                    <div>
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-subtitle">Selected work across AI, backend, and full-stack domains.</p>
                    </div>
                    {/* Filter tabs */}
                    <div className="flex flex-wrap gap-2">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActive(f)}
                                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-150 ${active === f
                                    ? 'bg-sky-500 border-sky-500 text-white'
                                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-400'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project) => (
                        <div key={project.name} className="card flex flex-col justify-between gap-4">
                            <div className="space-y-3">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                                        {project.name}
                                    </h3>
                                    <span className="chip-accent flex-shrink-0">{project.category}</span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{project.outcome}</p>
                                <ul className="space-y-1.5">
                                    {project.highlights.map((h) => (
                                        <li key={h} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-sky-500 flex-shrink-0" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((t) => (
                                        <span key={t} className="chip text-xs">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-2 pt-2 border-t border-slate-100 dark:border-slate-700">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary text-xs px-3 py-1.5"
                                    >
                                        View Project <ExternalLink size={12} />
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary text-xs px-3 py-1.5"
                                    >
                                        <Github size={12} /> GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
