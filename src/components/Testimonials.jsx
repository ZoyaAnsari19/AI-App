import React from 'react';
import { MessageCircle } from 'lucide-react';
import './styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      title: "Harvard Pre-med",
      image: "https://assets.api-turbo.ai/website/crests/harvard.png",
      quote: "My bio textbook is 500 pages, but Turbo AI makes podcasts of each chapter so I can listen during my long commutes or workouts.",
      author: "Olivia C."
    },
    {
      title: "Mom (4 kids, 2 dogs)",
      image: "https://assets.api-turbo.ai/website/icons/mom.png",
      quote: "I always wanted to journal but was never consistent—life just got busy. Now I just talk to Turbo AI for 2 mins every night, and it turns my thoughts into neat daily entries automatically.",
      author: "Danielle T."
    },
    {
      title: "MIT Education PhD",
      image: "https://assets.api-turbo.ai/website/crests/mit.png",
      quote: "Turbo AI outlines my research paper, then I go use my voice to tell it how I want each paragraph. I do the thinking, and Turbo AI does the writing.",
      author: "Elena R.",
      highlights: ["outlines my research paper"]
    },
    {
      title: "Stanford Chemistry Major",
      image: "https://assets.api-turbo.ai/website/crests/stanford.png",
      quote: "Having ADHD makes focusing in organic chem lectures tough, so I record every class with Turbo. Then it quizzes me on reactions until I actually get them—went from a C+ to an A- this quarter.",
      author: "Sarah K.",
      highlights: ["record every class"]
    },
    {
      title: "Yale Law Student",
      image: "https://assets.api-turbo.ai/website/crests/yale.png",
      quote: "Case law used to overwhelm me, but Turbo AI instantly turns my readings into flashcards and quizzes. Now I can actually keep up daily instead of cramming all night before exams.",
      author: "Marcus O."
    },
    {
      title: "McKinsey Consultant",
      image: "https://assets.api-turbo.ai/website/logos/mckinsey.svg",
      quote: "Turbo AI records my meetings into notes, then I quickly edit them to highlight action items—makes follow-ups super easy.",
      author: "Jason A.",
      highlights: ["records my meetings"],
      isSvg: true
    }
  ];

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
          <span key={idx} className="testimonial__highlight">
            <span className="testimonial__highlight-text">{highlight}</span>
            <span className="testimonial__highlight-bg" />
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

  return (
    <div className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <MessageCircle className="testimonials__icon" />
          <h2 className="testimonials__title">Testimonials</h2>
        </div>

        <ul className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="testimonial">
              <span className="testimonial__ring" />
              
              <div className="testimonial__top">
                <h4 className="testimonial__name">{testimonial.title}</h4>
                <div className="testimonial__image-wrapper">
                  <img
                    src={testimonial.image}
                    alt={testimonial.title}
                    loading="lazy"
                    className={testimonial.isSvg ? "testimonial__image--svg" : "testimonial__image"}
                  />
                </div>
              </div>

              <p className="testimonial__quote">
                "{renderQuoteWithHighlights(testimonial.quote, testimonial.highlights)}"
              </p>

              <p className="testimonial__author">— {testimonial.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;