import React from 'react';
import { useTranslation } from 'react-i18next';

function Timeline() {
  const { t } = useTranslation();

  // Sample timeline data
  const timelineEvents = [
    {
      id: 1,
      year: '2010',
      title: t('timeline_event_1_title'),
      description: t('timeline_event_1_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      )
    },
    {
      id: 2,
      year: '2015',
      title: t('timeline_event_2_title'),
      description: t('timeline_event_2_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      )
    },
    {
      id: 3,
      year: '2018',
      title: t('timeline_event_3_title'),
      description: t('timeline_event_3_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    },
    {
      id: 4,
      year: '2024',
      title: t('timeline_event_4_title'),
      description: t('timeline_event_4_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      )
    }
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        <h2 className="timeline-title">{t('company_timeline')}</h2>
        <p className="timeline-subtitle">{t('timeline_subtitle')}</p>
        
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div 
              key={event.id} 
              className={`timeline-item ${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  {event.icon}
                </div>
                <div className="timeline-year">{event.year}</div>
                <h3 className="timeline-event-title">{event.title}</h3>
                <p className="timeline-event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;