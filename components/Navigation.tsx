'use client';

import React, { useState, useEffect } from 'react';
import { greetings, socialLinks } from '../portfolio';
import { motion, useScroll, useSpring } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Navigation = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSegment, setActiveSegment] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll progress bar
  const scrollProgress = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const latest = window.scrollY;
      setIsScrolled(latest > 50);

      // Basic active section detection
      const sections = ['skills', 'projects', 'experience', 'education'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSegment(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
      if (window.scrollY < 300) setActiveSegment('Home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <motion.nav
      className={`premium-header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
    >
      {/* Visual background layers */}
      <div className="header-glass-bg"></div>
      <div className="header-glow"></div>

      <div className="nav-container">
        {/* Left: Brand/Logo */}
        <div className="nav-left">
          <motion.a
            href="/"
            className="logo-wrapper"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="logo-box">
              <span className="logo-text">{greetings.name.split('')[0]}</span>
            </div>
            <div className="logo-details">
              <span className="logo-name">{greetings.name}</span>
            </div>
          </motion.a>
        </div>

        {/* Center: Main Navigation */}
        <div className="nav-center desktop-only">
          <div className="nav-pill">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className={`nav-link ${activeSegment === item.name ? 'active' : ''}`}
                whileHover={{ y: -2 }}
              >
                {item.name}
                {activeSegment === item.name && (
                  <motion.div
                    className="active-dot"
                    layoutId="activeDot"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="nav-right desktop-only">
          <div className="social-pill">
            {socialLinks.github && (
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="header-social-icon">
                <i className="fa fa-github" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="header-social-icon">
                <i className="fa fa-linkedin" />
              </a>
            )}
          </div>

          <div className="nav-cta-wrapper">
            <MagneticButton href="#contact" variant="primary" className="header-cta">
              {"Let's Talk"}
            </MagneticButton>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`burger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Progress Line */}
      <motion.div
        className="header-progress-line"
        style={{ scaleX: scrollProgress }}
      />

      <style jsx>{`
        .premium-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 100px;
          z-index: 2000;
          display: flex;
          align-items: center;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0 4rem;
        }

        .premium-header.scrolled {
          height: 80px;
          padding: 0 3rem;
        }

        .header-glass-bg {
          position: absolute;
          inset: 0;
          background: rgba(2, 6, 23, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          opacity: 0;
          transition: opacity 0.5s;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .premium-header.scrolled .header-glass-bg {
          opacity: 1;
        }

        .header-glow {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 200px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: -1;
        }

        .nav-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* Logo Styling */
        .nav-left {
          display: flex;
          align-items: center;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #fff;
        }

        .logo-box {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, #a855f7, #6366f1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 1.4rem;
          box-shadow: 0 10px 20px rgba(168, 85, 247, 0.3);
          animation: logo-float 3s ease-in-out infinite;
        }

        @keyframes logo-float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-3px) rotate(5deg); }
        }

        .logo-details {
          display: flex;
          flex-direction: column;
          margin-left: 25px; /* Maximum breathing room */
        }

        .logo-name {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.35rem;
          letter-spacing: -0.5px;
          line-height: 1;
          background: linear-gradient(90deg, #fff, rgba(255,255,255,0.7));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-status {
          font-size: 0.7rem;
          font-weight: 600;
          color: #94a3b8;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* Center Nav Pill */
        .nav-center {
          display: flex;
          justify-content: center;
        }

        .nav-pill {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 6px;
          border-radius: 100px;
          display: flex;
          gap: 4px;
          backdrop-filter: blur(10px);
        }

        .nav-link {
          padding: 10px 24px;
          border-radius: 100px;
          color: #94a3b8;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s;
          position: relative;
        }

        .nav-link:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-link.active {
          color: #fff;
        }

        .active-dot {
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          background: #a855f7;
          border-radius: 50%;
          box-shadow: 0 0 10px #a855f7;
        }

        /* Right Actions */
        .nav-right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 24px;
        }

        .social-pill {
          display: flex;
          gap: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 6px;
          border-radius: 50px;
        }

        .header-social-icon {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          border-radius: 50%;
          transition: all 0.3s;
          font-size: 1.1rem;
        }

        .header-social-icon:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .nav-cta-wrapper {
          transform: scale(0.85); /* Make it compact in header */
        }

        /* Progress Line */
        .header-progress-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #a855f7, #06b6d4, transparent);
          transform-origin: left;
        }

        /* Mobile Styles */
        .mobile-toggle {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .burger {
          width: 30px;
          height: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .burger span {
          width: 100%;
          height: 2px;
          background: #fff;
          transition: all 0.3s;
        }

        .burger.active span:first-child { transform: rotate(45deg) translateY(12px); }
        .burger.active span:last-child { transform: rotate(-45deg) translateY(-12px); }

        .desktop-only { display: flex; }
        .mobile-only { display: none; }

        @media (max-width: 1024px) {
          .nav-container { grid-template-columns: 1fr auto; }
          .desktop-only { display: none; }
          .mobile-only { display: flex; }
          .premium-header { padding: 0 1.5rem; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navigation;
