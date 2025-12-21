import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: t('faq1_question'),
      answer: t('faq1_answer')
    },
    {
      question: t('faq2_question'),
      answer: t('faq2_answer')
    },
    {
      question: t('faq3_question'),
      answer: t('faq3_answer')
    },
    {
      question: t('faq4_question'),
      answer: t('faq4_answer')
    },
    {
      question: t('faq5_question'),
      answer: t('faq5_answer')
    },
    {
      question: t('faq6_question'),
      answer: t('faq6_answer')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('frequently_asked_questions')}
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {t('faq_subtitle')}
          </p>
        </div>

        <div className="mt-16">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <li key={index}>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-4 py-5 sm:px-6 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                      <svg
                        className={`h-5 w-5 text-gray-500 transform transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-5 sm:px-6">
                      <p className="text-gray-500">{faq.answer}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">{t('still_have_questions')}</h3>
            <div className="mt-2 sm:flex sm:items-start sm:justify-between">
              <div className="max-w-xl text-sm text-gray-500">
                <p>
                  {t('contact_support_description')}
                </p>
              </div>
              <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  {t('contact_support')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;