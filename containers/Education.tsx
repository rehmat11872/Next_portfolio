'use client';

import React from 'react';
import TimelineItem from '../components/TimelineItem';
import { educationInfo } from '../portfolio';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    educationInfo && (
      <section className="section section-lg" ref={ref}>
        <Container>
          {/* Section Header */}
          <div className="text-center mb-5">
            <motion.span
              className="section-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              🎓 Academic Background
            </motion.span>

            <motion.h1
              className="display-3 text-white mt-3"
              style={{ fontFamily: "var(--font-primary)", fontWeight: 800 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              My <span className="gradient-text">Education</span>
            </motion.h1>

            <motion.p
              className="text-white-50 mt-2"
              style={{ maxWidth: '600px', margin: '0 auto' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My academic journey and qualifications
            </motion.p>
          </div>

          <Row className="row-grid align-items-center justify-content-center">
            <Col lg="10">
              <motion.div
                className="row"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
              >
                {educationInfo.map((info, index) => {
                  return (
                    <Col className="mx-auto" lg="10" key={index}>
                      <TimelineItem education={info} index={index} />
                    </Col>
                  );
                })}
              </motion.div>
            </Col>
          </Row>
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

          .timeline-container {
            padding: 20px 0;
          }
        `}</style>
      </section>
    )
  );
};

export default Education;
