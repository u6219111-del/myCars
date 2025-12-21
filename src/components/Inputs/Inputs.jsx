import React from "react";
import "./Inputs.css";
import { useTranslation } from "react-i18next";

function Inputs() {
  const { t } = useTranslation();

  return (
    <div className="inputs-container">
      <h1 className="inputs-title">{t("enjoy_every_mile")}</h1>
      <p className="inputs-desc">{t("enjoy_description")}</p>

      <div className="inputs-search">
        <input
          type="text"
          className="inputs-input"
          placeholder={t("enter_city")}
        />
        <button className="inputs-button">{t("search")}</button>
      </div>
    </div>
  );
}

export default Inputs;
