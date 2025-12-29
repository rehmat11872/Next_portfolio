'use client';

import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { motion } from 'framer-motion';
import { ExperienceType } from '../types/sections';

const ExperienceCard = ({ role, company, companyLogo, date, desc, descBullets }: ExperienceType) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass-card experience-card mb-4">
        <CardBody className="p-4">
          <div className="d-flex align-items-center mb-3">
            <div className="company-logo-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={companyLogo}
                style={{
                  width: '50px',
                  height: '50px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.1))'
                }}
                alt={company}
              />
            </div>
            <div className="ms-3">
              <h5 className="role-title mb-1">{role}</h5>
              <h6 className="company-name mb-0">{company}</h6>
            </div>
            <div className="ms-auto date-badge d-none d-md-block">
              {date}
            </div>
          </div>

          <div className="date-badge-mobile d-md-none mb-3">
            {date}
          </div>

          <p className="description-text">
            {desc}
          </p>
          {descBullets && (
            <ul className="bullet-list">
              {descBullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </CardBody>
      </div>

      <style jsx>{`
            :global(.experience-card) {
                border: none !important;
                background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%) !important;
            }

            .company-logo-wrapper {
                width: 70px;
                height: 70px;
                background: rgba(255,255,255,0.05);
                border-radius: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid rgba(255,255,255,0.1);
            }

            .role-title {
                font-family: var(--font-primary);
                font-weight: 700;
                font-size: 1.25rem;
                color: #fff;
            }

            .company-name {
                font-family: var(--font-secondary);
                font-weight: 500;
                font-size: 1rem;
                color: var(--accent-cyan); 
            }

            .date-badge {
                background: rgba(6, 182, 212, 0.1);
                color: var(--accent-cyan);
                padding: 6px 16px;
                border-radius: 30px;
                font-size: 0.85rem;
                font-weight: 600;
                letter-spacing: 0.5px;
                border: 1px solid rgba(6, 182, 212, 0.2);
            }
            
            .date-badge-mobile {
                 display: inline-block;
                 background: rgba(6, 182, 212, 0.1);
                 color: var(--accent-cyan);
                 padding: 4px 12px;
                 border-radius: 30px;
                 font-size: 0.8rem;
                 font-weight: 600;
            }

            .description-text {
                font-size: 1rem;
                line-height: 1.7;
                color: #cbd5e1;
            }

            .bullet-list {
                list-style-type: none;
                padding-left: 0;
                margin-top: 15px;
            }

            .bullet-list li {
                position: relative;
                padding-left: 20px;
                margin-bottom: 8px;
                color: #94a3b8;
            }

            .bullet-list li::before {
                content: '▹';
                position: absolute;
                left: 0;
                color: var(--accent-purple);
            }
        `}</style>
    </motion.div>
  );
};

export default ExperienceCard;
