'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  ArrowUpRight,
  Github,
  CheckCircle2,
  Zap,
  Search,
  X,
  Scale,
  Building2,
  Brain,
  ShieldCheck,
  ScanFace,
  Mic,
  Wrench,
  Bot,
  Receipt,
  Activity,
  Users,
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

type CategoryFilter = 'All' | 'AI & LLM' | 'Enterprise SaaS' | 'Cloud & RegTech' | 'Productivity';

const CATEGORIES: CategoryFilter[] = ['All', 'AI & LLM', 'Enterprise SaaS', 'Cloud & RegTech', 'Productivity'];

// Domain icon and accent configuration for each platform
const PROJECT_THEMES: Record<
  string,
  {
    icon: any;
    tintBg: string;
    tintBorder: string;
    accentText: string;
    badgeBg: string;
    impactLabel: string;
  }
> = {
  lexorbit: {
    icon: Scale,
    tintBg: 'bg-[#ecfdf5]',
    tintBorder: 'border-[#a7f3d0]',
    accentText: 'text-[#064e3b]',
    badgeBg: 'bg-[#dcfce7] text-[#15803d] border-[#86efac]',
    impactLabel: 'Legal Efficiency: Sub-2s docket search vs. manual hours',
  },
  panacomps: {
    icon: Building2,
    tintBg: 'bg-[#fefce8]',
    tintBorder: 'border-[#fef08a]',
    accentText: 'text-[#854d0e]',
    badgeBg: 'bg-[#fef9c3] text-[#854d0e] border-[#fde047]',
    impactLabel: 'Data Scale: 350+ commercial buildings indexed & mapped',
  },
  optevo: {
    icon: Brain,
    tintBg: 'bg-[#f0f9ff]',
    tintBorder: 'border-[#bae6fd]',
    accentText: 'text-[#0369a1]',
    badgeBg: 'bg-[#e0f2fe] text-[#0369a1] border-[#7dd3fc]',
    impactLabel: 'RAG Grounding: Zero-hallucination multi-doc synthesis',
  },
  payinnovate: {
    icon: ShieldCheck,
    tintBg: 'bg-[#f5f3ff]',
    tintBorder: 'border-[#ddd6fe]',
    accentText: 'text-[#6b21a8]',
    badgeBg: 'bg-[#ede9fe] text-[#6b21a8] border-[#c4b5fd]',
    impactLabel: 'DORA Compliance: 100% automated EU regulatory audit mapping',
  },
  veriport: {
    icon: ScanFace,
    tintBg: 'bg-[#ecfdf5]',
    tintBorder: 'border-[#a7f3d0]',
    accentText: 'text-[#064e3b]',
    badgeBg: 'bg-[#dcfce7] text-[#15803d] border-[#86efac]',
    impactLabel: 'KYC Accuracy: 99.2% OCR extraction in < 3s turnaround',
  },
  conversent: {
    icon: Mic,
    tintBg: 'bg-[#f0fdf4]',
    tintBorder: 'border-[#bbf7d0]',
    accentText: 'text-[#15803d]',
    badgeBg: 'bg-[#dcfce7] text-[#15803d] border-[#86efac]',
    impactLabel: 'Voice Latency: Sub-450ms stream with 98% intent resolution',
  },
  synctoolo: {
    icon: Wrench,
    tintBg: 'bg-[#f0f9ff]',
    tintBorder: 'border-[#bae6fd]',
    accentText: 'text-[#0369a1]',
    badgeBg: 'bg-[#e0f2fe] text-[#0369a1] border-[#7dd3fc]',
    impactLabel: 'Inventory Sync: 50,000+ parts synced in real-time across teams',
  },
  'where-is-kevin': {
    icon: Bot,
    tintBg: 'bg-[#fff1f2]',
    tintBorder: 'border-[#fecdd3]',
    accentText: 'text-[#9f1239]',
    badgeBg: 'bg-[#ffe4e6] text-[#9f1239] border-[#fca5a5]',
    impactLabel: 'Agent Autonomy: 5+ tool coordination with human approval gates',
  },
  expensesyncledger: {
    icon: Receipt,
    tintBg: 'bg-[#fefce8]',
    tintBorder: 'border-[#fef08a]',
    accentText: 'text-[#854d0e]',
    badgeBg: 'bg-[#fef9c3] text-[#854d0e] border-[#fde047]',
    impactLabel: 'Automation: 95% expense reconciliation with zero manual entry',
  },
  trueinnings: {
    icon: Activity,
    tintBg: 'bg-[#ecfdf5]',
    tintBorder: 'border-[#a7f3d0]',
    accentText: 'text-[#064e3b]',
    badgeBg: 'bg-[#dcfce7] text-[#15803d] border-[#86efac]',
    impactLabel: 'Real-Time Telemetry: Ball-tracking analytics & predictive models',
  },
  hyrflect: {
    icon: Users,
    tintBg: 'bg-[#f0f9ff]',
    tintBorder: 'border-[#bae6fd]',
    accentText: 'text-[#0369a1]',
    badgeBg: 'bg-[#e0f2fe] text-[#0369a1] border-[#7dd3fc]',
    impactLabel: 'Hiring Velocity: 65% reduction in first-round interview overhead',
  },
};

