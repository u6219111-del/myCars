import React from "react";
import { useTranslation } from 'react-i18next';
import "./Small.css"; 

function Small() {
  const { t } = useTranslation();
  
  return (
    <div className="small-container">
      <div className="small-item">
        <img src="/src/assets/svg/location.svg" alt="location" />
        <h2>{t('availability')}</h2>
        <p>{t('availability_desc')}</p>
      </div>
      <div className="small-item">
        <img src="/src/assets/svg/mashina.svg" alt="comfort" />
        <h2>{t('comfort')}</h2>
        <p>{t('comfort_desc')}</p>
      </div>
      <div className="small-item">
        фдлотдфвм
        <img src="/src/assets/svg/save.svg" alt="savings" />
        <h2>{t('savings')}</h2>
        <p>{t('savings_desc')}</p>
      </div>
    </div>
  );
}

export default Small;
