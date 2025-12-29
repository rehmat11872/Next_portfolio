'use client';

import React from 'react';
import { experience } from '../portfolio';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    experience && (
      <section id="experience" className="section section-lg" ref={ref}>
        <Container>
          <div className="text-center mb-5">
            <motion.span
              className="section-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              💼 Career Journey
            </motion.span>
            <motion.h1
              className="display-3 text-white mt-3"
              style={{ fontFamily: "var(--font-primary)", fontWeight: 800 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Work <span className="gradient-text">Experience</span>
            </motion.h1>
          </div>

          <div className="timeline-wrapper">
            {/* Center Line */}
            <div className="timeline-line"></div>

            {experience.map((data, index) => (
              <TimelineItem key={index} data={data} index={index} />
            ))}
          </div>
        </Container>

        <style jsx>{`
          .section-badge {
            display: inline-block;
            padding: 10px 24px;
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

          .timeline-wrapper {
            position: relative;
            padding: 40px 0;
            max-width: 1000px;
            margin: 0 auto;
          }

          .timeline-line {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom, rgba(99, 102, 241, 0), #6366f1, #a855f7, rgba(236, 72, 153, 0));
            transform: translateX(-50%);
          }

          @media (max-width: 992px) {
            .timeline-line {
              left: 30px;
            }
          }
        `}</style>
      </section>
    )
  );
};

const TimelineItem = ({ data, index }: { data: any, index: number }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
      {/* Node */}
      <div className="timeline-node">
        <div className="node-inner" />
      </div>

      {/* Content */}
      <motion.div
        className="timeline-content"
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="experience-card glass-card">
          <div className="card-header">
            <div className="logo-wrapper">
              <img src={data.companyLogo} alt={data.company} className="company-logo" />
            </div>
            <div className="header-info">
              <h3 className="company-name">{data.company}</h3>
              <h4 className="role-name">{data.role}</h4>
            </div>
          </div>

          <span className="date-badge">{data.date}</span>

          <p className="description">{data.desc}</p>

          {/* Add skills/bullets nicely */}
        </div>
      </motion.div>

      <style jsx>{`
        .timeline-item {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          margin-bottom: 60px;
          position: relative;
        }

        .timeline-node {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #0f172a;
          border: 2px solid #6366f1;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
        }

        .node-inner {
            width: 8px;
            height: 8px;
            background: #a855f7;
            border-radius: 50%;
        }

        .timeline-content {
          width: 45%;
        }

        .left .timeline-content {
          margin-right: auto;
          margin-left: 0;
          padding-right: 40px;
        }

        .right .timeline-content {
          margin-left: auto;
          margin-right: 0;
          padding-left: 40px;
        }

        .experience-card {
            padding: 30px;
            border-radius: 20px;
            position: relative;
            background: rgba(30, 41, 59, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: transform 0.3s ease;
        }
        
        .experience-card:hover {
            transform: translateY(-5px);
            background: rgba(30, 41, 59, 0.6);
            border-color: rgba(99, 102, 241, 0.3);
            box-shadow: 0 10px 40px -10px rgba(0,0,0,0.5);
        }

        .card-header {
           display: flex;
           align-items: center;
           gap: 15px;
           margin-bottom: 20px;
        }

        .logo-wrapper {
           width: 60px; 
           height: 60px;
           background: rgba(255,255,255,0.05);
           border-radius: 12px;
           padding: 10px;
           border: 1px solid rgba(255,255,255,0.1);
        }

        .company-logo {
           width: 100%;
           height: 100%;
           object-fit: contain;
        }

        .company-name {
           margin: 0;
           font-size: 1.4rem;
           color: #fff;
           font-weight: 700;
        }

        .role-name {
           margin: 5px 0 0 0;
           font-size: 1rem;
           color: #a78bfa;
           font-weight: 500;
        }

        .date-badge {
           display: inline-block;
           padding: 6px 14px;
           background: rgba(255, 255, 255, 0.05);
           border-radius: 30px;
           font-size: 0.85rem;
           color: #94a3b8;
           margin-bottom: 20px;
           border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .description {
           color: #cbd5e1;
           line-height: 1.6;
           font-size: 0.95rem;
        }

        @media (max-width: 992px) {
           .timeline-item {
              justify-content: flex-start;
           }
           
           .timeline-node {
              left: 30px;
           }

           .timeline-content {
              width: calc(100% - 80px); /* Full width minus margin */
              margin-left: 80px !important; /* Push past the line */
              margin-right: 0 !important;
              padding: 0 !important;
           }
        }
      `}</style>
    </div>
  );
};

export default Experience;
