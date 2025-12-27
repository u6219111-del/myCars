import React, { useEffect } from 'react';

const AnimationProvider = ({ children }) => {
  useEffect(() => {
    // Add fade-in animation to elements when they come into view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    // Observe elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // Add slide-up animation to elements with data-slide attribute
    const slideObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
        }
      });
    }, observerOptions);

    const slideElements = document.querySelectorAll('[data-slide]');
    slideElements.forEach(el => {
      slideObserver.observe(el);
    });

    // Add scale-in animation to elements with data-scale attribute
    const scaleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scale-in');
        }
      });
    }, observerOptions);

    const scaleElements = document.querySelectorAll('[data-scale]');
    scaleElements.forEach(el => {
      scaleObserver.observe(el);
    });

    return () => {
      observer.disconnect();
      slideObserver.disconnect();
      scaleObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default AnimationProvider;