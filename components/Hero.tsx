'use client';
import { useState } from 'react';
import { ArrowRight, FileText, Check, Copy, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, CORE_METRICS } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#f8fafc]">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex"
          >
            <div className="pill-badge pill-green shadow-sm text-xs font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#15803d] animate-pulse" />
              <span>Senior Full-Stack AI Engineer with 8+ Years Hands-On Experience</span>
            </div>
          </motion.div>

          {/* High-Contrast Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="display-title text-[#0f172a]"
          >
            Building production AI systems with{' '}
            <span className="font-serif-italic font-normal text-[#064e3b] underline decoration-[#064e3b]/30 decoration-2 underline-offset-8">
              architectural rigor
            </span>{' '}
            and clean code.
          </motion.h1>

          {/* High-Contrast Body Copy (18px, font-medium, Slate-700) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#334155] max-w-3xl mx-auto leading-relaxed font-normal"
          >
            I architect and ship full-lifecycle software from <strong className="font-semibold text-[#0f172a]">RAG retrieval pipelines</strong>, scalable <strong className="font-semibold text-[#0f172a]">FastAPI and Django backends</strong> to autonomous agent workflows and modern Next.js web applications.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
          >
            <button
              onClick={() => scrollToSection('#features')}
              className="btn-forest text-sm font-semibold"
            >
              <span>Explore Selected Work</span>
              <ArrowRight size={16} />
            </button>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white text-sm font-semibold"
            >
              <FileText size={16} />
              <span>Download CV</span>
              <ArrowUpRight size={14} className="text-[#334155]" />
            </a>

            <button
              onClick={copyEmail}
              className="btn-white font-mono text-xs font-semibold"
              title="Click to copy email address"
            >
              {copied ? <Check size={14} className="text-[#15803d]" /> : <Copy size={14} />}
              <span>{copied ? 'Copied: raorehmat11@gmail.com' : PERSONAL_INFO.email}</span>
            </button>
          </motion.div>

          {/* High-Contrast Stat Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {CORE_METRICS.map((m) => (
              <div
                key={m.label}
                className="bg-white border-2 border-[#cbd5e1] rounded-2xl p-4 shadow-sm text-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] font-mono">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm text-[#334155] font-semibold mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
