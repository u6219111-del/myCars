import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './CTA.css';
function CTA() {
  const { t } = useTranslation();

  return (
    <div className="cta-container">
      <div className="cta-wrapper">
        <div className="cta-content">
          <h2 className="cta-title">{t('cta_title')}</h2>
          <p className="cta-subtitle">{t('cta_subtitle')}</p>
          
          <div className="cta-buttons">
            <Link to="/vehicles" className="cta-primary-button">
              {t('browse_cars')}
            </Link>
            <Link to="/contact" className="cta-secondary-button">
              {t('contact_us')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;