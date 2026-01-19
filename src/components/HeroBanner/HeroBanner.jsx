import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './HeroBanner.css';
import carImage from '../../assets/png/koleso.png';

function HeroBanner() {
  const { t } = useTranslation();

  // Debug theme variables
  useEffect(() => {
    const logThemeInfo = () => {
      console.log("=== HeroBanner Theme Debug ===");
      console.log("data-theme attribute:", document.documentElement.getAttribute("data-theme"));
      console.log("Computed text-color:", getComputedStyle(document.documentElement).getPropertyValue("--text-color").trim());
      console.log("Computed primary:", getComputedStyle(document.documentElement).getPropertyValue("--primary").trim());
      
      // Force text color on hero elements
      const heroTitle = document.querySelector(".hero-title");
      const heroSubtitle = document.querySelector(".hero-subtitle");
      
      if (heroTitle) {
        const textColor = getComputedStyle(document.documentElement).getPropertyValue("--text-color").trim();
        heroTitle.style.color = textColor;
        console.log("Applied text color to hero-title:", textColor);
      }
      
      if (heroSubtitle) {
        const textMuted = getComputedStyle(document.documentElement).getPropertyValue("--text-muted").trim();
        heroSubtitle.style.color = textMuted;
        console.log("Applied text-muted color to hero-subtitle:", textMuted);
      }
    };
    
    logThemeInfo();
    
    // Log on theme changes
    const observer = new MutationObserver(logThemeInfo);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-banner">
      <div className="hero-content">
        <div className="hero-text">
          <div className='two'>
          <h1 className="hero-title">
            {t('hero_title', 'Премиум аренда автомобилей')}
          </h1>

          <p className="hero-subtitle">
            {t(
              'hero_subtitle',
              'Лучшие автомобили для комфортных и безопасных поездок'
            )}
          </p>
          </div>

       <div className="hero-image">
          <div className="car-showcase">
            <img src={carImage} alt="Car" />
          </div>
        </div>
          <div className="hero-buttons">
            <Link to="/vehicles" className="btn btn-primary">
              {t('rent_a_car', 'Арендовать авто')}
            </Link>
            <Link to="/services" className="btn btn-secondary">
              {t('our_services', 'Наши услуги')}
            </Link>
          </div>
        </div>

 
      </div>
       <hr/>
      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Довольных клиентов</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">25+</span>
          <span className="stat-label">Лет опыта</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">50+</span>
          <span className="stat-label">Автобрендов</span>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
