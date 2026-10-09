import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Microscope, ScanLine, Heart } from 'lucide-react'; /* Placeholder icons for the 4 features */
import './AboutTrust.css';

export default function AboutTrust() {
  return (
    <section id="about" className="about-editorial-section">
      <div className="container">
        
        <div className="about-editorial-grid">
          {/* LEFT COLUMN: EDITORIAL CONTENT */}
          <div className="about-text-column">
            <h2 className="section-title-serif about-title">
              Care That Begins With Understanding
            </h2>

            <p className="about-lead-desc">
              Vasundhara Diagnostics &amp; Fetal Medicine Centre brings together specialized fetal medicine, diagnostic services and dedicated diabetes care through one connected healthcare experience.
            </p>

            <div className="about-cta-wrap">
              <Link to="/about" className="btn-panel-explore">
                <span>About the Centre</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: LARGE PREMIUM CLINIC IMAGE */}
          <div className="about-visual-column">
            <div className="about-visual-frame">
              <img 
                src="/images/about_clinic_interior.jpg" 
                alt="Vasundhara Diagnostics Clinical Interior" 
                className="about-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: 4 HIGHLIGHT FEATURES */}
        <div className="about-features-row">
          <div className="about-feature-box">
            <div className="feature-icon-circle">
              <Stethoscope size={22} />
            </div>
            <span className="feature-title">Fetal Medicine<br/>Expertise</span>
          </div>

          <div className="about-feature-box">
            <div className="feature-icon-circle">
              <Microscope size={22} />
            </div>
            <span className="feature-title">Diagnostic<br/>Support</span>
          </div>

          <div className="about-feature-box">
            <div className="feature-icon-circle">
              <ScanLine size={22} />
            </div>
            <span className="feature-title">Modern<br/>Imaging</span>
          </div>

          <div className="about-feature-box">
            <div className="feature-icon-circle">
              <Heart size={22} />
            </div>
            <span className="feature-title">Compassionate<br/>Approach</span>
          </div>
        </div>

      </div>
    </section>
  );
}
