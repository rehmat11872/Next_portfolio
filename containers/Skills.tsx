'use client';

import { Icon } from '@iconify/react';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from 'reactstrap';
import TechCard from '../components/TechCard';
import { skillsSection } from '../portfolio';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    skillsSection && (
      <section className="section section-lg" ref={ref}>
        <Container className="text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <span className="section-badge">🚀 What I Bring to the Table</span>
            <h1 className="display-3 text-white mt-3 mb-2" style={{ fontFamily: "var(--font-primary)", fontWeight: 800 }}>
              Technical <span className="gradient-text">Arsenal</span>
            </h1>
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: '600px' }}>
              {skillsSection.subTitle}
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="bento-grid">
            {skillsSection.data.map((section, index) => {
              // Logic to make the first item span full width (hero skill)
              // and others fit in a grid.
              const isHero = index === 0;

              return (
                <motion.div
                  key={index}
                  className={`bento-card ${isHero ? 'hero-card' : ''}`}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)'
                  }}
                >
                  <div className="card-bg-glow" />

                  {/* Card Content */}
                  <div className="card-content-wrapper">
                    <div className="card-header-flex">
                      <h3 className="bento-title">{section.title}</h3>
                      <div className="icon-stack">
                        {section.softwareSkills.slice(0, 3).map((s: any, i: number) => (
                          <Icon key={i} icon={s.iconifyTag} className="mini-icon" />
                        ))}
                      </div>
                    </div>

                    {/* Tech Tags - Simplified */}
                    <div className="tech-tags-wrapper">
                      {section.softwareSkills.map((skill: any, i: number) => (
                        <div key={i} className="tech-pill">
                          <Icon icon={skill.iconifyTag} className="pill-icon" />
                          <span>{skill.skillName}</span>
                        </div>
                      ))}
                    </div>

                    {/* Detailed Skills List - Only show if enough space or necessary */}
                    <div className="skills-line-wrapper">
                      {section.skills.map((skill: any, i: number) => (
                        <div key={i} className="skill-line-item">
                          <span className="check-icon">✓</span> {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>

        <style jsx>{`
          .section-badge {
            display: inline-block;
            padding: 8px 20px;
            background: rgba(99, 102, 241, 0.1);
            border: 1px solid rgba(99, 102, 241, 0.3);
            border-radius: 50px;
            color: #a78bfa;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 20px;
          }

          .gradient-text {
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          /* Bento Layout */
          .bento-grid {
             display: grid;
             grid-template-columns: repeat(3, 1fr);
             grid-auto-rows: minmax(300px, auto);
             gap: 24px;
             max-width: 1200px;
             margin: 0 auto;
          }

          .bento-card {
             background: rgba(15, 23, 42, 0.4);
             border: 1px solid rgba(255, 255, 255, 0.05);
             border-radius: 24px;
             overflow: hidden;
             position: relative;
             display: flex;
             flex-direction: column;
             backdrop-filter: blur(25px);
             transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          }

          .bento-card:hover {
             border-color: rgba(168, 85, 247, 0.5);
             transform: translateY(-8px) scale(1.01);
             background: rgba(15, 23, 42, 0.6);
          }

          .hero-card {
             grid-column: span 3; 
             background: radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.15) 0%, rgba(15, 23, 42, 0.4) 100%);
             border: 1px solid rgba(168, 85, 247, 0.2);
          }

          .hero-card::before {
             content: '';
             position: absolute;
             inset: 0;
             background-image: 
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
             background-size: 20px 20px;
             pointer-events: none;
             mask-image: radial-gradient(circle at 100% 100%, black, transparent);
          }

          .card-bg-glow {
             position: absolute;
             inset: 0;
             background: radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15), transparent 60%);
             opacity: 0;
             transition: opacity 0.5s;
             pointer-events: none;
          }

          .bento-card:hover .card-bg-glow {
             opacity: 1;
          }

          .card-content-wrapper {
             padding: 32px;
             display: flex;
             flex-direction: column;
             height: 100%;
             z-index: 2;
          }

          .card-header-flex {
             display: flex;
             justify-content: space-between;
             align-items: center;
             margin-bottom: 24px;
          }

          .bento-title {
             color: #f8fafc;
             font-family: var(--font-primary);
             font-weight: 700;
             font-size: 1.5rem;
             margin: 0;
          }

          .hero-card .bento-title {
             font-size: 2rem;
             background: linear-gradient(90deg, #fff, #94a3b8);
             -webkit-background-clip: text;
             -webkit-text-fill-color: transparent;
          }

          .icon-stack {
             display: flex;
             gap: -10px;
          }

          :global(.mini-icon) {
             font-size: 1.5rem;
             color: #64748b;
             margin-left: -8px; 
             background: #1e293b;
             border-radius: 50%;
             padding: 2px;
             border: 2px solid #0f172a;
          }

          .tech-tags-wrapper {
             display: flex;
             flex-wrap: wrap;
             gap: 10px;
             margin-bottom: 24px;
          }

          .tech-pill {
             display: flex;
             align-items: center;
             gap: 6px;
             padding: 6px 14px;
             background: rgba(255, 255, 255, 0.05);
             border: 1px solid rgba(255, 255, 255, 0.1);
             border-radius: 50px;
             font-size: 0.8rem;
             color: #cbd5e1;
             transition: all 0.3s;
          }

          .tech-pill:hover {
             background: rgba(99, 102, 241, 0.2);
             border-color: rgba(99, 102, 241, 0.4);
             transform: translateY(-2px);
          }

          :global(.pill-icon) {
             font-size: 1rem;
          }
          
          .skills-line-wrapper {
             margin-top: auto;
             display: flex;
             flex-direction: column;
             gap: 8px;
             border-top: 1px solid rgba(255,255,255,0.05);
             padding-top: 20px;
          }

          .skill-line-item {
             font-size: 0.9rem;
             color: #94a3b8;
             display: flex;
             align-items: flex-start;
             gap: 8px;
             text-align: left;
          }

          .check-icon {
             color: #10b981; /* Emerald green */
             font-weight: bold;
          }

          .hero-card .skills-line-wrapper {
             display: grid;
             grid-template-columns: repeat(3, 1fr);
             gap: 12px;
          }

          @media (max-width: 992px) {
             .bento-grid {
                grid-template-columns: 1fr;
             }
             
             .hero-card {
                grid-column: span 1;
             }
             
             .hero-card .skills-line-wrapper {
                grid-template-columns: 1fr;
             }
          }
        `}</style>
      </section>
    )
  );
};

export default Skills;

