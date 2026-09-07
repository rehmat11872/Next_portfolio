'use client';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#f8fafc] border-t border-[#cbd5e1] relative">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="pill-badge pill-green mb-3">
            <Briefcase size={14} className="text-[#064e3b]" />
            <span className="font-bold text-xs text-[#064e3b]">Career Trajectory</span>
          </div>
          <h2 className="section-title">
            Professional Experience &amp;{' '}
            <span className="font-serif-italic font-normal text-[#064e3b]">Leadership</span>.
          </h2>
          <p className="section-subtitle">
            8+ years driving technical execution, architecture decisions, and production delivery.
          </p>
        </div>

        {/* Stacking Experience Cards (ScaleMediation Card-on-Card Stacking) */}
        <div className="relative pb-24 space-y-12 sm:space-y-16">
          {EXPERIENCES.map((exp, idx) => {
            const stickyTop = 90 + idx * 20;

            return (
              <div
                key={idx}
                className="sticky transition-all duration-300"
                style={{
                  top: `${stickyTop}px`,
                  zIndex: idx + 10,
                }}
              >
                <div className="bg-white border-2 border-[#cbd5e1] rounded-[32px] sm:rounded-[36px] p-7 sm:p-10 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.12),0_2px_12px_rgba(15,23,42,0.06)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b-2 border-[#f1f5f9]">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#64748b] uppercase tracking-wider">
                        Role 0{idx + 1} of 04
                      </span>
                      <h3 className="text-2xl font-extrabold text-[#0f172a] mt-0.5">
                        {exp.role}
                      </h3>
                      <div className="text-base font-bold text-[#064e3b] mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#334155] font-mono font-bold self-start sm:self-auto">
                      <span className="flex items-center gap-1.5 bg-[#f1f5f9] border border-[#cbd5e1] px-3.5 py-1.5 rounded-full">
                        <Calendar size={13} className="text-[#064e3b]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 bg-[#f1f5f9] border border-[#cbd5e1] px-3.5 py-1.5 rounded-full">
                        <MapPin size={13} className="text-[#064e3b]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
                        <CheckCircle2 size={18} className="text-[#15803d] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-[#f1f5f9]">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs font-mono font-semibold px-3 py-1 rounded-md bg-[#f8fafc] text-[#0f172a] border border-[#cbd5e1]">
                        {t}
                      </span>
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
