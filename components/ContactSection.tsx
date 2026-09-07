'use client';
import { useState } from 'react';
import {
  Mail,
  Send,
  Check,
  Copy,
  Linkedin,
  Github,
  FileText,
  Clock,
  MapPin,
  Sparkles,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const FORMSPREE_ID = 'xgvkydbp';

const ENGAGEMENT_TYPES = [
  'Full-Time Senior AI Role',
  'RAG & Multi-Agent Architecture',
  'FastAPI & Python Backend',
  'Enterprise SaaS & MVP Build',
  'Architecture Audit & Advisory',
];

const QUICK_PROMPTS = [
  'We are hiring for a Senior Full-Stack AI Engineer position.',
  'We need to architect a production RAG system with zero hallucination.',
  'Looking for assistance scaling our FastAPI & PostgreSQL infrastructure.',
];

export default function ContactSection() {
  const [selectedType, setSelectedType] = useState<string>('Full-Time Senior AI Role');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePromptClick = (prompt: string) => {
    setForm((prev) => ({
      ...prev,
      message: `${prompt}\n\nOur team is looking for: `,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const payload = {
        name: form.name,
        email: form.email,
        engagementType: selectedType,
        message: form.message,
      };

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white border-t border-[#cbd5e1] relative">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="pill-badge pill-green mb-3 inline-flex">
              <Sparkles size={14} className="text-[#064e3b]" />
              <span className="font-bold text-xs text-[#064e3b]">Let&apos;s Connect</span>
            </div>
            <h2 className="section-title">
              Ready to build something{' '}
              <span className="font-serif-italic font-normal text-[#064e3b]">exceptional</span>?
            </h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Available for full-time senior engineering roles, solutions architecture advisory, and high-impact production AI builds.
            </p>

            {/* Availability and SLA Banner */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#15803d] bg-[#dcfce7] px-3.5 py-1.5 rounded-full border border-[#86efac]">
                <span className="w-2 h-2 rounded-full bg-[#15803d] animate-pulse" />
                <span>Available for Full-Time &amp; Remote Roles</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#475569] bg-[#f8fafc] px-3.5 py-1.5 rounded-full border border-slate-200">
                <Clock size={13} className="text-[#064e3b]" />
                <span>Response SLA: Within 12 Hours</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#475569] bg-[#f8fafc] px-3.5 py-1.5 rounded-full border border-slate-200">
                <MapPin size={13} className="text-[#064e3b]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Direct Channels, Resume & Working Guarantees */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#f8fafc] p-6 sm:p-8 rounded-[28px] border-2 border-[#cbd5e1] space-y-5 shadow-sm">
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#475569] mb-1">
                    Direct Channels
                  </h3>
                  <p className="text-xs text-[#64748b]">
                    Reach out directly for urgent roles or scheduled conversations.
                  </p>
                </div>

                {/* 1-Click Email Action Card */}
                <button
                  type="button"
                  onClick={copyEmail}
                  className="w-full p-4 rounded-2xl bg-white hover:bg-[#f1f5f9] border-2 border-[#cbd5e1] hover:border-[#064e3b] flex items-center justify-between text-left transition-all shadow-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ecfdf5] text-[#064e3b] border border-[#a7f3d0] flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono font-bold text-[#64748b]">Primary Email</div>
                      <div className="text-sm font-bold text-[#0f172a] group-hover:text-[#064e3b] transition-colors">
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </div>
                  {copied ? (
                    <span className="text-xs text-[#15803d] font-mono font-bold flex items-center gap-1 bg-[#dcfce7] px-2.5 py-1 rounded-full border border-[#86efac]">
                      <Check size={13} /> Copied!
                    </span>
                  ) : (
                    <div className="flex items-center gap-1 text-xs font-mono text-[#64748b] bg-[#f1f5f9] px-2 py-1 rounded-md">
                      <Copy size={13} />
                      <span>Copy</span>
                    </div>
                  )}
                </button>

                {/* Professional Links */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-white hover:bg-[#f1f5f9] border-2 border-[#cbd5e1] hover:border-[#064e3b] flex items-center justify-between text-xs font-bold text-[#0f172a] transition-all shadow-sm group"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin size={16} className="text-blue-600" />
                      <span>LinkedIn</span>
                    </div>
                    <ArrowUpRight size={13} className="text-[#94a3b8] group-hover:text-[#0f172a]" />
                  </a>

                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-white hover:bg-[#f1f5f9] border-2 border-[#cbd5e1] hover:border-[#064e3b] flex items-center justify-between text-xs font-bold text-[#0f172a] transition-all shadow-sm group"
                  >
                    <div className="flex items-center gap-2">
                      <Github size={16} />
                      <span>GitHub</span>
                    </div>
                    <ArrowUpRight size={13} className="text-[#94a3b8] group-hover:text-[#0f172a]" />
                  </a>
                </div>

                {/* Curriculum Vitae Download Button */}
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-2xl bg-[#064e3b] hover:bg-[#022c22] text-white flex items-center justify-center gap-2 text-sm font-bold transition-all shadow-md shadow-[#064e3b]/15"
                >
                  <FileText size={16} />
                  <span>Download Curriculum Vitae (PDF)</span>
                  <ArrowUpRight size={14} />
                </a>

                {/* Executive Trust Badges */}
                <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-[#475569]">
                  <div className="flex items-center gap-2 font-medium">
                    <ShieldCheck size={15} className="text-[#15803d] shrink-0" />
                    <span>IP Ownership &amp; Strict NDA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <Globe2 size={15} className="text-[#0369a1] shrink-0" />
                    <span>Timezone Overlap: US (EST/PST), UK (GMT), and Europe (CET)</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 size={15} className="text-[#15803d] shrink-0" />
                    <span>8+ Years Engineering Leadership &amp; Zero Micromanagement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Advanced Scope-Aware Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#f8fafc] p-7 sm:p-9 rounded-[28px] border-2 border-[#cbd5e1] shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Scope Selector: Engagement Type */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#0f172a] uppercase tracking-wider mb-2.5">
                      1. Inquiry Focus or Role Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {ENGAGEMENT_TYPES.map((type) => {
                        const isSelected = selectedType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setSelectedType(type)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                              isSelected
                                ? 'bg-[#064e3b] text-white shadow-sm scale-[1.02]'
                                : 'bg-white text-[#334155] border-2 border-[#cbd5e1] hover:border-[#94a3b8]'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quick Pre-fill Prompts */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#0f172a] uppercase tracking-wider mb-2">
                      2. Quick Inquiry Starters (Click to pre-fill)
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {QUICK_PROMPTS.map((prompt, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => handlePromptClick(prompt)}
                          className="text-[11px] font-medium text-left px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[#475569] hover:text-[#064e3b] hover:border-[#a7f3d0] hover:bg-[#ecfdf5] transition-all"
                        >
                          &ldquo;{prompt.slice(0, 42)}...&rdquo;
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0f172a] mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#cbd5e1] text-sm font-medium text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#064e3b] shadow-2xs transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0f172a] mb-1.5">
                        Work Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#cbd5e1] text-sm font-medium text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#064e3b] shadow-2xs transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message / Project Details Textarea */}
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1.5">
                      Role Details, Architecture Requirements, or Scope <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share details about your team, tech stack, roadmap, or timeline..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#cbd5e1] text-sm font-medium text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#064e3b] shadow-2xs transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn-forest !rounded-xl !py-4 text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-[#064e3b]/15"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting Message...
                      </span>
                    ) : status === 'sent' ? (
                      <span className="flex items-center gap-2 font-bold text-white">
                        <Check size={18} /> Message Delivered Successfully!
                      </span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Direct Inquiry to Rehmat</span>
                      </>
                    )}
                  </button>

                  {/* Submission Status Alerts */}
                  {status === 'sent' && (
                    <div className="p-3.5 rounded-xl bg-[#ecfdf5] border border-[#a7f3d0] text-xs font-medium text-[#064e3b] text-center">
                      Thank you! Your message has been routed directly to Rehmat. You can expect a response within 12 hours.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-[#fff1f2] border border-[#fecdd3] text-xs font-medium text-[#9f1239] text-center">
                      Transmission could not complete. Please email directly at{' '}
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="font-bold underline">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
