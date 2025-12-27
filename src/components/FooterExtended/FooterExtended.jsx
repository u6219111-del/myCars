import React from 'react';
import { useTranslation } from 'react-i18next';
import './FooterExtended.css';

function FooterExtended() {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t('home'), path: '/' },
    { name: t('vehicles'), path: '/vehicles' },
    { name: t('services'), path: '/services' },
    { name: t('about_us'), path: '/aboutus' },
    { name: t('contact'), path: '/contactus' },
    { name: t('blog'), path: '/blog' },
  ];

  const services = [
    { name: t('car_rental_desc'), path: '/services' },
    { name: t('chauffeur_service_desc'), path: '/services' },
    { name: t('long_term_leasing_desc'), path: '/services' },
    { name: t('roadside_assistance_desc'), path: '/services' },
    { name: t('gps_navigation_desc'), path: '/services' },
    { name: t('child_safety_seats_desc'), path: '/services' },
  ];

  const contactInfo = [
    { 
      type: 'address', 
      value: t('downtown_address'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      )
    },
    { 
      type: 'phone', 
      value: '+1 (555) 123-4567',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      )
    },
    { 
      type: 'email', 
      value: 'info@carrental.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'f' },
    { name: 'Twitter', icon: 't' },
    { name: 'Instagram', icon: 'i' },
    { name: 'LinkedIn', icon: 'in' },
  ];

  return (
    <footer className="footer-extended-container">
      <div className="footer-extended-wrapper">
        {/* Company Info Section */}
        <div className="footer-section">
          <div className="footer-logo">
            <h3>{t('premium_car_rentals')}</h3>
            <p>{t('rent_a_premium_car')}</p>
          </div>
          
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href="#" 
                className="social-link"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>{t('useful_links')}</h4>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h4>{t('our_services')}</h4>
          <ul className="footer-links">
            {services.map((service, index) => (
              <li key={index}>
                <a href={service.path}>{service.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h4>{t('contact')}</h4>
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <span className="contact-icon">
                  {info.icon}
                </span>
                <span className="contact-value">{info.value}</span>
              </div>
            ))}
          </div>
          
          {/* Newsletter Subscription */}
          <div className="footer-newsletter">
            <h5>{t('subscribe_to_newsletter')}</h5>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder={t('enter_email_placeholder')} 
                className="newsletter-input"
              />
              <button className="newsletter-button">
                {t('subscribe')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>{t('copyright')}</p>
        <div className="footer-bottom-links">
          <a href="#">{t('privacy_policy')}</a>
          <a href="#">{t('terms_of_service')}</a>
          <a href="#">{t('cookie_policy')}</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterExtended;