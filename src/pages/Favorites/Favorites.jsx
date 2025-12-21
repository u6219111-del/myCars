import React from "react";
import { useFavorites } from "../../contexts/FavoritesContext";
import { Link } from "react-router-dom";
import "./Favorites.css"; 
import { useTranslation } from 'react-i18next';

function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();
  const { t } = useTranslation();

  return (
    <div className="favorites-container">
      <div className="favorites-wrapper">
        <h1 className="favorites-title">{t('your_favorites')}</h1>
        
        {favorites.length === 0 ? (
          <div className="empty-favorites">
            <svg className="empty-favorites-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h3 className="empty-favorites-title">{t('favorites_list_empty')}</h3>
            <p className="empty-favorites-text">{t('start_adding_favorites')}</p>
            <div className="browse-btn-container">
              <Link to="/vehicles" className="browse-btn">{t('browse_vehicles')}</Link>
            </div>
          </div>
        ) : (
          <div className="favorites-items-container">
            <ul className="favorites-items-list">
              {favorites.map((item) => (
                <li key={item.id} className="favorites-item">
                  <div className="favorites-item-content">
                    <div className="favorites-item-image-wrapper">
                      <img 
                        src={item.image_url} 
                        alt={item.name} 
                        className="favorites-item-image"
                      />
                    </div>
                    <div className="favorites-item-details">
                      <div className="favorites-item-header">
                        <div>
                          <h3 className="favorites-item-name">{item.name}</h3>
                          <p className="favorites-item-category">{item.category}</p>
                        </div>
                        <p className="favorites-item-price">${item.price}</p>
                      </div>
                      <div className="favorites-item-actions">
                        <button
                          onClick={() => removeFromFavorites(item.id)}
                          className="remove-btn"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="remove-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          {t('remove')}
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="favorites-summary">
              <div className="continue-browsing">
                <Link to="/vehicles" className="continue-browsing-link">
                  {t('browse_vehicles')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
