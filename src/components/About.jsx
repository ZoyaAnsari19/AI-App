import React, { useState, useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

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
        const progress = 1 - (sectionTop - endPoint) / (startPoint - endPoint);
        const clampedProgress = Math.max(0, Math.min(1, progress));
        setTypingProgress(clampedProgress * targetText.length);
      } else if (sectionTop < endPoint) {
        setTypingProgress(targetText.length);
      } else {
        setTypingProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetText.length]);

  const typingPercentage = (typingProgress / targetText.length) * 100;

  // Inline styles for the component
  const styles = `
    .turbo-section {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      justify-content: center;
      align-items: center;
      margin-top: 10rem;
      padding: 1rem 1rem;
      max-width: 72rem;
      margin-left: auto;
      margin-right: auto;
      position: relative;
    }

    @media (min-width: 640px) {
      .turbo-section {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        margin-top: 10rem;
      }
    }

    @media (min-width: 768px) {
      .turbo-section {
        margin-top: 12rem;
      }
    }

    @media (min-width: 1024px) {
      .turbo-section {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    .badge-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(to right, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1));
      border: 1px solid rgba(168, 85, 247, 0.2);
      border-radius: 9999px;
      padding: 0.5rem 1rem;
      margin-bottom: 1rem;
      transition: all 0.3s;
      text-decoration: none;
    }

    .badge-link:hover {
      background: linear-gradient(to right, rgba(168, 85, 247, 0.15), rgba(59, 130, 246, 0.15));
    }

    .badge-link:hover .arrow {
      transform: translateX(0.125rem);
    }

    .sparkle-icon {
      width: 1rem;
      height: 1rem;
      color: #c084fc;
    }

    .badge-text {
      font-size: 0.875rem;
      font-weight: 500;
      color: #d1d5db;
    }

    .badge-highlight {
      color: white;
      font-weight: 600;
    }

    .arrow {
      color: #c084fc;
      transition: transform 0.3s;
    }

    .main-heading {
      color: white;
      font-weight: 700;
      letter-spacing: -0.025em;
      text-align: center;
      font-size: 1.875rem;
      line-height: 2.25rem;
    }

    @media (min-width: 640px) {
      .main-heading {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }
    }

    @media (min-width: 768px) {
      .main-heading {
        font-size: 3rem;
        line-height: 1;
      }
    }

    .subheading {
      font-size: 1.125rem;
      line-height: 1.75rem;
      text-align: center;
      margin-bottom: 2rem;
      color: #CCCAD1;
    }

    .typing-wrapper {
      display: inline-flex;
      align-items: baseline;
    }

    .typing-container {
      position: relative;
      display: inline-block;
    }

    .typing-text {
      position: relative;
      z-index: 10;
      padding-left: 0.125rem;
      padding-right: 0.125rem;
    }

    .typing-highlight {
      position: absolute;
      inset: 0;
      margin-top: auto;
      margin-bottom: auto;
      height: 1.2em;
      border-radius: 100px;
      transition: transform 0.2s ease-out;
      transform-origin: left;
      background-color: rgb(104, 35, 255);
      opacity: 0.28;
    }

    .typing-cursor {
      position: absolute;
      color: #a855f7;
      font-size: 1.25rem;
      line-height: 1.75rem;
      font-weight: 700;
      z-index: 20;
      top: 50%;
      transform: translateY(-50%);
      text-shadow: rgba(104, 35, 255, 0.5) 0px 0px 1px;
      transition: left 0.2s ease-out;
    }

    .typing-label {
      position: absolute;
      left: 0;
      color: white;
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 700;
      padding: 0.25rem 0.5rem;
      border-radius: 0.375rem;
      white-space: nowrap;
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 20px -5px rgba(132, 41, 255, 0.6);
      background: linear-gradient(to top, rgba(132, 41, 255, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%);
      top: -1.5rem;
    }

    @media (min-width: 640px) {
      .typing-label {
        top: -2rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding: 0.375rem 0.625rem;
      }
    }

    .cursor-placeholder {
      position: relative;
      display: inline-block;
      margin-left: 1px;
    }

    .cursor-hidden {
      color: #a855f7;
      font-size: 1.25rem;
      line-height: 1.75rem;
      font-weight: 700;
      opacity: 0;
      text-shadow: rgba(104, 35, 255, 0.5) 0px 0px 1px;
    }

    .cards-grid {
      display: grid;
      gap: 1.5rem;
      width: 100%;
    }

    @media (min-width: 640px) {
      .cards-grid {
        gap: 2rem;
      }
    }

    @media (min-width: 768px) {
      .cards-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .card {
      position: relative;
      overflow: hidden;
      border-radius: 0.75rem;
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.6);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      min-height: 320px;
      background: linear-gradient(to top, rgba(132, 41, 255, 0.12) 0%, rgba(0, 0, 0, 0.3) 100%);
      transition: transform 0.3s;
      cursor: pointer;
      text-decoration: none;
    }

    @media (min-width: 375px) {
      .card {
        min-height: 340px;
      }
    }

    @media (min-width: 480px) {
      .card {
        min-height: 360px;
        padding: 2rem;
      }
    }

    @media (min-width: 640px) {
      .card {
        padding: 2rem;
        gap: 1.25rem;
        min-height: 380px;
      }
    }

    @media (min-width: 768px) {
      .card {
        padding: 2.5rem;
        gap: 1.5rem;
        min-height: 400px;
      }
    }

    @media (min-width: 1024px) {
      .card {
        min-height: 450px;
      }
    }

    @media (min-width: 1280px) {
      .card {
        min-height: 480px;
      }
    }

    .card:hover {
      transform: scale(1.02);
    }

    .card-full {
      grid-column: span 1;
    }

    @media (min-width: 768px) {
      .card-full {
        grid-column: span 2;
      }
    }

    .card-ring {
      pointer-events: none;
      position: absolute;
      inset: 0;
      border-radius: 0.75rem;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.031);
    }

    .card-content {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .card-title {
      font-size: 1.125rem;
      line-height: 1.5rem;
      font-weight: 400;
      color: white;
      margin-bottom: 0.5rem;
    }

    @media (min-width: 375px) {
      .card-title {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    }

    @media (min-width: 640px) {
      .card-title {
        font-size: 1.5rem;
        line-height: 2rem;
        margin-bottom: 0.75rem;
      }
    }

    @media (min-width: 768px) {
      .card-title {
        font-size: 1.625rem;
        line-height: 2rem;
      }
    }

    @media (min-width: 1024px) {
      .card-title {
        font-size: 1.75rem;
        line-height: 2.25rem;
      }
    }

    .card-description {
      font-size: 0.875rem;
      line-height: 1.375rem;
      color: #e5e7eb;
      margin-bottom: 1rem;
      font-weight: 300;
    }

    @media (min-width: 375px) {
      .card-description {
        font-size: 0.9375rem;
        line-height: 1.5rem;
      }
    }

    @media (min-width: 480px) {
      .card-description {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }

    @media (min-width: 640px) {
      .card-description {
        font-size: 1.0625rem;
        line-height: 1.625rem;
        margin-bottom: 1.25rem;
      }
    }

    @media (min-width: 768px) {
      .card-description {
        font-size: 1.125rem;
        line-height: 1.75rem;
      }
    }

    @media (min-width: 1024px) {
      .card-description {
        font-size: 1.1875rem;
        line-height: 1.875rem;
      }
    }

    .card-image-wrapper {
      flex: 1;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      margin-top: auto;
      min-height: 120px;
    }

    @media (min-width: 375px) {
      .card-image-wrapper {
        min-height: 140px;
      }
    }

    @media (min-width: 480px) {
      .card-image-wrapper {
        min-height: 160px;
      }
    }

    @media (min-width: 640px) {
      .card-image-wrapper {
        min-height: 180px;
      }
    }

    @media (min-width: 768px) {
      .card-image-wrapper {
        margin-bottom: -2.5rem;
        min-height: 200px;
      }
    }

    @media (min-width: 1024px) {
      .card-image-wrapper {
        min-height: 240px;
      }
    }

    .card-image-mask {
      width: 100%;
      max-width: 100%;
      -webkit-mask-image: linear-gradient(rgb(0, 0, 0) 65%, rgba(0, 0, 0, 0) 100%);
      mask-image: linear-gradient(rgb(0, 0, 0) 65%, rgba(0, 0, 0, 0) 100%);
    }

    .card-image-mask-left {
      width: 100%;
      max-width: 600px;
      -webkit-mask-image: linear-gradient(rgb(0, 0, 0) 65%, rgba(0, 0, 0, 0) 100%);
      mask-image: linear-gradient(rgb(0, 0, 0) 65%, rgba(0, 0, 0, 0) 100%);
    }

    @media (min-width: 768px) {
      .card-image-mask-left {
        max-width: 700px;
      }
    }

    @media (min-width: 1024px) {
      .card-image-mask-left {
        max-width: 800px;
      }
    }

    .card-image {
      width: 100%;
      height: auto;
      display: block;
    }

    .card-footer-text {
      display: none;
    }

    @media (min-width: 768px) {
      .card-footer-text {
        display: block;
        position: absolute;
        bottom: 1.5rem;
        right: 1.5rem;
        font-size: 0.9375rem;
        line-height: 1.5rem;
        color: #d1d5db;
        max-width: 320px;
        text-align: right;
      }
    }

    @media (min-width: 1024px) {
      .card-footer-text {
        font-size: 1.0625rem;
        line-height: 1.625rem;
        max-width: 420px;
        bottom: 2rem;
        right: 2rem;
      }
    }

    @media (min-width: 1280px) {
      .card-footer-text {
        font-size: 1.125rem;
        line-height: 1.75rem;
        max-width: 484px;
      }
    }

    .card-footer-highlight {
      color: #c084fc;
    }

    .study-image-wrapper {
      flex: 1;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      margin-bottom: 0;
      margin-top: auto;
      min-height: 120px;
    }

    @media (min-width: 375px) {
      .study-image-wrapper {
        min-height: 140px;
      }
    }

    @media (min-width: 480px) {
      .study-image-wrapper {
        min-height: 160px;
      }
    }

    @media (min-width: 640px) {
      .study-image-wrapper {
        min-height: 180px;
      }
    }

    @media (min-width: 768px) {
      .study-image-wrapper {
        margin-bottom: -2.5rem;
        min-height: 200px;
      }
    }

    .study-image {
      width: 180px;
      max-width: 180px;
      height: auto;
    }

    @media (min-width: 375px) {
      .study-image {
        width: 200px;
        max-width: 200px;
      }
    }

    @media (min-width: 480px) {
      .study-image {
        width: 220px;
        max-width: 220px;
      }
    }

    @media (min-width: 640px) {
      .study-image {
        width: 250px;
        max-width: 250px;
      }
    }

    @media (min-width: 768px) {
      .study-image {
        width: 280px;
        max-width: 280px;
      }
    }

    @media (min-width: 1024px) {
      .study-image {
        width: 320px;
        max-width: 320px;
      }
    }

    @media (min-width: 1280px) {
      .study-image {
        width: 100%;
        max-width: 380px;
      }
    }

    .devices-image-wrapper {
      position: absolute;
      bottom: 0;
      right: 0;
    }

    .devices-image {
      width: 140px;
      height: auto;
    }

    @media (min-width: 375px) {
      .devices-image {
        width: 160px;
      }
    }

    @media (min-width: 480px) {
      .devices-image {
        width: 175px;
      }
    }

    @media (min-width: 640px) {
      .devices-image {
        width: 200px;
      }
    }

    @media (min-width: 768px) {
      .devices-image {
        width: 220px;
      }
    }

    @media (min-width: 1024px) {
      .devices-image {
        width: 260px;
      }
    }

    @media (min-width: 1280px) {
      .devices-image {
        width: 280px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className='turbo-section' ref={sectionRef}>
        {/* Top Badge */}
        <a className='badge-link' href='/'>
          <Sparkles className='sparkle-icon' />
          <span className='badge-text'>
            We're now <span className='badge-highlight'>Turbo AI</span>{" "}
            (formerly Turbolearn AI)
          </span>
          <span className='arrow'>→</span>
        </a>

        {/* Main Heading */}
        <h2 className='main-heading'>The last notetaker you'll ever need</h2>

        {/* Subheading with Typing Effect */}
        <p className='subheading'>
          Turbo AI records live, edits, comments and collaborates like a{" "}
          <span className='typing-wrapper'>
            <span className='typing-container'>
              <span className='typing-text'>real assistant.</span>
              <span
                className='typing-highlight'
                style={{
                  transform: `scaleX(${typingPercentage / 100})`,
                }}
              />
              <span
                className='typing-cursor'
                style={{
                  left: `calc(${typingPercentage}% - 2px)`,
                }}>
                |<span className='typing-label'>Turbo AI</span>
              </span>
            </span>
            <span className='cursor-placeholder'>
              <span className='cursor-hidden'>|</span>
            </span>
          </span>
        </p>

        {/* Grid of Cards */}
        <div className='cards-grid'>
          {/* Card 1 */}
          <a className='card card-full' href='/'>
            <span className='card-ring' />
            <div className='card-content'>
              <div>
                <h3 className='card-title'>
                  Turn anything into an editable note.
                </h3>
                <p className='card-description'>
                  Transform PDFs, videos, and audio into notes you can edit and
                  share.
                </p>
              </div>
              <div className='card-image-wrapper'>
                <div className='card-image-mask'>
                  <img
                    alt='Transform PDFs, videos, and audio into editable notes with Turbo AI'
                    className='card-image'
                    src='https://assets.api-turbo.ai/website/turnAnything.png'
                  />
                </div>
              </div>
            </div>
          </a>

          {/* Card 2 */}
          <a className='card card-full' href='/'>
            <span className='card-ring' />
            <div className='card-content'>
              <div>
                <h3 className='card-title'>Live collaboration</h3>
                <p className='card-description'>
                  Turbo AI actively works alongside you — editing your doc,
                  highlighting issues, adding AI comments.
                </p>
              </div>
              <div
                className='card-image-wrapper'
                style={{ justifyContent: "flex-start" }}>
                <div className='card-image-mask-left'>
                  <img
                    alt='Turbo AI actively editing and commenting on a document'
                    style={{ height: "auto" }}
                    src='https://assets.api-turbo.ai/website/liveCollaboration.png'
                  />
                </div>
              </div>
              <p className='card-footer-text'>
                Turbo AI is available to chat all the time —{" "}
                <span className='card-footer-highlight'>
                  the perfect teammate.
                </span>
              </p>
            </div>
          </a>

          {/* Card 3 */}
          <a className='card' href='/'>
            <span className='card-ring' />
            <div className='card-content'>
              <div>
                <h3 className='card-title'>Study smarter, not harder.</h3>
                <p className='card-description'>
                  Formerly, Turbolearn - students love us. Generate quizzes,
                  podcasts, flashcards from your notes.
                </p>
              </div>
              <div className='study-image-wrapper'>
                <img
                  alt='Study tools including quizzes, flashcards, and podcasts'
                  loading='lazy'
                  className='study-image'
                  src='https://assets.api-turbo.ai/website/studyGraphic.svg'
                />
              </div>
            </div>
          </a>

          {/* Card 4 */}
          <article className='card'>
            <span className='card-ring' />
            <div className='card-content'>
              <div>
                <h3 className='card-title'>All your devices. Always synced.</h3>
                <p className='card-description'>
                  Turbo AI works on the web and mobile. Desktop app coming next
                  month!
                </p>
              </div>
              <div className='devices-image-wrapper'>
                <img
                  alt='Turbo AI synced across laptop, tablet, and phone devices'
                  loading='lazy'
                  className='devices-image'
                  src='https://assets.api-turbo.ai/website/devices.webp'
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
