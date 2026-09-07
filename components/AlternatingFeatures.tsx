'use client';
import { ArrowUpRight, CheckCircle2, Database, ShieldCheck, Cpu, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

// Top 4 flagship platforms featured in ScaleMediation stacking card format
const FEATURED_SYSTEMS = [
  {
    id: 'lexorbit',
    project: PROJECTS.find((p) => p.id === 'lexorbit')!,
    stepNumber: '01',
    badge: 'LegalTech · Enterprise AI Platform',
    titlePrefix: 'Citation-backed legal intelligence with',
    italicWord: 'zero hallucination',
    titleSuffix: '.',
    cardBg: 'bg-[#ecfdf5]', // Clean mint/sage
    borderColor: 'border-[#a7f3d0]',
    accentColor: 'text-[#064e3b]',
    mockupType: 'lexorbit',
  },
  {
    id: 'panacomps',
    project: PROJECTS.find((p) => p.id === 'panacomps')!,
    stepNumber: '02',
    badge: 'Real Estate Data SaaS · Analytics',
    titlePrefix: 'Transforming 350+ property records into',
    italicWord: 'searchable analytics',
    titleSuffix: '.',
    cardBg: 'bg-[#fefce8]', // Warm sand
    borderColor: 'border-[#fef08a]',
    accentColor: 'text-[#854d0e]',
    mockupType: 'panacomps',
  },
  {
    id: 'optevo',
    project: PROJECTS.find((p) => p.id === 'optevo')!,
    stepNumber: '03',
    badge: 'Enterprise WorkPods · Document Intelligence',
    titlePrefix: 'Enterprise knowledge base powered by',
    italicWord: 'hybrid semantic RAG',
    titleSuffix: '.',
    cardBg: 'bg-[#f0f9ff]', // Ice blue
    borderColor: 'border-[#bae6fd]',
    accentColor: 'text-[#0369a1]',
    mockupType: 'optevo',
  },
  {
    id: 'payinnovate',
    project: PROJECTS.find((p) => p.id === 'payinnovate')!,
    stepNumber: '04',
    badge: 'FinTech · DORA Regulatory Compliance',
    titlePrefix: 'Automating European regulatory compliance under',
    italicWord: 'DORA standards',
    titleSuffix: '.',
    cardBg: 'bg-[#f5f3ff]', // Soft lavender
    borderColor: 'border-[#ddd6fe]',
    accentColor: 'text-[#6b21a8]',
    mockupType: 'payinnovate',
  },
];

export default function AlternatingFeatures() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-white border-t border-[#cbd5e1] relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="pill-badge pill-sage mb-3">
            <Sparkles size={14} className="text-[#064e3b]" />
            <span className="font-bold text-xs text-[#0f172a]">Flagship Systems Architecture</span>
          </div>
          <h2 className="section-title">
            Production Platforms Designed For{' '}
            <span className="font-serif-italic font-normal text-[#064e3b]">Real Scale</span>.
          </h2>
          <p className="section-subtitle">
            Scroll down to see each flagship architecture card lock and stack seamlessly into view.
          </p>
        </div>

        {/* Stacking Cards Deck (ScaleMediation Style: One Card Then Second On Top) */}
        <div className="relative pb-24 space-y-16 sm:space-y-20">
          {FEATURED_SYSTEMS.map((item, index) => {
            const project = item.project;
            // Progressive sticky top offset so cards layer cleanly
            const stickyTop = 85 + index * 18;

            return (
              <div
                key={item.id}
                className="sticky transition-all duration-300"
                style={{
                  top: `${stickyTop}px`,
                  zIndex: index + 10,
                }}
              >
                <div
                  className={`${item.cardBg} ${item.borderColor} border-2 rounded-[32px] sm:rounded-[36px] p-7 sm:p-10 lg:p-12 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.12),0_2px_12px_rgba(15,23,42,0.06)]`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left: Content */}
                    <div className="lg:col-span-6 space-y-5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="pill-badge pill-slate text-xs font-bold bg-white/90">
                          {item.badge}
                        </div>
                        <span className="text-xs font-mono font-bold text-[#475569] bg-white/80 px-3 py-1 rounded-full border border-slate-200">
                          Platform {item.stepNumber} of 04
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0f172a] leading-[1.2]">
                        {item.titlePrefix}{' '}
                        <span className="font-serif-italic font-normal text-[#064e3b]">
                          {item.italicWord}
                        </span>
                        {item.titleSuffix}
                      </h3>

                      <p className="text-[#334155] text-sm sm:text-base leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 pt-1">
                        {project.whatIBuilt.slice(0, 3).map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0f172a] font-medium leading-snug">
                            <CheckCircle2 size={16} className="text-[#15803d] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Business Outcome */}
                      <div className="p-3.5 rounded-xl bg-white/90 border border-slate-300 text-xs sm:text-sm text-[#0f172a] leading-relaxed shadow-sm">
                        <span className="font-bold text-[#0f172a]">Business Outcome: </span>
                        <span className="text-[#334155]">{project.metrics}</span>
                      </div>

                      {/* Links */}
                      <div className="pt-2 flex flex-wrap items-center gap-4">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-bold text-sm text-[#064e3b] hover:text-[#022c22] border-b-2 border-[#064e3b] pb-0.5 group transition-colors"
                          >
                            <span>Visit Live Platform</span>
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        )}

                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <span key={tech} className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white text-[#1e293b] border border-[#cbd5e1] shadow-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Mockup Box */}
                    <div className="lg:col-span-6">
                      <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-[#cbd5e1] space-y-4">
                        {/* Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-[#e2e8f0]">
                          <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                          </div>
                          <span className="text-xs font-mono font-bold text-[#475569]">
                            {project.name.toLowerCase()}.app · Production Interface
                          </span>
                        </div>

                        {/* Content */}
                        {item.mockupType === 'lexorbit' && (
                          <div className="space-y-3">
                            <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#cbd5e1] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <span className="text-xs font-mono font-bold text-[#0f172a]">
                                Query: &quot;Delaware corporate fiduciary duty precedents&quot;
                              </span>
                              <span className="text-xs font-mono font-bold bg-[#dcfce7] text-[#166534] px-2 py-0.5 rounded border border-[#86efac]">
                                Semantic Match: 98.4%
                              </span>
                            </div>

                            <div className="space-y-2">
                              <div className="p-3 rounded-lg border border-[#cbd5e1] bg-white">
                                <div className="flex items-center justify-between text-xs font-bold text-[#0f172a]">
                                  <span>Guth v. Loft, Inc. (Del. 1939)</span>
                                  <span className="text-[11px] font-mono font-bold text-[#15803d]">Verified Citation</span>
                                </div>
                                <p className="text-xs text-[#334155] font-medium mt-1 line-clamp-2">
                                  Corporate officers stand in a fiduciary relation to the corporation and stockholders...
                                </p>
                              </div>
                              <div className="p-3 rounded-lg border border-[#cbd5e1] bg-white">
                                <div className="flex items-center justify-between text-xs font-bold text-[#0f172a]">
                                  <span>Kahn v. M&amp;F Worldwide Corp. (Del. 2014)</span>
                                  <span className="text-[11px] font-mono font-bold text-[#15803d]">Verified Citation</span>
                                </div>
                                <p className="text-xs text-[#334155] font-medium mt-1 line-clamp-2">
                                  Business judgment review standard in controlling stockholder buyouts...
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {item.mockupType === 'panacomps' && (
                          <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-2 text-center">
                              <div className="p-2.5 rounded-xl bg-[#f8fafc] border border-[#cbd5e1]">
                                <div className="text-[11px] font-bold text-[#475569]">Buildings</div>
                                <div className="text-lg font-extrabold text-[#0f172a] font-mono">350+</div>
                              </div>
                              <div className="p-2.5 rounded-xl bg-[#f8fafc] border border-[#cbd5e1]">
                                <div className="text-[11px] font-bold text-[#475569]">Avg Price/M²</div>
                                <div className="text-lg font-extrabold text-[#0f172a] font-mono">$2,410</div>
                              </div>
                              <div className="p-2.5 rounded-xl bg-[#f8fafc] border border-[#cbd5e1]">
                                <div className="text-[11px] font-bold text-[#475569]">Sync Latency</div>
                                <div className="text-lg font-extrabold text-[#15803d] font-mono">&lt; 3.2s</div>
                              </div>
                            </div>
                            <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#cbd5e1] text-xs text-[#334155]">
                              <div className="font-bold text-[#0f172a] mb-1">Panama City Real Estate Ledger</div>
                              <div className="text-[11px] text-[#475569] leading-relaxed">
                                Deduplicated title deeds and municipal transactions indexed in PostgreSQL.
                              </div>
                            </div>
                          </div>
                        )}

                        {item.mockupType === 'optevo' && (
                          <div className="space-y-3">
                            <div className="p-3 bg-[#f0f9ff] border border-[#bae6fd] rounded-xl flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-[#0284c7] text-white flex items-center justify-center font-bold text-xs">
                                PDF
                              </div>
                              <div>
                                <div className="text-xs font-bold text-[#0f172a]">Enterprise_SOP_v4.2.pdf</div>
                                <div className="text-[10px] text-[#0369a1] font-mono">Smart-chunked into 124 vectors · Azure Search</div>
                              </div>
                            </div>
                            <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#cbd5e1] text-xs text-[#334155] leading-relaxed">
                              <div className="font-bold text-[#0f172a] mb-1">Query: &quot;Cloud cluster failover SLA threshold?&quot;</div>
                              <div className="p-2 bg-white rounded-lg border border-[#cbd5e1] text-[#0f172a] font-medium text-[11px]">
                                <span className="font-bold text-[#15803d]">✓ Grounded Citation: </span>
                                RTO &lt; 15 mins, RPO &lt; 1 min across multi-region ECS nodes.
                              </div>
                            </div>
                          </div>
                        )}

                        {item.mockupType === 'payinnovate' && (
                          <div className="space-y-3">
                            <div className="p-3 bg-[#faf5ff] border border-[#e9d5ff] rounded-xl flex items-center justify-between">
                              <span className="text-xs font-bold text-[#581c87]">DORA Article 28: Register of Information</span>
                              <span className="text-[10px] font-mono font-bold bg-[#7e22ce] text-white px-2 py-0.5 rounded">
                                Compliant
                              </span>
                            </div>
                            <div className="space-y-1.5 text-xs text-[#334155]">
                              <div className="p-2 bg-[#f8fafc] rounded-lg border border-[#cbd5e1] flex justify-between font-medium">
                                <span className="text-[#0f172a]">ICT Subcontractor Risk</span>
                                <span className="font-mono font-bold text-[#15803d]">Low (Verified)</span>
                              </div>
                              <div className="p-2 bg-[#f8fafc] rounded-lg border border-[#cbd5e1] flex justify-between font-medium">
                                <span className="text-[#0f172a]">Export Format</span>
                                <span className="font-mono font-bold text-[#2563eb]">EBA Formatted (.xlsx)</span>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="pt-2 flex items-center justify-between text-xs font-mono font-bold text-[#475569]">
                          <span className="flex items-center gap-1.5 text-[#15803d]">
                            <span className="w-2 h-2 rounded-full bg-[#15803d] animate-pulse" />
                            Architecture: Production Live
                          </span>
                          <span>Full-Stack by Rehmat</span>
                        </div>
                      </div>
                    </div>
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
