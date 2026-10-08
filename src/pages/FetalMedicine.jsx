import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  Heart, 
  CheckCircle2, 
  Clock, 
  Info, 
  HelpCircle, 
  X, 
  FileText,
  UserCheck,
  Layers,
  Search
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import { allServicesMap } from '../data/servicesData';
import AppointmentModal from '../components/AppointmentModal';
import './FetalMedicine.css';

const FETAL_SERVICES_LIST = [
  {
    id: "nt-scan",
    title: "First Trimester NT Scan & Anomaly Risk",
    shortDescription: "Early pregnancy screening.",
    image: "/images/fetal_feature_care.jpg"
  },
  {
    id: "tiffa-scan",
    title: "Targeted Anomaly Scan (TIFFA / Level II)",
    shortDescription: "Detailed fetal anatomy assessment.",
    image: "/images/hero-fetal-scan.jpg"
  },
  {
    id: "fetal-growth-doppler-hemodynamics",
    title: "Fetal Growth & Doppler",
    shortDescription: "Growth and blood-flow assessment.",
    image: "/images/hero-pregnant-woman.jpg"
  },
  {
    id: "anomaly-scan",
    title: "Anomaly Scan",
    shortDescription: "Detailed fetal development evaluation.",
    image: "/images/fetal_ultrasound_suite.jpg"
  },
  {
    id: "antenatal-sonography",
    title: "Antenatal Sonography",
    shortDescription: "Pregnancy imaging and monitoring.",
    image: "/images/about_clinic_interior.jpg"
  }
];

