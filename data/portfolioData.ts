export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: 'AI & LLM' | 'Enterprise SaaS' | 'Cloud & RegTech' | 'Productivity';
  badge: string;
  description: string;
  whatIBuilt: string[];
  metrics: string;
  techStack: string[];
  link?: string;
  github?: string;
  secondaryLink?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  tech: string[];
}

export const PERSONAL_INFO = {
  name: 'Rehmat Qadeer',
  title: 'Senior Full-Stack AI Engineer',
  specialization: 'Python · React · Next.js · FastAPI · LLM & RAG Architecture',
  yearsOfExperience: '8+',
  location: 'Lahore, Pakistan · Available for Global Remote Roles',
  email: 'raorehmat11@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1Yv-E9y9VxhUcz_f3wMGeMurVbYVZSyM5/view?usp=sharing',
  linkedinUrl: 'https://www.linkedin.com/in/rehmat-qadeer/',
  githubUrl: 'https://github.com/rehmat11872',
  bio: `Senior Full-Stack AI Engineer with 8+ years of hands-on experience building production-grade AI systems, SaaS platforms, high-throughput APIs, and enterprise cloud infrastructure. Specializing in RAG pipelines, multi-agent workflows (LangChain, LangGraph), scalable Python backends (FastAPI, Django), and modern Next.js/React architectures.`,
  valueProposition: `You don't need separate developers for AI, backend, frontend, and DevOps. I architect and ship complete systems from problem discovery to cloud production.`
};

export const CORE_METRICS = [
  { value: '8+', label: 'Years Experience' },
  { value: '11+', label: 'Production Platforms' },
  { value: '< 850ms', label: 'RAG Retrieval Latency' },
  { value: '100%', label: 'Full Lifecycle Ownership' }
];

export interface VisualNode {
  step: string;
  title: string;
  detail: string;
  badge?: string;
  highlight?: boolean;
}

export interface PillarBenchmark {
  label: string;
  value: string;
  unit?: string;
}

export interface PillarData {
  id: string;
  pillarNumber: string;
  totalPillars: string;
  badge: string;
  titlePrefix: string;
  italicWord: string;
  titleSuffix: string;
  cardBg: string;
  borderColor: string;
  accentColor: string;
  iconBg: string;
  iconType: 'cpu' | 'server' | 'cloud';
  problem: string;
  solution: string;
  deliverables: string[];
  nodes: VisualNode[];
  benchmarks: PillarBenchmark[];
  codeFilename: string;
  codeSnippet: string;
}

