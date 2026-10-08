import React from 'react';
import './MaternalWellnessBanner.css';

export default function MaternalWellnessBanner() {
  return (
    <section className="maternal-wellness-section">
      <div className="container">
        <div className="maternal-banner-wrapper">
          <img 
            src="/images/maternal-wellness-dashboard.png" 
            alt="Pastel Maternal Wellness Dashboard" 
            className="maternal-wellness-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
