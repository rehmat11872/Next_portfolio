'use client';

import React from 'react';
import { Card, CardBody, Badge } from 'reactstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EducationType } from '../types/sections';

const EducationCard = ({
  schoolName,
  subHeader,
  duration,
  desc,
  grade,
  descBullets,
}: EducationType) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="glass-card card-lift--hover shadow mt-4 education-card border-0">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <motion.h5
                className="text-white font-weight-bold"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {schoolName}
              </motion.h5>
              <h6 className="text-white-50">{subHeader}</h6>
              <Badge color="info" className="mr-1">
                {duration}
              </Badge>
              {grade && (
                <Badge color="primary" className="mr-1">
                  {grade}
                </Badge>
              )}
              <p className="description mt-3 text-white-50">{desc}</p>
              <ul className="text-white-50">
                {descBullets
                  ? descBullets.map((desc) => {
                    return <li key={desc}>{desc}</li>;
                  })
                  : null}
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default EducationCard;
