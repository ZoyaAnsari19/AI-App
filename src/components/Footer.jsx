import React from "react";

const Footer = () => {
  const footerLinks = {
    products: [
      { name: "AI Note Taker", href: "/ai-note-taker" },
      { name: "For Students", href: "/for-students" },
      { name: "Scholarship", href: "/scholarship" },
      {
        name: "App Store",
        href: "https://apps.apple.com/us/app/turbolearn-ai-note-taker/id6502794561",
        external: true,
      },
      {
        name: "Google Play",
        href: "https://play.google.com/store/apps/details?id=ai.turbolearn",
        external: true,
      },
    ],
    company: [
      { name: "Sign Up", href: "/SignUp.jsx" },
      { name: "Sign In", href: "/login" },
      { name: "Rebrand: Turbolearn AI → Turbo AI", href: "/turbolearn-ai" },
      { name: "Blog", href: "/blog" },
    ],
    legal: [
      { name: "Privacy", href: "https://www.turbo.ai/privacy-policy" },
      { name: "Terms", href: "https://www.turbo.ai/terms-of-service" },
    ],
  };

  // Inline styles for the component
  const styles = `
    /* Footer Component Styles */
    .footer {
      position: relative;
      padding-top: 0;
      padding-bottom: 1rem;
      overflow: hidden;
      background: #080F15;
    }

    .footer__gradient {
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at bottom, rgba(246, 146, 254, 0.15) 0%, transparent 50%);
      pointer-events: none;
    }

    .footer__container {
      padding: 0 1rem;
      position: relative;
      z-index: 1;
    }

    /* Content Grid */
    .footer__content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    /* Brand Section */
    .footer__brand {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .footer__logo {
      font-size: 1rem;
      font-weight: 500;
      color: #F9FAFB;
      font-family: 'Poppins', sans-serif;
      text-decoration: none;
      transition: all 0.3s ease;
      user-select: none;
      -webkit-user-select: none;
    }

    .footer__logo:hover {
      opacity: 0.8;
    }

    .footer__tagline {
      margin-top: 1.5rem;
      color: #d1d5db;
      font-size: 1rem;
    }

    .footer__cta-link {
      display: inline-block;
      margin-top: 1.5rem;
      text-decoration: none;
    }

    .footer__cta-button {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 0.75rem;
      padding: 0.5rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.5rem;
      width: max-content;
      transition: all 0.2s ease-in-out;
    }

    .footer__cta-button:hover {
      background: rgba(255, 255, 255, 0.08);
    }

    .footer__cta-text {
      color: #ffffff;
      font-weight: 700;
      font-size: 0.875rem;
      white-space: nowrap;
    }

    /* Links Grid */
    .footer__links-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
    }

    .footer__link-column {
      text-align: center;
    }

    .footer__column-title {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.75rem;
      font-weight: 400;
      margin-bottom: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .footer__link-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .footer__link {
      color: rgba(255, 255, 255, 0.6);
      font-weight: 300;
      font-size: 0.75rem;
      text-decoration: none;
      transition: color 0.2s ease;
      display: inline-block;
    }

    .footer__link:hover {
      color: rgba(255, 255, 255, 0.8);
    }

    /* Copyright */
    .footer__copyright {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 3rem;
      padding-top: 1.5rem;
      padding-bottom: 2rem;
      text-align: center;
      color: #9ca3af;
      font-size: 0.75rem;
    }

    /* Tablet Styles */
    @media (min-width: 640px) {
      .footer {
        padding-top: 4rem;
      }

      .footer__container {
        padding: 0 1.5rem;
      }

      .footer__brand {
        align-items: flex-start;
        text-align: left;
      }

      .footer__logo {
        font-size: 1.125rem;
      }

      .footer__links-grid {
        gap: 2rem;
      }

      .footer__link-column {
        text-align: left;
      }

      .footer__column-title {
        font-size: 0.875rem;
        margin-bottom: 1rem;
      }

      .footer__link-list {
        gap: 0.5rem;
      }

      .footer__link {
        font-size: 0.875rem;
      }

      .footer__cta-text {
        font-size: 1rem;
      }

      .footer__cta-button {
        height: 3rem;
        padding: 0.625rem 2rem;
      }

      .footer__copyright {
        margin-top: 4rem;
        font-size: 0.875rem;
      }
    }

    /* Desktop Styles */
    @media (min-width: 1024px) {
      .footer__container {
        padding: 0 2rem;
      }

      .footer__content {
        grid-template-columns: repeat(2, 1fr);
        gap: 4rem;
      }

      .footer__logo {
        font-size: 1.25rem;
      }
    }

    /* Extra Large Screens */
    @media (min-width: 1280px) {
      .footer__container {
        max-width: 1280px;
        margin: 0 auto;
      }
    }

    /* Focus States for Accessibility */
    .footer__link:focus,
    .footer__cta-link:focus {
      outline: 2px solid #c084fc;
      outline-offset: 2px;
      border-radius: 0.25rem;
    }

    .footer__link:focus:not(:focus-visible),
    .footer__cta-link:focus:not(:focus-visible) {
      outline: none;
    }

    /* Reduced Motion Support */
    @media (prefers-reduced-motion: reduce) {
      .footer__cta-button,
      .footer__link {
        transition: none;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <footer className='footer'>
        <div className='footer__gradient' />

        <div className='footer__container'>
          <div className='footer__content'>
            {/* Left Section */}
            <div className='footer__brand'>
              <a href='/' className='footer__logo'>
                Turbo AI
              </a>
              <p className='footer__tagline'>Never write alone again</p>
              <a href='/signup' className='footer__cta-link'>
                <div className='footer__cta-button'>
                  <span className='footer__cta-text'>
                    Get Started - It's Free
                  </span>
                </div>
              </a>
            </div>

            {/* Right Section - Links */}
            <div className='footer__links-grid'>
              {/* Products */}
              <div className='footer__link-column'>
                <h4 className='footer__column-title'>Products</h4>
                <ul className='footer__link-list'>
                  {footerLinks.products.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className='footer__link'
                        {...(link.external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className='footer__link-column'>
                <h4 className='footer__column-title'>Company</h4>
                <ul className='footer__link-list'>
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className='footer__link'>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className='footer__link-column'>
                <h4 className='footer__column-title'>Legal</h4>
                <ul className='footer__link-list'>
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className='footer__link'>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className='footer__copyright'>
            © 2025 Turbolearn LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
