import React from 'react';
import { useTranslation } from 'react-i18next';
import './Reviews.css';
function Reviews() {
  const { t } = useTranslation();

  
  const reviews = [
    {
      id: 1,
      name: t('review_1_name'),
      rating: 5,
      comment: t('review_1_comment'),
      date: '2024-01-15',
      avatar: 'https://via.placeholder.com/60x60/3498db/ffffff?text=A'
    },
    {
      id: 2,
      name: t('review_2_name'),
      rating: 5,
      comment: t('review_2_comment'),
      date: '2024-01-10',
      avatar: 'https://via.placeholder.com/60x60/e74c3c/ffffff?text=B'
    },
    {
      id: 3,
      name: t('review_3_name'),
      rating: 4,
      comment: t('review_3_comment'),
      date: '2024-01-05',
      avatar: 'https://via.placeholder.com/60x60/2ecc71/ffffff?text=C'
    },
    {
      id: 4,
      name: t('review_4_name'),
      rating: 5,
      comment: t('review_4_comment'),
      date: '2023-12-28',
      avatar: 'https://via.placeholder.com/60x60/f39c12/ffffff?text=D'
    },
    {
      id: 5,
      name: t('review_5_name'),
      rating: 5,
      comment: t('review_5_comment'),
      date: '2023-12-20',
      avatar: 'https://via.placeholder.com/60x60/9b59b6/ffffff?text=E'
    },
    {
      id: 6,
      name: t('review_6_name'),
      rating: 4,
      comment: t('review_6_comment'),
      date: '2023-12-15',
      avatar: 'https://via.placeholder.com/60x60/1abc9c/ffffff?text=F'
    }
  ];

  
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={index < rating ? "#f39c12" : "#e0e0e0"}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <div className="reviews-container">
      <div className="reviews-wrapper">
        <h2 className="reviews-title">{t('customer_reviews')}</h2>
        <p className="reviews-subtitle">{t('reviews_subtitle')}</p>
        
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="review-avatar"
                />
                <div className="review-info">
                  <h3 className="review-name">{review.name}</h3>
                  <div className="review-date">{review.date}</div>
                </div>
              </div>
              
              <div className="review-rating">
                {renderStars(review.rating)}
              </div>
              
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;