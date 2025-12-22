import React, { useState } from "react";
import "./Inputs.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Inputs() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!city.trim()) {
      setError(t("enter_city"));
      return;
    }

    setError("");
    navigate(`/vehicles?city=${encodeURIComponent(city.trim())}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="inputs-container">
      <h1 className="inputs-title">{t("enjoy_every_mile")}</h1>
      <p className="inputs-desc">{t("enjoy_description")}</p>

      <div className="inputs-search">
        <input
          type="text"
          className="inputs-input"
          placeholder={t("enter_city")}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button className="inputs-button" onClick={handleSearch}>
          {t("search")}
        </button>
      </div>

      {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>}
    </div>
  );
}

export default Inputs;
