import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EducationSection() {
    return (
        <section id="education" className="section-padding bg-white dark:bg-slate-800/30">
            <div className="section-container">
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Education</h2>
                    <p className="section-subtitle">Academic foundation in computer science.</p>
                </motion.div>

                <motion.div
                    className="max-w-2xl"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
                >
                    <div className="card flex gap-5">
                        <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <GraduationCap size={20} />
                        </div>
                        <div className="space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                                        The Superior University, Lahore
                                    </h3>
                                    <p className="text-sky-600 dark:text-sky-400 text-sm font-semibold mt-0.5">
                                        Bachelor of Science in Computer Science
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded-full font-medium whitespace-nowrap">
                                        Jun 2017 – Jun 2021
                                    </span>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 font-medium">CGPA 3.0 / 4.0 · Grade A</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-1">
                                {['Google Developer Student Clubs (GDSC)', 'ACM Student Chapter', 'Coding Club & Hackathons'].map((a) => (
                                    <span key={a} className="chip text-xs">{a}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
