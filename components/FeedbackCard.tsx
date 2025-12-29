'use client';

import React from 'react';
import { CardBody } from 'reactstrap';
import { motion } from 'framer-motion';
import { FeedbackType } from '../types/sections';

interface FeedbackCardProps extends FeedbackType {
  index?: number;
}

const FeedbackCard = ({ name, feedback, index = 0 }: FeedbackCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="feedback-card-wrapper"
    >
      <div className="feedback-card glass-card">
        <div className="quote-badge">
          <span className="quote-mark">“</span>
        </div>

        <CardBody className="feedback-card-body">
          <p className="feedback-text">{feedback}</p>

          <div className="author-section">
            <div className="author-avatar">
              {name.charAt(0).toUpperCase()}
            </div>
            <div className="author-info">
              <h5 className="author-name">{name}</h5>
              <div className="stars">★★★★★</div>
            </div>
          </div>
        </CardBody>
      </div>

      <style jsx>{`
        .feedback-card-wrapper {
          height: 100%;
          margin-bottom: 30px;
        }

        .feedback-card {
          background: rgba(15, 23, 42, 0.6); /* Darker background */
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08); /* Subtle border */
          border-radius: 24px;
          height: 100%;
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: visible;
        }

        .feedback-card:hover {
          transform: translateY(-8px);
          background: rgba(15, 23, 42, 0.8);
          border-color: rgba(99, 102, 241, 0.5); /* Primary color glow */
          box-shadow: 0 20px 40px -10px rgba(99, 102, 241, 0.15);
        }

        .quote-badge {
           position: absolute;
           top: -20px;
           left: 30px;
           width: 44px;
           height: 44px;
           background: linear-gradient(135deg, #6366f1, #ec4899);
           border-radius: 50%;
           display: flex;
           align-items: center;
           justify-content: center;
           box-shadow: 0 8px 16px rgba(99, 102, 241, 0.3);
           z-index: 2;
        }

        .quote-mark {
           font-size: 2rem;
           line-height: 1;
           color: #fff;
           font-family: serif;
           margin-top: 8px;
        }

        :global(.feedback-card-body) {
          padding: 40px 32px 32px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .feedback-text {
          color: #e2e8f0; /* High contrast light grey */
          font-size: 1.1rem;
          line-height: 1.7;
          font-style: normal;
          font-weight: 300;
          flex: 1;
          margin-bottom: 24px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        }

        .author-section {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .author-name {
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          margin: 0;
          letter-spacing: 0.5px;
        }
        
        .stars {
           color: #fbbf24;
           font-size: 0.85rem;
           letter-spacing: 2px;
           margin-top: 4px;
        }

        @media (max-width: 768px) {
          :global(.feedback-card-body) {
            padding: 30px 24px 24px;
          }
          .quote-badge {
             top: -15px;
             left: 20px;
             width: 36px;
             height: 36px;
          }
          .quote-mark {
             font-size: 1.5rem;
             margin-top: 6px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default FeedbackCard;
