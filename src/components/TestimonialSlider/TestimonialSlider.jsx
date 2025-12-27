import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: t('john_doe', 'John Doe'),
      role: t('ceo_company', 'CEO, Company Inc'),
      content: t('testimonial1_content', 'The car rental service was exceptional! The vehicle was clean, well-maintained, and exactly what we needed for our family vacation. The booking process was seamless and the staff was incredibly helpful.'),
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: t('jane_smith', 'Jane Smith'),
      role: t('travel_blogger', 'Travel Blogger'),
      content: t('testimonial2_content', 'As a frequent traveler, I appreciate the reliability and professionalism of this car rental company. Their premium fleet and excellent customer service make every trip stress-free. Highly recommended!'),
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: t('mike_wilson', 'Mike Wilson'),
      role: t('business_executive', 'Business Executive'),
      content: t('testimonial3_content', 'I have been using their services for over two years now, and they consistently exceed my expectations. The variety of vehicles, competitive pricing, and 24/7 support make them my go-to choice for all transportation needs.'),
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
      id: 4,
      name: t('sarah_johnson', 'Sarah Johnson'),
      role: t('family_traveler', 'Family Traveler'),
      content: t('testimonial4_content', 'Great experience with this rental company. The cars are always in excellent condition and the staff is friendly and professional. Will definitely rent from them again on my next trip.'),
      rating: 4,
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-slider-container">
      <div className="testimonial-header">
        <h2 className="testimonial-title">{t('customer_testimonials', 'Customer Testimonials')}</h2>
        <p className="testimonial-subtitle">{t('what_customers_say', 'What our customers say about us')}</p>
      </div>

      <div className="testimonial-slider">
        <button className="slider-btn prev-btn" onClick={prevSlide}>
          <i className="arrow-icon">‹</i>
        </button>

        <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-text">
                    <i className="quote-icon">“</i>
                    <p>{testimonial.content}</p>
                  </div>
                  
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-btn next-btn" onClick={nextSlide}>
          <i className="arrow-icon">›</i>
        </button>
      </div>

      <div className="slider-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;