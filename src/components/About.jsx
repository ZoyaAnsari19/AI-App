import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import './styles/About.css'
export default function TurboSection() {
  const [typingProgress, setTypingProgress] = useState(0);
  const sectionRef = useRef(null);
  const targetText = "real assistant.";

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when section is in view
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Start animation when section enters viewport (bottom of section reaches bottom of viewport)
      // Complete when section reaches middle of viewport
      const startPoint = windowHeight;
      const endPoint = windowHeight / 2;
      
      if (sectionTop <= startPoint && sectionTop >= endPoint) {
        // Calculate progress (0 to 1)
        const progress = 1 - ((sectionTop - endPoint) / (startPoint - endPoint));
        const clampedProgress = Math.max(0, Math.min(1, progress));
        setTypingProgress(clampedProgress * targetText.length);
      } else if (sectionTop < endPoint) {
        setTypingProgress(targetText.length);
      } else {
        setTypingProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetText.length]);

  const typingPercentage = (typingProgress / targetText.length) * 100;
   return (
    <>
    <div className="turbo-section" ref={sectionRef}>
        {/* Top Badge */}
        <a className="badge-link" href="/">
          <Sparkles className="sparkle-icon" />
          <span className="badge-text">
            We're now <span className="badge-highlight">AI Learning App</span> (formerly Turbolearn AI)
          </span>
          <span className="arrow">→</span>
        </a>

        {/* Main Heading */}
        <h2 className="main-heading">
          The last notetaker you'll ever need
        </h2>

        {/* Subheading with Typing Effect */}
        <p className="subheading">
          AI Learning App records live, edits, comments and collaborates like a{' '}
          <span className="typing-wrapper">
            <span className="typing-container">
              <span className="typing-text">real assistant.</span>
              <span 
                className="typing-highlight"
                style={{
                  transform: `scaleX(${typingPercentage / 100})`
                }}
              />
              <span 
                className="typing-cursor"
                style={{
                  left: `calc(${typingPercentage}% - 2px)`
                }}
              >
                |
                <span className="typing-label">
                  AI Learning App
                </span>
              </span>
            </span>
            <span className="cursor-placeholder">
              <span className="cursor-hidden">|</span>
            </span>
          </span>
        </p>

        {/* Grid of Cards */}
        <div className="cards-grid">
          {/* Card 1 */}
          <a className="card card-full" href="/">
            <span className="card-ring" />
            <div className="card-content">
              <div>
                <h3 className="card-title">
                  Turn anything into an editable note.
                </h3>
                <p className="card-description">
                  Transform PDFs, videos, and audio into notes you can edit and share.
                </p>
              </div>
              <div className="card-image-wrapper">
                <div className="card-image-mask">
                  <img 
                    alt="Transform PDFs, videos, and audio into editable notes with AI Learning App"
                    className="card-image"
                    src="https://assets.api-turbo.ai/website/turnAnything.png"
                  />
                </div>
              </div>
            </div>
          </a>

          {/* Card 2 */}
          <a className="card card-full" href="/">
            <span className="card-ring" />
            <div className="card-content">
              <div>
                <h3 className="card-title">
                  Live collaboration
                </h3>
                <p className="card-description">
                  AI Learning App actively works alongside you — editing your doc, highlighting issues, adding AI comments.
                </p>
              </div>
              <div className="card-image-wrapper" style={{ justifyContent: 'flex-start' }}>
                <div className="card-image-mask-left">
                  <img 
                    alt="AI Learning App actively editing and commenting on a document"
                    style={{ height: 'auto' }}
                    src="src/assets/img/logo3.png"
                  />
                </div>
              </div>
              <p className="card-footer-text">
                AI Learning App is available to chat all the time —{' '}
                <span className="card-footer-highlight">the perfect teammate.</span>
              </p>
            </div>
          </a>

          {/* Card 3 */}
          <a className="card" href="/">
            <span className="card-ring" />
            <div className="card-content">
              <div>
                <h3 className="card-title">
                  Study smarter, not harder.
                </h3>
                <p className="card-description">
                  Formerly, Turbolearn - students love us. Generate quizzes, podcasts, flashcards from your notes.
                </p>
              </div>
              <div className="study-image-wrapper">
                <img 
                  alt="Study tools including quizzes, flashcards, and podcasts"
                  loading="lazy"
                  className="study-image"
                  src="https://assets.api-turbo.ai/website/studyGraphic.svg"
                />
              </div>
            </div>
          </a>

          {/* Card 4 */}
          <article className="card">
            <span className="card-ring" />
            <div className="card-content">
              <div>
                <h3 className="card-title">
                  All your devices. Always synced.
                </h3>
                <p className="card-description">
                  AI Learning App works on the web and mobile. Desktop app coming next month!
                </p>
              </div>
              <div className="devices-image-wrapper">
                <img 
                  alt="AI Learning App synced across laptop, tablet, and phone devices"
                  loading="lazy"
                  className="devices-image"
                  src="https://assets.api-turbo.ai/website/devices.webp"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}