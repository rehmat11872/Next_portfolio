'use client';

import React, { useRef } from 'react';
import { CardBody } from 'reactstrap';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjectType } from '../types/sections';

interface ProjectsCardProps extends ProjectType {
  index?: number;
}

const ProjectsCard = ({ name, desc, github, link, image, index = 0 }: ProjectsCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const getProjectType = () => {
    const lowerName = name.toLowerCase();
    const lowerDesc = desc.toLowerCase();
    if (lowerName.includes('ai') || lowerDesc.includes('ai') || lowerDesc.includes('gpt') || lowerDesc.includes('llm')) {
      return { label: 'AI Architecture', color: '#ec4899', gradient: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)' };
    }
    if (lowerName.includes('flutter') || lowerDesc.includes('mobile')) {
      return { label: 'Mobile App', color: '#06b6d4', gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)' };
    }
    if (lowerDesc.includes('backend') || lowerDesc.includes('api')) {
      return { label: 'Backend System', color: '#10b981', gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)' };
    }
    return { label: 'Full Stack', color: '#6366f1', gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' };
  };

  const projectType = getProjectType();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1200 }}
      className="project-card-container"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="project-3d-wrapper"
      >
        <div className="project-card glass-card">
          {image ? (
            <div className="card-image-wrapper">
              <img src={image} alt={name} className="project-cover-image" />
              <div className="project-overlay" />
              <div className="project-type-badge">
                {projectType.label}
              </div>
            </div>
          ) : (
            <div className="card-image-placeholder" style={{ background: `radial-gradient(circle at 50% 120%, ${projectType.color}40, transparent 70%)` }}>
              <div className="project-type-badge">
                {projectType.label}
              </div>
              <div className="placeholder-icon">
                <i className="fa fa-code" aria-hidden="true" />
              </div>
            </div>
          )}

          <CardBody className="project-card-body">
            <h3 className="project-title">{name}</h3>
            <p className="project-desc">{desc.length > 180 ? `${desc.substring(0, 180)}...` : desc}</p>

            <div className="project-actions">
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  className="btn-github"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa fa-github" />
                </motion.a>
              )}
              {link && (
                <motion.a
                  href={link}
                  target="_blank"
                  className="btn-live"
                  whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${projectType.color}80` }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa fa-external-link" />
                  View Project
                </motion.a>
              )}
            </div>
          </CardBody>
        </div>
      </motion.div>

      <style jsx>{`
        .project-card-container {
           height: 100%;
        }

        .project-3d-wrapper {
           height: 100%;
        }

        .project-card {
           /* glass-card class handles the base styles now */
           /* We remove overrides that conflict with the borderless glassy look */
           height: 100%;
           display: flex;
           flex-direction: column;
           border: none !important; /* Force borderless */
        }

        .card-image-wrapper {
          height: 220px;
          width: 100%;
          position: relative;
          overflow: hidden;
          background: #020617;
        }

        .project-overlay {
           position: absolute;
           inset: 0;
           background: linear-gradient(to bottom, transparent 0%, rgba(2, 6, 23, 0.8) 100%);
           z-index: 1;
        }

        .project-cover-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .project-card:hover .project-cover-image {
          transform: scale(1.15);
        }

        /* NEW BADGE STYLE: Minimalist Glass Pill */
        .project-type-badge {
           position: absolute;
           top: 20px;
           right: 20px;
           padding: 8px 16px;
           border-radius: 30px;
           background: rgba(255, 255, 255, 0.1);
           backdrop-filter: blur(10px);
           border: 1px solid rgba(255, 255, 255, 0.2);
           font-size: 0.7rem;
           font-weight: 700;
           color: #fff;
           text-transform: uppercase;
           letter-spacing: 1px;
           z-index: 2;
           box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .card-image-placeholder {
           height: 220px;
           width: 100%;
           position: relative;
           display: flex;
           align-items: center;
           justify-content: center;
        }
        
        .placeholder-icon {
           font-size: 3rem;
           color: rgba(255, 255, 255, 0.1);
        }

        :global(.project-card-body) {
           padding: 24px 30px 30px;
           flex: 1;
           display: flex;
           flex-direction: column;
           z-index: 2;
        }

        .project-title {
           color: #fff;
           font-size: 1.5rem;
           font-weight: 800;
           font-family: var(--font-primary);
           margin-bottom: 12px;
           /* Deep Sea Gradient Text */
           background: linear-gradient(90deg, #fff, #94a3b8);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
        }

        .project-desc {
           color: #94a3b8;
           font-size: 0.95rem;
           line-height: 1.7;
           margin-bottom: 30px;
           font-weight: 400;
        }

        .project-actions {
           display: flex;
           gap: 15px;
           margin-top: auto;
        }

        :global(.btn-github) {
           width: 45px;
           height: 45px;
           border-radius: 50%;
           background: rgba(255,255,255,0.05);
           display: flex;
           align-items: center;
           justify-content: center;
           color: #fff;
           font-size: 1.2rem;
           border: 1px solid rgba(255,255,255,0.1);
           transition: all 0.3s ease;
        }

        :global(.btn-live) {
           padding: 10px 24px;
           height: 45px;
           border-radius: 50px;
           background: linear-gradient(90deg, #6366f1, #a855f7);
           display: flex;
           align-items: center;
           justify-content: center;
           gap: 10px;
           color: #fff;
           font-weight: 600;
           font-size: 0.9rem;
           text-decoration: none;
           box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
           border: none;
           transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
           .card-image-placeholder {
              height: 150px;
           }
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectsCard;
