'use client';

import React from 'react';
import { projects } from '../portfolio';
import { Container } from 'reactstrap';
import ProjectsCard from '../components/ProjectsCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    projects && (
      <section className="section section-lg" ref={ref}>
        <Container>
          <div className="d-flex flex-column align-items-center justify-content-center mb-5 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-3"
            >
              <span className="section-badge">Featured Work</span>
            </motion.div>

            <motion.h1
              className="display-2 text-white mb-3"
              style={{ fontFamily: "var(--font-primary)", fontWeight: 800, letterSpacing: "-2px" }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              My <span className="gradient-text">Masterpieces</span>
            </motion.h1>

            <motion.div
              className="section-line mb-4"
              initial={{ width: 0 }}
              animate={inView ? { width: '100px' } : {}}
              transition={{ duration: 0.8 }}
            />

            <motion.p
              className="text-white-50"
              style={{ maxWidth: '650px', fontSize: '1.2rem', lineHeight: '1.6' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A selection of my best work across AI, web development, and automation. Each project represents a unique challenge solved.
            </motion.p>
          </div>

          <div className="projects-grid">
            {projects.map((data, i) => (
              <ProjectsCard key={i} {...data} index={i} />
            ))}
          </div>
        </Container>

        <style jsx>{`
          .section-badge {
            background: rgba(99, 102, 241, 0.1);
            color: #8b5cf6;
            padding: 8px 20px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            border: 1px solid rgba(99, 102, 241, 0.2);
          }

          .gradient-text {
            background: linear-gradient(135deg, #fff 30%, #a855f7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          
          .section-line {
             height: 4px;
             background: linear-gradient(90deg, #6366f1, #ec4899);
             border-radius: 2px;
          }

          .projects-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px; /* Increased gap */
            perspective: 1000px;
          }

          @media (max-width: 992px) {
            .projects-grid {
              grid-template-columns: 1fr;
            }
            .display-2 {
               font-size: 3rem;
            }
          }
        `}</style>
      </section>
    )
  );
};

export default Projects;
