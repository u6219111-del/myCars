import React from "react";
import "./Three.css";
import { useTranslation } from "react-i18next";
function Three() {
  const { t } = useTranslation();
  return (
    <div className="stats-section">
      <div className="stat-item">
        <p className="stat-number">20k+</p>
        <h2 className="stat-title">{t("happy_customers")}</h2>
      </div>
      <div className="stat-item">
        <p className="stat-number">540+</p>
        <h2 className="stat-title">{t("count_of_cars")}</h2>
      </div>
      <div className="stat-item">
        <p className="stat-number">25+</p>
        <h2 className="stat-title">{t("years_of_experience")}</h2>
      </div>
    </div>
  );
}

export default Three;
