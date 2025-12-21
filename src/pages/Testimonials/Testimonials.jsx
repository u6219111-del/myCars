import React from "react";
import "./Testimonials.css";
import { useTranslation } from 'react-i18next';

function Testimonials() {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      id: 1,
      name: t('testimonial1_name'),
      company: t('testimonial1_company'),
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5,
      text: t('testimonial1_text')
    },
    {
      id: 2,
      name: t('testimonial2_name'),
      company: t('testimonial2_company'),
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5,
      text: t('testimonial2_text')
    },
    {
      id: 3,
      name: t('testimonial3_name'),
      company: t('testimonial3_company'),
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5,
      text: t('testimonial3_text')
    }
  ];

  return (
    <div className="testimonials-container">
      <div className="testimonials-wrapper">
        <div className="testimonials-header">
          <h1>{t('customer_testimonials')}</h1>
          <p>{t('testimonials_subtitle')}</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-top">
                <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.company}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`star ${i < testimonial.rating ? "filled" : ""}`}
                  >★</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <h2>{t('ready_experience_excellence')}</h2>
          <p>{t('join_satisfied_customers')}</p>
          <button>{t('book_ride_today')}</button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;