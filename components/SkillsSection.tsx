import { motion } from 'framer-motion';

const categories = [
    {
        label: 'AI & Automation',
        chips: ['OpenAI', 'LangChain', 'Python', 'TensorFlow', 'RAG', 'Vector DBs', 'AI Agents', 'n8n', 'Zapier', 'Gumloop'],
    },
    {
        label: 'Backend & Cloud',
        chips: ['Django', 'FastAPI', 'Flask', 'Node.js', 'AWS EC2', 'AWS Lambda', 'AWS ECS', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Supabase', 'CI/CD', 'Redis'],
    },
    {
        label: 'Frontend',
        chips: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-900">
            <div className="section-container">
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Tech Stack</h2>
                    <p className="section-subtitle">Tools and technologies I use to build, deploy, and scale.</p>
                </motion.div>

                <div className="space-y-8">
                    {categories.map(({ label, chips }, i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.45, ease: 'easeOut' }}
                        >
                            <h3 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                                {label}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {chips.map((chip) => (
                                    <span key={chip} className="chip hover:border-sky-300 dark:hover:border-sky-700 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-default">
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
