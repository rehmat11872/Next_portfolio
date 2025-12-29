import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { socialLinks } from '../portfolio';
import ContactUs from './ContactUs'; // Integrated Contact

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-glass-container">
        <Container>
          <div className="footer-content-wrapper">
            {/* 1. Contact Section Integration */}
            <div className="footer-contact-block">
              <ContactUs />
            </div>

            <div className="footer-divider" />

            {/* 2. Footer Links & Copyright */}
            <Row className="align-items-center justify-content-between py-4">
              <Col md="6">
                <div className="brand-wrapper">
                  <span className="brand-text">Rehmat Qadeer</span>
                  <span className="copyright-text">© {new Date().getFullYear()} All Rights Reserved.</span>
                </div>
              </Col>

              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  {socialLinks.github && (
                    <NavItem>
                      <NavLink href={socialLinks.github} target="_blank">
                        <i className="fa fa-github" />
                      </NavLink>
                    </NavItem>
                  )}
                  {socialLinks.linkedin && (
                    <NavItem>
                      <NavLink href={socialLinks.linkedin} target="_blank">
                        <i className="fa fa-linkedin" />
                      </NavLink>
                    </NavItem>
                  )}
                  {socialLinks.instagram && (
                    <NavItem>
                      <NavLink href={socialLinks.instagram} target="_blank">
                        <i className="fa fa-instagram" />
                      </NavLink>
                    </NavItem>
                  )}
                </Nav>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <style jsx>{`
        .footer-section {
           padding-top: 40px; 
           padding-bottom: 20px;
           position: relative;
        }

        .footer-glass-container {
           background: rgba(2, 6, 23, 0.8);
           border-top: 1px solid rgba(255,255,255,0.05);
           backdrop-filter: blur(20px);
        }

        .footer-contact-block {
            margin-bottom: 30px;
        }
        
        .footer-divider {
            height: 1px;
            background: rgba(255,255,255,0.05);
            width: 100%;
        }

        .brand-text {
            display: block;
            font-family: var(--font-primary);
            font-weight: 700;
            font-size: 1.25rem;
            color: #fff;
            margin-bottom: 5px;
        }

        .copyright-text {
            color: #64748b;
            font-size: 0.85rem;
        }

        :global(.nav-footer .nav-link) {
            color: #94a3b8;
            font-size: 1.2rem;
            transition: all 0.2s;
            padding: 0 15px;
        }

        :global(.nav-footer .nav-link:hover) {
            color: #06b6d4; 
            transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
