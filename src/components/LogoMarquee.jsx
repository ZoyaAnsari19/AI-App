import React from 'react';
import './styles/LogoMarquee.css'
function LogoMarquee() {
  const logos = [
    { name: 'Google', src: 'https://assets.api-turbo.ai/website/logos/google.svg' },
    { name: 'Harvard University', src: 'https://assets.api-turbo.ai/website/logos/harvard.svg' },
    { name: 'Goldman Sachs', src: 'https://assets.api-turbo.ai/website/logos/goldmansachs.svg' },
    { name: 'MIT', src: 'https://assets.api-turbo.ai/website/logos/mit.svg' },
    { name: 'McKinsey', src: 'https://assets.api-turbo.ai/website/logos/mckinsey.svg' },
    { name: 'Yale University', src: 'https://assets.api-turbo.ai/website/logos/yale.svg' },
    { name: 'Deloitte', src: 'https://assets.api-turbo.ai/website/logos/deloitte.svg' },
    { name: 'Duke University', src: 'https://assets.api-turbo.ai/website/logos/duke.svg' },
    { name: 'Northwestern University', src: 'https://assets.api-turbo.ai/website/logos/northwestern.svg' },
    { name: 'UT Austin', src: 'https://assets.api-turbo.ai/website/logos/utaustin.svg' }
  ];

  // Only first 6 logos for mobile grid
  const mobileLogos = logos.slice(0, 6);
  return (
    <>


      <section className="logo-section">
        <h2 className="logo-heading">
          Turbo AI is trusted by students and professionals at...
        </h2>

        {/* Mobile Grid - Shows only 6 logos */}
        <div className="logo-grid">
          {mobileLogos.map((logo, index) => (
            <div key={`mobile-${index}`} className="logo-grid-item">
              <img
                alt={logo.name}
                loading="lazy"
                width="110"
                height="28"
                decoding="async"
                className="logo-grid-img"
                style={{ color: 'transparent' }}
                src={logo.src}
              />
            </div>
          ))}
        </div>

        {/* Desktop Marquee - Shows all 10 logos scrolling */}
        <div className="logo-marquee-container">
          <div className="logo-marquee-wrapper">
            {/* First set */}
            {logos.map((logo, index) => (
              <img
                key={`logo-1-${index}`}
                alt={logo.name}
                loading="lazy"
                width="150"
                height="48"
                decoding="async"
                className="logo-marquee-img"
                style={{ color: 'transparent' }}
                src={logo.src}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <img
                key={`logo-2-${index}`}
                alt={logo.name}
                loading="lazy"
                width="150"
                height="48"
                decoding="async"
                className="logo-marquee-img"
                style={{ color: 'transparent' }}
                src={logo.src}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default LogoMarquee;