import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  HeartPulse, 
  ArrowRight, 
  CheckCircle2, 
  Stethoscope, 
  ShieldCheck, 
  TrendingUp, 
  Calendar, 
  Clock, 
  FileText, 
  Eye, 
  Microscope, 
  Info, 
  Droplet,
  Sparkles,
  Phone,
  Baby,
  Award
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import glucometerImg from '../assets/glucometer_care_device_1791288861229.jpg';
import './DiabetesCare.css';

export default function DiabetesCare() {
  const carePrograms = [
    {
      title: "Comprehensive Glycemic Profiling",
      timing: "Initial Evaluation & Monitoring",
      desc: "Detailed Fasting, Post-Prandial Blood Sugar & precision NGSP-certified HbA1c testing to establish accurate baseline metabolic health and glucose trends.",
      points: [
        "Point-of-care HbA1c testing with instant report clarity",
        "Assessment of glycemic variability & glucose spike reduction",
        "Tailored oral medication review & insulin titration where needed"
      ]
    },
    {
      title: "Gestational Diabetes Care (GDM)",
      timing: "Pregnancy Glycemic Protocol",
      desc: "Specialized joint care with Dr. N. Vasundhara to keep blood sugars strictly within safe pregnancy targets and protect fetal growth.",
      points: [
        "Target fasting < 95 mg/dL & post-meal < 120 mg/dL adherence",
        "Personalized maternal nutritional and dietary guidance",
        "Seamless coordination with prenatal fetal growth scans"
      ]
    },
    {
      title: "Complication Screening & Organ Protection",
      timing: "Proactive Periodic Review",
      desc: "Comprehensive surveillance of renal microalbumin, peripheral nerve sensation, lipid profile, and cardiovascular indicators.",
      points: [
        "Microalbuminuria urine screening for renal safety",
        "Diabetic neuropathy monofilament & vascular examination",
        "Lipid profiling, blood pressure balance & lifestyle guidance"
      ]
    }
  ];

  return (
    <div className="diabetes-ref-page">
      
      {/* ── 1. DIABETES HERO ──────────────────────────────── */}
      <section className="diabetes-hero-section">
        <div className="container diabetes-hero-grid">
          
          <div className="diabetes-hero-left">
            <div className="diabetes-badge">
              <Sparkles size={14} className="badge-sparkle" />
              <span>Sai Kiran Diabetic Clinic • Anantapur</span>
            </div>

            <h1 className="diabetes-hero-title">
              Dedicated Diabetes Care<br />
              <span>for Better Health &amp; Longevity</span>
            </h1>

            <p className="diabetes-hero-desc">
              Comprehensive diabetes evaluations, HbA1c monitoring, gestational diabetes care, and personalized metabolic strategies led by Dr. V. Sai Kiran Reddy.
            </p>

            <div className="diabetes-hero-actions">
              <Link to="/book-appointment?division=diabetes" className="ref-btn-teal">
                <Calendar size={17} />
                <span>Book Diabetes Appointment</span>
                <ArrowRight size={16} />
              </Link>
              <a href={`tel:${siteConfig.contact.phoneDeskRaw}`} className="ref-btn-outline">
                <Phone size={16} />
                <span>Call Desk: {siteConfig.contact.phoneDesk}</span>
              </a>
            </div>
          </div>

          <div className="diabetes-hero-right">
            <div className="diabetes-image-wrap">
              <div className="diabetes-image-frame">
                <img 
                  src={glucometerImg} 
                  alt="Sai Kiran Diabetes Care & Blood Glucose Monitor" 
                  className="diabetes-hero-img" 
                />
              </div>
              <div className="diabetes-floating-card">
                <div className="diabetes-badge-icon">
                  <Activity size={22} />
                </div>
                <div>
                  <strong>Ex-Registrar CMC Vellore</strong>
                  <span>Fellowship in Diabetes (DFID) • DNB Medicine</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. THREE COMPREHENSIVE CARE MODULES ───────────── */}
      <section className="diabetes-programs-section">
        <div className="container">
          <div className="ref-section-header text-center">
            <span className="ref-section-tag">Clinical Protocols</span>
            <h2 className="ref-section-heading">Structured Diabetes Care Programs</h2>
            <p className="ref-section-sub">Evidence-based physician protocols designed for sustainable blood glucose control and organ protection.</p>
          </div>

          <div className="diabetes-programs-grid">
            {carePrograms.map((prog, idx) => (
              <div key={idx} className="diabetes-prog-card">
                <div className="prog-timing-pill">{prog.timing}</div>
                <h3 className="prog-title">{prog.title}</h3>
                <p className="prog-desc">{prog.desc}</p>
                
                <div className="prog-points-list">
                  {prog.points.map((pt, pIdx) => (
                    <div key={pIdx} className="prog-point-item">
                      <CheckCircle2 size={16} className="prog-check-icon" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="prog-footer">
                  <Link to="/book-appointment?division=diabetes" className="prog-link-btn">
                    <span>Consult Dr. Sai Kiran Reddy</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 3. GESTATIONAL DIABETES DUAL-CARE FEATURE ───────── */}
      <section className="gdm-dual-section">
        <div className="container gdm-dual-card">
          <div className="gdm-dual-left">
            <div className="gdm-tag">
              <Baby size={16} />
              <span>Integrated Maternal Health Protocol</span>
            </div>
            <h2>Gestational Diabetes Care During Pregnancy</h2>
            <p>
              When diabetes or elevated blood sugar occurs during pregnancy, coordinated management between your Diabetologist and Fetal Medicine Specialist is essential.
            </p>
            <p className="gdm-sub">
              At our Sai Nagar centre, Dr. Sai Kiran Reddy coordinates maternal glucose stabilization alongside Dr. N. Vasundhara's high-resolution fetal growth and amniotic fluid scans under one roof.
            </p>
            <Link to="/book-appointment?division=diabetes" className="ref-btn-teal">
              <span>Book Gestational Diabetes Consultation</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="gdm-dual-right">
            <div className="gdm-highlights-box">
              <div className="gdm-h-item">
                <span className="gdm-num">&lt; 95 mg/dL</span>
                <strong>Fasting Sugar Goal</strong>
                <p>Strict morning baseline target for maternal safety.</p>
              </div>
              <div className="gdm-h-item">
                <span className="gdm-num">&lt; 120 mg/dL</span>
                <strong>2-Hour Post-Meal Goal</strong>
                <p>Preventing post-prandial glycemic spikes.</p>
              </div>
              <div className="gdm-h-item">
                <span className="gdm-num">Growth Scan</span>
                <strong>Fetal Surveillance</strong>
                <p>Ongoing tracking of fetal abdominal circumference &amp; fluid.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CLINICAL LEADERSHIP SPOTLIGHT (INSIGNIA) ──── */}
      <section className="diabetes-doctor-spotlight">
        <div className="container">
          <div className="diabetes-doc-card">
            <div className="diabetes-lead-insignia">
              <Activity size={44} />
              <span className="insignia-pill">CMC Vellore Trained</span>
            </div>
            <div className="diabetes-doc-info">
              <span className="doc-kicker">Consultant Physician &amp; Diabetologist</span>
              <h2 className="doc-h-name">Dr. V. Sai Kiran Reddy</h2>
              <p className="doc-h-qual">MBBS, DNB (General Medicine), DFID (Diabetes) • Ex-Registrar, CMC Vellore</p>
              <p className="doc-h-bio">
                "Effective diabetes management is a partnership built on education, precise monitoring, and achievable lifestyle steps. Our goal is to prevent long-term complications and give patients complete confidence in managing their health every day."
              </p>
              <div className="doc-schedule-strip">
                <Clock size={16} />
                <span>OPD Hours: Mon – Sat: 10:00 AM – 1:30 PM &amp; 5:00 PM – 8:00 PM</span>
              </div>
              <div className="doc-btn-wrap">
                <Link to="/book-appointment?division=diabetes" className="ref-btn-teal">
                  <span>Book Consultation with Dr. Sai Kiran Reddy</span>
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