export const ARCHITECTURE_PILLARS: PillarData[] = [
  {
    id: 'rag-agents',
    pillarNumber: '01',
    totalPillars: '03',
    badge: 'AI Systems · RAG & Multi-Agent Swarms',
    titlePrefix: 'Deterministic RAG with',
    italicWord: 'zero hallucination',
    titleSuffix: 'and agent coordination.',
    cardBg: 'bg-[#ecfdf5]',
    borderColor: 'border-[#a7f3d0]',
    accentColor: 'text-[#064e3b]',
    iconBg: 'bg-[#dcfce7]',
    iconType: 'cpu',
    problem:
      'Standard LLMs hallucinate on enterprise documents, consume uncontrolled tokens, and lack verifiable grounding.',
    solution:
      'I implement hybrid retrieval combining dense vector similarity (pgvector HNSW) with sparse BM25 keyword search, guarded by factual grounding validators before streaming token responses via FastAPI SSE.',
    deliverables: [
      'Hybrid Retrieval: pgvector HNSW indexing + BM25 reciprocal rank fusion',
      'Fact Preservation: Context grounding guardrails preventing hallucinated outputs',
      'Stateful Multi-Agent: LangGraph orchestrator coordinating specialized sub-agents',
      'Streaming Engine: Sub-850ms time-to-first-token via non-blocking FastAPI SSE',
    ],
    nodes: [
      {
        step: '01',
        title: 'Document Ingestion & Chunking',
        detail: 'PDF, DOCX, and dockets parsed via PyMuPDF with semantic boundary chunking.',
        badge: 'Intake',
      },
      {
        step: '02',
        title: 'pgvector Hybrid Search (HNSW + BM25)',
        detail: 'Dense cosine similarity paired with sparse BM25 reciprocal rank fusion (RRF).',
        badge: 'Retrieval',
        highlight: true,
      },
      {
        step: '03',
        title: 'Grounding Guardrail Validation',
        detail: 'Context verification filter checks factual alignment (confidence >= 0.92).',
        badge: 'Defense',
      },
      {
        step: '04',
        title: 'FastAPI Streaming & Citations',
        detail: 'SSE token streaming engine with interactive clickable citation metadata.',
        badge: 'Delivery',
      },
    ],
    benchmarks: [
      { label: 'Retrieval Latency', value: '< 180ms' },
      { label: 'Grounding Score', value: '99.4%' },
      { label: 'Hallucination Rate', value: '0.0%' },
    ],
    codeFilename: 'rag_grounding_pipeline.py',
    codeSnippet: `class EnterpriseRAGPipeline:
    """Hybrid pgvector retrieval with deterministic grounding guardrails."""
    def __init__(self, db: DatabaseSession, guardrails: GroundingValidator):
        self.db = db
        self.guardrails = guardrails
        self.llm = ChatOpenAI(model="gpt-4o", streaming=True)

    async def query_with_grounding(self, query: str, tenant_id: str) -> AsyncGenerator:
        # 1. Hybrid Search: pgvector HNSW embeddings + BM25 reciprocal rank fusion
        chunks = await self.db.hybrid_search(
            query=query,
            tenant_id=tenant_id,
            vector_weight=0.7,
            bm25_weight=0.3,
            top_k=5
        )
        
        # 2. Strict grounding verification: Zero-hallucination guarantee
        verified_context = self.guardrails.verify_grounding(
            query=query, 
            chunks=chunks, 
            min_confidence=0.92
        )
        
        # 3. Stream citation-backed tokens via FastAPI SSE
        async for token in self.llm.astream_citations(query, verified_context):
            yield token.to_sse_format()`,
  },
  {
    id: 'distributed-backend',
    pillarNumber: '02',
    totalPillars: '03',
    badge: 'Backend Architecture · High-Throughput APIs',
    titlePrefix: 'Decoupled async pipelines with',
    italicWord: 'zero thread blocking',
    titleSuffix: 'under peak loads.',
    cardBg: 'bg-[#f0f9ff]',
    borderColor: 'border-[#bae6fd]',
    accentColor: 'text-[#0369a1]',
    iconBg: 'bg-[#e0f2fe]',
    iconType: 'server',
    problem:
      'Heavy OCR processing, web scraping, and PDF generation lock web threads if handled synchronously, causing 504 timeouts.',
    solution:
      'I architect decoupled asynchronous event pipelines where lightweight FastAPI gateways dispatch heavy computation to distributed Celery worker clusters managed through Redis message brokers.',
    deliverables: [
      'Async Gateways: Non-blocking FastAPI routers handling 10,000+ req/sec',
      'Distributed Task Queues: Celery + Redis workers for OCR, ETL, and scraping',
      'Database Optimization: PostgreSQL connection pools, indexes, and migrations',
      'Transaction Integrity: Atomic operations and idempotent API endpoints',
    ],
    nodes: [
      {
        step: '01',
        title: 'Concurrent Client Traffic',
        detail: 'REST and GraphQL gateways receiving thousands of concurrent enterprise requests.',
        badge: 'Gateways',
      },
      {
        step: '02',
        title: 'FastAPI Non-Blocking Intake',
        detail: 'Validates request payload and returns JobReceipt with tracking ID in < 8ms.',
        badge: 'API Core',
        highlight: true,
      },
      {
        step: '03',
        title: 'Redis In-Memory Message Broker',
        detail: 'Priority queues distribute tasks to available workers with persistence guarantees.',
        badge: 'Broker',
      },
      {
        step: '04',
        title: 'Celery Worker Cluster Fleet',
        detail: 'Multi-node compute workers process document OCR and ETL in parallel.',
        badge: 'Compute',
      },
    ],
    benchmarks: [
      { label: 'Throughput', value: '10,000+ req/s' },
      { label: 'Queue Overhead', value: '< 12ms' },
      { label: 'System Uptime', value: '99.99%' },
    ],
    codeFilename: 'async_task_dispatcher.py',
    codeSnippet: `@router.post("/jobs/process-etl", response_model=JobReceipt)
async def dispatch_etl_job(
    payload: ETLJobRequest,
    current_user: User = Depends(get_current_tenant_user)
) -> JobReceipt:
    """Non-blocking gateway: offload intensive ETL to Celery cluster."""
    # 1. Generate unique idempotent task token
    idempotency_key = generate_job_key(payload.url, current_user.tenant_id)
    
    # 2. Dispatch async payload to distributed Redis broker queue
    task = celery_app.send_task(
        "workers.document_etl_pipeline",
        kwargs={
            "document_url": payload.url,
            "tenant_id": current_user.tenant_id,
            "idempotency_key": idempotency_key
        },
        queue="high_priority",
        countdown=0
    )
    
    # 3. Return immediate receipt with tracking poll URL in < 8ms
    return JobReceipt(
        job_id=task.id,
        status=JobStatus.QUEUED,
        eta_seconds=12,
        status_url=f"/api/v1/jobs/{task.id}/status"
    )`,
  },
  {
    id: 'cloud-infrastructure',
    pillarNumber: '03',
    totalPillars: '03',
    badge: 'Cloud DevOps · AWS & DORA Compliance',
    titlePrefix: 'Containerized cloud infrastructure with',
    italicWord: 'zero deployment downtime',
    titleSuffix: 'and compliance.',
    cardBg: 'bg-[#fefce8]',
    borderColor: 'border-[#fef08a]',
    accentColor: 'text-[#854d0e]',
    iconBg: 'bg-[#fef08a]',
    iconType: 'cloud',
    problem:
      'Enterprise cloud deployments often face release downtime, manual drift, and complex European DORA compliance audits.',
    solution:
      'I configure containerized Docker microservices deployed onto multi-region AWS ECS Fargate with automated GitHub Actions CI/CD pipelines and built-in DORA compliance auditability.',
    deliverables: [
      'AWS Infrastructure: ECS Fargate, RDS PostgreSQL, and CloudFront CDN',
      'DORA RegTech: ICT contract mapping, risk assessments, and audit export',
      'CI/CD Workflows: Automated testing, vulnerability scans, and rolling releases',
      'Observability: CloudWatch metrics, structured JSON logging, and Sentry triage',
    ],
    nodes: [
      {
        step: '01',
        title: 'GitHub Actions CI/CD Pipeline',
        detail: 'Automated pytest suites, type checks, and Docker security vulnerability scans.',
        badge: 'CI / CD',
      },
      {
        step: '02',
        title: 'Immutable Image Registry (ECR)',
        detail: 'Digitally signed Docker container images tagged per commit hash for auditability.',
        badge: 'Artifacts',
      },
      {
        step: '03',
        title: 'AWS ECS Fargate Multi-AZ Deploy',
        detail: 'Zero-downtime rolling updates with health check validation and auto-rollback.',
        badge: 'Orchestration',
        highlight: true,
      },
      {
        step: '04',
        title: 'DORA Audit Trail & CloudWatch',
        detail: 'Continuous ICT vendor risk tracking and real-time observability dashboards.',
        badge: 'RegTech',
      },
    ],
    benchmarks: [
      { label: 'Deploy Cycle', value: '< 3 mins' },
      { label: 'Release Downtime', value: '0 Seconds' },
      { label: 'DORA Compliance', value: '100% Ready' },
    ],
    codeFilename: 'docker-compose.production.yml',
    codeSnippet: `version: "3.9"
services:
  api:
    image: \${AWS_ECR_REGISTRY}/enterprise-api:\${RELEASE_TAG}
    deploy:
      replicas: 4
      update_config:
        order: start-first     # Zero-downtime rolling deployment
        failure_action: rollback
        delay: 10s
      resources:
        limits: { cpus: '2.0', memory: 4096M }
    environment:
      - DATABASE_URL=\${RDS_POSTGRES_POOL_URL}
      - REDIS_BROKER_URL=\${ELASTICACHE_REDIS_URL}
    healthcheck:
      test: ["CMD-SHELL", "curl -f http://localhost:8000/healthz || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 3`,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'lexorbit',
    name: 'LexOrbit',
    tagline: 'LegalTech and AI Intelligence SaaS',
    category: 'AI & LLM',
    badge: 'Flagship AI SaaS',
    description: 'AI-powered legal research and intelligence platform for lawyers and corporate legal counsel. Built end-to-end from legal data ingestion and backend architecture to RAG, citation analytics, and production deployment.',
    whatIBuilt: [
      'AI legal research engine with citation-backed, hallucination-controlled answers',
      'RAG pipeline searching court opinions using OpenAI embeddings + PostgreSQL/pgvector',
      'Automated ETL pipeline ingesting case law via CourtListener API',
      'Judge analytics module and predictive case outcome modeling',
      'Background document extraction using Celery, Redis, PyMuPDF, and Tesseract OCR'
    ],
    metrics: 'Finds and synthesizes relevant case law in seconds vs. hours of manual docket searching',
    techStack: ['Python', 'Django DRF', 'React', 'Next.js', 'PostgreSQL', 'pgvector', 'Redis', 'Celery', 'OpenAI', 'RAG', 'Docker'],
    link: 'https://getlexorbit.com/',
    secondaryLink: 'https://dashboard.getlexorbit.com',
    featured: true
  },
  {
    id: 'panacomps',
    name: 'Panacomps',
    tagline: 'Real Estate Intelligence SaaS',
    category: 'Enterprise SaaS',
    badge: 'Data Intelligence',
    description: 'Real estate intelligence SaaS platform transforming fragmented public property records into structured, searchable, and verified market analytics across Panama City.',
    whatIBuilt: [
      'Full-stack architecture with Python ETL pipelines for data normalization and deduplication',
      'Structured 350+ buildings and complex property transaction datasets in PostgreSQL',
      'High-performance REST APIs with Django REST Framework and React.js analytics dashboards',
      'Integrated Stripe billing for recurring subscriptions and one-off valuation reports',
      'Customized Django Admin workflows for internal analyst data verification'
    ],
    metrics: 'Indexed 350+ building datasets, cutting property research time from hours to seconds',
    techStack: ['Python', 'Django DRF', 'React.js', 'PostgreSQL', 'Python ETL', 'Stripe', 'Docker'],
    link: 'https://www.panacomps.com/',
    featured: true
  },
  {
    id: 'optevo',
    name: 'Optevo WorkPods',
    tagline: 'Enterprise AI Knowledge Base Platform',
    category: 'AI & LLM',
    badge: 'Enterprise AI',
    description: 'AI-powered Knowledge Base integrated into the enterprise WorkPods platform, enabling teams to upload, index, and query internal SOPs and documents using semantic search.',
    whatIBuilt: [
      'Secure document upload, smart chunking, and metadata indexing for PDF, DOCX, and XLSX files',
      'OpenAI embeddings integration combined with Azure Cognitive Search for hybrid retrieval',
      'Context-aware RAG question answering with verified document citations',
      'Multi-tenant file validation, role-based workgroup filtering, and auto-reprocessing workflows',
      'Token-based authentication and end-to-end processing pipeline observability'
    ],
    metrics: 'Processes multi-format corporate documents in seconds with zero-hallucination fallback',
    techStack: ['Python', 'Flask', 'Azure OpenAI', 'Azure Cognitive Search', 'PostgreSQL', 'RAG', 'SQLAlchemy'],
    link: 'https://www.optevo.com/',
    secondaryLink: 'https://my.optevo.com/',
    featured: true
  },
  {
    id: 'payinnovate',
    name: 'PayInnovate',
    tagline: 'FinTech and DORA Compliance RegTech',
    category: 'Cloud & RegTech',
    badge: 'RegTech & FinTech',
    description: 'Enterprise RegTech SaaS helping European financial institutions manage compliance under the Digital Operational Resilience Act (DORA) and generate regulatory reports.',
    whatIBuilt: [
      'Backend APIs modeling complex entity networks: Companies, Business Functions, ICT Contracts, and Service Providers',
      'Function Reliance mapping connecting critical business operations to underlying third-party vendors',
      'Vendor Risk Assessments (VRA) and automated DORA reporting engine in formatted Excel outputs',
      'Strict data validation, country sensitivity rules, and enterprise audit logging'
    ],
    metrics: 'Replaces messy multi-spreadsheet compliance with an audit-ready, centralized SaaS workflow',
    techStack: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'Docker', 'AWS', 'Azure', 'DORA RegTech'],
    link: 'https://payinnovate.eu/',
    featured: true
  },
  {
    id: 'veriport',
    name: 'Veriport',
    tagline: 'Health & Safety Compliance Platform',
    category: 'Cloud & RegTech',
    badge: 'HealthTech Compliance',
    description: 'Automated drug and alcohol testing compliance platform managing lab results, specimen custody, and Medical Review Officer (MRO) workflows in safety-sensitive industries.',
    whatIBuilt: [
      'Automated AWS CI/CD pipelines (CodePipeline, CodeBuild) for frictionless zero-downtime releases',
      'Architected AWS cloud infrastructure: EC2, S3, RDS PostgreSQL, CloudFront, and CloudWatch',
      'Resolved frontend-backend data synchronization bottlenecks between React and Django APIs',
      'Hardened security and role-based permissions for sensitive medical and regulatory test records'
    ],
    metrics: 'Ensures 99.9% uptime and bulletproof audit trails for regulated health operations',
    techStack: ['AWS (EC2, S3, RDS, CloudFront)', 'Python', 'Django', 'React.js', 'PostgreSQL', 'CI/CD'],
    link: 'https://veriport.ca/',
    featured: true
  },
  {
    id: 'conversent',
    name: 'Conversent AI',
    tagline: 'Voice AI & ML Dataset Engineering Platform',
    category: 'AI & LLM',
    badge: 'Speech AI & ML',
    description: 'AI data platform converting raw audio/video and subtitle data into clean, speaker-aligned, ML-ready datasets for Whisper fine-tuning, TTS, and speaker diarization.',
    whatIBuilt: [
      'Automated audio extraction and normalization pipelines from video files using FFmpeg',
      '.ass subtitle parsing and speaker-to-dialogue alignment algorithms',
      'Automated dataset formatting and Train/Validation/Test splitting for machine learning pipelines',
      'Direct integration with Hugging Face Hub and AWS S3 for automated dataset distribution'
    ],
    metrics: 'Reduces manual speech dataset annotation and alignment time by 80%+',
    techStack: ['Python', 'Django', 'FFmpeg', 'Hugging Face Hub', 'AWS S3', 'Pandas', 'PostgreSQL'],
    link: 'https://www.conversent.io/',
    secondaryLink: 'https://www.artfair.ai/',
    featured: false
  },
  {
    id: 'synctoolo',
    name: 'Synctoolo',
    tagline: 'AI Tools & Productivity SaaS Platform',
    category: 'Productivity',
    badge: 'Organic Growth SaaS',
    description: 'Collection of 25+ browser-based AI, developer, and productivity tools designed for zero-friction usage without requiring signups or software installation.',
    whatIBuilt: [
      'Complete platform built in Next.js, React, TypeScript, and Tailwind CSS',
      'Server-side AI endpoints integrating Google Gemini with OpenAI fallback and Zod schema validation',
      'SEO architecture with dynamic OpenGraph, structured JSON-LD schemas, and automated sitemaps',
      'Engineered 25+ tools: AI Content Generator, Summarizer, Resume Builder, and Code Utilities'
    ],
    metrics: '25+ live tools built for organic search volume, fast time-to-first-byte, and 100% free uptime',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Google Gemini', 'OpenAI', 'Zod', 'Vercel'],
    link: 'https://www.synctoolo.com/',
    featured: false
  },
  {
    id: 'where-is-kevin',
    name: 'Where is Kevin?',
    tagline: 'AI Conference & Networking Platform',
    category: 'AI & LLM',
    badge: 'Event Intelligence',
    description: 'AI platform that optimizes conference trips by scraping event data, discovering high-value side gatherings, and extracting business card leads with OCR.',
    whatIBuilt: [
      'Backend services and APIs built with FastAPI and LangChain for conversational recommendations',
      'Automated web scrapers collecting schedule, speaker, and venue data across conferences',
      'Business card scanner powered by Google Cloud Vision OCR with contact data enrichment',
      'Lead management workflow with stages, tags, opportunity sizes, and company-level access isolation'
    ],
    metrics: 'Turns unorganized conference itineraries into structured networking schedules and CRM leads',
    techStack: ['Python', 'FastAPI', 'LangChain', 'Google Cloud Vision', 'PostgreSQL', 'Web Scraping'],
    link: 'https://whereiskevin.com/',
    featured: false
  },
  {
    id: 'expensesyncledger',
    name: 'ExpenseSyncLedger',
    tagline: 'AI Personal Finance & Expense SaaS',
    category: 'Enterprise SaaS',
    badge: 'FinTech & AI',
    description: 'Modern expense management SaaS with Supabase Row Level Security, conversational expense entry, and AI-assisted receipt extraction.',
    whatIBuilt: [
      'Next.js App Router application with complete financial CRUD, categories, and multi-currency support',
      'Supabase Auth and Row Level Security (RLS) ensuring strict isolation of personal financial records',
      'AI receipt extraction via Gemini API extracting amounts, dates, merchants, and categories',
      'Interactive spending analytics, budget alerts, and CSV/JSON reporting views'
    ],
    metrics: 'Enables conversational text and receipt-photo expense logging in under 3 seconds',
    techStack: ['Next.js App Router', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Gemini API', 'Recharts'],
    link: 'https://expensesyncpk.lovable.app/',
    featured: false
  },
  {
    id: 'trueinnings',
    name: 'TrueInnings',
    tagline: 'AI Resume & ATS Optimization SaaS',
    category: 'Productivity',
    badge: 'AI CareerTech',
    description: 'AI career optimization platform that tailors resumes to target job descriptions while preserving authentic candidate facts and history.',
    whatIBuilt: [
      'Resume parsing engine extracting work history, dates, skills, and education from PDF/DOCX',
      'Job description keyword extraction with ATS score calculations and visual diff comparison',
      'Fact-preservation AI prompting preventing hallucinations or fake credentials in rewrites',
      'Professional ATS-optimized PDF generation and interactive 5-step optimization wizard'
    ],
    metrics: 'Helps candidates achieve 90%+ ATS match rates with zero fabrication risk',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'LLM APIs', 'PDF Processing', 'NLP'],
    link: 'https://trueinnings-three.vercel.app/',
    featured: false
  },
  {
    id: 'hyrflect',
    name: 'Hyrflect',
    tagline: 'Developer Interview Prep & CareerTech SaaS',
    category: 'Productivity',
    badge: 'Developer Tools',
    description: 'Curated technical interview platform with 500+ questions, detailed code solutions, Kanban job tracker, and developer study collections.',
    whatIBuilt: [
      'Full-stack platform built with Next.js, Node.js, and Supabase PostgreSQL',
      '500+ curated technical questions categorized across Python, Django, React, and System Design',
      'Interactive Kanban board managing job applications from Applied to Offer',
      'User study playlists and bookmarking collections for structured technical preparation'
    ],
    metrics: 'Comprehensive interview prep library used by engineers preparing for senior technical loops',
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    link: 'https://hyrflect.netlify.app/',
    featured: false
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI, LLM & Agent Engineering',
    description: 'Production-ready generative AI, context retrieval, and agent orchestration.',
    skills: [
      'LangChain & LangGraph',
      'RAG & Hybrid Search (pgvector)',
      'Autonomous AI Agents',
      'Model Context Protocol (MCP)',
      'OpenAI, Claude, Gemini & Llama',
      'Context & Memory Management',
      'Prompt Optimization & Grounding',
      'n8n Workflow Automation',
      'Document Intelligence (OCR, Parsing)'
    ]
  },
  {
    title: 'Backend & Distributed Systems',
    description: 'Scalable APIs, high-throughput microservices, and asynchronous architectures.',
    skills: [
      'Python (Advanced)',
      'FastAPI & Pydantic',
      'Django & Django REST Framework',
      'Flask & RESTful Architecture',
      'Celery & Redis Background Tasks',
      'Event-Driven Systems & Kafka',
      'Microservices & Auth (JWT, OAuth)',
      'Web Scraping & Data Pipelines'
    ]
  },
  {
    title: 'Databases & Data Engineering',
    description: 'Robust schemas, vector indexing, query optimization, and migrations.',
    skills: [
      'PostgreSQL & pgvector',
      'Supabase & Row Level Security',
      'MySQL & SQLite',
      'Redis Caching & PubSub',
      'AWS RDS & DynamoDB',
      'ETL Pipelines (Pandas, NumPy)',
      'Query Optimization & Indexing'
    ]
  },
  {
    title: 'DevOps, Cloud & Infrastructure',
    description: 'Reliable deployments, containerization, monitoring, and compliance.',
    skills: [
      'AWS (EC2, S3, RDS, CloudFront, ECS)',
      'Google Cloud Platform & Azure',
      'Docker & Containerized Services',
      'CI/CD (GitHub Actions, CodePipeline)',
      'DORA Compliance & RegTech Standards',
      'CloudWatch, Monitoring & Logging',
      'Production Debugging & Observability'
    ]
  },
  {
    title: 'Modern Frontend & UI Architecture',
    description: 'Fast, responsive, type-safe interfaces built with design systems.',
    skills: [
      'Next.js 14 (App & Pages Router)',
      'React.js & TypeScript',
      'Tailwind CSS & shadcn/ui',
      'Framer Motion & Lenis Scrolling',
      'State Management (Zustand, Context)',
      'Responsive & Accessible UI/UX',
      'Performance Optimization & Core Web Vitals'
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Senior Python Developer',
    company: 'MentorSol',
    period: 'Oct 2024 – Present',
    location: 'Remote',
    highlights: [
      'Architect and deploy high-performance Python backends and AI-powered microservices for international clients.',
      'Lead technical decision-making on database schema designs, vector indexing with pgvector, and API caching strategies.',
      'Mentor engineers on production code quality, asynchronous programming, and clean architectural principles.'
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'LangChain', 'Docker', 'AWS']
  },
  {
    role: 'Senior Python Consultant',
    company: 'Aegasis Labs',
    period: 'Sep 2024 – Aug 2025',
    location: 'Remote',
    highlights: [
      'Engineered architectural optimizations and refactored backend pipelines, improving overall code throughput by 30%.',
      'Collaborated with product and data science teams to deliver robust machine learning integration layers and automated reporting.',
      'Conducted security, performance, and scalability audits on client backends prior to production launch.'
    ],
    tech: ['Python', 'Django', 'pgvector', 'Redis', 'ML Pipelines', 'REST APIs']
  },
  {
    role: 'Full-Stack Developer',
    company: 'Samaritan Technologies',
    period: 'Oct 2021 – Oct 2024',
    location: 'Lahore, Pakistan',
    highlights: [
      'Delivered multiple enterprise web platforms using Django REST Framework backends and React.js frontend interfaces.',
      'Engineered complex SQL/PostgreSQL databases, automated background processing, and third-party API payment gateways.',
      'Maintained 99.9% uptime across production applications through structured CI/CD workflows and automated health checks.'
    ],
    tech: ['Django', 'React.js', 'PostgreSQL', 'Docker', 'Stripe', 'Redis']
  },
  {
    role: 'Software Engineer',
    company: 'DexterSol',
    period: 'Jul 2018 – Oct 2021',
    location: 'Lahore, Pakistan',
    highlights: [
      'Built and maintained backend architectures using Django and Flask for client applications.',
      'Designed responsive frontend interfaces with modern JavaScript, HTML5, and CSS3.',
      'Participated in daily agile standups, sprint estimation, code reviews, and production bug triage.'
    ],
    tech: ['Python', 'Django', 'Flask', 'JavaScript', 'MySQL', 'Bootstrap']
  }
];

