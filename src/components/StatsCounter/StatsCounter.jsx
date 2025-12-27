import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function StatsCounter() {
  const { t } = useTranslation();
  const [counts, setCounts] = useState({
    cars: 0,
    customers: 0,
    locations: 0,
    awards: 0
  });

 
  const stats = [
    {
      id: 1,
      number: 500,
      label: t('cars_available'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/>
          <circle cx="6.5" cy="16.5" r="2.5"/>
          <circle cx="16.5" cy="16.5" r="2.5"/>
        </svg>
      )
    },
    {
      id: 2,
      number: 10000,
      label: t('happy_customers'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      id: 3,
      number: 50,
      label: t('locations'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      )
    },
    {
      id: 4,
      number: 25,
      label: t('awards'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      )
    }
  ];

  // Animation effect for counters
  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const frames = 60; // Number of animation frames
    const interval = duration / frames;
    
    const timers = [];
    
    stats.forEach((stat, index) => {
      const target = stat.number;
      const increment = target / frames;
      let current = 0;
      let frame = 0;
      
      const timer = setInterval(() => {
        current += increment;
        frame++;
        
        if (frame >= frames) {
          current = target;
          clearInterval(timer);
        }
        
        setCounts(prev => {
          const newCounts = { ...prev };
          switch(stat.id) {
            case 1: newCounts.cars = Math.floor(current); break;
            case 2: newCounts.customers = Math.floor(current); break;
            case 3: newCounts.locations = Math.floor(current); break;
            case 4: newCounts.awards = Math.floor(current); break;
          }
          return newCounts;
        });
      }, interval);
      
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className="stats-counter-container">
      <div className="stats-counter-wrapper">
        <h2 className="stats-counter-title">{t('our_achievements')}</h2>
        <p className="stats-counter-subtitle">{t('stats_subtitle')}</p>
        
        <div className="stats-counter-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stats-counter-item">
              <div className="stats-counter-icon">
                {stat.icon}
              </div>
              <div className="stats-counter-number">
                {stat.id === 1 && `${counts.cars}+`}
                {stat.id === 2 && `${counts.customers}+`}
                {stat.id === 3 && `${counts.locations}+`}
                {stat.id === 4 && `${counts.awards}+`}
              </div>
              <div className="stats-counter-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsCounter;