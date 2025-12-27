import React from 'react';
import { useTranslation } from 'react-i18next';
import './Partners.css';
function Partners() {
  const { t } = useTranslation();

  // Sample partners data
  const partners = [
    {
      id: 1,
      name: t('partner_1_name'),
      logo: '/src/assets/images/partner-1.png',
      description: t('partner_1_description')
    },
    {
      id: 2,
      name: t('partner_2_name'),
      logo: '/src/assets/images/partner-2.png',
      description: t('partner_2_description')
    },
    {
      id: 3,
      name: t('partner_3_name'),
      logo: '/src/assets/images/partner-3.png',
      description: t('partner_3_description')
    },
    {
      id: 4,
      name: t('partner_4_name'),
      logo: '/src/assets/images/partner-4.png',
      description: t('partner_4_description')
    },
    {
      id: 5,
      name: t('partner_5_name'),
      logo: '/src/assets/images/partner-5.png',
      description: t('partner_5_description')
    },
    {
      id: 6,
      name: t('partner_6_name'),
      logo: '/src/assets/images/partner-6.png',
      description: t('partner_6_description')
    }
  ];

  return (
    <div className="partners-container">
      <div className="partners-wrapper">
        <h2 className="partners-title">{t('our_partners')}</h2>
        <p className="partners-subtitle">{t('partners_subtitle')}</p>
        
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <div className="partner-logo">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150x80/3498db/ffffff?text=' + encodeURIComponent(partner.name);
                  }}
                />
              </div>
              <div className="partner-info">
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-description">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="partners-cta">
          <button className="partners-cta-button">
            {t('become_partner')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Partners;