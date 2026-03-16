import { motion } from 'framer-motion';

const experiences = [
    {
        role: 'Senior Python Developer',
        company: 'MentorSol',
        date: 'Oct 2024 – Aug 2025',
        bullets: [
            'Designed and deployed scalable Python applications leveraging ML and cloud services.',
            'Led architecture decisions for data-intensive pipelines and API performance tuning.',
            'Collaborated with cross-functional teams to ship features in fast-paced sprints.',
        ],
    },
    {
        role: 'Senior Python Consultant',
        company: 'Aegasis Labs',
        date: 'Sep 2024 – Jul 2025',
        bullets: [
            'Improved codebase efficiency by 30% through targeted optimization and refactoring.',
            'Applied ML and data analysis to enhance project outcomes and reporting accuracy.',
            'Partnered with product and data teams to deliver high-quality, maintainable solutions.',
        ],
    },
    {
        role: 'Full-Stack Developer',
        company: 'Samaritan Technologies',
        date: 'Oct 2021 – Oct 2024',
        bullets: [
            'Built and maintained multiple production web apps using Django and React.js.',
            'Designed RESTful APIs and integrated third-party services across projects.',
            'Worked with PostgreSQL, MySQL, and SQLite across diverse client requirements.',
        ],
    },
    {
        role: 'Software Engineer',
        company: 'DexterSol',
        date: 'Jul 2018 – Oct 2021',
        bullets: [
            'Started career building backend systems with Django and Flask.',
            'Developed frontend interfaces using React.js, HTML, CSS, and Bootstrap.',
            'Gained foundational experience in full-stack delivery and client collaboration.',
        ],
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-900">
            <div className="section-container">
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">8+ years building production software across startups and enterprises.</p>
                </motion.div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-700" />

                    <div className="space-y-10">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                className="relative pl-10"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.5, ease: 'easeOut' }}
                            >
                                {/* Dot */}
                                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-sky-500 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-sky-500" />
                                </div>

                                <div className="card !py-5 !px-5">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white text-base">{exp.role}</h3>
                                            <p className="text-sky-600 dark:text-sky-400 text-sm font-semibold">{exp.company}</p>
                                        </div>
                                        <span className="text-xs text-slate-400 dark:text-slate-500 font-medium bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded-full whitespace-nowrap">
                                            {exp.date}
                                        </span>
                                    </div>
                                    <ul className="space-y-1.5">
                                        {exp.bullets.map((b) => (
                                            <li key={b} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
