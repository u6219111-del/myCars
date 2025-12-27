import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentFilter, setCurrentFilter] = useState('all');

  
  const galleryItems = [
    {
      id: 1,
      src: '/src/assets/images/car-1.jpg',
      alt: t('car_1_alt'),
      category: 'sedan',
      title: t('car_1_title'),
      description: t('car_1_description')
    },
    {
      id: 2,
      src: '/src/assets/images/car-2.jpg',
      alt: t('car_2_alt'),
      category: 'suv',
      title: t('car_2_title'),
      description: t('car_2_description')
    },
    {
      id: 3,
      src: '/src/assets/images/car-3.jpg',
      alt: t('car_3_alt'),
      category: 'luxury',
      title: t('car_3_title'),
      description: t('car_3_description')
    },
    {
      id: 4,
      src: '/src/assets/images/car-4.jpg',
      alt: t('car_4_alt'),
      category: 'sedan',
      title: t('car_4_title'),
      description: t('car_4_description')
    },
    {
      id: 5,
      src: '/src/assets/images/car-5.jpg',
      alt: t('car_5_alt'),
      category: 'suv',
      title: t('car_5_title'),
      description: t('car_5_description')
    },
    {
      id: 6,
      src: '/src/assets/images/car-6.jpg',
      alt: t('car_6_alt'),
      category: 'luxury',
      title: t('car_6_title'),
      description: t('car_6_description')
    }
  ];

  // Filter gallery items based on selected category
  const filteredItems = currentFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === currentFilter);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const filterOptions = [
    { value: 'all', label: t('all_cars') },
    { value: 'sedan', label: t('sedans') },
    { value: 'suv', label: t('suvs') },
    { value: 'luxury', label: t('luxury_cars') }
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-wrapper">
        <h2 className="gallery-title">{t('our_gallery')}</h2>
        <p className="gallery-subtitle">{t('gallery_subtitle')}</p>
        
        {/* Filter buttons */}
        <div className="gallery-filters">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              className={`gallery-filter-btn ${currentFilter === option.value ? 'active' : ''}`}
              onClick={() => setCurrentFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
        
        {/* Gallery grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => openImageModal(item)}
            >
              <div className="gallery-item-image">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/3498db/ffffff?text=' + encodeURIComponent(item.title);
                  }}
                />
                <div className="gallery-item-overlay">
                  <div className="gallery-item-info">
                    <h3 className="gallery-item-title">{item.title}</h3>
                    <p className="gallery-item-description">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for detailed view */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeImageModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeImageModal}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="gallery-modal-body">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600/3498db/ffffff?text=' + encodeURIComponent(selectedImage.title);
                }}
              />
              <div className="gallery-modal-info">
                <h3 className="gallery-modal-title">{selectedImage.title}</h3>
                <p className="gallery-modal-description">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;