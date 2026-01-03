import React from "react";
import { useTranslation } from "react-i18next";
import "./Services.css";
import FAQAccordion from "../../components/FAQAccordion/FAQAccordion";

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t('premium_fleet'),
      description: t('car_rental_desc'),
      icon: (
        <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      id: 2,
      title: t('competitive_pricing'),
      description: t('chauffeur_service_desc'),
      icon: (
        <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: t('easy_booking'),
      description: t('long_term_leasing_desc'),
      icon: (
        <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      id: 4,
      title: t('customer_support'),
      description: t('roadside_assistance_desc'),
      icon: (
        <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: 5,
      title: t('one_way_rentals'),
      description: t('gps_navigation_desc'),
      icon: (
        <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: t('long_term_deals'),
      description: t('child_safety_seats_desc'),
      icon: (
        <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="services-container">
      <div className="services-inner">
        <div className="services-header">
          <h1>{t('our_services_title')}</h1>
          <p>{t('services_subtitle')}</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-inner">
                <div className="service-icon-wrapper">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="why-choose">
          <div className="why-choose-inner">
            <h2>{t('why_choose_our_services')}</h2>
            <div className="why-choose-grid">
              <div className="why-item">
                <div className="why-icon">
                  <svg className="why-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>{t('premium_fleet')}</p>
              </div>
              <div className="why-item">
                <div className="why-icon">
                  <svg className="why-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>{t('competitive_pricing')}</p>
              </div>
              <div className="why-item">
                <div className="why-icon">
                  <svg className="why-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>{t('customer_support')}</p>
              </div>
              <div className="why-item">
                <div className="why-icon">
                  <svg className="why-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>{t('easy_booking')}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <FAQAccordion/>
    </div>
  );
}

export default Services;
