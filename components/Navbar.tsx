'use client';
import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';

const RESUME_URL = 'https://drive.google.com/file/d/1HTkcbw9Nj_rPsGfKU15peuhjNTjNr0i8/view?usp=sharing';

const navLinks = [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [dark, setDark] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        setDark(document.documentElement.classList.contains('dark') || saved === 'dark');

        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setDark(false);
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setDark(true);
        }
    };

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#"
                        className="font-bold text-lg text-slate-900 dark:text-white tracking-tight hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                    >
                        Rehmat Qadeer
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className="text-sm text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 font-medium transition-colors cursor-pointer"
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Available for Hire
                        </span>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                            aria-label="Toggle theme"
                        >
                            {dark ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                        <a
                            href={RESUME_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-xs px-4 py-2 inline-flex items-center gap-1.5"
                        >
                            <FileText size={14} />
                            Resume
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                            className="btn-primary text-xs px-4 py-2"
                        >
                            Start a Project
                        </a>
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex md:hidden items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                        >
                            {dark ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-left px-3 py-2.5 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-sky-500 dark:hover:text-sky-400 font-medium transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <div className="pt-3 px-3 flex flex-col gap-2">
                                <span className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    Available for Hire
                                </span>
                                <a
                                    href={RESUME_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary w-fit text-xs inline-flex items-center gap-1.5"
                                >
                                    <FileText size={14} />
                                    Resume
                                </a>
                                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="btn-primary w-fit text-xs">
                                    Start a Project
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
