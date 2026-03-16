import { Brain, Server, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: Brain,
        title: 'AI & Automation',
        desc: 'Building intelligent systems that solve real business problems.',
        bullets: [
            'RAG chatbots with semantic search (OpenAI, LangChain)',
            'Multi-agent workflow automation with n8n & Zapier',
            'Custom NLP, recommendation, and document processing pipelines',
        ],
    },
    {
        icon: Server,
        title: 'Backend & Cloud',
        desc: 'Scalable, secure infrastructure designed for production.',
        bullets: [
            'High-performance APIs with Django, FastAPI, Node.js',
            'Cloud architecture on AWS: EC2, Lambda, ECS, RDS',
            'CI/CD, Docker, Kubernetes, and database optimization',
        ],
    },
    {
        icon: Layout,
        title: 'Frontend & Product UI',
        desc: 'Fast, accessible interfaces users actually enjoy.',
        bullets: [
            'Responsive web apps with React and Next.js',
            'Type-safe development with TypeScript',
            'Pixel-perfect implementation from design files',
        ],
    },
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const card = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
    return (
        <section id="services" className="section-padding bg-white dark:bg-slate-800/30">
            <div className="section-container">
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">What I Do</h2>
                    <p className="section-subtitle">
                        End-to-end engineering: from intelligent backend systems to polished user interfaces.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map(({ icon: Icon, title, desc, bullets }) => (
                        <motion.div
                            key={title}
                            variants={card}
                            className="card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                                <Icon size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{title}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{desc}</p>
                            <ul className="space-y-2">
                                {bullets.map((b) => (
                                    <li key={b} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
