import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './styles/FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What happened to TurboLearn? Why the name change to AI Learning App?",
      answer: (
        <>
          We've rebranded from TurboLearn to AI Learning App to reflect the platform's full capabilities. Don't worry - everything you love about the platform remains the same! Your account, notes, and all features continue to work exactly as before.{' '}
          <a href="/turbolearn-ai" className="faq__link">
            Learn more about the rebrand →
          </a>
        </>
      )
    },
    {
      question: "How do I record lectures and turn them into notes?",
      answer: "Just hit the record button during class and AI Learning App captures everything. After your lecture, you'll get organized notes with all the key concepts, perfect for studying. It even works with different accents and technical terms from any subject."
    },
    {
      question: "Can I convert my PDF textbooks into study materials?",
      answer: "Yes! Upload any PDF - textbooks, research papers, lecture slides - and AI Learning App instantly creates notes, flashcards, and quizzes from them. Perfect for when you need to study a 50-page chapter but only have an hour."
    },
    {
      question: "Is AI Learning App free to use?",
      answer: "Yes! AI Learning App offers a generous free tier that includes note generation, flashcards, and quizzes. You can upgrade to unlock unlimited features and advanced AI capabilities."
    },
    {
      question: "Can I create flashcards from YouTube videos?",
      answer: "Yes! Just paste any YouTube link - lecture recordings, Khan Academy, Crash Course - and AI Learning App generates flashcards from the video content. Great for visual learners who prefer video lectures."
    },
    {
      question: "How do I organize notes for different classes?",
      answer: "AI Learning App lets you create folders for each class, semester, or subject. You can organize everything just like you would in a physical binder, but searchable and accessible from anywhere. Most students create a folder for each course."
    },
    {
      question: "Can I edit the notes after they're generated?",
      answer: "Yes! We have a full Google Docs style editor you can use to add and customize your notes."
    },
    {
      question: "Does it work for STEM subjects with formulas and diagrams?",
      answer: "Absolutely! AI Learning App handles math formulas, chemical equations, physics diagrams, and code snippets. It recognizes and preserves formatting for technical content, making it perfect for engineering, pre-med, and science majors."
    },
    {
      question: "Does it work on mobile devices?",
      answer: "Yes, AI Learning App works seamlessly across all devices - web, tablet, and mobile. Your notes sync automatically so you can study anywhere, anytime."
    },
    {
      question: "Is there a desktop app?",
      answer: "No, but it's coming soon!"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="faq__container">
        <div className="faq__header">
          <h2 className="faq__title">Frequently Asked Questions</h2>
          <p className="faq__subtitle">Everything you need to know about AI Learning App</p>
        </div>

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
            >
              <button
                className="faq__question-button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq__question">{faq.question}</span>
                <div className={`faq__icon ${openIndex === index ? 'faq__icon--rotated' : ''}`}>
                  <ChevronDown className="faq__chevron" />
                </div>
              </button>
              
              <div className={`faq__answer-wrapper ${openIndex === index ? 'faq__answer-wrapper--open' : ''}`}>
                <div className="faq__answer-inner">
                  <div className="faq__answer">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;