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
  Search,
  Droplets,
  Stethoscope,
  TrendingUp,
  Apple,
  Shield,
  Layers,
  ChevronRight,
  Eye,
  Award
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import AppointmentModal from '../components/AppointmentModal';
import './DiabetesCare.css';

// 5 Care Areas Data
const CARE_AREAS = [
  {
    icon: Stethoscope,
    title: "Diabetes Consultation",
    desc: "Comprehensive evaluation & personalized care plan led by Dr. V. Sai Kiran Reddy."
  },
  {
    icon: Activity,
    title: "Glucose Monitoring",
    desc: "Fasting, post-prandial, and continuous daily glycemic tracking protocols."
  },
  {
    icon: Droplets,
    title: "HbA1c Testing",
    desc: "Rapid point-of-care HbA1c testing for precise 3-month average glycemic control."
  },
  {
    icon: Heart,
    title: "Gestational Diabetes",
    desc: "Specialized maternal glycemic management protecting mother and baby."
  },
  {
    icon: ShieldCheck,
    title: "Preventive Care",
    desc: "Neuropathy screening, diabetic foot health & organ protection strategies."
  }
];

// Diabetes Care Journey Steps
const CARE_JOURNEY = [
  {
    step: "01",
    name: "Screen",
    desc: "Initial blood glucose evaluation, HbA1c profiling & risk analysis."
  },
  {
    step: "02",
    name: "Assess",
    desc: "Detailed physician consultation, organ health review & target setting."
  },
  {
    step: "03",
    name: "Plan",
    desc: "Personalized medication regimen, dietary structure & activity plan."
  },
  {
    step: "04",
    name: "Monitor",
    desc: "Regular blood sugar tracking, quarterly HbA1c check-ins & adjustments."
  },
  {
    step: "05",
    name: "Follow-up",
    desc: "Continuous long-term clinical guidance for lasting metabolic stability."
  }
];

// Focused Care Pillars
const CARE_PILLARS = [
  {
    icon: TrendingUp,
    title: "Blood Sugar Management",
    desc: "Targeted glycemic control strategies to maintain HbA1c safely within your target range."
  },
  {
    icon: Apple,
    title: "Lifestyle Guidance",
    desc: "Actionable dietary advice, carb-counting guidance, and physical activity protocols."
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    desc: "Early detection and screening to protect kidney, eye, nerve, and heart health."
  },
  {
    icon: UserCheck,
    title: "Ongoing Follow-up",
    desc: "Consistent clinical partnership with Dr. V. Sai Kiran Reddy for long-term confidence."
  }
];

// Core Diabetes Services
const DIABETES_SERVICES = [
  {
    id: "consultation",
    title: "Comprehensive Diabetes Consultation",
    shortDesc: "In-depth medical evaluation, physical check, and tailored treatment plan.",
    details: "Full clinical consultation with Dr. V. Sai Kiran Reddy including review of symptoms, past glycemic history, current medication optimization, and individualized metabolic health planning."
  },
  {
    id: "hba1c-testing",
    title: "HbA1c & Glucose Testing",
    shortDesc: "High-accuracy diagnostic testing for immediate glycemic profiling.",
    details: "Precision laboratory evaluation of fasting blood sugar, post-prandial levels, and HbA1c (glycated hemoglobin) to measure overall 3-month glycemic stability."
  },
  {
    id: "gestational-care",
    title: "Gestational Diabetes Care",
    shortDesc: "Joint maternal-fetal care for pregnancy blood sugar control.",
    details: "Coordinated glycemic monitoring for expectant mothers. Combines physician blood sugar management with fetal ultrasound growth tracking to ensure safe pregnancy outcomes."
  },
  {
    id: "preventive-screening",
    title: "Preventive Diabetes Screening",
    shortDesc: "Early risk identification for pre-diabetes and metabolic syndrome.",
    details: "Proactive screening for individuals with family history, elevated blood sugar, or metabolic risk factors to halt progression toward type 2 diabetes."
  }
];

// Care Beyond Sugar Reading
const BEYOND_SUGAR_PILLARS = [
  {
    step: "01",
    title: "Understand",
    desc: "Patient education on glycemic spikes, carb awareness, and medication timing."
  },
  {
    step: "02",
    title: "Manage",
    desc: "Targeted evidence-based pharmacological interventions and dietary adjustments."
  },
  {
    step: "03",
    title: "Monitor",
    desc: "Structured tracking schedules and regular laboratory check-ups."
  },
  {
    step: "04",
    title: "Prevent",
    desc: "Organ-protective care focusing on renal, cardiovascular, and neural wellbeing."
  }
];

