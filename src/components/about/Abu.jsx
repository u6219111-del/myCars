import React, { useState } from "react";
import "./Abu.css";
import { useTranslation } from "react-i18next";

function Abu() {
  const { t } = useTranslation();

  return (
    <div className="abu-section">
      <h2 className="abu-title">{t('about_us')}</h2>

      <div className="abu-grid">
        <div className="abu-left">
          <h3 className="abu-main-text">{t('drive_feels_extraordinary')}</h3>
        </div>

        <div className="abu-right">
          <div className="abu-item">
            <h4>{t('variety_brands')}</h4>
            <p>{t('variety_brands_desc')}</p>
          </div>

          <div className="abu-item">
            <h4>{t('awesome_support')}</h4>
            <p>{t('awesome_support_desc')}</p>
          </div>

          <div className="abu-item">
            <h4>{t('maximum_freedom')}</h4>
            <p>{t('maximum_freedom_desc')}</p>
          </div>

          <div className="abu-item">
            <h4>{t('flexibility_on_go')}</h4>
            <p>{t('flexibility_on_go_desc')}</p>
          </div>
        </div>
      </div>

      <div className="video-wrapper">
        <div className="video-preview"></div>
        
          <iframe
            className="video-frame"
            src="https://www.youtube.com/embed/RFcYbx_jLwU?autoplay=1"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
      </div>
    </div>
  );
}

export default Abu;
