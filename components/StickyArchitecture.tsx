'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Cpu,
  Server,
  Cloud,
  CheckCircle2,
  Code2,
  GitBranch,
  ArrowRight,
  Activity,
  Zap,
  ShieldCheck,
  Database,
  Lock,
  Copy,
  Check,
} from 'lucide-react';

import { ARCHITECTURE_PILLARS, PillarData } from '../data/portfolioData';

const ICON_MAP = {
  cpu: Cpu,
  server: Server,
  cloud: Cloud,
};

export default function StickyArchitecture() {
  // Store view mode ('flow' | 'code') for each card independently
  const [activeModes, setActiveModes] = useState<Record<string, 'flow' | 'code'>>({
    'rag-agents': 'flow',
    'distributed-backend': 'flow',
    'cloud-infrastructure': 'flow',
  });

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleMode = (pillarId: string, mode: 'flow' | 'code') => {
    setActiveModes((prev) => ({ ...prev, [pillarId]: mode }));
  };

  const handleCopy = (pillarId: string, snippet: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedId(pillarId);
    setTimeout(() => setCopiedId(null), 2000);
  };


  return (
    <section id="architecture" className="py-24 sm:py-32 bg-[#f8fafc] border-t border-[#cbd5e1] relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="pill-badge pill-green mb-3">
            <Layers size={14} className="text-[#064e3b]" />
            <span className="font-bold text-xs text-[#064e3b]">Engineering Rigor</span>
          </div>
          <h2 className="section-title">
            Architecture &amp;{' '}
            <span className="font-serif-italic font-normal text-[#064e3b]">Methodology</span>.
          </h2>
          <p className="section-subtitle">
            Explore the 3 architectural blueprints and engineering patterns I use to deliver sub-second latency, zero hallucinations, and high availability.
          </p>
        </div>

        {/* Stacking Cards Deck (ScaleMediation Style: One Card Then Second On Top) */}
        <div className="relative pb-24 space-y-16 sm:space-y-20">
          {ARCHITECTURE_PILLARS.map((pillar, index) => {
            const Icon = ICON_MAP[pillar.iconType as keyof typeof ICON_MAP] || Cpu;
            const currentMode = activeModes[pillar.id] || 'flow';
            // Progressive sticky top offset so cards layer cleanly
            const stickyTop = 85 + index * 20;

            return (
              <div
                key={pillar.id}
                className="sticky transition-all duration-300"
                style={{
                  top: `${stickyTop}px`,
                  zIndex: index + 10,
                }}
              >
                <div
                  className={`${pillar.cardBg} ${pillar.borderColor} border-2 rounded-[32px] sm:rounded-[36px] p-7 sm:p-10 lg:p-12 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.12),0_2px_12px_rgba(15,23,42,0.06)]`}
                >
                  {/* Card Header Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#cbd5e1]/70">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-11 h-11 rounded-2xl bg-white border-2 ${pillar.borderColor} ${pillar.accentColor} flex items-center justify-center shadow-sm`}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <div className="pill-badge pill-slate text-xs font-bold bg-white/95 inline-flex mb-1">
                          {pillar.badge}
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#0f172a] leading-snug">
                          {pillar.titlePrefix}{' '}
                          <span className="font-serif-italic font-normal text-[#064e3b]">
                            {pillar.italicWord}
                          </span>{' '}
                          {pillar.titleSuffix}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                      <span className="text-xs font-mono font-bold text-[#475569] bg-white px-3.5 py-1.5 rounded-full border border-slate-300 shadow-sm">
                        Pillar {pillar.pillarNumber} of {pillar.totalPillars}
                      </span>
                    </div>
                  </div>

                  {/* 2-Column Grid: Left (Methodology + Problem/Solution) | Right (Interactive Pipeline Flow / Code) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    {/* Left Column: Challenge, Solution, Deliverables & KPIs */}
                    <div className="lg:col-span-5 space-y-5">
                      {/* The Engineering Challenge */}
                      <div className="p-4 rounded-2xl bg-white/90 border-2 border-rose-200 text-xs sm:text-sm text-[#881337] leading-relaxed shadow-sm">
                        <span className="font-bold block text-[#9f1239] mb-1 font-mono uppercase text-[11px] tracking-wider">
                          The Engineering Challenge
                        </span>
                        {pillar.problem}
                      </div>

                      {/* The Architectural Solution */}
                      <div className="p-4 rounded-2xl bg-white/90 border-2 border-emerald-200 text-xs sm:text-sm text-[#064e3b] leading-relaxed shadow-sm">
                        <span className="font-bold block text-[#065f46] mb-1 font-mono uppercase text-[11px] tracking-wider">
                          The Architectural Solution
                        </span>
                        {pillar.solution}
                      </div>

                      {/* Key Deliverables */}
                      <div className="space-y-2 pt-1">
                        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569]">
                          Key Architecture Deliverables:
                        </div>
                        {pillar.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0f172a] font-medium leading-snug">
                            <CheckCircle2 size={16} className="text-[#15803d] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Benchmarks Ribbon */}
                      <div className="pt-2">
                        <div className="p-3.5 rounded-2xl bg-white/90 border-2 border-slate-200 shadow-sm grid grid-cols-3 gap-2 text-center">
                          {pillar.benchmarks.map((b) => (
                            <div key={b.label} className="p-1">
                              <div className="text-[11px] font-bold text-[#64748b] leading-tight">
                                {b.label}
                              </div>
                              <div className="text-base sm:text-lg font-extrabold text-[#064e3b] font-mono mt-1">
                                {b.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Visual System Flow Diagram or Python Spec Toggle */}
                    <div className="lg:col-span-7 space-y-3">
                      {/* Diagram / Code Header Controls */}
                      <div className="flex items-center justify-between px-1">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#475569]">
                          <Activity size={14} className="text-[#15803d]" />
                          <span className="uppercase tracking-wider">System Pipeline Topology</span>
                        </div>

                        {/* Interactive Mode Switcher */}
                        <div className="flex items-center gap-1 p-1 rounded-xl bg-white border border-slate-300 shadow-sm">
                          <button
                            type="button"
                            onClick={() => toggleMode(pillar.id, 'flow')}
                            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                              currentMode === 'flow'
                                ? 'bg-[#064e3b] text-white shadow-sm'
                                : 'text-[#64748b] hover:text-[#0f172a]'
                            }`}
                          >
                            <GitBranch size={13} />
                            <span>Pipeline Flow</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleMode(pillar.id, 'code')}
                            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                              currentMode === 'code'
                                ? 'bg-[#064e3b] text-white shadow-sm'
                                : 'text-[#64748b] hover:text-[#0f172a]'
                            }`}
                          >
                            <Code2 size={13} />
                            <span>Python Spec</span>
                          </button>
                        </div>
                      </div>

                      {/* Display Container: Visual Flow or Code */}
                      <AnimatePresence mode="wait">
                        {currentMode === 'flow' ? (
                          <motion.div
                            key={`${pillar.id}-flow`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-2xl border-2 border-[#cbd5e1] p-5 sm:p-6 shadow-sm space-y-3"
                          >
                            {/* Pipeline Status Indicator */}
                            <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                              <div className="flex items-center gap-2 font-mono font-bold text-[#0f172a]">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#15803d] animate-pulse" />
                                End-to-End Orchestrated Pipeline
                              </div>
                              <span className="text-[11px] font-mono font-bold text-[#15803d] bg-[#dcfce7] px-2.5 py-0.5 rounded-full border border-[#86efac]">
                                Status: Active &amp; Verified
                              </span>
                            </div>

                            {/* Connected Nodes */}
                            <div className="space-y-2.5 pt-1">
                              {pillar.nodes.map((node, nIdx) => (
                                <div key={node.step} className="relative">
                                  <div
                                    className={`p-3.5 rounded-xl border-2 transition-all flex items-start justify-between gap-3 ${
                                      node.highlight
                                        ? 'bg-[#f0fdf4] border-[#15803d] shadow-sm'
                                        : 'bg-white border-slate-200 hover:border-slate-300'
                                    }`}
                                  >
                                    <div className="flex items-start gap-3">
                                      <div
                                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 ${
                                          node.highlight
                                            ? 'bg-[#15803d] text-white shadow-sm'
                                            : 'bg-[#f1f5f9] text-[#334155]'
                                        }`}
                                      >
                                        {node.step}
                                      </div>
                                      <div>
                                        <div className="text-xs sm:text-sm font-bold text-[#0f172a] leading-tight flex items-center gap-2">
                                          {node.title}
                                          {node.badge && (
                                            <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                                              {node.badge}
                                            </span>
                                          )}
                                        </div>
                                        <div className="text-xs text-[#475569] font-normal mt-1 leading-snug">
                                          {node.detail}
                                        </div>
                                      </div>
                                    </div>

                                    <span className="text-[11px] font-mono font-bold text-[#15803d] shrink-0 mt-0.5">
                                      ✓ Verified
                                    </span>
                                  </div>

                                  {/* Connector Arrow */}
                                  {nIdx < pillar.nodes.length - 1 && (
                                    <div className="flex justify-center my-0.5 text-slate-400">
                                      <span className="text-xs">↓</span>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>

                            {/* Telemetry Footer */}
                            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-[#64748b] gap-1">
                              <span>Telemetry: 100% Traceability with Sentry &amp; LangSmith</span>
                              <span className="text-[#064e3b] font-bold">Latency Budget: Passed</span>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key={`${pillar.id}-code`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="bg-[#0f172a] rounded-2xl border-2 border-slate-700 p-5 shadow-sm space-y-3"
                          >
                            {/* Code Header Bar */}
                            <div className="flex items-center justify-between pb-3 border-b border-white/10">
                              <div className="flex items-center gap-2">
                                <div className="flex gap-1.5">
                                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                </div>
                                <span className="text-xs font-mono font-bold text-slate-300 ml-2">
                                  {pillar.codeFilename}
                                </span>
                              </div>

                              <button
                                type="button"
                                onClick={() => handleCopy(pillar.id, pillar.codeSnippet)}
                                className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 px-2.5 py-1 rounded-lg transition-all"
                              >
                                {copiedId === pillar.id ? (
                                  <>
                                    <Check size={13} className="text-emerald-400" />
                                    <span className="text-emerald-400">Copied!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy size={13} />
                                    <span>Copy</span>
                                  </>
                                )}
                              </button>
                            </div>

                            {/* Code Body */}
                            <pre className="text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[360px] p-2">
                              <code>{pillar.codeSnippet}</code>
                            </pre>

                            {/* Code Footer */}
                            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-400 font-bold">
                              <span>✓ Type-Safe Async Validated</span>
                              <span>Production Architecture Pattern</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
