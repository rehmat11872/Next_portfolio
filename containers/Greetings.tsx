'use client';

import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';

const Greetings = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main ref={ref} className="hero-wrapper">
      <motion.div className="hero-section" style={{ y, opacity }}>
        {/* Animated Background Elements */}
        <div className="hero-mesh"></div>
        <div className="hero-bg-effects">
          <motion.div
            className="glow-orb orb-1"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="glow-orb orb-2"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <Container className="hero-content-wrapper">
          <Row className="align-items-center min-vh-100">
            <Col lg="7">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Status Badge */}
                <motion.div
                  className="status-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="pulse-dot"></span>
                  <span className="badge-text">AVAILABLE FOR HIRE</span>
                </motion.div>

                {/* Main Heading with Gradient */}
                <motion.h1
                  className="hero-title"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Building the Future
                  <br />
                  <span className="gradient-text">One Line at a Time</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Elite Full-Stack Developer specializing in <span className="highlight">AI Solutions</span>,
                  <span className="highlight"> Cloud Architecture</span>, and
                  <span className="highlight"> Premium Web Experiences</span>
                </motion.p>

                {/* Stats Staggered */}
                <motion.div
                  className="hero-stats-container"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{
                    show: {
                      transition: {
                        staggerChildren: 0.2,
                        delayChildren: 0.5
                      }
                    }
                  }}
                >
                  <div className="stats-row">
                    <motion.div
                      className="stat-item"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                      }}
                    >
                      <div className="stat-number">8+</div>
                      <div className="stat-label">Years Experience</div>
                    </motion.div>

                    <motion.div
                      className="stat-divider"
                      variants={{
                        hidden: { height: 0, opacity: 0 },
                        show: { height: 40, opacity: 1, transition: { duration: 0.4 } }
                      }}
                    />

                    <motion.div
                      className="stat-item"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                      }}
                    >
                      <div className="stat-number">50+</div>
                      <div className="stat-label">Projects Delivered</div>
                    </motion.div>

                    <motion.div
                      className="stat-divider"
                      variants={{
                        hidden: { height: 0, opacity: 0 },
                        show: { height: 40, opacity: 1, transition: { duration: 0.4 } }
                      }}
                    />

                    <motion.div
                      className="stat-item"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                      }}
                    >
                      <div className="stat-number">100%</div>
                      <div className="stat-label">Client Satisfaction</div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="premium-btn-container"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <MagneticButton href="#contact" variant="primary">
                    Start a Project
                    <i className="fa fa-arrow-right ml-2" style={{ fontSize: '1.2rem' }}></i>
                  </MagneticButton>
                  <MagneticButton href="#projects" variant="secondary">
                    View My Work
                  </MagneticButton>
                </motion.div>
              </motion.div>
            </Col>

            {/* Right Side - 3D Visual */}
            <Col lg="5" className="d-none d-lg-block">
              <motion.div
                className="hero-visual-3d"
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                {/* Floating Code Window */}
                <motion.div
                  className="code-window"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="window-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    <span className="window-title">app.tsx</span>
                  </div>
                  <div className="window-body">
                    <code>
                      <span className="code-purple">const</span> <span className="code-blue">magic</span> = <span className="code-yellow">await</span> <span className="code-pink">build</span>();
                      <br />
                      <span className="code-purple">return</span> <span className="code-green">&lt;Success /&gt;</span>;
                    </code>
                  </div>
                </motion.div>

                {/* Floating Tech Icons */}
                <motion.div
                  className="tech-icon icon-1"
                  animate={{ rotate: 360, y: [-20, 20, -20] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <i className="fa fa-react" style={{ color: '#61DAFB' }}></i>
                </motion.div>
                <motion.div
                  className="tech-icon icon-2"
                  animate={{ rotate: -360, y: [20, -20, 20] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <i className="fa fa-python" style={{ color: '#3776AB' }}></i>
                </motion.div>
                <motion.div
                  className="tech-icon icon-3"
                  animate={{ y: [-15, 15, -15], scale: [1, 1.1, 1] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <i className="fa fa-database" style={{ color: '#00758F' }}></i>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        >
          <div className="mouse"></div>
          <span>Scroll to explore</span>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .hero-wrapper {
          position: relative;
          overflow: hidden;
        }

        .hero-section {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 100px 0 50px;
        }

        .hero-bg-effects {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.6;
        }

        .orb-1 {
          top: 10%;
          right: 10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent);
        }

        .orb-2 {
          bottom: 10%;
          left: 10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent);
        }

        .orb-3 {
          top: 50%;
          left: 50%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent);
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 2;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 20px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 50px;
          margin-bottom: 30px;
          cursor: default;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
          }
        }

        .badge-text {
          color: #10b981;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 1px;
        }

        .hero-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3.5rem, 8vw, 6.5rem) !important;
          font-weight: 900;
          line-height: 0.95;
          margin-bottom: 35px;
          color: #fff;
          letter-spacing: -4px;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));
        }

        .gradient-text {
          background: linear-gradient(135deg, #a855f7 0%, #06b6d4 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: #94a3b8;
          max-width: 600px;
          line-height: 1.7;
          margin-bottom: 40px;
          font-weight: 300;
        }

        .highlight {
          color: #fff;
          font-weight: 600;
        }

        .stats-row {
          display: flex;
          gap: 50px;
          align-items: center;
          margin-bottom: 50px;
          flex-wrap: nowrap; /* Force one line */
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #a855f7, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          margin-top: 5px;
        }

        .stat-divider {
          width: 1px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        /* 3D Visual Elements */
        .hero-visual-3d {
          position: relative;
          height: 500px;
        }

        .code-window {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotateY(-5deg);
          width: 350px;
          background: rgba(15, 23, 42, 0.9);
          border-radius: 15px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(99, 102, 241, 0.3);
          backdrop-filter: blur(20px);
        }

        .window-header {
          padding: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot.red {background: #ff5f56;}
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }

        .window-title {
          margin-left: auto;
          color: #64748b;
          font-size: 0.85rem;
        }

        .window-body {
          padding: 20px;
          font-family: 'Fira Code', monospace;
          font-size: 1rem;
          line-height: 1.8;
        }

        .code-purple { color: #c084fc; }
        .code-blue { color: #60a5fa; }
        .code-yellow { color: #fbbf24; }
        .code-pink { color: #f472b6; }
        .code-green { color: #4ade80; }

        .tech-icon {
          position: absolute;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .icon-1 { top: 10%; right: 10%; }
        .icon-2 { bottom: 20%; left: 10%; }
        .icon-3 { top: 60%; right: 20%; }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: #64748b;
          font-size: 0.85rem;
        }

        .mouse {
          width: 24px;
          height: 40px;
          border: 2px solid #64748b;
          border-radius: 12px;
          position: relative;
        }

        .mouse::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 8px;
          background: #64748b;
          border-radius: 2px;
        }

        @media (max-width: 991px) {
          .hero-title {
            font-size: 3.5rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
          .stats-row {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </main>
  );
};

export default Greetings;
