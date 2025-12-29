'use client';

import React from 'react';
import { SkillBars } from '../portfolio';
import { Container } from 'reactstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Proficiency = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Duplicate skills for seamless infinite scroll
  const duplicatedSkills = [...SkillBars, ...SkillBars, ...SkillBars];

  return (
    SkillBars && (
      <section className="section section-lg" ref={ref}>
        <Container>
          {/* Section Header */}
          <div className="text-center mb-5">
            <motion.span
              className="badge-pill"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              ✨ Technical Expertise
            </motion.span>
            <motion.h1
              className="display-3 text-white mt-3"
              style={{ fontFamily: "var(--font-primary)", fontWeight: 800 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              My <span className="gradient-text">Proficiency</span>
            </motion.h1>
            <motion.p
              className="text-white-50 mt-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Check out my technical strengths across different domains
            </motion.p>
          </div>

          {/* Running Carousel/Marquee */}
          <motion.div
            className="marquee-container"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="marquee-track">
              {duplicatedSkills.map((skill, index) => (
                <div key={index} className="marquee-skill">
                  <div className="skill-badge">
                    <span className="skill-percentage">{skill.progressPercentage}%</span>
                    <span className="skill-name">{skill.Stack}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>

        {/* CSS Styles */}
        <style jsx>{`
          .badge-pill {
            display: inline-block;
            padding: 8px 20px;
            background: rgba(99, 102, 241, 0.15);
            border: 1px solid rgba(99, 102, 241, 0.3);
            border-radius: 50px;
            color: #a78bfa;
            font-size: 0.9rem;
            font-weight: 500;
          }

          .gradient-text {
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .marquee-container {
            width: 100%;
            overflow: hidden;
            padding: 30px 0;
            mask-image: linear-gradient(
              to right,
              transparent,
              black 10%,
              black 90%,
              transparent
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent,
              black 10%,
              black 90%,
              transparent
            );
          }

          .marquee-track {
            display: flex;
            gap: 24px;
            animation: marquee-scroll 25s linear infinite;
            width: max-content;
          }

          .marquee-container:hover .marquee-track {
            animation-play-state: paused;
          }

          @keyframes marquee-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 3));
            }
          }

          .marquee-skill {
            flex-shrink: 0;
          }

          .skill-badge {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            padding: 28px 40px;
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
            cursor: pointer;
            min-width: 180px;
          }

          .skill-badge:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(99, 102, 241, 0.4);
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
          }

          .skill-percentage {
            font-size: 2.5rem;
            font-weight: 800;
            font-family: var(--font-primary);
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
          }

          .skill-name {
            color: #e2e8f0;
            font-size: 1.1rem;
            font-weight: 600;
            font-family: var(--font-primary);
            text-align: center;
          }

          @media (max-width: 768px) {
            .skill-badge {
              padding: 20px 30px;
              min-width: 150px;
            }

            .skill-percentage {
              font-size: 2rem;
            }

            .skill-name {
              font-size: 1rem;
            }
          }
        `}</style>
      </section>
    )
  );
};

export default Proficiency;
