'use client';

import React from 'react';
import { motion } from 'framer-motion';

type TechCardProps = {
  text: React.ReactNode | string;
  index: number;
};

const TechCard = ({ text, index }: TechCardProps) => {
  return (
    <motion.div
      className="tech-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <div className="tech-card-glow"></div>
      <div className="tech-card-content">
        <span className="tech-text">{text}</span>
      </div>

      <style jsx>{`
        .tech-card {
          position: relative;
          padding: 1.25rem 1.75rem;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          height: 100%;
          display: flex;
          align-items: center;
          cursor: pointer;
          overflow: hidden;
        }

        .tech-card:hover {
          border-color: rgba(168, 85, 247, 0.4);
          background: rgba(15, 23, 42, 0.6);
          box-shadow: 0 15px 30px rgba(168, 85, 247, 0.15),
                      0 0 15px rgba(168, 85, 247, 0.1);
        }

        .tech-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 0%, rgba(168, 85, 247, 0.15), transparent 70%);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .tech-card:hover .tech-card-glow {
          opacity: 1;
        }

        .tech-card-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          width: 100%;
        }

        .tech-text {
          color: #f1f5f9;
          font-size: 1rem;
          line-height: 1.4;
          font-weight: 500;
          letter-spacing: 0.3px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        /* Border animation on hover */
        .tech-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(135deg, transparent, rgba(168, 85, 247, 0.4), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .tech-card:hover::after {
          opacity: 1;
        }
      `}</style>
    </motion.div>
  );
};

export default TechCard;
