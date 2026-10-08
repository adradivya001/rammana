import React from 'react';
import { Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenBooking, data }) {
  const content = data || {
    eyebrow: "VASUNDHARA • FETAL MEDICINE & DIAGNOSTICS",
    title1: "Specialized Care.",
    title2: "One Trusted Centre.",
    desc: "Compassionate fetal medicine, advanced diagnostics, pregnancy imaging and diabetes care — brought together under one trusted centre in Sai Nagar, Anantapur.",
    primaryCta: "Book an Appointment",
    secondaryCta: "Explore Our Care",
    badgeText: "Led by Dr. N. Vasundhara (Fetal Medicine) & Dr. Sai Kiran (Diabetology)",
    trustItems: [
      { label: "Fetal Medicine", detail: "Expert Prenatal Care" },
      { label: "Advanced Diagnostics", detail: "Precision Scans" },
      { label: "Pregnancy Imaging", detail: "4D High Definition" },
      { label: "Diabetes Care", detail: "Sai Kiran Clinic" },
      { label: "Patient-Centred", detail: "Compassionate Focus" }
    ],
    backgroundImage: "/images/herosection.png"
  };

  return (
    <section id="hero" className="hero-cinematic-section">
      {/* 1. CINEMATIC FULL-WIDTH BACKGROUND VISUAL LAYER */}
      <div 
        className="hero-background-visual"
        style={{ backgroundImage: `url(${content.backgroundImage})` }}
        aria-hidden="true"
      ></div>

      {/* 2. HTML CONTENT LAYER (Positioned directly in empty LEFT negative space) */}
      <div className="hero-content-container">
        <div className="hero-editorial-left">
          
          {/* Eyebrow Badge */}
          <div className="hero-eyebrow-pill">
            <span className="eyebrow-pulse-dot"></span>
            <span className="eyebrow-text">{content.eyebrow}</span>
          </div>

          {/* Main Headline (Editorial Serif) */}
          <h1 className="hero-headline-serif">
            {content.title1}<br />
            <span className="headline-accent-teal">{content.title2}</span>
          </h1>

          {/* Lead Description */}
          <p className="hero-paragraph-lead">
            {content.desc}
          </p>

          {/* Action Buttons Group */}
          <div className="hero-actions-group">
            <button 
              onClick={() => onOpenBooking ? onOpenBooking() : (window.location.href = '/book-appointment')} 
              className="btn-hero-primary-navy"
            >
              <Calendar size={18} />
              <span>{content.primaryCta}</span>
              <ArrowRight size={18} />
            </button>

            <a href="#services" className="btn-hero-secondary-outline">
              <span>{content.secondaryCta}</span>
            </a>
          </div>

          {/* Subtle Doctor Trust Badge */}
          <div className="hero-doctor-badge">
            <ShieldCheck size={16} className="doctor-badge-icon" />
            <span>{content.badgeText}</span>
          </div>

        </div>
      </div>

      {/* 3. OVERLAPPING HERO TRUST STRIP AT BOTTOM */}
      <div className="hero-trust-strip-bar">
        <div className="trust-strip-container">
          {content.trustItems.map((item, idx) => (
            <div key={idx} className="trust-strip-item">
              <div className="trust-item-bullet"></div>
              <div className="trust-item-text">
                <span className="trust-item-title">{item.label}</span>
                <span className="trust-item-detail">{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
