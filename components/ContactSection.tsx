'use client';
import { useState } from 'react';
import { Send, MapPin, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// FREE email notifications via Formspree — go to https://formspree.io, create a free account,
// create a new form, and replace the ID below with your own form ID.
// Submissions send directly to your email with zero backend code.
const FORMSPREE_ID = 'xgvkydbp'; // replace this with your Formspree form ID

export default function ContactSection() {
    const [form, setForm] = useState({ email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ email: form.email, message: form.message }),
            });

            if (res.ok) {
                setStatus('sent');
                setForm({ email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <section id="contact" className="section-padding bg-white dark:bg-slate-800/30">
            <div className="section-container">
                <motion.div
                    className="max-w-2xl mx-auto text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Ready to Build Something?</h2>
                    <p className="section-subtitle mt-3 text-base">
                        I&apos;m currently available for new projects. Let&apos;s talk about what you&apos;re building.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                        <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                            <MapPin size={13} /> Lahore, Pakistan · Remote / Hybrid
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                            <Clock size={13} /> Typically replies within 24 hours
                        </span>
                    </div>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="max-w-lg mx-auto space-y-4"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Your Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="you@company.com"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 focus:border-transparent transition-all"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="Tell me about your project..."
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 focus:border-transparent transition-all resize-none"
                        />
                    </div>

                    {/* Success message */}
                    {status === 'sent' && (
                        <motion.div
                            className="flex items-center gap-2 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-sm"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <CheckCircle size={16} />
                            Message sent! I will get back to you within 24 hours.
                        </motion.div>
                    )}

                    {status === 'error' && (
                        <p className="text-sm text-red-500 dark:text-red-400">
                            Something went wrong. Please try again or email rehmat11872@gmail.com directly.
                        </p>
                    )}

                    <motion.button
                        type="submit"
                        disabled={status === 'sending' || status === 'sent'}
                        className="btn-primary w-full justify-center py-3 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                        whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
                        {status === 'idle' && <Send size={14} />}
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}
