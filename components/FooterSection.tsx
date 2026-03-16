import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const socials = [
    { icon: Github, href: 'https://github.com/rehmat11872', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rehmat-qadeer/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/pythondevloper9', label: 'Twitter/X' },
];

export default function FooterSection() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="section-container py-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        © {new Date().getFullYear()} Rehmat Qadeer. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                            >
                                <Icon size={18} />
                            </a>
                        ))}

                        <button
                            onClick={scrollTop}
                            className="ml-2 p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-300 dark:hover:border-sky-700 transition-all"
                            aria-label="Back to top"
                        >
                            <ArrowUp size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