export const EDUCATION = {
  institution: 'The Superior University, Lahore',
  degree: 'Bachelor of Science in Computer Science',
  period: 'Jun 2017 – Jun 2021',
  details: 'CGPA 3.0 / 4.0 · Grade A · Active member of Google Developer Student Clubs (GDSC) & ACM Student Chapter.'
};

export interface Testimonial {
  name: string;
  role: string;
  category: 'Founders' | 'Technical Leaders' | 'Product Leaders';
  project: string;
  projectDomain: string;
  feedback: string;
  deliverable: string;
  verificationBadge: string;
  avatarColor: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Flavio',
    role: 'Founder & CEO, Panacomps',
    category: 'Founders',
    project: 'Panacomps',
    projectDomain: 'Real Estate Intelligence SaaS',
    feedback:
      'Working with Rehmat was an exceptional experience. He architected our Python ETL pipelines from scratch and structured hundreds of complex building datasets without a hitch. Timely, professional, and delivered outstanding production results for our analytics platform.',
    deliverable: 'Full-Stack Architecture & 350+ Building Dataset Normalization',
    verificationBadge: 'Verified Founder Endorsement',
    avatarColor: 'bg-[#ecfdf5] text-[#064e3b] border-[#a7f3d0]',
  },
  {
    name: 'Devis',
    role: 'Managing Director, PayInnovate',
    category: 'Founders',
    project: 'PayInnovate',
    projectDomain: 'FinTech & European DORA RegTech',
    feedback:
      'Rehmat is a true systems architect. The quality of backend architectural work delivered was top-notch, and his attention to detail modeling complex European DORA compliance networks was invaluable. Highly recommended for mission-critical enterprise systems.',
    deliverable: 'FastAPI Backend & Automated DORA Compliance Mapping Engine',
    verificationBadge: 'Verified Executive Endorsement',
    avatarColor: 'bg-[#f5f3ff] text-[#6b21a8] border-[#ddd6fe]',
  },
  {
    name: 'Sarah K.',
    role: 'Lead Product Manager, Optevo WorkPods',
    category: 'Product Leaders',
    project: 'Optevo WorkPods',
    projectDomain: 'Enterprise AI Knowledge Base',
    feedback:
      'Rehmat engineered our enterprise AI semantic search from the ground up using pgvector and OpenAI embeddings. He communicated clearly throughout every sprint and shipped a zero-hallucination solution that genuinely impressed our executive board.',
    deliverable: 'Hybrid Search Engine, Chunking Pipelines & Context Grounding',
    verificationBadge: 'Verified Product Endorsement',
    avatarColor: 'bg-[#f0f9ff] text-[#0369a1] border-[#bae6fd]',
  },
  {
    name: 'James T.',
    role: 'CTO, Enterprise SaaS Group',
    category: 'Technical Leaders',
    project: 'Distributed Microservices',
    projectDomain: 'High-Throughput APIs & Queues',
    feedback:
      'We needed a senior full-stack engineer who could hit the ground running. Rehmat mastered our complex Django and React codebase within days, decoupled our blocking tasks with Celery and Redis, and shipped critical features ahead of schedule.',
    deliverable: '10k+ req/sec Decoupled Task Pipeline & PostgreSQL Optimization',
    verificationBadge: 'Verified CTO Reference',
    avatarColor: 'bg-[#ecfdf5] text-[#064e3b] border-[#a7f3d0]',
  },
  {
    name: 'Layla M.',
    role: 'HealthTech Founder, Veriport',
    category: 'Founders',
    project: 'Veriport',
    projectDomain: 'Regulated Health & Specimen Tracking',
    feedback:
      'From Django backend APIs to responsive React interfaces and AWS cloud infrastructure with zero-downtime CI/CD, Rehmat handled everything end-to-end. Clean modular code, proactive communication, and zero micromanagement needed.',
    deliverable: 'AWS Infrastructure, CI/CD Pipelines & Secure MRO Workflows',
    verificationBadge: 'Verified Founder Reference',
    avatarColor: 'bg-[#fefce8] text-[#854d0e] border-[#fef08a]',
  },
  {
    name: 'Marcus R.',
    role: 'AI Engineering Lead',
    category: 'Technical Leaders',
    project: 'Autonomous Agents',
    projectDomain: 'LangGraph Multi-Agent Swarms',
    feedback:
      'Our multi-agent system was an intricate challenge. Rehmat navigated the stateful orchestration logic with deep domain expertise, implemented strict output guardrails, and delivered a production-ready solution well before our launch milestone.',
    deliverable: 'LangChain & LangGraph Stateful Multi-Agent Orchestrator',
    verificationBadge: 'Verified Technical Reference',
    avatarColor: 'bg-[#fff1f2] text-[#9f1239] border-[#fecdd3]',
  },
];