export default function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects by category and text search
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q)) ||
        p.badge.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Project count per category for badge counters
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PROJECTS.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = PROJECTS.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  return (
    <section id="case-studies" className="py-24 sm:py-32 bg-[#f8fafc] border-t border-[#cbd5e1] relative">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="pill-badge pill-green mb-3">
              <FolderGit2 size={14} className="text-[#064e3b]" />
              <span className="font-bold text-xs text-[#064e3b]">Full Portfolio Catalog</span>
            </div>
            <h2 className="section-title">
              All Production Platforms &amp;{' '}
              <span className="font-serif-italic font-normal text-[#064e3b]">Applications</span>.
            </h2>
            <p className="section-subtitle">
              Browse all 11 deployed enterprise SaaS products, autonomous AI swarms, and cloud-native systems.
            </p>
          </div>

          {/* Interactive Search Input */}
          <div className="w-full lg:w-80">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b]"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by tech, name, or domain..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white border-2 border-[#cbd5e1] text-sm font-medium text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#064e3b] shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-[#0f172a]"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Pills with Live Counters */}
        <div className="flex flex-wrap items-center gap-2.5 pb-8 mb-10 border-b-2 border-[#e2e8f0]">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#064e3b] text-white shadow-md shadow-[#064e3b]/15 scale-[1.02]'
                    : 'bg-white text-[#334155] border-2 border-[#cbd5e1] hover:border-[#94a3b8] hover:bg-[#f1f5f9]'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-white/20 text-white font-bold'
                      : 'bg-[#f1f5f9] text-[#64748b] font-semibold'
                  }`}
                >
                  {categoryCounts[cat] || 0}
                </span>
              </button>
            );
          })}
        </div>

        {/* Card Grid: 3 Columns on Desktop, High-Contrast & Eye-Catching */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-3xl border-2 border-[#cbd5e1] p-12 text-center max-w-md mx-auto my-12 shadow-sm">
            <Search size={32} className="mx-auto text-[#94a3b8] mb-3" />
            <h3 className="text-lg font-bold text-[#0f172a] mb-1">No platforms match your search</h3>
            <p className="text-xs text-[#64748b] mb-4">
              Try searching for a different keyword like &quot;FastAPI&quot;, &quot;pgvector&quot;, or &quot;Docker&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="btn-forest text-xs font-bold !py-2 !px-4"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const theme = PROJECT_THEMES[project.id] || {
                  icon: FolderGit2,
                  tintBg: 'bg-[#f8fafc]',
                  tintBorder: 'border-[#cbd5e1]',
                  accentText: 'text-[#064e3b]',
                  badgeBg: 'bg-[#f1f5f9] text-[#0f172a] border-[#cbd5e1]',
                  impactLabel: `Key Impact: ${project.metrics}`,
                };
                const Icon = theme.icon;

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    className="group bg-white rounded-[28px] border-2 border-[#cbd5e1] hover:border-[#064e3b] p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(6,78,59,0.18)] hover:-translate-y-2 transition-all duration-300"
                  >
                    <div>
                      {/* Top Row: Icon + Category Badge & Actions */}
                      <div className="flex items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-11 h-11 rounded-2xl ${theme.tintBg} ${theme.tintBorder} border-2 ${theme.accentText} flex items-center justify-center shadow-sm shrink-0`}
                          >
                            <Icon size={20} />
                          </div>
                          <div>
                            <span
                              className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border ${theme.badgeBg} inline-block`}
                            >
                              {project.badge}
                            </span>
                          </div>
                        </div>

                        {/* Direct Actions: Live Demo + GitHub */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`GitHub source for ${project.name}`}
                              className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-[#475569] hover:text-[#0f172a] hover:bg-[#f1f5f9] transition-all"
                            >
                              <Github size={14} />
                            </a>
                          )}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-bold text-[#064e3b] hover:text-white bg-[#ecfdf5] hover:bg-[#064e3b] border border-[#a7f3d0] px-3 py-1 rounded-full transition-all shadow-sm"
                            >
                              <span>Live</span>
                              <ArrowUpRight size={13} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Project Title & Subtitle */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] group-hover:text-[#064e3b] transition-colors leading-tight mb-1.5">
                        {project.name}
                      </h3>
                      <p className="text-xs font-mono font-bold text-[#15803d] mb-3.5">
                        {project.tagline}
                      </p>

                      {/* Project Description */}
                      <p className="text-xs sm:text-sm text-[#334155] leading-relaxed mb-5 font-normal">
                        {project.description}
                      </p>

                      {/* Architectural Highlights / What I Built */}
                      <div className="space-y-2 mb-5">
                        {project.whatIBuilt.slice(0, 2).map((item, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0f172a] font-medium leading-snug"
                          >
                            <CheckCircle2 size={15} className="text-[#15803d] shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Area: Business Outcome Ribbon & Tech Stack */}
                    <div className="pt-4 border-t-2 border-slate-100 space-y-3.5">
                      {/* Quantified Business Outcome Ribbon */}
                      <div className="p-3.5 rounded-2xl bg-[#f8fafc] border-2 border-slate-200/80 shadow-sm flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#dcfce7] text-[#15803d] flex items-center justify-center shrink-0 mt-0.5">
                          <Zap size={12} />
                        </div>
                        <div className="text-xs leading-snug">
                          <span className="font-bold text-[#0f172a] block mb-0.5">
                            Key Business Outcome
                          </span>
                          <span className="text-[#334155] font-medium">{project.metrics}</span>
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-white text-[#334155] border border-slate-300 shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
