'use client';
import { useState } from 'react';
import {
  Github,
  Linkedin,
  FileText,
  ArrowUp,
  Mail,
  Copy,
  Check,
  Activity,
  Terminal,
  Cpu,
  Layers,
  ShieldCheck,
  Globe2,
  ArrowUpRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function FooterSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070b12] text-slate-400 border-t border-slate-800/80 pt-20 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Top Control Deck: System Status & Quick Top Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#064e3b] text-white flex items-center justify-center font-bold text-sm shadow-md shadow-emerald-950/40 border border-emerald-500/30">
                RQ
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  Senior Full-Stack AI Engineer &amp; Solutions Architect
                </p>
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-white/10" />

            {/* Live Operational System Telemetry Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEM STATUS: OPERATIONAL · 99.99% PRODUCTION SLA</span>
            </div>
          </div>

          {/* Back to Top Action Button */}
          <button
            onClick={scrollToTop}
            className="self-start lg:self-auto flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-bold transition-all shadow-sm hover:border-white/30 group"
          >
            <span>Back to top</span>
            <ArrowUp size={13} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Multi-Column Production Directory (Half-Page Architecture Deck) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 py-14 border-b border-white/10">
          {/* Column 1: Core Focus & Engineering Methodology (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              <Terminal size={14} />
              <span>Architecture &amp; Engineering Disciplines</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Specialized in production-grade RAG pipelines, autonomous multi-agent orchestration, high-throughput Python microservices, and regulatory cloud infrastructure.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Deterministic RAG · pgvector HNSW &amp; BM25 Fusion</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>LangGraph &amp; LangChain Stateful Multi-Agent Swarms</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Asynchronous FastAPI, Django &amp; Distributed Celery Tasks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Multi-Region AWS ECS Fargate &amp; DORA Compliance RegTech</span>
              </div>
            </div>
          </div>

          {/* Column 2: Flagship Production Platforms (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              <Layers size={14} className="text-emerald-400" />
              <span>Shipped Enterprise Platforms</span>
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://getlexorbit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-emerald-400 transition-colors group"
                >
                  <span>LexOrbit (LegalTech AI SaaS)</span>
                  <ArrowUpRight size={12} className="text-slate-500 group-hover:text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.panacomps.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-emerald-400 transition-colors group"
                >
                  <span>Panacomps (Real Estate Intelligence)</span>
                  <ArrowUpRight size={12} className="text-slate-500 group-hover:text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.optevo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-emerald-400 transition-colors group"
                >
                  <span>Optevo WorkPods (Enterprise RAG)</span>
                  <ArrowUpRight size={12} className="text-slate-500 group-hover:text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://payinnovate.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-emerald-400 transition-colors group"
                >
                  <span>PayInnovate (DORA RegTech Platform)</span>
                  <ArrowUpRight size={12} className="text-slate-500 group-hover:text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://veriport.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-emerald-400 transition-colors group"
                >
                  <span>Veriport (Health &amp; KYC Compliance)</span>
                  <ArrowUpRight size={12} className="text-slate-500 group-hover:text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.conversent.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-emerald-400 transition-colors group"
                >
                  <span>Conversent AI (Speech AI Platform)</span>
                  <ArrowUpRight size={12} className="text-slate-500 group-hover:text-emerald-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation Sitemap (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              <Cpu size={14} className="text-emerald-400" />
              <span>Navigation</span>
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollToSection('#features')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Flagship Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#architecture')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Architecture &amp; Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#case-studies')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Full Portfolio Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#capabilities')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Technical Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#experience')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Career History
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#testimonials')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Verified Endorsements
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Direct Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Channels & Operational SLA (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              <Globe2 size={14} className="text-emerald-400" />
              <span>Direct Channels</span>
            </div>

            {/* Email Copy Card */}
            <button
              onClick={copyEmail}
              className="w-full p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all text-xs group"
            >
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Primary Email</div>
                <div className="font-mono text-slate-200 group-hover:text-emerald-400 transition-colors font-bold mt-0.5">
                  {PERSONAL_INFO.email}
                </div>
              </div>
              {copied ? (
                <span className="text-[10px] font-mono font-bold text-emerald-400 flex items-center gap-1 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/40">
                  <Check size={11} /> Copied
                </span>
              ) : (
                <Copy size={13} className="text-slate-400 group-hover:text-white" />
              )}
            </button>

            {/* LinkedIn, GitHub & CV Links */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 text-xs font-bold text-slate-200 hover:text-white transition-all"
              >
                <Linkedin size={14} className="text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 text-xs font-bold text-slate-200 hover:text-white transition-all"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
            </div>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-3 rounded-xl bg-emerald-900/40 hover:bg-emerald-800/50 border border-emerald-500/40 text-emerald-200 hover:text-white flex items-center justify-center gap-2 text-xs font-bold transition-all shadow-sm"
            >
              <FileText size={14} />
              <span>Download Curriculum Vitae (PDF)</span>
              <ArrowUpRight size={13} />
            </a>

            <div className="pt-2 text-[11px] font-mono text-slate-500 space-y-1">
              <div>Base: {PERSONAL_INFO.location}</div>
              <div>Overlap: US (EST/PST) · UK (GMT) · EU (CET)</div>
            </div>
          </div>
        </div>

        {/* Large Subtle Production Wordmark / Luxury Typographic Display */}
        <div className="py-10 text-center select-none pointer-events-none">
          <span className="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tighter text-white/[0.04] uppercase font-mono block">
            REHMAT QADEER
          </span>
        </div>

        {/* Bottom Production Telemetry & Legal Line */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Architecting Production Systems For Clarity &amp; Scale.
          </div>

          <div className="flex flex-wrap items-center gap-3 text-slate-400">
            <span>Stack: Next.js 14</span>
            <span>·</span>
            <span>TypeScript</span>
            <span>·</span>
            <span>Tailwind CSS</span>
            <span>·</span>
            <span>FastAPI</span>
            <span>·</span>
            <span>pgvector</span>
          </div>

          <div className="flex items-center gap-2 text-emerald-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Production Build: Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
