import React from 'react';
import { Link } from 'react-router-dom';
import { Baby, Activity, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import './SpecialtySelector.css';

export default function SpecialtySelector() {
  return (
    <section className="specialty-selector-section">
      <div className="container">
        <div className="selector-header text-center">
          <div className="eyebrow reveal">
            <Sparkles size={14} /> Care Divisions
          </div>
          <h2 className="section-heading reveal delay-1">What brings you here today?</h2>
          <p className="section-subheading mx-auto reveal delay-2">
            Explore the specialized care division that best matches your diagnostic or medical consultation needs.
          </p>
        </div>

        <div className="selector-panels-grid">
          {/* PANEL 1: Fetal Medicine & Diagnostics */}
          <div className="specialty-panel-card panel-fetal premium-card reveal-left delay-1">
            <div className="panel-badge-row">
              <span className="panel-badge badge-teal">SPECIALIZED CARE DIVISION 01</span>
              <span className="panel-badge-dr">Dr. N. Vasundhara</span>
            </div>

            <div className="panel-icon-wrap icon-fetal">
              <Baby size={32} />
            </div>

            <h3 className="panel-title">FETAL MEDICINE &amp; DIAGNOSTICS</h3>
            <p className="panel-tagline">
              Specialized pregnancy imaging, fetal assessment and diagnostic care.
            </p>

            <ul className="panel-highlights-list">
              <li>
                <CheckCircle2 size={16} className="check-icon-teal" />
                <span>First Trimester NT Scan &amp; Early Risk Assessment</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="check-icon-teal" />
                <span>Targeted Anomaly Scan (TIFFA / Level II Scan)</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="check-icon-teal" />
                <span>Fetal Growth, Wellbeing &amp; Doppler Studies</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="check-icon-teal" />
                <span>3D/4D Obstetric Ultrasound &amp; Pelvic Imaging</span>
              </li>
            </ul>

            <div className="panel-footer">
              <Link to="/fetal-medicine" className="btn btn-teal panel-cta-btn hero-btn-pulse link-arrow-anim">
                <span>Explore Fetal Care</span>
                <ArrowRight size={17} />
              </Link>
            </div>
            <div className="card-shine-effect"></div>
          </div>

          {/* PANEL 2: Sai Kiran Diabetic Clinic */}
          <div className="specialty-panel-card panel-diabetes navy-card-hover reveal-right delay-2">
            <div className="panel-badge-row">
              <span className="panel-badge badge-navy">SPECIALIZED CARE DIVISION 02</span>
              <span className="panel-badge-dr">Dr. V. Sai Kiran Reddy</span>
            </div>

            <div className="panel-icon-wrap icon-diabetes">
              <Activity size={32} />
            </div>

            <h3 className="panel-title">SAI KIRAN DIABETIC CLINIC</h3>
            <p className="panel-tagline">
              Dedicated diabetes evaluation, monitoring and ongoing care.
            </p>

            <ul className="panel-highlights-list">
              <li>
                <CheckCircle2 size={16} className="check-icon-navy" />
                <span>Comprehensive Diabetes Evaluation &amp; Screening</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="check-icon-navy" />
                <span>HbA1c Glycemic Tracking &amp; Blood Glucose Monitoring</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="check-icon-navy" />
                <span>Gestational Diabetes Management for Mothers</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="check-icon-navy" />
                <span>Personalized Nutrition, Lifestyle &amp; Complication Review</span>
              </li>
            </ul>

            <div className="panel-footer">
              <Link to="/diabetes-care" className="btn btn-primary panel-cta-btn link-arrow-anim">
                <span>Explore Diabetes Care</span>
                <ArrowRight size={17} />
              </Link>
            </div>
            <div className="card-shine-effect"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
