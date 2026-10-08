import React from 'react';
import './Facility.css';

const FACILITY_JOURNEY_STEPS = [
  { step: "01", title: "Reception", desc: "Step-free entry & warm patient reception desk." },
  { step: "02", title: "Consultation", desc: "Private, comfortable physician consultation suites." },
  { step: "03", title: "Advanced Imaging", desc: "State-of-the-art 3D/4D ultrasound & scan displays." },
  { step: "04", title: "Specialised Care", desc: "Coordinated maternal-fetal & diabetic care under one roof." }
];

export default function Facility() {
  return (
    <section id="facility" className="facility-storytelling-section">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="facility-header text-center">
          <span className="section-eyebrow-pill">PATIENT ENVIRONMENT</span>
          <h2 className="section-title-serif">Inside Our Facility</h2>
          <p className="section-subtitle-sans">
            A calm, patient-centred environment designed around comfort, clarity and care.
          </p>
        </div>

        {/* DOMINANT PANORAMIC CLINIC IMAGE */}
        <div className="facility-panoramic-card">
          <img 
            src="/images/about_clinic_interior.jpg" 
            alt="Vasundhara Diagnostics & Fetal Medicine Suite" 
            className="facility-panoramic-img"
            loading="lazy"
          />
          <div className="facility-hero-badge">
            <span>Sai Nagar Centre • Anantapur</span>
          </div>
        </div>

        {/* HORIZONTAL PATIENT JOURNEY FLOW */}
        <div className="facility-journey-grid">
          {FACILITY_JOURNEY_STEPS.map((item, idx) => (
            <div key={idx} className="facility-step-card">
              <div className="step-num-circle">{item.step}</div>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
