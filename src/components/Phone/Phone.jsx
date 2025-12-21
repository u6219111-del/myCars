import React from "react";
import { useTranslation } from 'react-i18next';
import "./Phone.css"; // Подключаем CSS

function Phone() {
  const { t } = useTranslation();
  
  return (
    <div className="phone-container">
      <img
        className="phone-image"
        src="/src/assets/png/phone2.png"
        alt="phone"
      />
      <div className="phone-content">
        <h4>{t('download_our_app')}</h4>
        <h1>{t('download_our_app')}</h1>
        <p>{t('phone_description')}</p>
        <div className="phone-buttons">
          <a href="https://www.apple.com/app-store/">
            <button className="btn btn-apple">
              <img src="/src/assets/svg/apple1.svg" alt="App Store" />
              <span>App Store</span>
            </button>
          </a>
          <a href="https://play.google.com/store/games?hl=ru">
            <button className="btn btn-google">
              <img src="/src/assets/svg/googlePlay.svg" alt="Google Play" />
              <span>Google Play</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Phone;
