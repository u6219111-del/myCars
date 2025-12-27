import React from 'react';
import { useTranslation } from 'react-i18next';

function Support() {
  const { t } = useTranslation();

  // Sample support options data
  const supportOptions = [
    {
      id: 1,
      title: t('support_option_1_title'),
      description: t('support_option_1_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      action: t('chat_now')
    },
    {
      id: 2,
      title: t('support_option_2_title'),
      description: t('support_option_2_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      action: t('call_now')
    },
    {
      id: 3,
      title: t('support_option_3_title'),
      description: t('support_option_3_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      action: t('email_us')
    },
    {
      id: 4,
      title: t('support_option_4_title'),
      description: t('support_option_4_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      ),
      action: t('visit_faq')
    }
  ];

  return (
    <div className="support-container">
      <div className="support-wrapper">
        <h2 className="support-title">{t('support_title')}</h2>
        <p className="support-subtitle">{t('support_subtitle')}</p>
        
        <div className="support-grid">
          {supportOptions.map((option) => (
            <div key={option.id} className="support-option">
              <div className="support-icon">
                {option.icon}
              </div>
              <h3 className="support-option-title">{option.title}</h3>
              <p className="support-option-description">{option.description}</p>
              <button className="support-action-button">
                {option.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Support;