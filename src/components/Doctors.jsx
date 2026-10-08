import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Stethoscope, ArrowRight, ShieldCheck, Award, Star } from 'lucide-react';
import './Doctors.css';

export default function Doctors() {
  return (
    <section id="doctors" className="doctors-editorial-section">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="doctors-header text-center">
          <span className="section-eyebrow-pill">OUR MEDICAL TEAM</span>
          <h2 className="section-title-serif">Meet Your Care Team</h2>
          <p className="section-subtitle-sans">
            Dedicated medical specialists committed to compassionate, evidence-based care.
          </p>
        </div>

        {/* DOCTORS HIERARCHY SHOWCASE GRID */}
        <div className="doctors-hierarchy-grid">
          
          {/* PRIMARY FEATURED DOCTOR CARD: DR. N. VASUNDHARA */}
          <div className="doctor-card-editorial doctor-featured-primary">
            <div className="doc-primary-header">
              <div className="doc-portrait-avatar avatar-primary">
                <UserCheck size={32} />
              </div>
              <div className="doc-badge-pill badge-primary">
                <Award size={14} />
                <span>LEAD FETAL SPECIALIST</span>
              </div>
            </div>

            <div className="doc-body-content">
              <h3 className="doc-name">Dr. N. Vasundhara</h3>
              <div className="doc-division-tag">Fetal Medicine &amp; Diagnostics</div>
              
              <div className="doc-credentials-badges">
                <span>MBBS</span>
                <span>MD (Radiology)</span>
                <span className="highlight-tag">Fellow in Fetal Medicine</span>
              </div>

              <p className="doc-bio-lead">
                Consultant Radiologist with specialized fellowship training in fetal medicine. Dedicated to high-precision 3D/4D ultrasound imaging, prenatal anomaly screening, and detailed fetal surveillance.
              </p>

              <div className="doc-footer-action">
                <Link to="/doctors" className="btn-primary-navy">
                  <span>View Profile</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* SECONDARY DOCTOR CARD: DR. V. SAI KIRAN REDDY */}
          <div className="doctor-card-editorial doctor-secondary">
            <div className="doc-primary-header">
              <div className="doc-portrait-avatar avatar-secondary">
                <Stethoscope size={30} />
              </div>
              <div className="doc-badge-pill badge-secondary">
                <span>DIABETOLOGY SPECIALIST</span>
              </div>
            </div>

            <div className="doc-body-content">
              <h3 className="doc-name">Dr. V. Sai Kiran Reddy</h3>
              <div className="doc-division-tag">Diabetes &amp; Metabolic Care</div>
              
              <div className="doc-credentials-badges">
                <span>MBBS</span>
                <span>DNB (General Medicine)</span>
                <span className="highlight-navy">DFID (Diabetes)</span>
                <span>Ex-Registrar CMC Vellore</span>
              </div>

              <p className="doc-bio-lead">
                Consultant Physician &amp; Diabetes Specialist bringing extensive clinical expertise from CMC Vellore for structured glycemic profiling, gestational diabetes tracking, and organ protection.
              </p>

              <div className="doc-footer-action">
                <Link to="/doctors" className="btn-secondary-outline">
                  <span>View Profile</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
