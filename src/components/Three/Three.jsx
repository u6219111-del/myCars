import React from "react";
import "./Three.css";
import { useTranslation } from "react-i18next";
function Three() {
  const { t } = useTranslation();
  return (
    <div className="stats-section">
      <div className="stat-item">
        <h1 className="stat-number">20k+</h1>
        <h2 className="stat-title">{t("happy_customers")}</h2>
      </div>
      <div className="stat-item">
        <h1 className="stat-number">540+</h1>
        <h2 className="stat-title">{t("count_of_cars")}</h2>
      </div>
      <div className="stat-item">
        <h1 className="stat-number">25+</h1>
        <h2 className="stat-title">{t("years_of_experience")}</h2>
      </div>
    </div>
  );
}

export default Three;
