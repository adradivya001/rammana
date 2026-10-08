import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  Activity,
  Calendar,
  MessageCircle
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="ref-footer-wrapper">
      <div className="container">
        
        {/* Top Header Row: Dual Brand + Quick Actions */}
        <div className="ref-footer-top-row">
          
          {/* Dual Brand Identity */}
          <div className="ref-footer-brand-wrap">
            <div className="ref-footer-brand-left">
              <img 
                src="/images/vasundhara_logo.png" 
                alt="Vasundhara Diagnostics Logo" 
                className="footer-brand-logo-img"
              />
              <div>
                <span className="ref-f-name">VASUNDHARA</span>
                <span className="ref-f-sub">Diagnostics &amp; Fetal Medicine Centre</span>
              </div>
            </div>

            <div className="ref-f-pipe"></div>

            <div className="ref-footer-brand-right">
              <div className="f-logo-icon dm-icon">
                <Activity size={16} />
              </div>
              <div>
                <span className="ref-f-sk-name">Sai Kiran</span>
                <span className="ref-f-sk-sub">Diabetic Clinic</span>
              </div>
            </div>
          </div>

          {/* Quick CTA buttons */}
          <div className="footer-cta-quick">
            <Link to="/book-appointment" className="ref-btn-teal footer-book-btn">
              <Calendar size={14} />
              <span>Book Appointment</span>
            </Link>
            <a 
              href={siteConfig.contact.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-whatsapp-btn"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Compact 4-Column Grid */}
        <div className="footer-columns-grid">
          
          {/* Col 1: About Centre */}
          <div className="footer-col">
            <h4 className="footer-col-title">About Centre</h4>
            <p className="footer-col-desc">
              Premier fetal medicine, high-resolution ultrasound imaging, and specialized diabetes care in Sai Nagar, Anantapur.
            </p>
            <div className="footer-cert-badge">
              <ShieldCheck size={14} className="cert-shield" />
              <span>Certified Diagnostic &amp; Diabetic Suites</span>
            </div>
          </div>

          {/* Col 2: Care Divisions */}
          <div className="footer-col">
            <h4 className="footer-col-title">Care Divisions</h4>
            <ul className="footer-links-list">
              <li><Link to="/fetal-medicine"><ChevronRight size={13} /> Fetal NT &amp; TIFFA Scans</Link></li>
              <li><Link to="/fetal-medicine"><ChevronRight size={13} /> Doppler &amp; Growth Imaging</Link></li>
              <li><Link to="/diabetes-care"><ChevronRight size={13} /> Comprehensive Diabetes Care</Link></li>
              <li><Link to="/diabetes-care"><ChevronRight size={13} /> Gestational Diabetes</Link></li>
              <li><Link to="/services"><ChevronRight size={13} /> General Ultrasound</Link></li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/"><ChevronRight size={13} /> Home Page</Link></li>
              <li><Link to="/about"><ChevronRight size={13} /> About Facility</Link></li>
              <li><Link to="/doctors"><ChevronRight size={13} /> Specialists</Link></li>
              <li><Link to="/patient-guide"><ChevronRight size={13} /> Patient Guide</Link></li>
              <li><Link to="/contact"><ChevronRight size={13} /> Contact &amp; Location</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Timings */}
          <div className="footer-col">
            <h4 className="footer-col-title">Visit &amp; Contact</h4>
            <div className="footer-contact-block">
              <div className="f-contact-line">
                <MapPin size={14} className="f-c-icon" />
                <span>Sai Nagar Double Road, Anantapur, AP</span>
              </div>
              <div className="f-contact-line">
                <Phone size={14} className="f-c-icon" />
                <span><a href={`tel:${siteConfig.contact.phoneDeskRaw}`}>{siteConfig.contact.phoneDesk}</a> | <a href={`tel:${siteConfig.contact.hotlineRaw}`}>{siteConfig.contact.hotline}</a></span>
              </div>
              <div className="f-contact-line">
                <Clock size={14} className="f-c-icon" />
                <span>Mon–Sat: 9AM–8PM | Sun: 9AM–1PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="ref-footer-divider"></div>

        {/* Bottom Metadata & Legal Bar */}
        <div className="ref-footer-bottom-bar">
          <div className="ref-footer-legal">
            <span>&copy; {new Date().getFullYear()} Vasundhara Diagnostics &amp; Fetal Medicine Centre &amp; Sai Kiran Diabetic Clinic.</span>
          </div>

          <div className="ref-legal-links">
            <Link to="/about">Privacy</Link>
            <span>•</span>
            <Link to="/about">Terms</Link>
            <span>•</span>
            <Link to="/contact">Emergency Info</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

