import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SearchFilter.css';

const SearchFilter = () => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    location: '',
    pickupDate: '',
    returnDate: '',
    carType: '',
    priceRange: ''
  });

  const carTypes = [
    { value: '', label: t('all_cars', 'All Cars') },
    { value: 'sedan', label: t('sedan', 'Sedan') },
    { value: 'suv', label: t('suv', 'SUV') },
    { value: 'luxury', label: t('luxury', 'Luxury') },
    { value: 'sports', label: t('sports', 'Sports') },
    { value: 'van', label: t('van', 'Van') }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search filters:', filters);
    // Here you would typically make an API call to search for cars
  };

  return (
    <div className="search-filter-container">
      <div className="search-filter-header">
        <h2 className="search-filter-title">{t('find_perfect_car', 'Find Your Perfect Car')}</h2>
        <p className="search-filter-subtitle">{t('search_subtitle', 'Search and compare prices from hundreds of car rental companies')}</p>
      </div>
      
      <form className="search-filter-form" onSubmit={handleSearch}>
        <div className="filter-row">
          <div className="filter-group">
            <label htmlFor="location" className="filter-label">{t('pickup_location', 'Pick-up Location')}</label>
            <div className="input-with-icon">
              <input
                type="text"
                id="location"
                name="location"
                value={filters.location}
                onChange={handleInputChange}
                placeholder={t('enter_location', 'Enter location')}
                className="filter-input"
              />
              <i className="filter-icon location-icon">📍</i>
            </div>
          </div>

          <div className="filter-group">
            <label htmlFor="pickupDate" className="filter-label">{t('pickup_date', 'Pick-up Date')}</label>
            <div className="input-with-icon">
              <input
                type="date"
                id="pickupDate"
                name="pickupDate"
                value={filters.pickupDate}
                onChange={handleInputChange}
                className="filter-input"
              />
              <i className="filter-icon date-icon">📅</i>
            </div>
          </div>

          <div className="filter-group">
            <label htmlFor="returnDate" className="filter-label">{t('return_date', 'Return Date')}</label>
            <div className="input-with-icon">
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                value={filters.returnDate}
                onChange={handleInputChange}
                className="filter-input"
              />
              <i className="filter-icon date-icon">📅</i>
            </div>
          </div>

          <div className="filter-group">
            <label htmlFor="carType" className="filter-label">{t('car_type', 'Car Type')}</label>
            <div className="input-with-icon">
              <select
                id="carType"
                name="carType"
                value={filters.carType}
                onChange={handleInputChange}
                className="filter-input filter-select"
              >
                {carTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
              <i className="filter-icon car-icon">🚗</i>
            </div>
          </div>

          <div className="filter-group">
            <label htmlFor="priceRange" className="filter-label">{t('price_range', 'Price Range')}</label>
            <div className="input-with-icon">
              <select
                id="priceRange"
                name="priceRange"
                value={filters.priceRange}
                onChange={handleInputChange}
                className="filter-input filter-select"
              >
                <option value="">{t('select_price_range', 'Select Price Range')}</option>
                <option value="0-50">{t('price_0_50', '$0 - $50')}</option>
                <option value="50-100">{t('price_50_100', '$50 - $100')}</option>
                <option value="100-200">{t('price_100_200', '$100 - $200')}</option>
                <option value="200+">{t('price_200_plus', '$200+')}</option>
              </select>
              <i className="filter-icon price-icon">💰</i>
            </div>
          </div>
        </div>

        <div className="filter-actions">
          <button type="submit" className="search-button">
            <i className="search-icon">🔍</i> {t('search_cars', 'Search Cars')}
          </button>
          <button type="button" className="reset-button" onClick={() => setFilters({
            location: '',
            pickupDate: '',
            returnDate: '',
            carType: '',
            priceRange: ''
          })}>
            <i className="reset-icon">🔄</i> {t('reset_filters', 'Reset')}
          </button>
        </div>
      </form>

      <div className="popular-destinations">
        <h3 className="destinations-title">{t('popular_destinations', 'Popular Destinations')}</h3>
        <div className="destinations-list">
          <button className="destination-tag">{t('new_york', 'New York')}</button>
          <button className="destination-tag">{t('los_angeles', 'Los Angeles')}</button>
          <button className="destination-tag">{t('miami', 'Miami')}</button>
          <button className="destination-tag">{t('las_vegas', 'Las Vegas')}</button>
          <button className="destination-tag">{t('chicago', 'Chicago')}</button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;