export default function DiabetesCare() {
  const [selectedService, setSelectedService] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceTitle, setBookingServiceTitle] = useState('Diabetes Consultation');

  const handleStartBooking = (title) => {
    setBookingServiceTitle(title || 'Diabetes Consultation');
    setIsBookingOpen(true);
  };

  return (
    <div className="diabetes-care-page">
      
      {/* 1. HERO SECTION */}
      <section className="diabetes-hero-section">
        <div className="container text-center">
          <div className="diabetes-hero-badge">
            <Sparkles size={14} />
            <span>SAI KIRAN DIABETIC CLINIC</span>
          </div>
          <h1 className="diabetes-hero-title">
            Specialized Diabetes &amp; Gestational Care
          </h1>
          <p className="diabetes-hero-desc">
            Led by Dr. V. Sai Kiran Reddy. Comprehensive glycemic profiling, HbA1c tracking, gestational diabetes management, and organ protection strategies in Sai Nagar, Anantapur.
          </p>

          <div className="diabetes-hero-actions">
            <button 
              onClick={() => handleStartBooking('Diabetes Consultation')}
              className="btn-diabetes-primary"
            >
              <Calendar size={18} />
              <span>Book Diabetes Consultation</span>
              <ArrowRight size={18} />
            </button>
            <a href={`tel:${siteConfig.contact.phoneDeskRaw}`} className="btn-diabetes-outline">
              <Phone size={16} />
              <span>Call Helpline: {siteConfig.contact.phoneDesk}</span>
            </a>
          </div>
        </div>
      </section>


      {/* 3. 5 CARE AREAS SECTION */}
      <section className="diabetes-care-areas-section">
        <div className="container">
          <div className="text-center section-header-margin">
            <span className="section-eyebrow-pill">AREAS OF EXCELLENCE</span>
            <h2 className="diabetes-section-title">5 Key Diabetes Care Areas</h2>
            <p className="diabetes-section-subtitle">
              Comprehensive clinical evaluation and continuous metabolic support.
            </p>
          </div>

          <div className="care-areas-grid">
            {CARE_AREAS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="care-area-card">
                  <div className="care-area-icon-wrap">
                    <IconComp size={22} className="care-area-icon" />
                  </div>
                  <h3 className="care-area-title">{item.title}</h3>
                  <p className="care-area-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DIABETES CARE JOURNEY */}
      <section className="diabetes-journey-section">
        <div className="container text-center">
          <span className="section-eyebrow-pill">PATIENT PATHWAY</span>
          <h2 className="diabetes-section-title">Diabetes Care Journey</h2>
          <p className="diabetes-section-subtitle">
            A structured, 5-stage pathway toward optimal blood sugar stability.
          </p>

          <div className="diabetes-timeline-grid">
            {CARE_JOURNEY.map((step, idx) => (
              <div key={idx} className="diabetes-timeline-card">
                <div className="journey-step-number">{step.step}</div>
                <h3 className="journey-step-title">{step.name}</h3>
                <p className="journey-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMPLETE DIABETES CARE, FOCUSED ON YOU */}
      <section className="diabetes-pillars-section">
        <div className="container">
          <div className="text-center section-header-margin">
            <span className="section-eyebrow-pill">PATIENT-CENTRED CARE</span>
            <h2 className="diabetes-section-title">Complete Diabetes Care, Focused on You</h2>
            <p className="diabetes-section-subtitle">
              Holistic metabolic management designed around your daily life and health targets.
            </p>
          </div>

          <div className="pillars-grid">
            {CARE_PILLARS.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div key={idx} className="pillar-card">
                  <div className="pillar-icon-box">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. OUR DIABETES CARE SERVICES */}
      <section className="diabetes-services-section">
        <div className="container">
          <div className="text-center section-header-margin">
            <span className="section-eyebrow-pill">CLINICAL SERVICES</span>
            <h2 className="diabetes-section-title">Our Diabetes Care Services</h2>
            <p className="diabetes-section-subtitle">
              Specialized services tailored for type 1, type 2, and gestational diabetes.
            </p>
          </div>

          <div className="diabetes-services-grid">
            {DIABETES_SERVICES.map((srv) => (
              <div key={srv.id} className="diabetes-service-card">
                <div className="diabetes-service-body">
                  <div className="diabetes-service-badge">SAI KIRAN CLINIC</div>
                  <h3 className="diabetes-service-title">{srv.title}</h3>
                  <p className="diabetes-service-desc">{srv.shortDesc}</p>
                  <div className="diabetes-service-actions">
                    <button 
                      onClick={() => setSelectedService(srv)}
                      className="btn-diabetes-learn-more"
                    >
                      <span>View Details</span>
                      <ArrowRight size={15} />
                    </button>
                    <button 
                      onClick={() => handleStartBooking(srv.title)}
                      className="btn-diabetes-book-small"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CARE BEYOND THE SUGAR READING */}
      <section className="diabetes-beyond-section">
        <div className="container">
          <div className="text-center section-header-margin">
            <span className="section-eyebrow-pill">HOLISTIC APPROACH</span>
            <h2 className="diabetes-section-title">Care Beyond the Sugar Reading</h2>
            <p className="diabetes-section-subtitle">
              We focus on long-term wellness, organ safety, and quality of life.
            </p>
          </div>

          <div className="beyond-grid">
            {BEYOND_SUGAR_PILLARS.map((item, idx) => (
              <div key={idx} className="beyond-card">
                <div className="beyond-number-badge">{item.step}</div>
                <h3 className="beyond-title">{item.title}</h3>
                <p className="beyond-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SPECIALISED GESTATIONAL DIABETES CARE (Split Layout) */}
      <section className="diabetes-gestational-banner-section">
        <div className="container gestational-banner-container">
          <div className="gestational-content">
            <div className="gestational-badge">
              <Heart size={15} />
              <span>MATERNAL METABOLIC HEALTH</span>
            </div>
            <h2 className="gestational-title">Specialised Gestational Diabetes Care</h2>
            <p className="gestational-desc">
              Managing blood sugar during pregnancy requires extra precision to safeguard both maternal wellbeing and fetal development. Under the joint care of Dr. V. Sai Kiran Reddy (Diabetologist) and Dr. N. Vasundhara (Fetal Medicine Specialist), we provide coordinated glycemic monitoring, safe dietary plans, and ultrasound growth surveillance.
            </p>
            <button 
              onClick={() => handleStartBooking('Gestational Diabetes Care')}
              className="btn-diabetes-primary"
            >
              <Calendar size={18} />
              <span>Explore Gestational Diabetes Care</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="gestational-img-wrap">
            <img 
              src="/images/diabetes_care_consultation.jpg" 
              alt="Gestational Diabetes Care Consultation" 
              className="gestational-banner-img"
            />
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="diabetes-final-cta-section">
        <div className="container text-center">
          <h2 className="final-cta-title">Take the Next Step Toward Better Diabetes Care</h2>
          <p className="final-cta-desc">
            Schedule a comprehensive consultation with Dr. V. Sai Kiran Reddy at Sai Kiran Diabetic Clinic, Sai Nagar, Anantapur.
          </p>
          <div className="final-cta-actions">
            <button 
              onClick={() => handleStartBooking('Diabetes Consultation')}
              className="btn-diabetes-primary"
            >
              <Calendar size={18} />
              <span>Book Diabetes Consultation</span>
              <ArrowRight size={18} />
            </button>
            <a href={`tel:${siteConfig.contact.phoneDeskRaw}`} className="btn-diabetes-outline">
              <Phone size={16} />
              <span>Call Helpline: {siteConfig.contact.phoneDesk}</span>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS MODAL */}
      {selectedService && (
        <div className="services-modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="services-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="services-modal-close" onClick={() => setSelectedService(null)} aria-label="Close">
              <X size={20} />
            </button>

            <div className="service-detail-top">
              <div className="service-detail-badge">SAI KIRAN DIABETIC CLINIC</div>
              <h2 className="service-detail-title">{selectedService.title}</h2>
              <p className="service-detail-short-lead">{selectedService.shortDesc}</p>
            </div>

            <div className="service-detail-body">
              <div className="detail-section-block">
                <div className="section-block-title">
                  <Info size={18} className="block-icon" />
                  <h3>Service Clinical Overview</h3>
                </div>
                <p>{selectedService.details}</p>
              </div>
            </div>

            <div className="service-detail-footer-cta">
              <button 
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  handleStartBooking(title);
                }} 
                className="btn-diabetes-primary btn-full-width"
              >
                <Calendar size={18} />
                <span>Book Appointment for {selectedService.title}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* APPOINTMENT BOOKING MODAL */}
      <AppointmentModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialService={bookingServiceTitle}
      />
    </div>
  );
}
