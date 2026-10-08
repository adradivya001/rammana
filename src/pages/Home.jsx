import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Baby, 
  Activity, 
  ArrowRight, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Scan, 
  HeartPulse, 
  ChevronRight, 
  Microscope, 
  Heart, 
  MessageCircle,
  Star,
  Building2,
  Phone,
  Droplet,
  Award
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

// Visual Assets (Editorial clinic & care imagery - no doctor face photos)
import motherImg from '../assets/mother_pregnancy_art_1791288807641.jpg';
import receptionImg from '../assets/clinic_reception_modern_1791288825992.jpg';
import glucometerImg from '../assets/glucometer_care_device_1791288861229.jpg';
import familySunsetImg from '../assets/family_sunset_care_1791288843923.jpg';

import './Home.css';

export default function Home() {
  return (
    <div className="home-ref-container">
      
      {/* ── 1. EDITORIAL PREMIUM HERO ───────────────────────── */}
      <section className="ref-hero-section">
        {/* Subtle Ambient Light Glows */}
        <div className="hero-glow-orb orb-teal" aria-hidden="true"></div>
        <div className="hero-glow-orb orb-cyan" aria-hidden="true"></div>

        <div className="container ref-hero-grid">
          
          {/* Left Column: Premium Value Proposition */}
          <div className="ref-hero-left">
            <div className="hero-status-pill">
              <span className="hero-live-indicator"></span>
              <span className="hero-status-text">Specialist Centre • Sai Nagar, Anantapur</span>
            </div>

            <h1 className="ref-hero-title">
              Specialized Care.<br />
              <span className="title-gradient-highlight">One Trusted Centre in Anantapur.</span>
            </h1>
            
            <p className="ref-hero-subtitle">
              Advanced fetal medicine, prenatal ultrasound imaging, and dedicated physician diabetes care designed around clearer diagnostic answers, continuous monitoring, and empathetic patient support.
            </p>
            
            {/* 3-Tier CTA Hierarchy: Dominant Primary + Clean Secondary */}
            <div className="ref-hero-buttons">
              <Link to="/book-appointment" className="ref-btn-primary hero-cta-btn">
                <Calendar size={18} />
                <span>Book an Appointment</span>
                <ArrowRight size={17} className="btn-arrow-icon" />
              </Link>
              <Link to="/services" className="ref-btn-secondary hero-sec-btn">
                <span>Explore Services</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Quiet Supporting Trust Statistics */}
            <div className="hero-stats-glass-grid">
              <div className="stat-card">
                <div className="stat-icon-wrap teal-icon"><Baby size={18} /></div>
                <div>
                  <span className="stat-number">2 Specialist</span>
                  <span className="stat-caption">Integrated Divisions</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon-wrap cyan-icon"><Scan size={18} /></div>
                <div>
                  <span className="stat-number">100% Doctor</span>
                  <span className="stat-caption">Evaluated Examinations</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon-wrap gold-icon"><Star size={18} fill="#F59E0B" /></div>
                <div>
                  <span className="stat-number">4.9 / 5.0</span>
                  <span className="stat-caption">Patient Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Composition with Overlapping Accents */}
          <div className="ref-hero-right">
            <div className="hero-visual-card-wrap">
              <div className="hero-main-frame">
                <img 
                  src={motherImg} 
                  alt="Specialized Maternal and Fetal Care Suite" 
                  className="hero-main-visual" 
                />
                <div className="hero-frame-gradient-mesh"></div>

                {/* Floating Specialist Badge 1: Fetal Medicine */}
                <div className="hero-float-badge badge-top-right">
                  <div className="float-badge-icon pulse-teal">
                    <Baby size={20} />
                  </div>
                  <div className="float-badge-text">
                    <strong>Fetal Medicine Suite</strong>
                    <span>NT, TIFFA &amp; Doppler Scans</span>
                  </div>
                </div>

                {/* Floating Specialist Badge 2: Diabetic Clinic */}
                <div className="hero-float-badge badge-bottom-left">
                  <div className="float-badge-icon pulse-navy">
                    <Activity size={20} />
                  </div>
                  <div className="float-badge-text">
                    <strong>Sai Kiran Diabetic Clinic</strong>
                    <span>Ex-Registrar, CMC Vellore</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. WHY THIS CENTRE (Asymmetric Editorial Section) ── */}
      <section className="why-centre-editorial-section">
        <div className="container">
          <div className="why-editorial-grid">
            
            {/* Left Anchor: Large Editorial Statement */}
            <div className="why-editorial-left">
              <span className="ref-section-tag">Why Choose Us</span>
              <h2 className="why-editorial-headline">
                A calmer, more thorough healthcare experience built on clinical clarity.
              </h2>
              <p className="why-editorial-lead">
                Unlike crowded multi-specialty hospitals, our centre is intentionally structured for detailed consultations, personal doctor evaluations, and patient dignity.
              </p>
              <div className="why-left-actions">
                <Link to="/about" className="ref-btn-tertiary">
                  <span>Learn about our clinical philosophy</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right: 4 Numbered Clinical Pillars (Not generic cards) */}
            <div className="why-pillars-list">
              
              <div className="why-pillar-row">
                <span className="pillar-index">01</span>
                <div className="pillar-content">
                  <h3>Fellowship-Trained Fetal Medicine</h3>
                  <p>Prenatal scans personally performed by Dr. N. Vasundhara with specialized fellowship qualification in fetal ultrasound and anomaly detection.</p>
                </div>
              </div>

              <div className="why-pillar-row">
                <span className="pillar-index">02</span>
                <div className="pillar-content">
                  <h3>CMC Vellore Trained Diabetologist</h3>
                  <p>Comprehensive physician diabetes evaluations and individualized treatment protocols led by Dr. V. Sai Kiran Reddy (Ex-Registrar, CMC Vellore).</p>
                </div>
              </div>

              <div className="why-pillar-row">
                <span className="pillar-index">03</span>
                <div className="pillar-content">
                  <h3>Real-Time Patient Viewing Suite</h3>
                  <p>Private air-conditioned ultrasound suites with dedicated high-resolution viewing screens so expectant parents can watch their baby's scan in real time.</p>
                </div>
              </div>

              <div className="why-pillar-row">
                <span className="pillar-index">04</span>
                <div className="pillar-content">
                  <h3>Step-Free Ground Floor Accessibility</h3>
                  <p>Designed for maternal comfort and senior ease with step-free entrance, zero stairs, wheelchair access, and ample front parking in Sai Nagar.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 3. TWO CORE SPECIALIST DIVISIONS (Distinct Visuals) ─ */}
      <section className="core-divisions-feature-section">
        <div className="container">
          <div className="ref-section-header text-center">
            <span className="ref-section-tag">Two Core Clinical Divisions</span>
            <h2 className="ref-section-heading">Specialized Care Under One Roof</h2>
            <p className="ref-section-sub">Distinct clinical expertise working synergistically to deliver complete peace of mind for families in Anantapur.</p>
          </div>

          <div className="divisions-split-grid">
            
            {/* Division 1: Vasundhara Fetal Medicine (Warm Maternal Aesthetic) */}
            <div className="division-card fetal-division-card">
              <div className="division-top-accent teal-accent-bar"></div>
              <div className="division-inner-body">
                <div className="division-badge-wrap">
                  <span className="div-icon-box teal-box"><Baby size={24} /></span>
                  <div>
                    <span className="div-kicker-text">Maternal &amp; Fetal Health</span>
                    <h3 className="div-title-text">Vasundhara Diagnostics &amp; Fetal Medicine</h3>
                  </div>
                </div>

                <p className="div-lead-desc">
                  Dedicated prenatal ultrasound imaging, early risk stratification, detailed organ anomaly screening, and maternal guidance from first trimester to delivery.
                </p>

                <div className="div-services-checklist">
                  <div className="div-check-item">
                    <CheckCircle2 size={16} className="teal-check" />
                    <span>First Trimester NT Scan &amp; Aneuploidy Risk (11–13+6 Weeks)</span>
                  </div>
                  <div className="div-check-item">
                    <CheckCircle2 size={16} className="teal-check" />
                    <span>Targeted Imaging for Fetal Anomalies (TIFFA / Level II Scan)</span>
                  </div>
                  <div className="div-check-item">
                    <CheckCircle2 size={16} className="teal-check" />
                    <span>Fetal Growth, AFI Volume &amp; Color Doppler Studies</span>
                  </div>
                  <div className="div-check-item">
                    <CheckCircle2 size={16} className="teal-check" />
                    <span>High-Resolution 3D/4D Obstetric Surface Imaging</span>
                  </div>
                </div>

                <div className="div-action-footer">
                  <Link to="/fetal-medicine" className="ref-btn-primary full-width">
                    <span>Explore Fetal Scans &amp; Protocols</span>
                    <ArrowRight size={16} className="btn-arrow-icon" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Division 2: Sai Kiran Diabetic Clinic (Deep Navy Clinical Aesthetic) */}
            <div className="division-card diabetes-division-card">
              <div className="division-top-accent navy-accent-bar"></div>
              <div className="division-inner-body">
                <div className="division-badge-wrap">
                  <span className="div-icon-box navy-box"><Activity size={24} /></span>
                  <div>
                    <span className="div-kicker-text cyan-kicker">Metabolic &amp; Physician Care</span>
                    <h3 className="div-title-text">Sai Kiran Diabetic Clinic</h3>
                  </div>
                </div>

                <p className="div-lead-desc">
                  Structured diabetes consultations, glycemic optimization, point-of-care HbA1c tracking, gestational diabetes management, and complication prevention.
                </p>

                <div className="div-services-checklist">
                  <div className="div-check-item">
                    <CheckCircle2 size={16} className="cyan-check" />
                    <span>Comprehensive Diabetes Consultation &amp; Glycemic Profiling</span>
                  </div>
                  <div className="div-check-item">
                    <CheckCircle2 size={16} className="cyan-check" />
                    <span>Gestational Diabetes Protocol Coordinated with Pregnancy Scans</span>
                  </div>
                  <div className="div-check-item">
                    <CheckCircle2 size={16} className="cyan-check" />
                    <span>Point-of-Care HbA1c Lab Testing &amp; Titration Guidance</span>
                  </div>
                  <div className="div-check-item">
                    <CheckCircle2 size={16} className="cyan-check" />
                    <span>Diabetic Foot, Neuropathy &amp; Renal Microalbumin Screening</span>
                  </div>
                </div>

                <div className="div-action-footer">
                  <Link to="/diabetes-care" className="ref-btn-primary full-width navy-btn-theme">
                    <span>Explore Diabetes Programs</span>
                    <ArrowRight size={16} className="btn-arrow-icon" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. ADVANCED DIAGNOSTICS & FACILITY (Visual Quad) ── */}
      <section className="tech-facility-section">
        <div className="container">
          <div className="ref-section-header text-center">
            <span className="ref-section-tag">Modern Diagnostic Technology</span>
            <h2 className="ref-section-heading">State-of-the-Art Clinical Suites</h2>
            <p className="ref-section-sub">Engineered for diagnostic accuracy, patient dignity, and clinical excellence in Sai Nagar, Anantapur.</p>
          </div>

          <div className="tech-quad-grid">
            
            <div className="tech-glass-box">
              <div className="tech-box-icon"><Scan size={26} /></div>
              <h4>High-Resolution 3D/4D Ultrasound</h4>
              <p>Cutting-edge ultrasound platform with multi-frequency probes for deep anatomical clarity and early anomaly screening.</p>
            </div>

            <div className="tech-glass-box">
              <div className="tech-box-icon"><HeartPulse size={26} /></div>
              <h4>Fetal Doppler Hemodynamics</h4>
              <p>Precision color Doppler velocity mapping to assess placental resistance and fetal umbilical/cerebral blood flow.</p>
            </div>

            <div className="tech-glass-box">
              <div className="tech-box-icon"><Microscope size={26} /></div>
              <h4>Point-of-Care HbA1c Lab</h4>
              <p>Instant NGSP-certified glycemic tracking for accurate 3-month average glucose profiling and immediate physician titration.</p>
            </div>

            <div className="tech-glass-box">
              <div className="tech-box-icon"><Building2 size={26} /></div>
              <h4>Step-Free Comfort Architecture</h4>
              <p>Air-conditioned private suites with parent-viewing HD monitors, zero steps, wheelchair access, and dedicated parking.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. PATIENT JOURNEY TIMELINE (Connected Progression) ─ */}
      <section className="patient-journey-section">
        <div className="container">
          <div className="ref-section-header text-center">
            <span className="ref-section-tag">Your Experience</span>
            <h2 className="ref-section-heading">Your Visit, Made Simple</h2>
            <p className="ref-section-sub">A tranquil, step-by-step clinical experience from arrival to clear answers.</p>
          </div>

          <div className="journey-track-wrapper">
            <div className="journey-connecting-line" aria-hidden="true"></div>
            
            <div className="journey-four-grid">
              
              <div className="journey-node-card">
                <div className="journey-step-circle">
                  <span>01</span>
                </div>
                <h4>Schedule</h4>
                <p>Reserve online, via WhatsApp, or through our reception desk with minimal wait times.</p>
              </div>

              <div className="journey-node-card">
                <div className="journey-step-circle">
                  <span>02</span>
                </div>
                <h4>Arrival</h4>
                <p>Step-free arrival at our Sai Nagar centre with a calm welcome and private examination suite.</p>
              </div>

              <div className="journey-node-card">
                <div className="journey-step-circle">
                  <span>03</span>
                </div>
                <h4>Evaluation</h4>
                <p>Thorough ultrasound examination or diabetes consultation conducted personally by the specialist.</p>
              </div>

              <div className="journey-node-card">
                <div className="journey-step-circle">
                  <span>04</span>
                </div>
                <h4>Clarity</h4>
                <p>Immediate verified reports with clear, compassionate explanations and next clinical steps.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 7. VERIFIED PATIENT EXPERIENCES ─────────────────── */}
      <section className="patient-reviews-section">
        <div className="container">
          <div className="ref-section-header text-center">
            <span className="ref-section-tag">Patient Testimonials</span>
            <h2 className="ref-section-heading">What Our Patients Say</h2>
            <p className="ref-section-sub">Real experiences and feedback from families who visited our centre in Anantapur.</p>
          </div>

          <div className="reviews-carousel-grid">
            
            <div className="luxury-review-card">
              <div className="rev-card-header">
                <div className="rev-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#F59E0B" className="star-gold" />
                  ))}
                </div>
                <span className="google-badge-pill">Google Verified</span>
              </div>
              <p className="rev-quote">
                "Dr. Vasundhara explained every parameter of our 20-week TIFFA scan on the viewing screen with immense patience. The clinic environment is exceptionally serene and clean."
              </p>
              <div className="rev-author-footer">
                <div className="author-avatar-badge">L</div>
                <div>
                  <strong>Lakshmi P.</strong>
                  <span>TIFFA Anomaly Scan • Anantapur</span>
                </div>
              </div>
            </div>

            <div className="luxury-review-card">
              <div className="rev-card-header">
                <div className="rev-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#F59E0B" className="star-gold" />
                  ))}
                </div>
                <span className="google-badge-pill">Google Verified</span>
              </div>
              <p className="rev-quote">
                "Dr. Sai Kiran Reddy analyzed my HbA1c and glucose spikes thoroughly. His structured diet guidance and medication plan helped normalize my numbers within weeks."
              </p>
              <div className="rev-author-footer">
                <div className="author-avatar-badge navy-av">R</div>
                <div>
                  <strong>Ramesh K.</strong>
                  <span>Diabetes Consultation &amp; HbA1c</span>
                </div>
              </div>
            </div>

            <div className="luxury-review-card">
              <div className="rev-card-header">
                <div className="rev-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#F59E0B" className="star-gold" />
                  ))}
                </div>
                <span className="google-badge-pill">Google Verified</span>
              </div>
              <p className="rev-quote">
                "We travelled from Dharmavaram for the NT scan and Doppler. The clarity of the images and the calm consultation gave us complete reassurance. Highly recommended!"
              </p>
              <div className="rev-author-footer">
                <div className="author-avatar-badge">S</div>
                <div>
                  <strong>Sowmya G.</strong>
                  <span>NT Scan &amp; Doppler • Dharmavaram</span>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center mt-4">
            <Link to="/reviews" className="ref-btn-secondary">
              <span>Read All Patient Reviews</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. SUNSET FAMILY BANNER CTA ────────────────────── */}
      <section className="sunset-cta-luxury-section" style={{ backgroundImage: `url(${familySunsetImg})` }}>
        <div className="sunset-overlay-gradient"></div>
        <div className="container sunset-cta-inner">
          <span className="sunset-kicker">Dedicated Clinical Care</span>
          <h2 className="sunset-title">Your Care Starts With a Visit.</h2>
          <p className="sunset-description">
            Book an appointment today and experience specialized fetal medicine, high-resolution ultrasound imaging, and physician diabetes care in Sai Nagar, Anantapur.
          </p>
          <div className="sunset-btn-group">
            <Link to="/book-appointment" className="ref-btn-white">
              <Calendar size={17} />
              <span>Book an Appointment</span>
              <ArrowRight size={16} />
            </Link>
            <a 
              href={siteConfig.contact.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ref-btn-white-outline"
            >
              <MessageCircle size={17} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="sunset-quick-info">
            <span>📍 Sai Nagar Main Double Road Avenue</span>
            <span>•</span>
            <span>📞 Desk: {siteConfig.contact.phoneDesk}</span>
            <span>•</span>
            <span>⏰ Mon–Sat: 9 AM – 8 PM</span>
          </div>
        </div>
      </section>

    </div>
  );
}

