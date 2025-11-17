import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What happened to TurboLearn? Why the name change to Turbo AI?",
      answer: (
        <>
          We've rebranded from TurboLearn to Turbo AI to reflect the platform's
          full capabilities. Don't worry - everything you love about the
          platform remains the same! Your account, notes, and all features
          continue to work exactly as before.{" "}
          <a href='/turbolearn-ai' className='faq__link'>
            Learn more about the rebrand →
          </a>
        </>
      ),
    },
    {
      question: "How do I record lectures and turn them into notes?",
      answer:
        "Just hit the record button during class and Turbo AI captures everything. After your lecture, you'll get organized notes with all the key concepts, perfect for studying. It even works with different accents and technical terms from any subject.",
    },
    {
      question: "Can I convert my PDF textbooks into study materials?",
      answer:
        "Yes! Upload any PDF - textbooks, research papers, lecture slides - and Turbo AI instantly creates notes, flashcards, and quizzes from them. Perfect for when you need to study a 50-page chapter but only have an hour.",
    },
    {
      question: "Is Turbo AI free to use?",
      answer:
        "Yes! Turbo AI offers a generous free tier that includes note generation, flashcards, and quizzes. You can upgrade to unlock unlimited features and advanced AI capabilities.",
    },
    {
      question: "Can I create flashcards from YouTube videos?",
      answer:
        "Yes! Just paste any YouTube link - lecture recordings, Khan Academy, Crash Course - and Turbo AI generates flashcards from the video content. Great for visual learners who prefer video lectures.",
    },
    {
      question: "How do I organize notes for different classes?",
      answer:
        "Turbo AI lets you create folders for each class, semester, or subject. You can organize everything just like you would in a physical binder, but searchable and accessible from anywhere. Most students create a folder for each course.",
    },
    {
      question: "Can I edit the notes after they're generated?",
      answer:
        "Yes! We have a full Google Docs style editor you can use to add and customize your notes.",
    },
    {
      question: "Does it work for STEM subjects with formulas and diagrams?",
      answer:
        "Absolutely! Turbo AI handles math formulas, chemical equations, physics diagrams, and code snippets. It recognizes and preserves formatting for technical content, making it perfect for engineering, pre-med, and science majors.",
    },
    {
      question: "Does it work on mobile devices?",
      answer:
        "Yes, Turbo AI works seamlessly across all devices - web, tablet, and mobile. Your notes sync automatically so you can study anywhere, anytime.",
    },
    {
      question: "Is there a desktop app?",
      answer: "No, but it's coming soon!",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Inline styles for the component
  const styles = `
    /* FAQ Component Styles */
    .faq {
      background: #080F15;
      padding: 4rem 1rem;
      width: 100%;
    }

    .faq__container {
      max-width: 768px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    /* Header */
    .faq__header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .faq__title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #ffffff;
      margin: 0 0 1rem 0;
      line-height: 1.2;
    }

    .faq__subtitle {
      font-size: 1.1rem;
      color: #9ca3af;
      margin: 0;
    }

    /* FAQ List */
    .faq__list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    /* FAQ Item */
    .faq__item {
      border-radius: 0.75rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.05);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .faq__item:hover {
      background: rgba(255, 255, 255, 0.08);
    }

    .faq__item--open {
      background: rgba(255, 255, 255, 0.07);
    }

    /* Question Button */
    .faq__question-button {
      width: 100%;
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: left;
      background: transparent;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s ease;
      gap: 1rem;
      border-radius: 0;
    }

    .faq__question-button:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    .faq__question {
      font-size: 10px;
      font-weight: 500;
      color: #ffffff;
      line-height: 1.5;
      flex: 1;
    }

    /* Icon */
    .faq__icon {
      flex-shrink: 0;
      transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .faq__icon--rotated {
      transform: rotate(180deg);
    }

    .faq__chevron {
      width: 1.25rem;
      height: 1.25rem;
      color: #9ca3af;
    }

    /* Answer Wrapper - Collapsible */
    .faq__answer-wrapper {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .faq__answer-wrapper--open {
      grid-template-rows: 1fr;
    }

    .faq__answer-inner {
      overflow: hidden;
    }

    .faq__answer {
      padding: 0.5rem 1.5rem 1.5rem 1.5rem;
      margin-top: 0.5rem;
      color: #d1d5db;
      font-size: 10px;
      line-height: 1.8;
    }

    /* Link inside answer */
    .faq__link {
      color: #c084fc;
      text-decoration: underline;
      transition: color 0.2s ease;
    }

    .faq__link:hover {
      color: #e9d5ff;
    }

    /* Tablet Styles */
    @media (min-width: 640px) {
      .faq {
        padding: 6rem 1.5rem;
      }

      .faq__title {
        font-size: 2.25rem;
      }

      .faq__question-button {
        padding: 1rem 1.5rem;
      }
    }

    /* Desktop Styles */
    @media (min-width: 768px) {
      .faq__title {
        font-size: 3rem;
      }

      .faq__question {
        font-size: 1rem;
      }

      .faq__answer {
        font-size: 0.875rem;
      }
    }

    /* Large Desktop */
    @media (min-width: 1024px) {
      .faq {
        padding: 6rem 2rem;
      }
    }

    /* Accessibility - Focus States */
    .faq__question-button:focus {
      outline: 2px solid #c084fc;
      outline-offset: -2px;
    }

    .faq__question-button:focus:not(:focus-visible) {
      outline: none;
    }

    .faq__question-button:focus-visible {
      outline: 2px solid #c084fc;
      outline-offset: -2px;
    }

    /* Reduced Motion Support */
    @media (prefers-reduced-motion: reduce) {
      .faq__item,
      .faq__icon,
      .faq__answer-wrapper {
        transition: none;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className='faq'>
        <div className='faq__container'>
          <div className='faq__header'>
            <h2 className='faq__title'>Frequently Asked Questions</h2>
            <p className='faq__subtitle'>
              Everything you need to know about Turbo AI
            </p>
          </div>

          <div className='faq__list'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq__item ${
                  openIndex === index ? "faq__item--open" : ""
                }`}>
                <button
                  className='faq__question-button'
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}>
                  <span className='faq__question'>{faq.question}</span>
                  <div
                    className={`faq__icon ${
                      openIndex === index ? "faq__icon--rotated" : ""
                    }`}>
                    <ChevronDown className='faq__chevron' />
                  </div>
                </button>

                <div
                  className={`faq__answer-wrapper ${
                    openIndex === index ? "faq__answer-wrapper--open" : ""
                  }`}>
                  <div className='faq__answer-inner'>
                    <div className='faq__answer'>{faq.answer}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
