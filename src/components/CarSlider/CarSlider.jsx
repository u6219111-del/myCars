import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CarSlider.css';

const CarSlider = () => {
  const { t } = useTranslation();

  const cars = [
    {
      id: 1,
      name: t('luxury_sedan'),
      model: 'Mercedes-Benz S-Class',
      price: 150,
      image: '/src/assets/png/koleso.png',
      rating: 4.8,
      features: [t('automatic'), t('air_conditioning'), t('gps')],
      description: t('luxury_sedan_desc')
    },
    {
      id: 2,
      name: t('sports_car'),
      model: 'Porsche 911',
      price: 250,
      image: '/src/assets/png/koleso.png',
      rating: 4.9,
      features: [t('manual'), t('convertible'), t('premium_audio')],
      description: t('sports_car_desc')
    },
    {
      id: 3,
      name: t('suv'),
      model: 'Range Rover',
      price: 180,
      image: '/src/assets/png/koleso.png',
      rating: 4.7,
      features: [t('automatic'), t('4wd'), t('spacious')],
      description: t('suv_desc')
    }
  ];

  return (
    <div className="car-slider-container">
      <div className="car-slider-header">
        <h2 className="car-slider-title">{t('featured_vehicles')}</h2>
        <p className="car-slider-subtitle">{t('find_perfect_ride')}</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        breakpoints={{
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 }
        }}
      >
        {cars.map(car => (
          <SwiperSlide key={car.id}>
            <div className="car-card">
              <div className="car-image-container">
                <img src={car.image} alt={car.model} className="car-image" />
                <div className="car-badge">{car.name}</div>
              </div>

              <div className="car-details">
                <h3 className="car-model">{car.model}</h3>
                <p className="car-description">{car.description}</p>

                <div className="car-features">
                  {car.features.map((f, i) => (
                    <span key={i} className="feature-tag">{f}</span>
                  ))}
                </div>

                <div className="car-price-section">
                  <div className="car-price">
                    <span className="price-value">${car.price}</span>
                    <span className="price-label">/{t('day')}</span>
                  </div>

                  <div className="car-actions">
                    <button className="btn btn-details">{t('view_details')}</button>
                    <button className="btn btn-rent">{t('rent_now')}</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarSlider;
