import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../contexts/AuthContext";
import { fetchReviews, addReview } from "../../api/reviews";
import { getProfile } from "../../api/mockUsers";
import "./Testimonials.css";

function Testimonials() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ text: "", rating: 5 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const data = await fetchReviews();
      const approvedReviews = data.filter((review) => review.approved);
      setReviews(approvedReviews);
    } catch (error) {
      console.error("Failed to load reviews:", error);
      setReviews([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !newReview.text.trim()) return;

    setLoading(true);
    try {
      let profile;
      let userName = user.email?.split("@")[0] || "Anonymous";
      let avatarUrl = "";

      try {
        profile = await getProfile(user.id);
        userName = profile.username || user.username || userName;
        avatarUrl = profile.avatar_url || "";
      } catch (profileError) {
        console.warn("Profile not found, using defaults:", profileError);
        userName = user.username || userName;
      }

      const reviewData = {
        user_id: user.id,
        user_name: userName,
        comment: newReview.text.trim(),
        rating: newReview.rating,
        avatar_url: avatarUrl,
        approved: true,
        created_at: new Date().toISOString(),
      };

      await addReview(reviewData);
      setNewReview({ text: "", rating: 5 });
      await loadReviews();
      alert(t("review_submitted_success", "Спасибо за ваш отзыв! Он был успешно добавлен."));
    } catch (error) {
      console.error("Failed to add review:", error);
      alert(t("review_submit_error", "Произошла ошибка при добавлении отзыва."));
    } finally {
      setLoading(false);
    }
  };

  const renderAvatar = (review) =>
    review.avatar_url ? (
      <img src={review.avatar_url} alt={review.user_name} className="testimonial-avatar" />
    ) : (
      <div className="avatar-placeholder">{review.user_name.charAt(0).toUpperCase()}</div>
    );

  const renderStars = (rating, onClick) =>
    [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${star <= rating ? "filled" : ""}`}
        onClick={() => onClick?.(star)}
      >
        ★
      </span>
    ));

  return (
    <div className="testimonials-container">
      <div className="testimonials-wrapper">
        <div className="testimonials-header">
          <h1>{t("customer_testimonials")}</h1>
          <p>{t("testimonials_subtitle")}</p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div key={review.id} className="testimonial-card">
              <div className="testimonial-top">
                <div className="testimonial-avatar-wrapper">{renderAvatar(review)}</div>
                <div className="testimonial-info">
                  <h3 title={review.user_name}>{review.user_name}</h3>
                  <p>Клиент</p>
                </div>
              </div>
              <div className="testimonial-rating">{renderStars(review.rating)}</div>
              <p className="testimonial-text">"{review.comment}"</p>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          {user ? (
            <>
              <h2>{t("share_your_experience", "Поделитесь своим опытом")}</h2>
              <p>{t("leave_testimonial", "Оставьте отзыв о наших услугах")}</p>

              <form onSubmit={handleSubmit} className="testimonial-form">
                <div className="form-group">
                  <textarea
                    name="text"
                    value={newReview.text}
                    onChange={handleInputChange}
                    placeholder={t("your_testimonial", "Ваш отзыв")}
                    rows="4"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>{t("rating", "Рейтинг")}:</label>
                  <div className="rating-input">{renderStars(newReview.rating, handleRatingChange)}</div>
                </div>

                <button type="submit" disabled={loading}>
                  {loading ? t("submitting", "Отправка...") : t("submit_testimonial", "Отправить отзыв")}
                </button>
              </form>
            </>
          ) : (
            <p>{t("login_to_review", "Пожалуйста, войдите в систему, чтобы оставить отзыв.")}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
