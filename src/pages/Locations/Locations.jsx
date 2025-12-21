import React from "react";
import { useTranslation } from 'react-i18next';
import './Locations.css';
import { Link } from "react-router-dom";

function Locations() {
  const { t } = useTranslation();
  
  const locations = [
    {
      id: 1,
      name: t('downtown_office'),
      address: t('downtown_address'),
      phone: "+1 (555) 123-4567",
      hours: t('downtown_hours'),
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1308&q=80"
    },
    {
      id: 2,
      name: t('airport_terminal'),
      address: t('airport_address'),
      phone: "+1 (555) 234-5678",
      hours: t('airport_hours'),
      image: "https://assets.cntraveller.in/photos/688c6adbcf3944c198c2f002/4:3/w_2244,h_1683,c_limit/sfd2.jpg"
    },
    {
      id: 3,
      name: t('central_station'),
      address: t('central_address'),
      phone: "+1 (555) 345-6789",
      hours: t('central_hours'),
      image: "https://cms.goteborg.com/uploads/centralstationen-167-1-scaled.jpg"
    }
  ];

  return (
    <div className="locations-section">
      <div className="locations-container">
        <div className="locations-header">
          <h1 className="locations-title">{t('our_locations')}</h1>
          <p className="locations-subtitle">{t('locations_subtitle')}</p>
        </div>

        <div className="locations-grid">
          {locations.map((location) => (
            <div key={location.id} className="location-card">
              <div className="location-image-wrapper">
                <img className="location-image" src={location.image} alt={location.name} />
              </div>
              <div className="location-body">
                <div className="location-info">
                  <h3 className="location-name">{location.name}</h3>
                  <div className="location-details">
                    <div className="location-detail">
                      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p>{location.address}</p>
                    </div>
                    <div className="location-detail">
                      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p>{location.phone}</p>
                    </div>
                    <div className="location-detail">
                      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p>{location.hours}</p>
                    </div>
                  </div>
                </div>
                <div className="location-button-wrapper">
                  <button className="location-button">{t('get_directions')}</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="locations-footer">
          <h3 className="footer-title">{t('looking_specific_location')}</h3>
          <div className="footer-body">
            <p className="footer-description">{t('location_contact_description')}</p>
            <Link to="/contactus">
              <button className="footer-button">{t('contact_us')}</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
