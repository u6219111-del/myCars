import React from 'react';
import { useTranslation } from 'react-i18next';

function Awards() {
  const { t } = useTranslation();

  // Sample awards data
  const awards = [
    {
      id: 1,
      year: '2024',
      title: t('award_1_title'),
      description: t('award_1_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      )
    },
    {
      id: 2,
      year: '2023',
      title: t('award_2_title'),
      description: t('award_2_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      )
    },
    {
      id: 3,
      year: '2022',
      title: t('award_3_title'),
      description: t('award_3_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M8 22h8M19 7h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"/>
          <path d="M12 7v10M9 4h6"/>
        </svg>
      )
    },
    {
      id: 4,
      year: '2021',
      title: t('award_4_title'),
      description: t('award_4_description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      )
    }
  ];

  return (
    <div className="awards-container">
      <div className="awards-wrapper">
        <h2 className="awards-title">{t('our_awards')}</h2>
        <p className="awards-subtitle">{t('awards_subtitle')}</p>
        
        <div className="awards-grid">
          {awards.map((award) => (
            <div key={award.id} className="award-card">
              <div className="award-icon">
                {award.icon}
              </div>
              <div className="award-year">{award.year}</div>
              <h3 className="award-title">{award.title}</h3>
              <p className="award-description">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Awards;