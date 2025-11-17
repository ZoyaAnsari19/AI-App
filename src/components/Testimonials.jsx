import React, { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Harvard Pre-med",
      image: "https://assets.api-turbo.ai/website/crests/harvard.png",
      quote:
        "My bio textbook is 500 pages, but Turbo AI makes podcasts of each chapter so I can listen during my long commutes or workouts.",
      author: "Olivia C.",
    },
    {
      title: "Mom (4 kids, 2 dogs)",
      image: "https://assets.api-turbo.ai/website/icons/mom.png",
      quote:
        "I always wanted to journal but was never consistent—life just got busy. Now I just talk to Turbo AI for 2 mins every night, and it turns my thoughts into neat daily entries automatically.",
      author: "Danielle T.",
    },
    {
      title: "MIT Education PhD",
      image: "https://assets.api-turbo.ai/website/crests/mit.png",
      quote:
        "Turbo AI outlines my research paper, then I go use my voice to tell it how I want each paragraph. I do the thinking, and Turbo AI does the writing.",
      author: "Elena R.",
      highlights: ["outlines my research paper"],
    },
    {
      title: "Stanford Chemistry Major",
      image: "https://assets.api-turbo.ai/website/crests/stanford.png",
      quote:
        "Having ADHD makes focusing in organic chem lectures tough, so I record every class with Turbo. Then it quizzes me on reactions until I actually get them—went from a C+ to an A- this quarter.",
      author: "Sarah K.",
      highlights: ["record every class"],
    },
    {
      title: "Yale Law Student",
      image: "https://assets.api-turbo.ai/website/crests/yale.png",
      quote:
        "Case law used to overwhelm me, but Turbo AI instantly turns my readings into flashcards and quizzes. Now I can actually keep up daily instead of cramming all night before exams.",
      author: "Marcus O.",
    },
    {
      title: "McKinsey Consultant",
      image: "https://assets.api-turbo.ai/website/logos/mckinsey.svg",
      quote:
        "Turbo AI records my meetings into notes, then I quickly edit them to highlight action items—makes follow-ups super easy.",
      author: "Jason A.",
      highlights: ["records my meetings"],
      isSvg: true,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const renderQuoteWithHighlights = (quote, highlights) => {
    if (!highlights || highlights.length === 0) {
      return quote;
    }

    let lastIndex = 0;
    const parts = [];

    highlights.forEach((highlight, idx) => {
      const highlightIndex = quote.indexOf(highlight);
      if (highlightIndex !== -1) {
        // Add text before highlight
        if (highlightIndex > lastIndex) {
          parts.push(quote.substring(lastIndex, highlightIndex));
        }
        // Add highlighted text
        parts.push(
          <span key={idx} className='testimonial__highlight'>
            <span className='testimonial__highlight-text'>{highlight}</span>
            <span className='testimonial__highlight-bg' />
          </span>
        );
        lastIndex = highlightIndex + highlight.length;
      }
    });

    // Add remaining text
    if (lastIndex < quote.length) {
      parts.push(quote.substring(lastIndex));
    }

    return parts;
  };

  useEffect(() => {
    // Start the automatic sliding
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    // Clear interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length]);

  // Inline styles for the component
  const styles = `
    /* Testimonials Component Styles */
    .testimonials {
      background: #080F15;
      padding: 3rem 1rem;
      width: 100%;
      position: relative;
    }

    .testimonials__container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    /* Header */
    .testimonials__header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
      justify-content: center;
    }

    .testimonials__icon {
      width: 1.25rem;
      height: 1.25rem;
      color: rgba(192, 132, 252, 0.8);
      flex-shrink: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .testimonials__header:hover .testimonials__icon {
      color: rgba(192, 132, 252, 1);
      transform: scale(1.1);
    }

    .testimonials__title {
      font-size: 1.5rem;
      font-weight: 400;
      color: #ffffff;
      margin: 0;
      transition: color 0.3s ease;
    }

    /* Grid */
    .testimonials__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      list-style: none;
      margin: 0;
      padding: 0;
      transition: transform 0.5s ease-in-out;
    }

    /* Testimonial Card */
    .testimonial {
      position: relative;
      overflow: hidden;
      border-radius: 0.75rem;
      -webkit-backdrop-filter: blur(12px);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.25);
      padding: 1.25rem;
      background: linear-gradient(to top, rgba(132, 41, 255, 0.12) 0%, rgba(0, 0, 0, 0.3) 100%);
      transform: translateY(0);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }

    .testimonial::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(132, 41, 255, 0.18) 0%, rgba(0, 0, 0, 0.2) 100%);
      opacity: 0;
      transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: none;
    }

    .testimonial:hover::before {
      opacity: 1;
    }

    .testimonial:hover {
      transform: translateY(-4px);
      border-color: rgba(168, 85, 247, 0.3);
      box-shadow: 
        0 8px 30px -6px rgba(104, 35, 255, 0.15),
        0 12px 40px -8px rgba(0, 0, 0, 0.3);
    }

    .testimonial__ring {
      pointer-events: none;
      position: absolute;
      inset: 0;
      border-radius: 0.75rem;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03);
      transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .testimonial:hover .testimonial__ring {
      box-shadow: inset 0 0 0 1px rgba(168, 85, 247, 0.15);
    }

    /* Top Section */
    .testimonial__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      min-height: 32px;
    }

    .testimonial__name {
      font-weight: 400;
      color: #ffffff;
      font-size: 1rem;
      margin: 0;
      flex: 1;
      padding-right: 0.5rem;
      transition: color 0.3s ease;
      line-height: 1.3;
    }

    .testimonial:hover .testimonial__name {
      color: rgba(192, 132, 252, 1);
    }

    .testimonial__image-wrapper {
      width: 1.75rem;
      height: 1.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .testimonial:hover .testimonial__image-wrapper {
      transform: scale(1.1) rotate(5deg);
    }

    .testimonial__image {
      width: 1.75rem;
      height: 1.75rem;
      object-fit: contain;
      transition: filter 0.3s ease;
    }

    .testimonial:hover .testimonial__image {
      filter: brightness(1.2);
    }

    .testimonial__image--svg {
      max-height: 1.25rem;
      width: auto;
      object-fit: contain;
      transition: filter 0.3s ease;
    }

    .testimonial:hover .testimonial__image--svg {
      filter: brightness(1.2);
    }

    /* Quote */
    .testimonial__quote {
      font-size: 0.875rem;
      color: #d1d5db;
      font-weight: 300;
      margin: 0 0 0.75rem 0;
      line-height: 1.5;
      transition: color 0.3s ease;
    }

    .testimonial:hover .testimonial__quote {
      color: #e5e7eb;
    }

    /* Highlight Effect */
    .testimonial__highlight {
      position: relative;
      display: inline-block;
    }

    .testimonial__highlight-text {
      position: relative;
      z-index: 10;
      padding: 0 0.125rem;
      color: #ffffff;
      transition: color 0.3s ease;
    }

    .testimonial:hover .testimonial__highlight-text {
      color: #ffffff;
    }

    .testimonial__highlight-bg {
      position: absolute;
      inset: 0;
      margin: auto 0;
      height: 1.2em;
      border-radius: 100px;
      background-color: rgb(104, 35, 255);
      opacity: 0.28;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .testimonial:hover .testimonial__highlight-bg {
      opacity: 0.45;
      background-color: rgb(132, 41, 255);
    }

    /* Author */
    .testimonial__author {
      font-size: 0.8125rem;
      color: #9ca3af;
      margin: 0;
      transition: color 0.3s ease;
    }

    .testimonial:hover .testimonial__author {
      color: #c084fc;
    }

    /* Tablet Styles */
    @media (min-width: 640px) {
      .testimonials {
        padding: 4rem 1.5rem;
      }

      .testimonials__grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.25rem;
        transition: transform 0.5s ease-in-out;
      }
      
      .testimonial {
        padding: 1.5rem;
      }
      
      .testimonial__name {
        font-size: 1.125rem;
      }
      
      .testimonial__quote {
        font-size: 0.9375rem;
      }
      
      .testimonial__image-wrapper {
        width: 2rem;
        height: 2rem;
      }
      
      .testimonial__image {
        width: 2rem;
        height: 2rem;
      }
      
      .testimonial__image--svg {
        max-height: 1.5rem;
      }
    }

    /* Desktop Styles */
    @media (min-width: 1024px) {
      .testimonials {
        padding: 5rem 2rem;
      }

      .testimonials__container {
        padding: 0 2rem;
      }

      .testimonials__grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        transition: transform 0.5s ease-in-out;
      }

      .testimonial {
        padding: 1.75rem;
      }
      
      .testimonial:hover {
        transform: translateY(-8px);
      }
    }

    /* Extra Large Screens */
    @media (min-width: 1280px) {
      .testimonials__container {
        padding: 0 2rem;
      }
    }

    /* Reduced Motion Support */
    @media (prefers-reduced-motion: reduce) {
      .testimonial,
      .testimonial__ring,
      .testimonial__name,
      .testimonial__image-wrapper,
      .testimonial__image,
      .testimonial__image--svg,
      .testimonial__quote,
      .testimonial__highlight-bg,
      .testimonial__author,
      .testimonials__icon {
        transition: none;
      }
      
      .testimonial:hover {
        transform: none;
      }
      
      .testimonial:hover .testimonial__image-wrapper {
        transform: none;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className='testimonials'>
        <div className='testimonials__container'>
          <div className='testimonials__header'>
            <MessageCircle className='testimonials__icon' />
            <h2 className='testimonials__title'>Testimonials</h2>
          </div>

          <ul className='testimonials__grid'>
            {testimonials
              .slice(currentIndex, currentIndex + 3)
              .map((testimonial, index) => (
                <li key={index} className='testimonial'>
                  <span className='testimonial__ring' />

                  <div className='testimonial__top'>
                    <h4 className='testimonial__name'>{testimonial.title}</h4>
                    <div className='testimonial__image-wrapper'>
                      <img
                        src={testimonial.image}
                        alt={testimonial.title}
                        loading='lazy'
                        className={
                          testimonial.isSvg
                            ? "testimonial__image--svg"
                            : "testimonial__image"
                        }
                      />
                    </div>
                  </div>

                  <p className='testimonial__quote'>
                    "
                    {renderQuoteWithHighlights(
                      testimonial.quote,
                      testimonial.highlights
                    )}
                    "
                  </p>

                  <p className='testimonial__author'>— {testimonial.author}</p>
                </li>
              ))}
            {testimonials.length > 3 &&
              currentIndex + 3 > testimonials.length &&
              testimonials
                .slice(0, (currentIndex + 3) % testimonials.length)
                .map((testimonial, index) => (
                  <li key={index + 3} className='testimonial'>
                    <span className='testimonial__ring' />

                    <div className='testimonial__top'>
                      <h4 className='testimonial__name'>{testimonial.title}</h4>
                      <div className='testimonial__image-wrapper'>
                        <img
                          src={testimonial.image}
                          alt={testimonial.title}
                          loading='lazy'
                          className={
                            testimonial.isSvg
                              ? "testimonial__image--svg"
                              : "testimonial__image"
                          }
                        />
                      </div>
                    </div>

                    <p className='testimonial__quote'>
                      "
                      {renderQuoteWithHighlights(
                        testimonial.quote,
                        testimonial.highlights
                      )}
                      "
                    </p>

                    <p className='testimonial__author'>
                      — {testimonial.author}
                    </p>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
