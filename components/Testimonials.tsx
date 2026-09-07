'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquareQuote,
  Quote,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Briefcase,
  UserCheck,
} from 'lucide-react';

import { TESTIMONIALS, Testimonial } from '../data/portfolioData';

type RoleFilter = 'All' | 'Founders' | 'Technical Leaders' | 'Product Leaders';

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState<RoleFilter>('All');

  const filteredTestimonials =
    activeFilter === 'All'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === activeFilter);

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#f8fafc] border-t border-[#cbd5e1] relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="pill-badge pill-green mb-3">
              <MessageSquareQuote size={14} className="text-[#064e3b]" />
              <span className="font-bold text-xs text-[#064e3b]">Client Feedback</span>
            </div>
            <h2 className="section-title">
              Recommendations &amp;{' '}
              <span className="font-serif-italic font-normal text-[#064e3b]">Endorsements</span>.
            </h2>
            <p className="section-subtitle">
              Verified feedback from founders, CTOs, and product leaders who have collaborated with me to architect and scale production platforms.
            </p>
          </div>

          {/* Role Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Founders', 'Technical Leaders', 'Product Leaders'] as RoleFilter[]).map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#064e3b] text-white shadow-md shadow-[#064e3b]/15 scale-[1.02]'
                      : 'bg-white text-[#334155] border-2 border-[#cbd5e1] hover:border-[#94a3b8] hover:bg-[#f1f5f9]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Testimonials Grid: Verified Executive Cards (No AI stars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-white rounded-[28px] border-2 border-[#cbd5e1] hover:border-[#064e3b] p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(6,78,59,0.15)] hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  {/* Top Header: Verification Badge & Domain Pill */}
                  <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#15803d] bg-[#dcfce7] px-2.5 py-1 rounded-full border border-[#86efac]">
                      <ShieldCheck size={14} className="shrink-0" />
                      <span>{t.verificationBadge}</span>
                    </div>

                    <span className="text-[11px] font-mono font-bold text-[#64748b] bg-[#f8fafc] px-2.5 py-1 rounded-full border border-slate-200">
                      {t.project}
                    </span>
                  </div>

                  {/* Feedback Quote */}
                  <div className="relative mb-6">
                    <Quote size={24} className="text-[#cbd5e1] mb-2 -scale-x-100" />
                    <p className="text-[#1e293b] text-sm sm:text-base leading-relaxed font-normal">
                      &ldquo;{t.feedback}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Bottom Section: Client Profile & Technical Deliverable */}
                <div className="space-y-3.5 pt-4 border-t-2 border-slate-100">
                  {/* Technical Deliverable Highlight */}
                  <div className="p-3 rounded-xl bg-[#f8fafc] border border-slate-200 flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#15803d] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#334155] font-medium leading-snug">
                      <strong className="text-[#0f172a] font-semibold">Scope: </strong>
                      {t.deliverable}
                    </span>
                  </div>

                  {/* Author Meta */}
                  <div className="flex items-center gap-3 pt-1">
                    <div
                      className={`w-11 h-11 rounded-2xl border-2 flex items-center justify-center font-bold text-sm shadow-sm shrink-0 ${t.avatarColor}`}
                    >
                      {t.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#0f172a] text-sm sm:text-base leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#64748b] leading-tight mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
