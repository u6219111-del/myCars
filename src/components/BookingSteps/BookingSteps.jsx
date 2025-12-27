import React from 'react';
import { useTranslation } from 'react-i18next';

function BookingSteps() {
  const { t } = useTranslation();

  // Sample booking steps data
  const bookingSteps = [
    {
      id: 1,
      title: t('booking_step_1_title'),
      description: t('booking_step_1_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4"/>
          <path d="M12 8h.01"/>
        </svg>
      )
    },
    {
      id: 2,
      title: t('booking_step_2_title'),
      description: t('booking_step_2_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: t('booking_step_3_title'),
      description: t('booking_step_3_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      )
    },
    {
      id: 4,
      title: t('booking_step_4_title'),
      description: t('booking_step_4_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <polyline points="16 11 18 13 22 9"/>
        </svg>
      )
    },
    {
      id: 5,
      title: t('booking_step_5_title'),
      description: t('booking_step_5_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      )
    }
  ];

  return (
    <div className="booking-steps-container">
      <div className="booking-steps-wrapper">
        <h2 className="booking-steps-title">{t('booking_process')}</h2>
        <p className="booking-steps-subtitle">{t('booking_steps_subtitle')}</p>
        
        <div className="booking-steps">
          {bookingSteps.map((step, index) => (
            <div key={step.id} className="booking-step">
              <div className="booking-step-icon">
                {step.icon}
              </div>
              <div className="booking-step-number">0{index + 1}</div>
              <h3 className="booking-step-title">{step.title}</h3>
              <p className="booking-step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookingSteps;