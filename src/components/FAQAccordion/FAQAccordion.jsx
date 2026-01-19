import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './FAQAccordion.css';

const FAQAccordion = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: t('faq1_question'),
      answer: t('faq1_answer', 'You will need a valid driver\'s license, a credit card in your name, and proof of insurance. For international drivers, a passport is also required.')
    },
    {
      question: t('faq2_question', 'Can I modify or cancel my reservation?'),
      answer: t('faq2_answer', 'Yes, you can modify or cancel your reservation up to 24 hours before the scheduled pickup time. Cancellations made less than 24 hours in advance may incur a fee.')
    },
    {
      question: t('faq3_question', 'What is included in the rental price?'),
      answer: t('faq3_answer', 'Our rental prices include the vehicle, basic insurance coverage, and taxes. Additional services like GPS, child seats, and premium insurance are available for an extra fee.')
    },
    {
      question: t('faq4_question', 'Are there any age restrictions for car rentals?'),
      answer: t('faq4_answer', 'The minimum age for car rentals is 21 years old. Drivers under 25 years old may be subject to additional fees. Some vehicle categories may have higher age requirements.')
    },
    {
      question: t('faq5_question', 'What should I do in case of an accident?'),
      answer: t('faq5_answer', 'In case of an accident, please contact our 24/7 support line immediately. Do not leave the scene without reporting the incident. You will need to fill out an accident report form.')
    },
    {
      question: t('faq6_question', 'Can I return the car at a different location?'),
      answer: t('faq6_answer', 'Yes, we offer one-way rentals between select locations. Additional fees may apply depending on the distance and availability. Please contact our support team to arrange this.')
    }
  ];

  return (
    <div className="faq-accordion-container">
      <div className="faq-header">
        <h2 className="faq-title">{t('frequently_asked_questions', 'Frequently Asked Questions')}</h2>
        <p className="faq-subtitle">{t('faq_subtitle', 'Everything you need to know about our car rental service')}</p>
      </div>

      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="faq-text">{faq.question}</span>
              <span className={`faq-icon ${activeIndex === index ? 'open' : ''}`}>+</span>
            </button>
            
            <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
              <div className="faq-answer-content">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-contact">
        <p className="faq-contact-text">{t('still_have_questions', 'Still have questions?')}</p>
        <p className="faq-contact-desc">{t('contact_support_desc', 'Contact our support team and we will be happy to assist you')}</p>
        <button className="btn btn-primary">{t('contact_support', 'Contact Support')}</button>
      </div>
    </div>
  );
};

export default FAQAccordion;