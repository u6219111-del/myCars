import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import { fetchReviews, addReview } from '../api/reviews';
import { getProfile } from '../api/mockUsers';

function Testimonials() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    text: '',
    rating: 5
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const data = await fetchReviews();
      setReviews(data.filter(review => review.approved));
    } catch (error) {
      console.error('Failed to load reviews:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setNewReview(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !newReview.text.trim()) return;

    setLoading(true);
    try {
      const profile = await getProfile(user.id);
      const reviewData = {
        user_id: user.id,
        user_name: profile.username || user.username,
        comment: newReview.text.trim(),
        rating: newReview.rating,
        avatar_url: profile.avatar_url || '',
        approved: true,
        created_at: new Date().toISOString(),
      };
      await addReview(reviewData);
      setNewReview({
        text: '',
        rating: 5
      });
      loadReviews();
    } catch (error) {
      console.error('Failed to add review:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderAvatar = (review) => {
    if (review.avatar_url) {
      return <img src={review.avatar_url} alt={review.user_name} className="testimonial-avatar" />;
    } else {
      return <div className="avatar-placeholder">{review.user_name.charAt(0).toUpperCase()}</div>;
    }
  };

  return (
    <div className="testimonials-container">
      <div className="testimonials-wrapper">
        <div className="testimonials-header">
          <h1>{t('customer_testimonials')}</h1>
          <p>{t('testimonials_subtitle')}</p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div key={review.id} className="testimonial-card">
              <div className="testimonial-top">
                {renderAvatar(review)}
                <div className="testimonial-info">
                  <h3>{review.user_name}</h3>
                  <p>Клиент</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`star ${i < review.rating ? "filled" : ""}`}
                  >★</span>
                ))}
              </div>
              <p className="testimonial-text">"{review.comment}"</p>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          {user ? (
            <>
              <h2>{t('share_your_experience', 'Поделитесь своим опытом')}</h2>
              <p>{t('leave_testimonial', 'Оставьте отзыв о наших услугах')}</p>
              
              <form onSubmit={handleSubmit} className="testimonial-form">
                <div className="form-group">
                  <textarea
                    name="text"
                    value={newReview.text}
                    onChange={handleInputChange}
                    placeholder={t('your_testimonial', 'Ваш отзыв')}
                    rows="4"
                    required
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label>{t('rating', 'Рейтинг')}:</label>
                  <div className="rating-input">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`star ${star <= newReview.rating ? 'filled' : ''}`}
                        onClick={() => handleRatingChange(star)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                
                <button type="submit" disabled={loading}>
                  {loading ? t('submitting', 'Отправка...') : t('submit_testimonial', 'Отправить отзыв')}
                </button>
              </form>
            </>
          ) : (
            <p>{t('login_to_review', 'Пожалуйста, войдите в систему, чтобы оставить отзыв.')}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
