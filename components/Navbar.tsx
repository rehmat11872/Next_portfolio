'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Work', href: '#features' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto rounded-full transition-all duration-300 pointer-events-auto px-5 sm:px-6 h-14 flex items-center justify-between ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border border-[#e5e5df] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]'
            : 'bg-white/70 border border-[#eaeae4] backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.02)]'
        }`}
      >
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-[#111827] font-bold text-sm tracking-tight"
        >
          <div className="w-8 h-8 rounded-full bg-[#0f382c] text-white flex items-center justify-center font-bold text-xs">
            RQ
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[#111827] text-sm leading-tight">Rehmat Qadeer</span>
            <span className="text-[10px] text-[#4b5563] font-normal leading-tight">AI &amp; Full-Stack Engineer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#4b5563] hover:text-[#111827] hover:bg-[#f1f1ed] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-[#0f382c] hover:bg-[#164e3d] text-white transition-all shadow-sm"
          >
            <span>Resume</span>
            <ArrowUpRight size={13} className="opacity-80" />
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-[#111827] hover:bg-[#f1f1ed]"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 rounded-2xl bg-white border border-[#e5e5df] shadow-xl p-4 pointer-events-auto space-y-1.5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="block px-3.5 py-2.5 rounded-xl text-xs font-medium text-[#111827] hover:bg-[#f5f5f1]"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#f0f0eb]">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium bg-[#0f382c] text-white"
            >
              <span>Download CV / Resume</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
