import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import './SpecialtySelector.css';

export default function SpecialtySelector() {
  return (
    <section className="specialty-care-section" id="specialized-care">
      <div className="container">
        
        {/* SECTION INTRODUCTION */}
        <div className="specialty-intro-header text-center">
          <span className="section-eyebrow-pill">CARE PATHWAYS</span>
          <h2 className="section-title-serif">
            Care for Mother &amp; Baby, Under One Roof
          </h2>
          <p className="section-subtitle-sans">
            Two specialised care pathways. One trusted centre.
          </p>
        </div>

        {/* TWO LARGE EDITORIAL PANELS */}
        <div className="specialty-panels-grid">
          
          {/* LEFT PANEL: FETAL MEDICINE */}
          <div className="specialty-card card-peach">
            <div className="card-image-bg bg-fetal"></div>
            <div className="card-content-wrap">
              <span className="panel-badge-eyebrow">FETAL MEDICINE &amp; DIAGNOSTICS</span>
              <h3 className="panel-headline-serif">Specialised Fetal Assessment &amp; Imaging</h3>
              <p className="panel-lead-description">
                Specialised fetal assessment, pregnancy imaging and diagnostic care.
              </p>
              <Link to="/fetal-medicine" className="btn-panel-explore">
                <span>Explore Fetal Care</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* RIGHT PANEL: SAI KIRAN DIABETIC CLINIC */}
          <div className="specialty-card card-blue">
            <div className="card-image-bg bg-diabetes"></div>
            <div className="card-content-wrap">
              <span className="panel-badge-eyebrow badge-blue">SAI KIRAN DIABETIC CLINIC</span>
              <h3 className="panel-headline-serif">Personalised Diabetes &amp; Metabolic Care</h3>
              <p className="panel-lead-description">
                Personalised diabetes, metabolic and gestational care.
              </p>
              <Link to="/diabetes-care" className="btn-panel-explore">
                <span>Explore Diabetes Care</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
