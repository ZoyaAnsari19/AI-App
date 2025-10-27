import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  const footerLinks = {
    products: [
      { name: 'AI Note Taker', href: '/ai-note-taker' },
      { name: 'For Students', href: '/for-students' },
      { name: 'Scholarship', href: '/scholarship' },
      { name: 'App Store', href: 'https://apps.apple.com/us/app/turbolearn-ai-note-taker/id6502794561', external: true },
      { name: 'Google Play', href: 'https://play.google.com/store/apps/details?id=ai.turbolearn', external: true }
    ],
    company: [
      { name: 'Sign Up', href: '/SignUp.jsx' },
      { name: 'Sign In', href: '/login' },
      { name: 'Rebrand: Turbolearn AI → Turbo AI', href: '/turbolearn-ai' },
      { name: 'Blog', href: '/blog' }
    ],
    legal: [
      { name: 'Privacy', href: 'https://www.turbo.ai/privacy-policy' },
      { name: 'Terms', href: 'https://www.turbo.ai/terms-of-service' }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer__gradient" />
      
      <div className="footer__container">
        <div className="footer__content">
          {/* Left Section */}
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              Turbo AI
            </a>
            <p className="footer__tagline">Never write alone again</p>
            <a href="/signup" className="footer__cta-link">
              <div className="footer__cta-button">
                <span className="footer__cta-text">Get Started - It's Free</span>
              </div>
            </a>
          </div>

          {/* Right Section - Links */}
          <div className="footer__links-grid">
            {/* Products */}
            <div className="footer__link-column">
              <h4 className="footer__column-title">Products</h4>
              <ul className="footer__link-list">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="footer__link"
                      {...(link.external && {
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      })}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="footer__link-column">
              <h4 className="footer__column-title">Company</h4>
              <ul className="footer__link-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer__link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="footer__link-column">
              <h4 className="footer__column-title">Legal</h4>
              <ul className="footer__link-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer__link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__copyright">
          © 2025 Turbolearn LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;