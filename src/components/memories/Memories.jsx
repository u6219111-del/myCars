import React from "react";
import "./Memories.css";
import { useTranslation } from 'react-i18next';

const Memories = () => {
  const { t } = useTranslation();
  
  return (
    <div className="memories-section">

      <div className="memories-text">
        <h2 className="memories-title">
          {t('unlock_unforgettable_memories')}
        </h2>
        <p className="memories-description">
          {t('memories_description')}
        </p>

        <div className="memories-grid">
          <div className="memories-item">
            <div className="memories-check"><img src="/src/assets/svg/succesfuly.svg" alt="" /></div>
            <p className="memories-item-text">
              {t('memories_item1')}
            </p>
          </div>
          <div className="memories-item">
            <div className="memories-check"><img src="/src/assets/svg/succesfuly.svg" alt="" /></div>
            <p className="memories-item-text">
              {t('memories_item2')}
            </p>
          </div>
          <div className="memories-item">
            <div className="memories-check"><img src="/src/assets/svg/succesfuly.svg" alt="" /></div>
            <p className="memories-item-text">
              {t('memories_item3')}
            </p>
          </div>
          <div className="memories-item">
            <div className="memories-check"><img src="/src/assets/svg/succesfuly.svg" alt="" /></div>
            <p className="memories-item-text">
              {t('memories_item4')}
            </p>
          </div>
        </div>
      </div>



      <div className="memories-image-wrapper">
        <img
          src="https://res.cloudinary.com/micronetonline/image/upload/c_crop,h_900,w_900,x_0,y_0/f_auto/q_auto:best/f_auto/q_auto:best/v1751995462/tenants/3588a7c0-beea-47ac-982f-2010fad4d9ff/11193963708045049bffb6b2bbbe6c4e/Car-Show-Website-Icon.png"
          alt="Memories"
          className="memories-image"
        />
      </div>
    </div>
  );
};

export default Memories;