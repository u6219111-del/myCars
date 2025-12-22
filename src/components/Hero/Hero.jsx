import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero-section animate-hero">
      <div className="hero-inner">
        <div className="hero-text animate-text">
          <h1>{t("premium_car_rentals")}</h1>
          <p>{t("rent_a_premium_car")}</p>

          <div className="hero-buttons animate-buttons">
            <Link to="/vehicles" className="btn-primary">
              {t("rent_a_car")}
            </Link>
            <Link to="/services" className="btn-secondary">
              {t("our_services")}
            </Link>
          </div>
        </div>

        <div className="hero-image animate-image">
          <img src="/src/assets/png/koleso.png" alt="Premium Car" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
