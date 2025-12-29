import React, { useRef, useState } from 'react';
import classnames from 'classnames';
import { Button, Input, Row, Col } from 'reactstrap';

export const ContactUs = () => {
  // Simplified logic for demo
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! I'll be in touch.");
  }

  return (
    <div className="compact-contact-wrapper">
      <Row className="align-items-center">
        <Col lg="6">
          <h3 className="contact-title">Let&apos;s build something epic.</h3>
          <p className="contact-subtitle">Always open for new opportunities and collaborations.</p>
        </Col>

        <Col lg="6">
          <form onSubmit={handleSubmit} className="d-flex gap-3">
            <Input
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contact-input"
            />
            <Button className="btn-send" type="submit">
              Lets Talk
            </Button>
          </form>
        </Col>
      </Row>

      <style jsx>{`
            .compact-contact-wrapper {
                padding: 40px;
                background: linear-gradient(90deg, rgba(6, 182, 212, 0.05), rgba(168, 85, 247, 0.05));
                border-radius: 20px;
                border: 1px solid rgba(255,255,255,0.05);
            }

            .contact-title {
                font-family: var(--font-primary);
                font-weight: 700;
                color: #fff;
                font-size: 2rem;
                margin-bottom: 5px;
            }

            .contact-subtitle {
                color: #94a3b8;
                font-size: 1rem;
                margin: 0;
            }

            :global(.contact-input) {
                background: rgba(0,0,0,0.3) !important;
                border: 1px solid rgba(255,255,255,0.1) !important;
                color: #fff !important;
                height: 50px;
                border-radius: 12px;
            }

            :global(.btn-send) {
                background: #fff !important;
                color: #000 !important;
                font-weight: 700;
                border-radius: 12px;
                padding: 0 30px;
                height: 50px;
                border: none;
                white-space: nowrap;
            }
            
            /* Hide the default empty section rendering in index.tsx if we use this component there */
            :global(.section-shaped) {
                display: none; 
            }
        `}</style>
    </div>
  );
};

export default ContactUs;
