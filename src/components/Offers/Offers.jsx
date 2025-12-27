import React from 'react';
import { useTranslation } from 'react-i18next';

function Offers() {
  const { t } = useTranslation();

  // Sample offers data
  const offers = [
    {
      id: 1,
      title: t('offer_1_title'),
      description: t('offer_1_description'),
      discount: '20%',
      price: t('offer_1_price'),
      originalPrice: t('offer_1_original_price'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v4"/>
          <path d="M12 16h.01"/>
        </svg>
      )
    },
    {
      id: 2,
      title: t('offer_2_title'),
      description: t('offer_2_description'),
      discount: '15%',
      price: t('offer_2_price'),
      originalPrice: t('offer_2_original_price'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: t('offer_3_title'),
      description: t('offer_3_description'),
      discount: '25%',
      price: t('offer_3_price'),
      originalPrice: t('offer_3_original_price'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    }
  ];

  return (
    <div className="offers-container">
      <div className="offers-wrapper">
        <h2 className="offers-title">{t('special_offers')}</h2>
        <p className="offers-subtitle">{t('offers_subtitle')}</p>
        
        <div className="offers-grid">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card">
              <div className="offer-badge">
                {offer.discount} {t('off')}
              </div>
              <div className="offer-icon">
                {offer.icon}
              </div>
              <h3 className="offer-title">{offer.title}</h3>
              <p className="offer-description">{offer.description}</p>
              <div className="offer-price">
                <span className="offer-price-current">{offer.price}</span>
                <span className="offer-price-original">{offer.originalPrice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offers;