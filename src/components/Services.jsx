import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Baby, Activity, Scan, Stethoscope, HeartPulse, ShieldCheck, ArrowRight } from 'lucide-react';
import './Services.css';

const SERVICES_SHOWCASE_DATA = [
  {
    id: "fetal",
    num: "01",
    icon: Baby,
    title: "Fetal Medicine & Ultrasound",
    category: "SPECIALIZED MATERNAL CARE",
    desc: "First trimester NT screening, 3D/4D ultrasound imaging, targeted anomaly scans (TIFFA), and fetal Doppler surveillance led by Dr. N. Vasundhara.",
    image: "/images/fetal_medicine_scan.jpg",
    route: "/fetal-medicine"
  },
  {
    id: "ultrasound",
    num: "02",
    icon: Activity,
    title: "Ultrasound & Sonography",
    category: "HIGH PRECISION IMAGING",
    desc: "High-definition diagnostic abdominal, pelvic, obstetric, and Doppler sonography with structured clinical reporting.",
    image: "/images/fetal_ultrasound_suite.jpg",
    route: "/services"
  },
  {
    id: "diagnostics",
    num: "03",
    icon: Scan,
    title: "Diagnostic Imaging",
    category: "CLINICAL INVESTIGATIONS",
    desc: "Comprehensive diagnostic imaging suite to support referring physicians with fast, accurate diagnostic parameters.",
    image: "/images/hero-fetal-scan.jpg",
    route: "/services"
  },
  {
    id: "general-med",
    num: "04",
    icon: Stethoscope,
    title: "General Medicine",
    category: "PHYSICIAN CONSULTATION",
    desc: "Expert general medical care, acute illness evaluation, and primary healthcare consultation by Dr. V. Sai Kiran Reddy.",
    image: "/images/about_clinic_interior.jpg",
    route: "/doctors"
  },
  {
    id: "diabetes",
    num: "05",
    icon: HeartPulse,
    title: "Diabetes Care",
    category: "SAI KIRAN DIABETIC CLINIC",
    desc: "Comprehensive blood sugar profiling, HbA1c tracking, gestational diabetes management, and organ protection strategies.",
    image: "/images/diabetes_care_consultation.jpg",
    route: "/diabetes-care"
  },
  {
    id: "preventive",
    num: "06",
    icon: ShieldCheck,
    title: "Preventive Care",
    category: "WELLNESS & SCREENING",
    desc: "Preventive health screening, diabetic foot care, neuropathy evaluation, and long-term metabolic health guidance.",
    image: "/images/pregnancy_ultrasound_scan.jpg",
    route: "/services"
  }
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = SERVICES_SHOWCASE_DATA[activeIdx];

  return (
    <section id="services" className="services-showcase-section">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="services-header text-center">
          <span className="section-eyebrow-pill">CLINICAL SERVICES</span>
          <h2 className="section-title-serif">Our Key Services</h2>
          <p className="section-subtitle-sans">
            Comprehensive medical and diagnostic care structured around your needs.
          </p>
        </div>

        {/* INTERACTIVE EDITORIAL SPLIT SHOWCASE */}
        <div className="services-interactive-grid">
          
          {/* LEFT: FEATURED DYNAMIC IMAGE DISPLAY */}
          <div className="service-visual-panel">
            <div className="service-image-card">
              <img 
                src={activeService.image} 
                alt={activeService.title} 
                className="service-featured-img" 
                key={activeService.id}
              />
              <div className="service-image-badge">
                <span>{activeService.category}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: VERTICAL SERVICE NAVIGATION LIST */}
          <div className="service-nav-panel">
            <div className="service-items-list">
              {SERVICES_SHOWCASE_DATA.map((srv, idx) => {
                const IconComp = srv.icon;
                const isActive = idx === activeIdx;

                return (
                  <div 
                    key={srv.id} 
                    className={`service-interactive-item ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveIdx(idx)}
                    onMouseEnter={() => setActiveIdx(idx)}
                  >
                    <div className="item-indicator-bar"></div>
                    
                    <div className="item-header-row">
                      <span className="item-num">{srv.num}</span>
                      <div className="item-title-group">
                        <h3 className="item-title">{srv.title}</h3>
                        {isActive && (
                          <p className="item-desc-fade">{srv.desc}</p>
                        )}
                      </div>
                      <div className="item-icon-box">
                        <IconComp size={20} />
                      </div>
                    </div>

                    {isActive && (
                      <div className="item-action-row">
                        <Link to={srv.route} className="btn-primary-navy btn-sm">
                          <span>Explore Service</span>
                          <ArrowRight size={15} />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
