// AppDownloadSection.jsx
import React from 'react';
import './Add.css';
import { useTranslation } from 'react-i18next';

function Add() {
    const { t } = useTranslation();
  return (
    <section className="app-download-section">
      <div className="text-container">
        <h1 className="title">{t('download_app')}</h1>
        <p className="description">{t('discover_freedom')}</p>
        <div className="buttons">
          <a href="https://www.apple.com/app-store/">
            <button className="app-button">
              <img src="/src/assets/svg/apple.svg" alt="Apple Store" />
              <span className="button-text">App Store</span>
            </button>
          </a>
          <a href="https://play.google.com/store/games?hl=ru">
            <button className="app-button">
              <img src="/src/assets/svg/googlePlay.svg" alt="Google Play" />
              <span className="button-text">Google Play</span>
            </button>
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src="/src/assets/png/phone1.png" alt="Phone" />
      </div>
    </section>
  );
};

export default Add;
