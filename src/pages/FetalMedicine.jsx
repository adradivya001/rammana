import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Baby, 
  Scan, 
  Stethoscope, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  FileText, 
  Heart, 
  Microscope, 
  Info,
  ChevronRight,
  Phone,
  Award
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import motherImg from '../assets/mother_pregnancy_art_1791288807641.jpg';
import './FetalMedicine.css';

export default function FetalMedicine() {
  const [activeScanIdx, setActiveScanIdx] = useState(0);

  const scansList = [
    {
      title: "Early Pregnancy & Viability Scan",
      timing: "6 – 10 Weeks",
      purpose: "Confirming intrauterine pregnancy, cardiac activity, singleton or multiple gestation, and accurate gestational age dating.",
      prep: "Drink 2–3 glasses of water 45 minutes before scan for comfortable visualization."
    },
    {
      title: "First Trimester NT Scan & Anomaly Risk",
      timing: "11 – 13+6 Weeks",
      purpose: "Precision millimeter measurement of nuchal translucency, nasal bone assessment, ductus venosus Doppler, and early structural anomaly screening.",
      prep: "Normal food intake; fasting is not required. Please bring all previous scan records."
    },
    {
      title: "Targeted Anomaly Scan (TIFFA / Level II)",
      timing: "18 – 22 Weeks",
      purpose: "Comprehensive structural evaluation of fetal brain, four-chamber heart, facial profile, spine, kidneys, stomach, umbilical cord, and limbs.",
      prep: "Wear comfortable two-piece clothing. Scan duration is approximately 30–45 minutes."
    },
    {
      title: "Fetal Growth & Doppler Hemodynamics",
      timing: "28 – 36 Weeks",
      purpose: "Tracking fetal estimated weight velocity, amniotic fluid index (AFI), placental maturity, and umbilical/cerebral artery Doppler blood flow.",
      prep: "Normal diet. High-resolution verified report and image plates provided immediately."
    }
  ];

  return (
    <div className="fetal-ref-page">
      
      {/* ── 1. FETAL MEDICINE HERO ────────────────────────── */}
      <section className="fetal-hero-section">
        <div className="container fetal-hero-grid">
          
          <div className="fetal-hero-left">
            <div className="fetal-badge">
              <Sparkles size={14} className="badge-sparkle" />
              <span>Specialized Maternal-Fetal Division</span>
            </div>

            <h1 className="fetal-hero-title">
              Specialized Fetal Medicine<br />
              <span>for Every Stage of Pregnancy</span>
            </h1>

            <p className="fetal-hero-desc">
              Dedicated prenatal assessment, high-resolution 3D/4D ultrasound imaging, genetic anomaly risk screening, and compassionate maternal guidance led personally by Dr. N. Vasundhara.
            </p>

            <div className="fetal-hero-actions">
              <Link to="/book-appointment?division=fetal" className="ref-btn-teal">
                <Calendar size={17} />
                <span>Book Fetal Scan Appointment</span>
                <ArrowRight size={16} />
              </Link>
              <a href={`tel:${siteConfig.contact.phoneDeskRaw}`} className="ref-btn-outline">
                <Phone size={16} />
                <span>Call Desk: {siteConfig.contact.phoneDesk}</span>
              </a>
            </div>
          </div>

          <div className="fetal-hero-right">
            <div className="fetal-image-wrap">
              <div className="fetal-image-frame">
                <img 
                  src={motherImg} 
                  alt="Fetal Medicine & Pregnancy Imaging" 
                  className="fetal-hero-img" 
                />
              </div>
              <div className="fetal-floating-card">
                <div className="fetal-badge-icon">
                  <Baby size={22} />
                </div>
                <div>
                  <strong>Fellow in Fetal Medicine</strong>
                  <span>High-Resolution Anomaly &amp; Doppler Scans</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. PREGNANCY SCAN ROADMAP (Interactive Tabs) ─── */}
      <section className="fetal-scans-roadmap-section">
        <div className="container">
          <div className="ref-section-header text-center">
            <span className="ref-section-tag">Trimester by Trimester</span>
            <h2 className="ref-section-heading">Key Pregnancy Scans &amp; Timeline</h2>
            <p className="ref-section-sub">Comprehensive timeline of essential prenatal scans to safeguard your baby's development.</p>
          </div>

          <div className="fetal-scans-layout">
            <div className="scan-tabs-sidebar">
              {scansList.map((scan, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`scan-tab-btn ${activeScanIdx === idx ? 'active' : ''}`}
                  onClick={() => setActiveScanIdx(idx)}
                >
                  <div className="tab-timing-badge">{scan.timing}</div>
                  <div className="tab-title-text">{scan.title}</div>
                  <ChevronRight size={16} className="tab-arrow" />
                </button>
              ))}
            </div>

            <div className="scan-detail-card">
              <div className="scan-card-header">
                <div className="scan-card-timing">{scansList[activeScanIdx].timing}</div>
                <h3 className="scan-card-title">{scansList[activeScanIdx].title}</h3>
              </div>

              <div className="scan-card-body">
                <div className="scan-info-block">
                  <h4><CheckCircle2 size={18} className="info-icon" /> Clinical Purpose &amp; What We Evaluate</h4>
                  <p>{scansList[activeScanIdx].purpose}</p>
                </div>

                <div className="scan-info-block prep-block">
                  <h4><Info size={18} className="info-icon prep-icon" /> Patient Preparation &amp; Instructions</h4>
                  <p>{scansList[activeScanIdx].prep}</p>
                </div>

                <div className="scan-card-footer">
                  <Link to="/book-appointment?division=fetal" className="ref-btn-teal">
                    <Calendar size={16} />
                    <span>Book This Scan</span>
                    <ArrowRight size={16} />
                  </Link>
                  <span className="scan-doctor-lead">Verified by Dr. N. Vasundhara</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. CLINICAL ADVANTAGES ───────────────────────── */}
      <section className="fetal-advantages-section">
        <div className="container">
          <div className="ref-section-header text-center">
            <span className="ref-section-tag">Clinical Excellence</span>
            <h2 className="ref-section-heading">Why Choose Vasundhara for Fetal Scans?</h2>
          </div>

          <div className="fetal-adv-grid">
            <div className="fetal-adv-card">
              <div className="adv-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h4>Fellowship-Trained Specialist</h4>
              <p>Scans evaluated personally by Dr. N. Vasundhara with specialized fellowship qualification in fetal medicine.</p>
            </div>

            <div className="fetal-adv-card">
              <div className="adv-icon-box">
                <Scan size={24} />
              </div>
              <h4>Dedicated Parent-Viewing Suite</h4>
              <p>Comfortable private scanning room with dedicated HD visual displays so you can view your baby in real time.</p>
            </div>

            <div className="fetal-adv-card">
              <div className="adv-icon-box">
                <FileText size={24} />
              </div>
              <h4>Immediate Verified Reports</h4>
              <p>Structured clinical reports with high-resolution image captures provided shortly following the scan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CLINICAL LEADERSHIP SPOTLIGHT (INSIGNIA) ──── */}
      <section className="fetal-doctor-spotlight">
        <div className="container">
          <div className="fetal-doc-card">
            <div className="fetal-lead-insignia">
              <Baby size={44} />
              <span className="insignia-pill">Fellowship Certified</span>
            </div>
            <div className="fetal-doc-info">
              <span className="doc-kicker">Lead Fetal Medicine Specialist</span>
              <h2 className="doc-h-name">Dr. N. Vasundhara</h2>
              <p className="doc-h-qual">MBBS, MD (Radiology) • Fellow in Fetal Medicine</p>
              <p className="doc-h-bio">
                "Every pregnancy is unique and precious. We provide a calm, reassuring environment where prenatal scans are conducted thoroughly, questions are answered with care, and findings are communicated transparently to you and your referring doctor."
              </p>
              <div className="doc-schedule-strip">
                <Clock size={16} />
                <span>OPD Hours: Mon – Sat: 9:30 AM – 2:00 PM &amp; 4:30 PM – 7:30 PM</span>
              </div>
              <div className="doc-btn-wrap">
                <Link to="/book-appointment?division=fetal" className="ref-btn-teal">
                  <span>Book Consultation with Dr. Vasundhara</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
