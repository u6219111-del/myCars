import React, { useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor-dot');
    const cursorFollow = document.querySelector('.cursor-dot-follow');
    
    if (!cursor || !cursorFollow) return;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      // Delay the follow cursor for a smooth effect
      setTimeout(() => {
        if (cursorFollow) {
          cursorFollow.style.left = e.clientX + 'px';
          cursorFollow.style.top = e.clientY + 'px';
        }
      }, 50);
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      
      // Check if the element is interactive
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('btn') ||
        target.classList.contains('card') ||
        target.hasAttribute('href') ||
        target.hasAttribute('onclick') ||
        target.getAttribute('role') === 'button' ||
        target.getAttribute('tabindex')
      ) {
        cursor.classList.add('hover');
        cursorFollow.classList.add('hover');
      }
    };

const handleMouseLeave = (e) => {
  if (!(e.target instanceof HTMLElement)) return;

  const target = e.target;

  if (
    target.tagName === 'A' || 
    target.tagName === 'BUTTON' || 
    target.tagName === 'INPUT' || 
    target.tagName === 'TEXTAREA' ||
    target.classList.contains('btn') ||
    target.classList.contains('card') ||
    target.hasAttribute('href') ||
    target.getAttribute('role') === 'button' ||
    target.hasAttribute('tabindex')
  ) {
    cursor.classList.remove('hover');
    cursorFollow.classList.remove('hover');
  }
};


    const handleClick = () => {
      cursor.classList.add('click');
      setTimeout(() => {
        cursor.classList.remove('click');
      }, 200);
    };

    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    document.addEventListener('click', handleClick);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .btn, .card, [role="button"], [tabindex]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('click', handleClick);

      // Remove event listeners from interactive elements
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-dot-follow"></div>
    </>
  );
};

export default CustomCursor;