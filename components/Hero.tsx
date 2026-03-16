import { ArrowRight, ChevronDown, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const RESUME_URL = 'https://drive.google.com/file/d/1HTkcbw9Nj_rPsGfKU15peuhjNTjNr0i8/view?usp=sharing';

const techStack = [
    'Python', 'Django', 'FastAPI', 'React', 'Next.js',
    'TypeScript', 'AWS', 'Docker', 'OpenAI', 'LangChain',
    'PostgreSQL', 'Kubernetes',
];

const trustMetrics = [
    { value: '8+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' },
];

export default function Hero() {
    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center pt-16 bg-slate-50 dark:bg-slate-900 overflow-hidden">
            {/* Subtle background grid */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(to right, #0ea5e9 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Glow blobs */}
            <div className="absolute top-1/4 -left-32 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="section-container w-full py-20 sm:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 text-xs font-semibold"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                            Full-Stack · AI · Cloud
                        </motion.div>

                        {/* H1 */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                                I Build Full-Stack Products{' '}
                                <span className="text-sky-500 dark:text-sky-400">Powered by AI</span>{' '}
                                &amp; Cloud
                            </h1>
                            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                                Python/Django · React/Next.js · AWS, delivering production-grade web apps,
                                AI integrations, and automation workflows for startups and enterprises.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3">
                            <motion.button
                                onClick={scrollToContact}
                                className="btn-primary text-sm px-6 py-3"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Start a Project
                                <ArrowRight size={16} />
                            </motion.button>
                            <motion.button
                                onClick={scrollToProjects}
                                className="btn-secondary text-sm px-6 py-3"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                View My Work
                            </motion.button>
                            <motion.a
                                href={RESUME_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary text-sm px-6 py-3 inline-flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <FileText size={16} />
                                Resume
                            </motion.a>
                        </div>

                        {/* Trust Metrics */}
                        <motion.div
                            className="flex flex-wrap gap-6 pt-2 border-t border-slate-200 dark:border-slate-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            {trustMetrics.map((m) => (
                                <div key={m.label}>
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{m.value}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{m.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Tech Stack Grid */}
                    <motion.div
                        className="hidden lg:block"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                    >
                        <div className="relative">
                            <div className="grid grid-cols-3 gap-3">
                                {techStack.map((tech, i) => (
                                    <motion.div
                                        key={tech}
                                        className="flex items-center justify-center p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-sky-300 dark:hover:border-sky-700 hover:shadow-md transition-all duration-200 group"
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                                        whileHover={{ y: -3, scale: 1.04 }}
                                    >
                                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors text-center">
                                            {tech}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                            {/* Decorative corners */}
                            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-sky-400 opacity-40" />
                            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-sky-400 opacity-40" />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                >
                    <ChevronDown size={20} />
                </motion.div>
            </div>
        </section>
    );
}
