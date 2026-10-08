import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Baby, 
  Activity, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  ArrowRight,
  Stethoscope,
  Building2,
  GraduationCap
} from 'lucide-react';
import './Doctors.css';

export default function Doctors() {
  const doctorsData = [
    {
      id: "vasundhara",
      name: "Dr. N. Vasundhara",
      divisionTag: "VASUNDHARA FETAL MEDICINE & DIAGNOSTICS",
      insigniaIcon: Baby,
      insigniaBadge: "FETAL MEDICINE SPECIALIST",
      colorTheme: "fetal",
      designation: "Consultant Radiologist & Fetal Medicine Specialist",
      credentials: [
        "MBBS",
        "MD (Radiology)",
        "Fellow in Fetal Medicine",
        "Certified Prenatal Anomaly Specialist"
      ],
      bio: "Dr. N. Vasundhara is a specialized medical radiologist with advanced fellowship training in fetal medicine. She is dedicated to high-precision prenatal ultrasound imaging, early genetic anomaly detection, fetal Doppler hemodynamics, and compassionate maternal counseling.",
      approach: "Every pregnancy is unique. We provide a tranquil, reassuring environment where scans are conducted thoroughly with high-resolution imaging and findings are explained clearly so parents and referring obstetricians have complete clarity.",
      focusAreas: [
        "First Trimester NT & Genetic Anomaly Risk Screening (11–13+6 Weeks)",
        "Targeted Imaging for Fetal Anomalies (TIFFA / Level II Scan)",
        "Fetal Doppler & Placental Hemodynamic Velocity Studies",
        "3D/4D Obstetric Surface & Anatomical Reconstructions",
        "General Diagnostic Abdominal & Pelvic Ultrasound"
      ],
      schedule: "Mon – Sat: 9:30 AM – 2:00 PM & 4:30 PM – 7:30 PM",
      bookingRoute: "/book-appointment?division=fetal"
    },
    {
      id: "saikiran",
      name: "Dr. V. Sai Kiran Reddy",
      divisionTag: "SAI KIRAN DIABETIC CLINIC",
      insigniaIcon: Activity,
      insigniaBadge: "EX-REGISTRAR CMC VELLORE",
      colorTheme: "diabetes",
      designation: "Consultant Physician & Diabetes Specialist",
      credentials: [
        "MBBS",
        "DNB (General Medicine)",
        "DFID (Fellowship in Diabetes)",
        "Ex-Registrar, Christian Medical College (CMC) Vellore"
      ],
      bio: "Dr. V. Sai Kiran Reddy completed his post-graduation in General Medicine (DNB) and specialized Fellowship in Diabetes (DFID), having served as Registrar at the renowned Christian Medical College (CMC), Vellore. He brings extensive clinical expertise in comprehensive diabetes care, gestational diabetes management, and evidence-based physician medicine.",
      approach: "Effective diabetes care is built on partnership, education, and consistent monitoring. We work with each patient to develop achievable management strategies tailored to their daily life.",
      focusAreas: [
        "Comprehensive Diabetes Evaluation & HbA1c Profiling",
        "Gestational Diabetes Management for Expectant Mothers",
        "Type 1 & Type 2 Diabetes Glycemic Target Stabilization",
        "Preventive Diabetic Foot, Neuropathy & Vascular Screening",
        "Nutritional & Metabolic Health Counseling"
      ],
      schedule: "Mon – Sat: 10:00 AM – 1:30 PM & 5:00 PM – 8:00 PM",
      bookingRoute: "/book-appointment?division=diabetes"
    }
  ];

  return (
    <div className="doctors-page">
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="doctors-hero-section text-center">
        <div className="container">
          <div className="section-eyebrow-pill mx-auto">
            <Sparkles size={14} style={{ display: 'inline', marginRight: '5px', verticalAlign: '-1px' }} /> DEDICATED CLINICAL LEADERSHIP
          </div>
          <h1 className="doctors-hero-title">Medical Specialists &amp; Leadership</h1>
          <p className="doctors-hero-subtitle">
            Experienced medical specialists dedicated to diagnostic imaging precision, prenatal assessment, and structured diabetes care in Sai Nagar, Anantapur.
          </p>
        </div>
      </section>

      {/* ── DOCTOR SPECIALIST CARDS (NO DOCTOR PHOTOS) ────── */}
      <section className="doctors-list-section">
        <div className="container">
          <div className="doctors-full-cards-grid">
            {doctorsData.map((doc) => {
              const isVasundhara = doc.id === 'vasundhara';
              const IconComponent = doc.insigniaIcon;
              return (
                <div key={doc.id} className={`doctor-master-card ${isVasundhara ? 'theme-fetal' : 'theme-diabetes'}`}>
                  
                  {/* Executive Insignia Header */}
                  <div className="doc-top-profile-row">
                    <div className={`doc-insignia-shield ${isVasundhara ? 'shield-teal-glow' : 'shield-navy-glow'}`}>
                      <IconComponent size={38} />
                    </div>

                    <div className="doc-meta-header">
                      <span className="doc-div-tag">{doc.divisionTag}</span>
                      <h2 className="doc-full-name">{doc.name}</h2>
                      <p className="doc-full-designation">{doc.designation}</p>
                      <span className="doc-honor-badge">{doc.insigniaBadge}</span>
                    </div>
                  </div>

                  {/* Credentials Row */}
                  <div className="doc-cred-chips-row">
                    {doc.credentials.map((c, i) => (
                      <span key={i} className="cred-chip">
                        <GraduationCap size={13} className="cred-cap-icon" />
                        <span>{c}</span>
                      </span>
                    ))}
                  </div>

                  {/* Bio & Approach */}
                  <div className="doc-main-content">
                    <p className="doc-full-bio-text">{doc.bio}</p>

                    <div className="doc-philosophy-quote">
                      <strong className="quote-label">Clinical Approach:</strong>
                      <p>"{doc.approach}"</p>
                    </div>

                    {/* Specialized Focus */}
                    <div className="doc-clinical-focus-section">
                      <h3 className="focus-header-title">Specialized Clinical Scope</h3>
                      <ul className="doc-focus-items-grid">
                        {doc.focusAreas.map((area, fIdx) => (
                          <li key={fIdx}>
                            <CheckCircle2 size={16} className={isVasundhara ? 'focus-check-teal' : 'focus-check-navy'} />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer Timing & Action */}
                    <div className="doc-card-footer-action">
                      <div className="doc-timing-info">
                        <Clock size={16} className="clock-icon" />
                        <span>Schedule: <strong>{doc.schedule}</strong></span>
                      </div>
                      <Link to={doc.bookingRoute} className="btn-primary-navy full-width" style={{ justifyContent: 'center' }}>
                        <Calendar size={16} />
                        <span>Book Appointment with {doc.name.split(' ')[1] || doc.name}</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CLINICAL PHILOSOPHY STRIP ───────────────────── */}
      <section className="clinical-standards-strip">
        <div className="container text-center">
          <ShieldCheck size={44} className="standards-icon" />
          <h2 className="standards-title">Our Commitment to Clinical Clarity</h2>
          <p className="standards-sub">
            We adhere strictly to evidence-based clinical practices. Every ultrasound scan is thoroughly explained on dedicated high-resolution viewing screens, and every diabetes management plan is built around realistic, sustainable patient health goals.
          </p>
        </div>
      </section>
    </div>
  );
}
