import React from 'react';
import { useTranslation } from 'react-i18next';
import './HeroBanner.css';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-banner">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{t('hero_title', 'Premium Car Rentals')}</h1>
          <p className="hero-subtitle">{t('hero_subtitle', 'Experience luxury and comfort with our premium fleet of vehicles')}</p>
          <div className="hero-buttons">
            <Link to="/vehicles">
            <button className="btn btn-primary">{t("rent_a_car")}</button>
            </Link>
            <Link to="/services">
            <button className="btn btn-secondary">{t("our_services")}</button>
            </Link>
            
          </div>
        </div>
        <div className="hero-image">
          <div className="car-showcase">
            <img 
              src="/src/assets/png/koleso.png" 
              alt={t('car_image_alt', 'Luxury Car')} 
            />
          </div>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">{t('happy_customers', 'Happy Customers')}</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">25+</span>
          <span className="stat-label">{t('years_experience', 'Years Experience')}</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">50+</span>
          <span className="stat-label">{t('car_brands', 'Car Brands')}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;