import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Scan, 
  Baby, 
  Microscope, 
  Stethoscope, 
  Droplet, 
  ShieldCheck, 
  Heart, 
  ArrowRight,
  Sparkles,
  Calendar,
  Activity,
  HeartPulse
} from 'lucide-react';

import './Services.css';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const servicesList = [
    {
      id: 1,
      title: "First Trimester NT Scan & Anomaly Risk",
      category: "fetal",
      badge: "Fetal Medicine",
      desc: "Nuchal translucency, nasal bone evaluation, and early chromosomal risk assessment at 11–13+6 weeks.",
      link: "/fetal-medicine"
    },
    {
      id: 2,
      title: "Targeted Anomaly Scan (TIFFA / Level II)",
      category: "fetal",
      badge: "Fetal Medicine",
      desc: "Comprehensive structural survey of the fetal brain, heart, spine, kidneys, and extremities at 18–22 weeks.",
      link: "/fetal-medicine"
    },
    {
      id: 3,
      title: "Fetal Growth & Doppler Hemodynamics",
      category: "fetal",
      badge: "Fetal Medicine",
      desc: "Detailed fetal estimated weight velocity, amniotic fluid volume (AFI), and placental vascular resistance monitoring.",
      link: "/fetal-medicine"
    },
    {
      id: 4,
      title: "General Diagnostic Ultrasound",
      category: "diagnostics",
      badge: "Diagnostics",
      desc: "High-resolution abdominal, pelvic, thyroid, KUB, and scrotal sonography for adults and pediatrics.",
      link: "/contact"
    },
    {
      id: 5,
      title: "Comprehensive Diabetes Consultation",
      category: "diabetes",
      badge: "Diabetes Care",
      desc: "Personalized physician evaluation, glycemic optimization, and lifestyle care by Dr. V. Sai Kiran Reddy.",
      link: "/diabetes-care"
    },
    {
      id: 6,
      title: "HbA1c & Fasting Glycemic Profiling",
      category: "diabetes",
      badge: "Diabetes Care",
      desc: "Precision 3-month average glucose testing, daily variability analysis, and dosage adjustments.",
      link: "/diabetes-care"
    },
    {
      id: 7,
      title: "Gestational Diabetes Care (GDM)",
      category: "diabetes",
      badge: "Specialized Protocol",
      desc: "Coordinated glycemic protocol for expectant mothers with close fetal growth monitoring under one roof.",
      link: "/diabetes-care"
    },
    {
      id: 8,
      title: "Preventive Vascular & Neuropathy Screening",
      category: "diagnostics",
      badge: "Preventive Care",
      desc: "Comprehensive diabetic foot, microalbuminuria, lipid profiling, and cardiovascular risk screening.",
      link: "/diabetes-care"
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? servicesList 
    : servicesList.filter(s => s.category === activeCategory);

  return (
    <div className="services-ref-page">
      <div className="container">
        
        {/* Header */}
        <div className="ref-section-header text-center pt-5">
          <span className="ref-section-tag">Clinical Divisions &amp; Scans</span>
          <h1 className="ref-section-heading">Diagnostic &amp; Clinical Services</h1>
          <p className="ref-section-sub">A comprehensive suite of specialized fetal medicine, prenatal ultrasound imaging, and physician diabetes care.</p>
        </div>

        {/* Filter Tabs */}
        <div className="services-filter-tabs">
          <button 
            type="button" 
            className={`filter-tab-pill ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Services ({servicesList.length})
          </button>
          <button 
            type="button" 
            className={`filter-tab-pill ${activeCategory === 'fetal' ? 'active' : ''}`}
            onClick={() => setActiveCategory('fetal')}
          >
            Fetal Medicine &amp; Scans
          </button>
          <button 
            type="button" 
            className={`filter-tab-pill ${activeCategory === 'diabetes' ? 'active' : ''}`}
            onClick={() => setActiveCategory('diabetes')}
          >
            Sai Kiran Diabetic Clinic
          </button>
          <button 
            type="button" 
            className={`filter-tab-pill ${activeCategory === 'diagnostics' ? 'active' : ''}`}
            onClick={() => setActiveCategory('diagnostics')}
          >
            General Diagnostics
          </button>
        </div>

        {/* Grid of Service Cards */}
        <div className="services-eight-grid">
          {filteredServices.map(service => (
            <div key={service.id} className="service-card-item">
              <div className="service-card-body">
                <div className="service-card-header-badge">
                  <span className={`service-cat-badge ${service.category}`}>{service.badge}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-card-actions">
                  <Link to={service.link} className="service-learn-more">
                    <span>Learn Details</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link to="/book-appointment" className="service-book-mini">
                    <Calendar size={13} />
                    <span>Book</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

