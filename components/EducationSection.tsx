'use client';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section className="py-16 bg-white border-t border-[#cbd5e1]">
      <div className="section-container">
        <div className="scale-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-2 border-[#cbd5e1]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#ecfdf5] border border-[#a7f3d0] text-[#064e3b] flex items-center justify-center shrink-0 shadow-sm">
              <GraduationCap size={24} />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-[#064e3b] uppercase tracking-wider mb-1">
                Academic Background
              </div>
              <h3 className="text-xl font-bold text-[#0f172a]">
                {EDUCATION.degree}
              </h3>
              <p className="text-sm font-semibold text-[#334155] mt-1">
                {EDUCATION.institution} · <span className="font-mono text-xs text-[#064e3b] font-bold">{EDUCATION.period}</span>
              </p>
              <p className="text-xs sm:text-sm text-[#475569] mt-2 max-w-xl leading-relaxed font-normal">
                {EDUCATION.details}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-center px-4 py-2 rounded-xl bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-xs sm:text-sm font-mono font-bold shrink-0 shadow-sm">
            <Award size={16} className="text-[#15803d]" />
            <span>CGPA 3.0 / 4.0 · Grade A</span>
          </div>
        </div>
      </div>
    </section>
  );
}
