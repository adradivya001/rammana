import React from 'react';
import './CareBannerSection.css';

export default function CareBannerSection() {
  return (
    <section className="care-banner-section">
      <div className="container care-banner-container">
        <div className="care-banner-wrapper">
          <img 
            src="/images/pastel-fertility-diabetes-banner.png" 
            alt="Vasundhara Diagnostics Fetal Medicine and Sai Kiran Diabetes Care Banner" 
            className="care-banner-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
