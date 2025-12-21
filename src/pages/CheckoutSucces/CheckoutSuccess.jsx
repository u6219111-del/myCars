import React from "react";
import { Link } from "react-router-dom";
import "./CheckoutSucces.css";
import { useTranslation } from 'react-i18next';

function CheckoutSuccess() {
  const { t } = useTranslation();
  
  return (
    <div className="checkout-container">
      <div className="checkout-wrapper">
        <div className="checkout-card">
          <div className="checkout-content">
            <div className="checkout-icon-wrapper">
              <div className="checkout-icon-circle">
                <svg className="checkout-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h1 className="checkout-title">{t('order_placed_successfully')}</h1>
            <p className="checkout-text">
              {t('thank_you_purchase')}
            </p>

            <div className="checkout-next-steps">
              <h2 className="checkout-next-title">{t('what_happens_next')}</h2>
              <ul className="checkout-steps-list">
                <li className="checkout-step">
                  <svg className="checkout-step-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('confirmation_email')}</span>
                </li>
                <li className="checkout-step">
                  <svg className="checkout-step-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('prepare_rental')}</span>
                </li>
                <li className="checkout-step">
                  <svg className="checkout-step-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('pickup_instructions')}</span>
                </li>
              </ul>
            </div>

            <div className="checkout-buttons">
              <Link to="/" className="checkout-btn-primary">{t('return_home')}</Link>
              <Link to="/vehicles" className="checkout-btn-secondary">{t('browse_more_vehicles')}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
