import React from "react";
import {
  Upload,
  Brain,
  Sparkles,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      number: 1,
      title: "Upload Your Content",
      description:
        "Record lectures live or upload PDFs, videos, audio files, and documents. Works with any format you need.",
    },
    {
      icon: Brain,
      number: 2,
      title: "Let AI Process",
      description:
        "Our AI transcribes and analyzes your content, identifying key concepts and creating structured editable notes.",
    },
    {
      icon: Sparkles,
      number: 3,
      title: "Get Study Materials",
      description:
        "Receive comprehensive notes, flashcards, quizzes, and podcasts tailored to your learning needs.",
      link: {
        text: "Over 15 million notes",
        url: "/blog/october-2025-announcement-5-million-users",
      },
    },
    {
      icon: GraduationCap,
      number: 4,
      title: "Study & Succeed",
      description:
        "Access materials anywhere, share with classmates, and use built-in study modes to ace your exams. Turbo works on both web and mobile - use both!",
    },
  ];

  const stats = [
    { value: "5M+", label: "Active Students" },
    { value: "99%", label: "Accuracy Rate" },
    { value: "30s", label: "Processing Time" },
  ];

  // Inline styles for the component
  const styles = `
    /* How It Works Component Styles */
    .how-it-works {
      background: #080F15;
      padding: 4rem 1rem;
      width: 100%;
    }

    .how-it-works__container {
      max-width: 1280px;
      margin: 0 auto;
    }

    /* Header */
    .how-it-works__header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .how-it-works__title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .how-it-works__subtitle {
      font-size: 1.125rem;
      color: #9ca3af;
      max-width: 896px;
      margin: 0 auto;
      line-height: 1.6;
    }

    /* Steps Grid */
    .how-it-works__steps {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      position: relative;
      margin-bottom: 5rem;
    }

    .step {
      position: relative;
    }

    .step__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .step__icon-wrapper {
      position: relative;
      margin-bottom: 1.5rem;
    }

    .step__icon-circle {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      background: linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), rgba(37, 99, 235, 0.2));
      border: 1px solid rgba(147, 51, 234, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .step__icon {
      width: 2.5rem;
      height: 2.5rem;
      color: #c084fc;
    }

    .step__number {
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: #000000;
      border: 1px solid rgba(147, 51, 234, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-weight: 600;
      font-size: 0.875rem;
    }

    .step__title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 0.75rem;
    }

    .step__description {
      font-size: 0.875rem;
      color: #9ca3af;
      line-height: 1.6;
      max-width: 280px;
    }

    .step__link {
      color: #c084fc;
      text-decoration: underline;
      transition: color 0.2s;
    }

    .step__link:hover {
      color: #e9d5ff;
    }

    .step__connector {
      display: none;
    }

    /* Stats */
    .how-it-works__stats {
      padding-top: 3rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 5rem;
    }

    .stats {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }

    .stat {
      text-align: center;
    }

    .stat__value {
      font-size: 1.875rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 0.25rem;
    }

    .stat__label {
      font-size: 0.875rem;
      color: #9ca3af;
    }

    .stat__divider {
      display: none;
    }

    /* CTA Card */
    .how-it-works__cta {
      margin-top: 5rem;
    }

    .cta-card {
      position: relative;
      display: block;
      overflow: hidden;
      border-radius: 1rem;
      background: linear-gradient(to bottom right, rgba(147, 51, 234, 0.1), rgba(37, 99, 235, 0.1));
      border: 1px solid rgba(147, 51, 234, 0.2);
      padding: 2rem;
      transition: all 0.5s;
      text-decoration: none;
      cursor: pointer;
    }

    .cta-card:hover {
      transform: scale(1.02);
      border-color: rgba(147, 51, 234, 0.4);
    }

    .cta-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), rgba(37, 99, 235, 0.2));
      opacity: 0;
      transition: opacity 0.5s;
    }

    .cta-card:hover::before {
      opacity: 1;
    }

    .cta-card__content {
      position: relative;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }

    .cta-card__text {
      flex: 1;
      text-align: center;
    }

    .cta-card__badge {
      display: inline-block;
      color: #c084fc;
      font-weight: 600;
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.75rem;
    }

    .cta-card__title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 0.75rem;
    }

    .cta-card__description {
      color: #9ca3af;
      font-size: 1rem;
      line-height: 1.6;
      max-width: 896px;
    }

    .cta-card__arrow {
      flex-shrink: 0;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: linear-gradient(to bottom right, #9333ea, #c084fc);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s;
    }

    .cta-card:hover .cta-card__arrow {
      transform: scale(1.1);
    }

    .arrow-icon {
      width: 1.75rem;
      height: 1.75rem;
      color: #ffffff;
      transition: transform 0.3s;
    }

    .cta-card:hover .arrow-icon {
      transform: translateX(0.25rem);
    }

    .cta-card__glow {
      position: absolute;
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
      filter: blur(4rem);
      transition: background-color 0.5s;
      pointer-events: none;
    }

    .cta-card__glow--top {
      top: -6rem;
      right: -6rem;
      background-color: rgba(147, 51, 234, 0.2);
    }

    .cta-card:hover .cta-card__glow--top {
      background-color: rgba(147, 51, 234, 0.3);
    }

    .cta-card__glow--bottom {
      bottom: -6rem;
      left: -6rem;
      background-color: rgba(37, 99, 235, 0.2);
    }

    .cta-card:hover .cta-card__glow--bottom {
      background-color: rgba(37, 99, 235, 0.3);
    }

    /* Tablet Styles */
    @media (min-width: 768px) {
      .how-it-works {
        padding: 5rem 1.5rem;
      }

      .how-it-works__header {
        margin-bottom: 5rem;
      }

      .how-it-works__title {
        font-size: 3rem;
      }

      .how-it-works__subtitle {
        font-size: 1.25rem;
      }

      .how-it-works__steps {
        grid-template-columns: repeat(2, 1fr);
      }

      .stats {
        flex-direction: row;
        gap: 4rem;
      }

      .stat__divider {
        display: block;
        width: 1px;
        height: 3rem;
        background: rgba(255, 255, 255, 0.1);
      }

      .cta-card {
        padding: 3rem;
      }

      .cta-card__content {
        flex-direction: row;
        justify-content: space-between;
      }

      .cta-card__text {
        text-align: left;
      }

      .cta-card__title {
        font-size: 1.875rem;
      }

      .cta-card__description {
        font-size: 1.125rem;
      }
    }

    /* Desktop Styles */
    @media (min-width: 1024px) {
      .how-it-works {
        padding: 6rem 2rem;
      }

      .how-it-works__title {
        font-size: 3.75rem;
      }

      .how-it-works__steps {
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
      }

      .step__connector {
        display: block;
        position: absolute;
        top: 2.5rem;
        left: 60%;
        width: 100%;
        height: 2px;
      }

      .step__connector::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, rgba(147, 51, 234, 0.2), rgba(147, 51, 234, 0.1), transparent);
      }
    }

    /* Extra Large Screens */
    @media (min-width: 1280px) {
      .how-it-works__container {
        padding: 0 2rem;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className='how-it-works'>
        <div className='how-it-works__container'>
          {/* Header */}
          <div className='how-it-works__header'>
            <h2 id='how-it-works-heading' className='how-it-works__title'>
              How It Works - It's Simple.
            </h2>
            <p className='how-it-works__subtitle'>
              Transform any PDF, YouTube video, or audio into beautiful notes
              and study tools in four simple steps.
            </p>
          </div>

          {/* Steps Grid */}
          <div className='how-it-works__steps'>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className='step'>
                  <div className='step__content'>
                    <div className='step__icon-wrapper'>
                      <div className='step__icon-circle'>
                        <Icon className='step__icon' />
                      </div>
                      <div className='step__number'>{step.number}</div>
                    </div>
                    <h3 className='step__title'>{step.title}</h3>
                    <p className='step__description'>
                      {step.description}
                      {step.link && (
                        <>
                          {" "}
                          <a href={step.link.url} className='step__link'>
                            {step.link.text}
                          </a>
                          {" have been generated by students on Turbo."}
                        </>
                      )}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className='step__connector' />
                  )}
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className='how-it-works__stats'>
            <div className='stats'>
              {stats.map((stat, index) => (
                <React.Fragment key={stat.label}>
                  <div className='stat'>
                    <p className='stat__value'>{stat.value}</p>
                    <p className='stat__label'>{stat.label}</p>
                  </div>
                  {index < stats.length - 1 && (
                    <div className='stat__divider' />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className='how-it-works__cta'>
            <a href='/for-students' className='cta-card'>
              <div className='cta-card__content'>
                <div className='cta-card__text'>
                  <span className='cta-card__badge'>Built for Students</span>
                  <h3 className='cta-card__title'>
                    Explore All Student Features
                  </h3>
                  <p className='cta-card__description'>
                    Learn how to record lectures, organize notes in folders,
                    generate flashcards from any PDF, and create quizzes that
                    actually help you study. See every feature built
                    specifically for students.
                  </p>
                </div>
                <div className='cta-card__arrow'>
                  <ArrowRight className='arrow-icon' />
                </div>
              </div>
              <div className='cta-card__glow cta-card__glow--top' />
              <div className='cta-card__glow cta-card__glow--bottom' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
