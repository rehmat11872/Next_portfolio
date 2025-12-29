import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <div className="profile-section">
      <Container>
        <div className="holographic-card-wrapper">
          <div className="holo-card">
            <div className="holo-content">
              <Row className="align-items-center">
                <Col lg="4" className="text-center mb-4 mb-lg-0">
                  <div className="avatar-wrapper">
                    <img
                      src={avatar_url}
                      alt="Profile"
                      className="profile-img"
                    />
                    <div className="online-badge">
                      <span className="blink-dot"></span> Available
                    </div>
                  </div>
                </Col>

                <Col lg="8">
                  <div className="text-content">
                    <h2 className="holo-title">Ready to <span className="text-gradient">Collaborate?</span></h2>
                    <p className="holo-bio">
                      {bio || "Discuss a project or just want to say hi? My inbox is open for all."}
                    </p>

                    <div className="info-badges">
                      <div className="info-pill">
                        <i className="ni ni-pin-3 location-icon" />
                        <span>{location}</span>
                      </div>
                      <div className="info-pill">
                        <i className="ni ni-laptop-code-25" />
                        <span>Remote / Hybrid</span>
                      </div>
                    </div>

                    <div className="social-connect mt-4">
                      <SocialLinks />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Holographic Effects */}
            <div className="holo-border" />
            <div className="holo-glow" />
          </div>
        </div>
      </Container>

      <style jsx>{`
        .profile-section {
            padding: 40px 0;
            position: relative;
        }

        .holographic-card-wrapper {
            padding: 2px;
            background: linear-gradient(135deg, rgba(6, 182, 212, 0.5), rgba(168, 85, 247, 0.5));
            border-radius: 30px;
            box-shadow: 0 0 50px -10px rgba(168, 85, 247, 0.3);
        }

        .holo-card {
            background: #020617; /* Deep Void */
            border-radius: 28px;
            position: relative;
            overflow: hidden;
            padding: 50px;
        }

        .avatar-wrapper {
            position: relative;
            display: inline-block;
        }

        .profile-img {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            border: 4px solid rgba(255,255,255,0.1);
            object-fit: cover;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .online-badge {
            position: absolute;
            bottom: 15px;
            right: 15px;
            background: rgba(16, 185, 129, 0.9);
            color: #fff;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 6px;
            border: 2px solid #020617;
        }

        .blink-dot {
            width: 8px;
            height: 8px;
            background: #fff;
            border-radius: 50%;
            animation: blink 2s infinite;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
        }

        .holo-title {
            font-family: 'Outfit', sans-serif;
            font-weight: 800;
            font-size: 3rem;
            color: #fff;
            margin-bottom: 15px;
            line-height: 1.1;
        }

        .text-gradient {
             background: linear-gradient(90deg, #38bdf8, #818cf8);
             -webkit-background-clip: text;
             -webkit-text-fill-color: transparent;
        }

        .holo-bio {
            font-size: 1.25rem;
            color: #94a3b8;
            max-width: 600px;
            line-height: 1.6;
        }

        .info-badges {
            display: flex;
            gap: 15px;
            margin-top: 25px;
            flex-wrap: wrap;
        }

        .info-pill {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 50px;
            color: #cbd5e1;
            font-size: 0.95rem;
        }

        .holo-glow {
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
            pointer-events: none;
        }
        
        :global(.social-connect .btn-icon-only) {
            background: rgba(255,255,255,0.05) !important;
            border: 1px solid rgba(255,255,255,0.1) !important;
            color: #fff !important;
        }
        
         :global(.social-connect .btn-icon-only:hover) {
            background: #fff !important;
            color: #000 !important;
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(255,255,255,0.2) !important;
        }

        @media (max-width: 991px) {
            .holo-title { font-size: 2.5rem; text-align: center; }
            .holo-bio { text-align: center; margin: 0 auto; }
            .info-badges { justify-content: center; }
            .social-connect { text-align: center; }
        }
      `}</style>
    </div>
  );
};

export default GithubProfileCard;
