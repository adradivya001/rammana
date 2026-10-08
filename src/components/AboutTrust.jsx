import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import './AboutTrust.css';

export default function AboutTrust() {
  return (
    <section id="about" className="about-editorial-section">
      <div className="container about-editorial-grid">
        
        {/* LEFT COLUMN: LARGE PREMIUM CLINIC IMAGE */}
        <div className="about-visual-column">
          <div className="about-visual-frame">
            <img 
              src="/images/about_clinic_interior.jpg" 
              alt="Vasundhara Diagnostics Clinical Interior" 
              className="about-editorial-img"
              loading="lazy"
            />
            <div className="about-location-pill">
              <MapPin size={15} />
              <span>Sai Nagar, Anantapur</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: EDITORIAL CONTENT */}
        <div className="about-text-column">
          <span className="section-eyebrow-pill">ABOUT VASUNDHARA</span>

          <h2 className="section-title-serif about-title">
            Care Backed by Diagnostic Expertise.
          </h2>

          <p className="about-lead-desc">
            Vasundhara Diagnostics &amp; Fetal Medicine Centre and Sai Kiran Diabetic Clinic bring specialised diagnostics, fetal medicine and diabetes care together under one trusted centre.
          </p>

          {/* 3 ELEGANT NUMBERED HIGHLIGHTS */}
          <div className="about-highlights-list">
            <div className="highlight-item">
              <span className="highlight-num">01</span>
              <div className="highlight-text">
                <h3>Fetal Medicine</h3>
                <p>Specialised maternal imaging &amp; prenatal risk evaluation.</p>
              </div>
            </div>

            <div className="highlight-item">
              <span className="highlight-num">02</span>
              <span className="highlight-text">
                <h3>Advanced Diagnostics</h3>
                <p>High-resolution 3D/4D ultrasound &amp; structured reports.</p>
              </span>
            </div>

            <div className="highlight-item">
              <span className="highlight-num">03</span>
              <div className="highlight-text">
                <h3>Diabetes Care</h3>
                <p>Personalised glycemic management led by Dr. Sai Kiran Reddy.</p>
              </div>
            </div>
          </div>

          <div className="about-cta-wrap">
            <Link to="/about" className="btn-primary-navy">
              <span>Discover Our Centre</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
