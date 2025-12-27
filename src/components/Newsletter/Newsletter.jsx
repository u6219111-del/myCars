import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Newsletter.css';
function Newsletter() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError(t('email_required'));
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError(t('invalid_email'));
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulate subscription process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real application, you would send the email to your backend here
      console.log('Subscribed email:', email);
      
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    } catch (err) {
      setError(t('subscription_error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-wrapper">
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="64" 
              height="64" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          
          <h2 className="newsletter-title">{t('newsletter_title')}</h2>
          <p className="newsletter-subtitle">{t('newsletter_subtitle')}</p>
          
          {isSubscribed && (
            <div className="newsletter-success">
              {t('subscription_success')}
            </div>
          )}
          
          {error && (
            <div className="newsletter-error">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="newsletter-input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('email_placeholder')}
                className="newsletter-input"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                className="newsletter-button"
                disabled={isLoading}
              >
                {isLoading ? t('subscribing') : t('subscribe')}
              </button>
            </div>
          </form>
          
          <p className="newsletter-disclaimer">
            {t('newsletter_disclaimer')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;