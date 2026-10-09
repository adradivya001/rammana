import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Activity, 
  MessageCircle, 
  Calendar, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import AppointmentModal from './AppointmentModal';
import './Footer.css';

export default function Footer({ onOpenBooking }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <footer className="master-global-footer">
        <div className="container">
          
          {/* 1. TOP BRAND & CTA ROW */}
          <div className="footer-top-brand-cta-row">
            {/* Dual Brand Identity */}
            <div className="footer-dual-brand">
              <div className="brand-vasundhara-block">
                <img 
                  src="/images/vasundhara_logo.png" 
                  alt="Vasundhara Diagnostics Logo" 
                  className="footer-logo-img"
                />
                <div className="brand-titles">
                  <span className="brand-name-vasundhara">VASUNDHARA</span>
                  <span className="brand-sub-vasundhara">Diagnostics &amp; Fetal Medicine Centre</span>
                </div>
              </div>

              <div className="brand-divider-pipe"></div>

              <div className="brand-saikiran-block">
                <Activity size={14} className="sk-footer-icon" />
                <div className="brand-titles">
                  <span className="brand-name-saikiran">SAI KIRAN</span>
                  <span className="brand-sub-saikiran">Diabetic Clinic</span>
                </div>
              </div>
            </div>

            {/* Top Right Action Buttons */}
            <div className="footer-top-actions">
              <button onClick={handleBookClick} className="btn-footer-primary-teal">
                <Calendar size={16} />
                <span>Book Appointment</span>
                <ArrowRight size={16} />
              </button>
              
              <a 
                href={siteConfig.contact.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-footer-whatsapp"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="footer-top-divider"></div>

          {/* 2. 4-COLUMN FOOTER CONTENT GRID */}
          <div className="footer-columns-grid">
            
            {/* COLUMN 0: BRAND DESCRIPTION & TRUST BADGE */}
            <div className="footer-col col-brand-desc">
              <p className="footer-brand-summary">
                Specialised fetal medicine, advanced diagnostics and comprehensive diabetes care under one trusted centre.
              </p>
              
              <div className="footer-trust-badge">
                <ShieldCheck size={16} className="badge-shield-icon" />
                <span>Certified Diagnostic &amp; Diabetic Suites</span>
              </div>
            </div>

            {/* COLUMN 1: CARE DIVISIONS */}
            <div className="footer-col">
              <h4 className="footer-col-heading">
                <span>Care Divisions</span>
                <span className="heading-teal-dot"></span>
              </h4>
              <ul className="footer-links-list">
                <li><Link to="/fetal-medicine">Fetal Medicine &amp; Ultrasound</Link></li>
                <li><Link to="/fetal-medicine">Fetal Assessment &amp; TIFFA</Link></li>
                <li><Link to="/fetal-medicine">Doppler &amp; Growth Imaging</Link></li>
                <li><Link to="/diabetes-care">Diabetes Care</Link></li>
                <li><Link to="/diabetes-care">Gestational Diabetes</Link></li>
                <li><Link to="/services">Diagnostic Services</Link></li>
              </ul>
            </div>

            {/* COLUMN 2: QUICK LINKS */}
            <div className="footer-col">
              <h4 className="footer-col-heading">
                <span>Quick Links</span>
                <span className="heading-teal-dot"></span>
              </h4>
              <ul className="footer-links-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Centre</Link></li>
                <li><Link to="/fetal-medicine">Fetal Medicine</Link></li>
                <li><Link to="/diabetes-care">Diabetes Care</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/doctors">Doctors</Link></li>
                <li><Link to="/patient-guide">Patient Guide</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* COLUMN 3: VISIT & CONTACT */}
            <div className="footer-col col-visit-contact">
              <h4 className="footer-col-heading">
                <span>Visit &amp; Contact</span>
                <span className="heading-teal-dot"></span>
              </h4>
              <div className="footer-contact-details">
                <div className="contact-detail-item">
                  <MapPin size={16} className="contact-icon" />
                  <span>Sai Nagar Double Road,<br />Anantapur, Andhra Pradesh</span>
                </div>

                <div className="contact-detail-item">
                  <Phone size={16} className="contact-icon" />
                  <span>
                    <a href={`tel:${siteConfig.contact.phoneDeskRaw}`}>79893 30974</a> &nbsp;|&nbsp; <a href={`tel:${siteConfig.contact.hotlineRaw}`}>+91 93912 51558</a>
                  </span>
                </div>

                <div className="contact-detail-item">
                  <Clock size={16} className="contact-icon" />
                  <span>Mon–Sat: 9 AM–8 PM<br />Sun: 9 AM–1 PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* 3. SUBTLE BOTTOM HORIZONTAL DIVIDER & LEGAL ROW */}
          <div className="footer-bottom-divider"></div>

          <div className="footer-bottom-legal-row">
            <div className="footer-copyright-text">
              &copy; {new Date().getFullYear()} Vasundhara Diagnostics &amp; Sai Kiran Clinics. All rights reserved.
            </div>

            <div className="footer-legal-links">
              <Link to="/about">Privacy Policy</Link>
              <span className="legal-dot">•</span>
              <Link to="/about">Terms</Link>
              <span className="legal-dot">•</span>
              <Link to="/contact">Emergency Info</Link>
            </div>
          </div>

        </div>
      </footer>

      {/* APPOINTMENT MODAL DISPATCH */}
      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
