import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Car, 
  Sparkles, 
  ArrowRight,
  Info,
  Layers,
  Heart
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './PatientGuide.css';

export default function PatientGuide() {
  const pageRef = useScrollReveal();

  const steps = [
    {
      step: "01",
      title: "Before Your Visit",
      desc: "Prepare adequately depending on whether you are visiting for a prenatal ultrasound scan or a diabetes evaluation.",
      points: [
        "Pregnancy Ultrasounds (Early scans < 10 weeks): Drink 2–3 glasses of water 45 minutes prior for adequate bladder filling.",
        "Mid/Late Pregnancy Scans (NT, TIFFA, Doppler): Normal food and fluid intake. Fasting is NOT required.",
        "Diabetes Consultations & Fasting Blood Sugar: 8–10 hours overnight fasting is required (plain water is permitted).",
        "Appointments: Booking in advance ensures minimal waiting time at the clinic reception."
      ]
    },
    {
      step: "02",
      title: "What to Bring",
      desc: "Having your complete medical paperwork enables our specialists to perform accurate comparative evaluations.",
      points: [
        "Doctor's prescription or clinical referral note from your primary obstetrician or physician.",
        "All previous ultrasound scan reports, growth charts, and trimester blood test records.",
        "Current medication list, insulin dosage records, or recent blood glucose logbook.",
        "Valid photo ID for clinical registration."
      ]
    },
    {
      step: "03",
      title: "During Your Appointment",
      desc: "Experience a calm, respectful, and private clinical atmosphere designed for maternal and patient comfort.",
      points: [
        "Private Examination Room: Air-conditioned, peaceful scanning suite with dedicated patient bed.",
        "Real-Time Patient Display: Expectant parents can watch the ultrasound examination on a dedicated viewing monitor.",
        "Physician Consultation: Direct clinical explanation with Dr. Vasundhara or Dr. Sai Kiran Reddy during your visit."
      ]
    },
    {
      step: "04",
      title: "After Your Scan & Reports",
      desc: "Prompt delivery of detailed diagnostic reports and clear guidance on next clinical steps.",
      points: [
        "Immediate Ultrasound Documentation: Scan reports with high-resolution image prints are provided promptly after your test.",
        "Laboratory Test Results: Glycemic markers and routine test values are verified promptly.",
        "Referral Communication: We provide comprehensive parameter summaries that your treating obstetrician can easily interpret."
      ]
    }
  ];

  return (
    <div className="guide-page" ref={pageRef}>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="guide-hero-section text-center">
        <div className="container">
          <div className="section-eyebrow-pill hero-animate-sub">
            <Sparkles size={14} style={{ display: 'inline', marginRight: '5px', verticalAlign: '-1px' }} /> PATIENT PREPARATION &amp; CARE
          </div>
          <h1 className="guide-hero-title hero-animate-title">Your Visit, Made Simple</h1>
          <p className="guide-hero-subtitle mx-auto hero-animate-sub">
            Everything you need to know before, during, and after your appointment at Vasundhara Diagnostics &amp; Sai Kiran Diabetic Clinic.
          </p>
        </div>
      </section>

      {/* ── 4 STEPS SECTION (LIFECYCLE FLOW) ─────────────── */}
      <section className="guide-steps-section section-padding">
        <div className="container">
          <div className="guide-steps-grid">
            {steps.map((item, idx) => (
              <div 
                key={idx} 
                className={`guide-step-card lifecycle-node delay-${idx + 1}`}
              >
                <div className="node-glow-bar"></div>
                <div className="guide-card-header">
                  <span className="guide-step-num">{item.step}</span>
                  <h2 className="guide-card-title">{item.title}</h2>
                </div>
                <p className="guide-card-desc">{item.desc}</p>
                <ul className="guide-points-list">
                  {item.points.map((pt, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="text-teal" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="node-progress-track">
                  <div className="node-progress-fill"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AMENITIES & ACCESSIBILITY ────────────────────── */}
      <section className="guide-amenities-section section-padding">
        <div className="container">
          <div className="amenities-card premium-card reveal-scale">
            <div className="amenities-header">
              <div className="section-eyebrow-pill">
                <Car size={14} style={{ display: 'inline', marginRight: '5px', verticalAlign: '-1px' }} /> CLINIC AMENITIES
              </div>
              <h2 className="section-title-serif" style={{ fontSize: '2.2rem' }}>Step-Free Accessibility in Sai Nagar</h2>
              <p className="section-subtitle-sans" style={{ margin: '0' }}>
                We have designed our facility to ensure utmost comfort for expectant mothers and senior citizens.
              </p>
            </div>

            <div className="amenities-grid">
              {[
                { title: 'Ground Floor Step-Free Entrance:', desc: 'Easy, wheelchair-accessible reception lounge with no stairs to climb.' },
                { title: 'Dedicated Front Parking:', desc: 'Spacious two-wheeler and four-wheeler parking directly outside the clinic building.' },
                { title: 'Clean, Air-Conditioned Waiting Lounge:', desc: 'Quiet, comfortable seating for accompanying family members and parents.' },
                { title: 'Attentive Care Staff:', desc: 'Polite clinical assistants ready to assist mothers and elderly patients throughout their visit.' }
              ].map((am, i) => (
                <div key={i} className={`amenity-box reveal delay-${i + 1}`}>
                  <strong>{am.title}</strong>
                  <p>{am.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="guide-cta-section">
        <div className="container text-center reveal-scale">
          <h2 className="guide-cta-title">Ready to Schedule Your Visit?</h2>
          <p className="guide-cta-sub">
            Book an appointment online or call our Sai Nagar reception desk for assistance.
          </p>
          <div className="guide-cta-btn-group">
            <Link to="/book-appointment" className="btn-primary-navy" style={{ backgroundColor: 'var(--color-clinical-teal)' }}>
              <Calendar size={18} />
              <span>Book Appointment</span>
            </Link>
            <Link to="/contact" className="btn-secondary-outline" style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.4)' }}>
              <span>View Location &amp; Map</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