export default function FetalMedicine() {
  const [selectedService, setSelectedService] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceTitle, setBookingServiceTitle] = useState('Fetal Medicine Scan');

  const handleStartBooking = (serviceTitle) => {
    setBookingServiceTitle(serviceTitle || 'Fetal Medicine Scan');
    setIsBookingOpen(true);
  };

  const handleOpenLearnMore = (serviceId) => {
    const serviceData = allServicesMap[serviceId];
    if (serviceData) {
      setSelectedService(serviceData);
    }
  };

  return (
    <div className="fetal-medicine-page">
      
      {/* 1. HERO SECTION */}
      <section className="fetal-hero-section">
        <div className="container fetal-hero-container">
          <div className="fetal-hero-text">
            <div className="fetal-hero-badge">
              <Sparkles size={14} className="badge-sparkle-icon" />
              <span>SPECIALIZED MATERNAL–FETAL DIVISION</span>
            </div>
            <h1 className="fetal-hero-title">
              Fetal Medicine &amp; Ultrasound Imaging
            </h1>
            <p className="fetal-hero-desc">
              Advanced pregnancy imaging and fetal assessment for informed care throughout pregnancy.
            </p>

            <div className="fetal-hero-actions">
              <button 
                onClick={() => handleStartBooking('Fetal Scan Appointment')} 
                className="btn-fetal-primary"
              >
                <Calendar size={18} />
                <span>Book Fetal Scan Appointment</span>
                <ArrowRight size={18} />
              </button>
              <a href={`tel:${siteConfig.contact.phoneDeskRaw}`} className="btn-fetal-outline">
                <Phone size={16} />
                <span>Call Helpline: {siteConfig.contact.phoneDesk}</span>
              </a>
            </div>
          </div>

          <div className="fetal-hero-visual-frame">
            <img 
              src="/images/fetal_feature_care.jpg" 
              alt="Fetal Medicine and Pregnancy Imaging" 
              className="fetal-hero-img"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* 2. SPECIALIZED CARE STRIP */}
      <section className="fetal-care-strip-section">
        <div className="container">
          <div className="fetal-care-strip-grid">
            <div className="fetal-strip-item">
              <Heart size={18} className="strip-icon" />
              <span>Early Pregnancy Assessment</span>
            </div>
            <div className="fetal-strip-item">
              <Search size={18} className="strip-icon" />
              <span>NT &amp; Anomaly Screening</span>
            </div>
            <div className="fetal-strip-item">
              <Activity size={18} className="strip-icon" />
              <span>Fetal Growth Assessment</span>
            </div>
            <div className="fetal-strip-item">
              <Layers size={18} className="strip-icon" />
              <span>Doppler Assessment</span>
            </div>
            <div className="fetal-strip-item">
              <Sparkles size={18} className="strip-icon" />
              <span>3D / 4D Imaging</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION SECTION */}
      <section className="fetal-intro-section">
        <div className="container fetal-intro-grid">
          <div className="fetal-intro-left">
            <span className="section-eyebrow-pill">COMPREHENSIVE CARE</span>
            <h2 className="fetal-section-title">Specialised Care for Mother &amp; Baby</h2>
            <p className="fetal-body-lead">
              Advanced fetal assessment and pregnancy imaging designed to support confident care at every stage.
            </p>
          </div>
          <div className="fetal-intro-right-img">
            <img 
              src="/images/fetal_ultrasound_suite.jpg" 
              alt="Advanced Fetal Ultrasound Suite" 
              className="intro-section-img"
            />
          </div>
        </div>
      </section>

      {/* 4. PREGNANCY IMAGING JOURNEY */}
      <section className="fetal-journey-section">
        <div className="container text-center">
          <span className="section-eyebrow-pill">PREGNANCY TIMELINE</span>
          <h2 className="fetal-section-title">Your Pregnancy Imaging Journey</h2>
          <p className="fetal-section-subtitle">
            A clear pathway from early assessment to ongoing fetal care.
          </p>

          <div className="fetal-timeline-grid">
            <div className="timeline-step-card">
              <div className="step-number-badge">01</div>
              <h3 className="step-title">Early Pregnancy</h3>
              <p className="step-desc">Initial fetal assessment</p>
            </div>
            <div className="timeline-step-card">
              <div className="step-number-badge">02</div>
              <h3 className="step-title">First Trimester</h3>
              <p className="step-desc">NT &amp; early screening</p>
            </div>
            <div className="timeline-step-card">
              <div className="step-number-badge">03</div>
              <h3 className="step-title">Growth &amp; Development</h3>
              <p className="step-desc">Monitor fetal growth</p>
            </div>
            <div className="timeline-step-card">
              <div className="step-number-badge">04</div>
              <h3 className="step-title">Detailed Assessment</h3>
              <p className="step-desc">Anatomy &amp; anomaly evaluation</p>
            </div>
            <div className="timeline-step-card">
              <div className="step-number-badge">05</div>
              <h3 className="step-title">Follow-up</h3>
              <p className="step-desc">Ongoing fetal assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURE BANNER */}
      <section className="fetal-mid-banner-section">
        <div className="container fetal-mid-banner-container">
          <div className="fetal-banner-content">
            <h2 className="fetal-banner-title">A Safer Tomorrow Through Expert Fetal Care</h2>
            <p className="fetal-banner-desc">
              Every stage of pregnancy deserves careful attention and clear diagnostic insight.
            </p>
            <button 
              onClick={() => handleStartBooking('Fetal Scan Appointment')} 
              className="btn-fetal-primary"
            >
              <span>Book Fetal Scan Appointment</span>
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="fetal-banner-img-wrap">
            <img 
              src="/images/hero-pregnant-woman.jpg" 
              alt="A Safer Tomorrow Through Expert Fetal Care" 
              className="fetal-banner-img"
            />
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="fetal-why-section">
        <div className="container">
          <div className="text-center section-header-margin">
            <span className="section-eyebrow-pill">CLINICAL ADVANTAGES</span>
            <h2 className="fetal-section-title">Why Choose Specialised Fetal Medicine Care?</h2>
          </div>

          <div className="fetal-why-grid">
            <div className="why-feature-card">
              <div className="why-card-number">01</div>
              <h3 className="why-card-title">Dedicated Expertise</h3>
              <p className="why-card-desc">Specialised fetal medicine care</p>
            </div>
            <div className="why-feature-card">
              <div className="why-card-number">02</div>
              <h3 className="why-card-title">Advanced Imaging</h3>
              <p className="why-card-desc">High-resolution ultrasound</p>
            </div>
            <div className="why-feature-card">
              <div className="why-card-number">03</div>
              <h3 className="why-card-title">Detailed Assessment</h3>
              <p className="why-card-desc">Comprehensive fetal evaluation</p>
            </div>
            <div className="why-feature-card">
              <div className="why-card-number">04</div>
              <h3 className="why-card-title">Clear Guidance</h3>
              <p className="why-card-desc">Easy-to-understand findings</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PATIENT GUIDE */}
      <section className="fetal-prep-section">
        <div className="container">
          <div className="text-center section-header-margin">
            <span className="section-eyebrow-pill">PATIENT GUIDE</span>
            <h2 className="fetal-section-title">Before Your Fetal Scan</h2>
          </div>

          <div className="fetal-prep-grid">
            <div className="prep-step-card">
              <div className="prep-icon-box">
                <FileText size={20} />
              </div>
              <h3 className="prep-title">Bring Previous Reports</h3>
              <p className="prep-desc">Carry relevant scan reports.</p>
            </div>
            <div className="prep-step-card">
              <div className="prep-icon-box">
                <Clock size={20} />
              </div>
              <h3 className="prep-title">Know Your Pregnancy Stage</h3>
              <p className="prep-desc">Know your current gestational age.</p>
            </div>
            <div className="prep-step-card">
              <div className="prep-icon-box">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="prep-title">Follow Clinic Instructions</h3>
              <p className="prep-desc">Follow clinic preparation guidance.</p>
            </div>
            <div className="prep-step-card">
              <div className="prep-icon-box">
                <UserCheck size={20} />
              </div>
              <h3 className="prep-title">Ask Your Questions</h3>
              <p className="prep-desc">Discuss your concerns with the team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="fetal-final-cta-section">
        <div className="container text-center">
          <h2 className="final-cta-title">Your Pregnancy Deserves Expert Attention.</h2>
          <p className="final-cta-desc">
            Book your fetal medicine appointment for specialised pregnancy assessment and imaging.
          </p>
          <div className="final-cta-actions">
            <button 
              onClick={() => handleStartBooking('Fetal Scan Appointment')} 
              className="btn-fetal-primary"
            >
              <Calendar size={18} />
              <span>Book Fetal Scan Appointment</span>
              <ArrowRight size={18} />
            </button>
            <a href={`tel:${siteConfig.contact.phoneDeskRaw}`} className="btn-fetal-outline">
              <Phone size={16} />
              <span>Call 79893 30974</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. SERVICE COMPLETE DETAILS MODAL */}
      {selectedService && (
        <div className="services-modal-overlay service-detail-level" onClick={() => setSelectedService(null)}>
          <div className="services-modal-container detail-view-container" onClick={(e) => e.stopPropagation()}>
            <button className="services-modal-close" onClick={() => setSelectedService(null)} aria-label="Close">
              <X size={20} />
            </button>

            <div className="service-detail-top">
              <div className="service-detail-badge">{selectedService.categoryTitle}</div>
              <h2 className="service-detail-title">{selectedService.title}</h2>
              <p className="service-detail-short-lead">{selectedService.shortDescription}</p>
            </div>

            <div className="service-detail-body">
              {selectedService.image && (
                <div className="service-detail-img-box">
                  <img src={selectedService.image} alt={selectedService.title} className="service-detail-img" />
                </div>
              )}

              <div className="service-detail-sections">
                {selectedService.whatIsIt && (
                  <div className="detail-section-block">
                    <div className="section-block-title">
                      <Info size={18} className="block-icon" />
                      <h3>What is this scan / service?</h3>
                    </div>
                    <p>{selectedService.whatIsIt}</p>
                  </div>
                )}

                {selectedService.whyPerformed && (
                  <div className="detail-section-block">
                    <div className="section-block-title">
                      <HelpCircle size={18} className="block-icon" />
                      <h3>Why is it performed?</h3>
                    </div>
                    <p>{selectedService.whyPerformed}</p>
                  </div>
                )}

                {selectedService.whenPerformed && (
                  <div className="detail-section-block">
                    <div className="section-block-title">
                      <Clock size={18} className="block-icon" />
                      <h3>When is it performed?</h3>
                    </div>
                    <p>{selectedService.whenPerformed}</p>
                  </div>
                )}

                {selectedService.clinicalDetails && (
                  <div className="detail-section-block">
                    <div className="section-block-title">
                      <ShieldCheck size={18} className="block-icon" />
                      <h3>Clinical Standard &amp; Details</h3>
                    </div>
                    <p>{selectedService.clinicalDetails}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="service-detail-footer-cta">
              <button 
                onClick={() => {
                  setSelectedService(null);
                  handleStartBooking(selectedService.title);
                }} 
                className="btn-fetal-primary btn-full-width"
              >
                <Calendar size={18} />
                <span>Book an Appointment for {selectedService.title}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 11. APPOINTMENT BOOKING MODAL */}
      <AppointmentModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialService={bookingServiceTitle}
      />
    </div>
  );
}
