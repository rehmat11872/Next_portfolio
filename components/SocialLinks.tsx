import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../portfolio';

const SocialLinks = () => {
  const links = [
    { url: socialLinks.url, icon: 'fa-link', label: 'Website', color: '#fff' },
    { url: socialLinks.linkedin, icon: 'fa-linkedin', label: 'LinkedIn', color: '#0A66C2' },
    { url: socialLinks.github, icon: 'fa-github', label: 'GitHub', color: '#fff' },
    { url: socialLinks.instagram, icon: 'fa-instagram', label: 'Instagram', color: '#E4405F' },
    { url: socialLinks.facebook, icon: 'fa-facebook-square', label: 'Facebook', color: '#1877F2' },
    { url: socialLinks.twitter, icon: 'fa-twitter', label: 'Twitter', color: '#1DA1F2' },
  ].filter(link => link.url); // Only show if URL exists

  return (
    <div className="social-links-container">
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="social-link"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            scale: 1.2,
            y: -5,
            boxShadow: `0 10px 30px ${link.color}40`
          }}
          whileTap={{ scale: 0.9 }}
        >
          <i className={`fa ${link.icon}`} style={{ color: link.color }} />
        </motion.a>
      ))}

      <style jsx>{`
        .social-links-container {
          display: flex;
          gap: 15px;
          align-items: center;
          flex-wrap: wrap;
        }

        .social-link {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .social-link i {
          font-size: 1.3rem;
          z-index: 1;
          position: relative;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
        }

        /* Ripple effect on click */
        .social-link::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .social-link:active::before {
          width: 100px;
          height: 100px;
        }
      `}</style>
    </div>
  );
};

export default SocialLinks;
