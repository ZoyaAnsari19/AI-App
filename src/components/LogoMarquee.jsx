import React from "react";

function LogoMarquee() {
  const logos = [
    {
      name: "Google",
      src: "https://assets.api-turbo.ai/website/logos/google.svg",
    },
    {
      name: "Harvard University",
      src: "https://assets.api-turbo.ai/website/logos/harvard.svg",
    },
    {
      name: "Goldman Sachs",
      src: "https://assets.api-turbo.ai/website/logos/goldmansachs.svg",
    },
    { name: "MIT", src: "https://assets.api-turbo.ai/website/logos/mit.svg" },
    {
      name: "McKinsey",
      src: "https://assets.api-turbo.ai/website/logos/mckinsey.svg",
    },
    {
      name: "Yale University",
      src: "https://assets.api-turbo.ai/website/logos/yale.svg",
    },
    {
      name: "Deloitte",
      src: "https://assets.api-turbo.ai/website/logos/deloitte.svg",
    },
    {
      name: "Duke University",
      src: "https://assets.api-turbo.ai/website/logos/duke.svg",
    },
    {
      name: "Northwestern University",
      src: "https://assets.api-turbo.ai/website/logos/northwestern.svg",
    },
    {
      name: "UT Austin",
      src: "https://assets.api-turbo.ai/website/logos/utaustin.svg",
    },
  ];

  // Inline styles for the component
  const styles = `
    @keyframes infinite-scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    .logo-section {
      margin-top: 3rem;
      width: 100%;
      overflow: hidden;
    }

    @media (min-width: 480px) {
      .logo-section {
        margin-top: 3.5rem;
      }
    }

    @media (min-width: 640px) {
      .logo-section {
        margin-top: 4rem;
      }
    }

    @media (min-width: 768px) {
      .logo-section {
        margin-top: 4.5rem;
      }
    }

    .logo-heading {
      text-align: center;
      font-size: 1rem;
      font-weight: 700;
      color: white;
      margin-bottom: 2.5rem;
      padding: 0 1rem;
      margin-top: 1rem;
      line-height: 1.4;
    }

    @media (min-width: 480px) {
      .logo-heading {
        font-size: 1.125rem;
        margin-bottom: 3rem;
      }
    }

    @media (min-width: 640px) {
      .logo-heading {
        font-size: 1.25rem;
        margin-bottom: 4rem;
      }
    }

    @media (min-width: 768px) {
      .logo-heading {
        margin-bottom: 5rem;
      }
    }

    /* Mobile Marquee */
    .logo-marquee-container--mobile {
      display: block;
      position: relative;
      width: 100%;
      height: 40px;
      overflow: hidden;
      mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
    }

    @media (min-width: 480px) {
      .logo-marquee-container--mobile {
        height: 44px;
      }
    }

    @media (min-width: 640px) {
      .logo-marquee-container--mobile {
        display: none;
      }
    }

    /* Desktop Marquee */
    .logo-marquee-container--desktop {
      display: none;
    }

    @media (min-width: 640px) {
      .logo-marquee-container--desktop {
        display: block;
        position: relative;
        width: 100%;
        height: 48px;
        overflow: hidden;
        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
      }
    }

    @media (min-width: 768px) {
      .logo-marquee-container--desktop {
        height: 56px;
      }
    }

    @media (min-width: 1024px) {
      .logo-marquee-container--desktop {
        height: 64px;
      }
    }

    .logo-marquee-wrapper {
      position: absolute;
      display: flex;
      gap: 1.5rem;
      align-items: center;
      padding: 0 1.5rem;
      animation: infinite-scroll 20s linear infinite;
      white-space: nowrap;
      width: max-content;
      will-change: transform;
    }

    @media (min-width: 480px) {
      .logo-marquee-wrapper {
        animation: infinite-scroll 18s linear infinite;
      }
    }

    @media (min-width: 768px) {
      .logo-marquee-wrapper {
        animation: infinite-scroll 20s linear infinite;
        gap: 2rem;
        padding: 0 2rem;
      }
    }

    .logo-marquee-img--mobile {
      height: 24px;
      width: auto;
      max-width: 80px;
      object-fit: contain;
      filter: grayscale(1);
      opacity: 0.8;
      flex-shrink: 0;
      transition: all 0.3s ease;
    }

    @media (min-width: 480px) {
      .logo-marquee-img--mobile {
        height: 28px;
        max-width: 90px;
      }
    }

    .logo-marquee-img--desktop {
      height: 32px;
      width: auto;
      max-width: 120px;
      object-fit: contain;
      filter: grayscale(1);
      opacity: 0.8;
      flex-shrink: 0;
      transition: all 0.3s ease;
    }

    @media (min-width: 640px) {
      .logo-marquee-img--desktop {
        height: 36px;
        max-width: 130px;
      }
    }

    @media (min-width: 768px) {
      .logo-marquee-img--desktop {
        height: 42px;
        max-width: 140px;
      }
    }

    @media (min-width: 1024px) {
      .logo-marquee-img--desktop {
        height: 48px;
        max-width: 150px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <section className='logo-section'>
        <h2 className='logo-heading'>
          Turbo AI is trusted by students and professionals at...
        </h2>

        {/* Mobile Marquee - Shows all logos scrolling */}
        <div className='logo-marquee-container logo-marquee-container--mobile'>
          <div className='logo-marquee-wrapper'>
            {/* First set */}
            {logos.map((logo, index) => (
              <img
                key={`mobile-logo-1-${index}`}
                alt={logo.name}
                loading='lazy'
                decoding='async'
                className='logo-marquee-img logo-marquee-img--mobile'
                style={{ color: "transparent" }}
                src={logo.src}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <img
                key={`mobile-logo-2-${index}`}
                alt={logo.name}
                loading='lazy'
                decoding='async'
                className='logo-marquee-img logo-marquee-img--mobile'
                style={{ color: "transparent" }}
                src={logo.src}
              />
            ))}
          </div>
        </div>

        {/* Desktop Marquee - Shows all logos scrolling */}
        <div className='logo-marquee-container logo-marquee-container--desktop'>
          <div className='logo-marquee-wrapper'>
            {/* First set */}
            {logos.map((logo, index) => (
              <img
                key={`desktop-logo-1-${index}`}
                alt={logo.name}
                loading='lazy'
                decoding='async'
                className='logo-marquee-img logo-marquee-img--desktop'
                style={{ color: "transparent" }}
                src={logo.src}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <img
                key={`desktop-logo-2-${index}`}
                alt={logo.name}
                loading='lazy'
                decoding='async'
                className='logo-marquee-img logo-marquee-img--desktop'
                style={{ color: "transparent" }}
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
