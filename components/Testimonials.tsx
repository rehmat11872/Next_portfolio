'use client';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Flavio',
        title: 'Client',
        feedback:
            'Working with Rehmat was a pleasure. He not only met our expectations but exceeded them, timely, professional, and delivered outstanding results.',
        stars: 5,
    },
    {
        name: 'Devis',
        title: 'Client',
        feedback:
            'Rehmat is a true professional. The quality of work delivered was top-notch, and the attention to detail was impressive. We look forward to collaborating on future projects.',
        stars: 5,
    },
    {
        name: 'Sarah K.',
        title: 'Product Manager',
        feedback:
            'Rehmat built our AI-powered search feature from scratch. He communicated throughout and delivered something that genuinely wowed our users. Highly recommended.',
        stars: 5,
    },
    {
        name: 'James T.',
        title: 'CTO, SaaS Startup',
        feedback:
            'We needed a senior full-stack developer fast. Rehmat came in, understood the codebase within days, and shipped critical features on time. Exceptional engineer.',
        stars: 5,
    },
    {
        name: 'Layla M.',
        title: 'Startup Founder',
        feedback:
            'From Django backend to React frontend and cloud deployment, Rehmat handled everything end to end. Clean code, great communication, and zero micromanagement needed.',
        stars: 5,
    },
    {
        name: 'Marcus R.',
        title: 'Engineering Lead',
        feedback:
            'Our LangChain-based agent system was a complex build. Rehmat navigated the architecture confidently and delivered a robust solution well before deadline. Brilliant work.',
        stars: 5,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
};

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding bg-slate-50 dark:bg-slate-900">
            <div className="section-container">
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">What Clients Say</h2>
                    <p className="section-subtitle">Feedback from people I have built with.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="card space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <Quote size={20} className="text-sky-400 dark:text-sky-500 opacity-60" />
                            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                &ldquo;{t.feedback}&rdquo;
                            </p>
                            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700">
                                <div>
                                    <p className="font-semibold text-slate-900 dark:text-white text-sm">{t.name}</p>
                                    <p className="text-xs text-slate-400 dark:text-slate-500">{t.title}</p>
                                </div>
                                <div className="flex gap-0.5">
                                    {Array.from({ length: t.stars }).map((_, idx) => (
                                        <svg key={idx} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
