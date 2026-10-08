import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Microscope, 
  CheckCircle2, 
  ArrowRight, 
  Eye, 
  Ear,
  HelpCircle,
  Stethoscope,
  ShieldCheck,
  Award,
  Sparkles,
  Calendar,
  Building2,
  Baby,
  Activity
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import receptionImg from '../assets/clinic_reception_modern_1791288825992.jpg';
import './About.css';

export default function About() {
  return (
    <div className="about-ref-page">
      
      {/* ── 1. ABOUT HERO ─────────────────────────────────── */}
      <section className="about-hero-section">
        <div className="container about-hero-grid">
          
          <div className="about-hero-text">
            <div className="hero-trust-badge">
              <Sparkles size={14} className="hero-sparkle-icon" />
              <span>Vasundhara Diagnostics &amp; Sai Kiran Diabetic Clinic</span>
            </div>
            <h1 className="about-hero-title">
              Specialized Care.<br />
              <span>One Trusted Centre in Anantapur.</span>
            </h1>
            <p className="about-hero-desc">
              Vasundhara Diagnostics &amp; Fetal Medicine Centre brings together dedicated fetal medicine specialists, high-resolution ultrasound imaging, and comprehensive physician diabetes management under one tranquil, patient-first facility.
            </p>
            <div className="about-hero-actions">
              <Link to="/book-appointment" className="ref-btn-teal">
                <Calendar size={16} />
                <span>Book a Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="ref-btn-outline">
                <span>Explore All Services</span>
              </Link>
            </div>
          </div>

          <div className="about-hero-image-wrap">
            <div className="about-hero-frame">
              <img 
                src={receptionImg} 
                alt="Vasundhara Diagnostics & Fetal Medicine Centre Reception" 
                className="about-hero-img"
              />
              <div className="about-img-badge">
                <Building2 size={20} className="badge-icon" />
                <div>
                  <strong>Sai Nagar Clinic</strong>
                  <span>Spacious, tranquil &amp; step-free facility</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. VISION & MISSION CARDS ─────────────────────── */}
      <section className="about-vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            
            <div className="vm-card">
              <div className="vm-icon-box">
                <Eye size={24} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the benchmark center of clinical excellence in Anantapur for fetal medicine, high-resolution diagnostic imaging, and proactive diabetes management — delivering peace of mind to every patient through accurate science and profound empathy.
              </p>
            </div>

            <div className="vm-card">
              <div className="vm-icon-box gold-icon">
                <ShieldCheck size={24} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower expectant families and diabetes patients with clear diagnostic answers, doctor-led consultations without rush, and tailored treatment pathways that safeguard long-term health.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. THREE CLINICAL PILLARS (Listen, Evaluate, Explain) ── */}
      <section className="about-pillars-section">
        <div className="container">
          <div className="ref-section-header text-center">
            <span className="ref-section-tag">Patient First Approach</span>
            <h2 className="ref-section-heading">Our Core Care Principles</h2>
            <p className="ref-section-sub">A structured, empathetic patient journey from first question to clear clinical results.</p>
          </div>

          <div className="three-pillars-grid">
            
            <div className="pillar-item">
              <div className="pillar-circle-icon">
                <Ear size={26} />
              </div>
              <h4>01. Listen</h4>
              <p>We listen closely to your history, concerns, and clinical questions with dedicated consultation time.</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-circle-icon teal-pillar">
                <Microscope size={26} />
              </div>
              <h4>02. Evaluate</h4>
              <p>We perform scans and evaluations using advanced high-resolution diagnostic technology.</p>
            </div>

            <div className="pillar-item">
              <div className="pillar-circle-icon navy-pillar">
                <Heart size={26} />
              </div>
              <h4>03. Explain</h4>
              <p>We explain image findings and blood metrics in transparent terms so you and your doctor have total clarity.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. LEADERSHIP CARE TEAM (INSIGNIA EMBLEMS) ─────── */}
      <section className="about-team-section">
        <div className="container">
          <div className="ref-section-header text-center">
            <span className="ref-section-tag">Clinical Specialists</span>
            <h2 className="ref-section-heading">Medical Leadership</h2>
            <p className="ref-section-sub">Experienced clinicians providing personal, specialist-led consultations.</p>
          </div>

          <div className="about-team-grid">
            <div className="about-doctor-card">
              <div className="about-emblem-badge teal-emblem">
                <Baby size={36} />
              </div>
              <div className="about-doc-info">
                <h3>Dr. N. Vasundhara</h3>
                <span className="doc-specialty">MBBS, MD Radiology • Fellow in Fetal Medicine</span>
                <p>Specialist in prenatal ultrasound imaging, NT screening, detailed TIFFA anomaly scans, and fetal Doppler hemodynamic evaluations.</p>
                <Link to="/doctors" className="about-doc-link">
                  <span>View Full Profile</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="about-doctor-card">
              <div className="about-emblem-badge navy-emblem">
                <Activity size={36} />
              </div>
              <div className="about-doc-info">
                <h3>Dr. V. Sai Kiran Reddy</h3>
                <span className="doc-specialty">MBBS, DNB (Gen Med), DFID (Diabetes) • Ex-CMC Vellore</span>
                <p>Consultant physician with specialized training in evidence-based diabetes management, gestational diabetes care, and metabolic screening.</p>
                <Link to="/doctors" className="about-doc-link">
                  <span>View Full Profile</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
