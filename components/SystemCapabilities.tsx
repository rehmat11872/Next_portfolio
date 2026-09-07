'use client';
import { Cpu, Server, Database, Cloud, Layout, Check, Sparkles, ArrowRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const ICONS = [Cpu, Server, Database, Cloud, Layout];
const TINTS = [
  {
    bg: 'bg-[#ecfdf5]', // Green
    border: 'border-[#a7f3d0]',
    badgeBg: 'bg-[#dcfce7] text-[#15803d]',
    accent: 'text-[#064e3b]',
    tag: 'Core Specialization · LLM & Agents',
  },
  {
    bg: 'bg-[#f0f9ff]', // Blue
    border: 'border-[#bae6fd]',
    badgeBg: 'bg-[#e0f2fe] text-[#0369a1]',
    accent: 'text-[#0369a1]',
    tag: 'High-Throughput Backends · Microservices',
  },
  {
    bg: 'bg-[#fefce8]', // Amber
    border: 'border-[#fef08a]',
    badgeBg: 'bg-[#fef08a] text-[#854d0e]',
    accent: 'text-[#854d0e]',
    tag: 'Vector Databases · Data Pipelines',
  },
  {
    bg: 'bg-[#f5f3ff]', // Purple
    border: 'border-[#ddd6fe]',
    badgeBg: 'bg-[#f3e8ff] text-[#6b21a8]',
    accent: 'text-[#6b21a8]',
    tag: 'Cloud Native · Containerization',
  },
  {
    bg: 'bg-[#fff1f2]', // Rose
    border: 'border-[#fecdd3]',
    badgeBg: 'bg-[#ffe4e6] text-[#9f1239]',
    accent: 'text-[#9f1239]',
    tag: 'Modern Reactive Web Interfaces',
  },
];

export default function SystemCapabilities() {
  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-white border-t border-[#cbd5e1] relative">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="pill-badge pill-green mb-3">
            <Cpu size={14} className="text-[#064e3b]" />
            <span className="font-bold text-xs text-[#064e3b]">Technical Stack &amp; Competencies</span>
          </div>
          <h2 className="section-title">
            Domain Capabilities Built for{' '}
            <span className="font-serif-italic font-normal text-[#064e3b]">Reliability</span>.
          </h2>
          <p className="section-subtitle">
            Scroll down to explore each core engineering domain stacking into view.
          </p>
        </div>

        {/* Stacking Cards Deck (ScaleMediation Stacking Effect for Technical Capabilities) */}
        <div className="relative pb-24 space-y-12 sm:space-y-16">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            const styling = TINTS[idx % TINTS.length];
            const stickyTop = 90 + idx * 20;

            return (
              <div
                key={cat.title}
                className="sticky transition-all duration-300"
                style={{
                  top: `${stickyTop}px`,
                  zIndex: idx + 10,
                }}
              >
                <div
                  className={`${styling.bg} ${styling.border} border-2 rounded-[32px] sm:rounded-[36px] p-7 sm:p-10 lg:p-12 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.12),0_2px_12px_rgba(15,23,42,0.06)]`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#cbd5e1]/70">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl bg-white border-2 ${styling.border} ${styling.accent} flex items-center justify-center shadow-sm`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569]">
                          {styling.tag}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                          {cat.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#475569] bg-white px-3.5 py-1.5 rounded-full border border-slate-300 shadow-sm">
                        Domain 0{idx + 1} of 05
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-7 max-w-3xl font-normal">
                    {cat.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#cbd5e1] shadow-sm text-xs sm:text-sm font-semibold text-[#0f172a]"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#dcfce7] text-[#15803d] flex items-center justify-center shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
