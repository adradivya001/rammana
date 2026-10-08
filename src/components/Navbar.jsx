import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight,
  Activity, 
  Calendar,
  Phone,
  Clock,
  MapPin,
  MessageCircle
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route changes
  const prevPathnameRef = React.useRef(location.pathname);
  if (prevPathnameRef.current !== location.pathname) {
    prevPathnameRef.current = location.pathname;
    if (isMobileOpen) {
      setIsMobileOpen(false);
    }
  }

  return (
    <header className={`ref-header-fixed ${isScrolled ? 'scrolled' : ''}`}>
      
      {/* ── Top Utility Bar ── */}
      <div className="navbar-top-announcement">
        <div className="container nav-top-flex">
          <div className="nav-top-left">
            <span className="nav-top-item">
              <MapPin size={13} className="nav-top-icon" />
              <span>Sai Nagar, Anantapur</span>
            </span>
            <span className="nav-top-divider">•</span>
            <span className="nav-top-item">
              <Clock size={13} className="nav-top-icon" />
              <span>Mon–Sat: 9 AM – 8 PM</span>
            </span>
            <span className="nav-top-pill-badge">
              <span className="pulse-dot"></span>
              <span>Open Today</span>
            </span>
          </div>

          <div className="nav-top-right">
            <a href={`tel:${siteConfig.contact.phoneDeskRaw}`} className="nav-top-link">
              <Phone size={13} />
              <span>Helpdesk: <strong>{siteConfig.contact.phoneDesk}</strong></span>
            </a>
            <a 
              href={siteConfig.contact.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-top-whatsapp"
            >
              <MessageCircle size={13} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar ── */}
      <div className="ref-navbar-main">
        <div className="container nav-container">
          
          {/* Dual Brand Identity with Official Logo */}
          <Link to="/" className="ref-brand-group" aria-label="Vasundhara Diagnostics & Sai Kiran Diabetic Clinic">
            <div className="brand-logo-left">
              <img 
                src="/images/vasundhara_logo.png" 
                alt="Vasundhara Diagnostics & Fetal Medicine Logo" 
                className="ref-brand-logo-img"
              />
              <div className="brand-titles">
                <span className="brand-name-vasundhara">VASUNDHARA</span>
                <span className="brand-sub-vasundhara">Diagnostics &amp; Fetal Medicine</span>
              </div>
            </div>

            <div className="brand-divider-pipe"></div>

            <div className="brand-logo-right">
              <div className="brand-logo-symbol-dm" title="Sai Kiran Diabetic Clinic">
                <Activity size={18} />
              </div>
              <div className="brand-titles">
                <span className="brand-name-saikiran">Sai Kiran</span>
                <span className="brand-sub-saikiran">Diabetic Clinic</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="ref-desktop-menu" aria-label="Primary Navigation">
            <NavLink to="/" end className={({ isActive }) => `ref-nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `ref-nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
            <NavLink to="/fetal-medicine" className={({ isActive }) => `ref-nav-link ${isActive ? 'active' : ''}`}>
              Fetal Medicine
            </NavLink>
            <NavLink to="/diabetes-care" className={({ isActive }) => `ref-nav-link ${isActive ? 'active' : ''}`}>
              Diabetes Care
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => `ref-nav-link ${isActive ? 'active' : ''}`}>
              Services
            </NavLink>
            <NavLink to="/doctors" className={({ isActive }) => `ref-nav-link ${isActive ? 'active' : ''}`}>
              Doctors
            </NavLink>
            <NavLink to="/patient-guide" className={({ isActive }) => `ref-nav-link ${isActive ? 'active' : ''}`}>
              Patient Guide
            </NavLink>
            <NavLink to="/reviews" className={({ isActive }) => `ref-nav-link ${isActive ? 'active' : ''}`}>
              Reviews
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `ref-nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </nav>

          {/* Nav Right CTA Action */}
          <div className="ref-nav-cta">
            <Link to="/book-appointment" className="ref-btn-teal ref-book-btn">
              <Calendar size={15} />
              <span>Book Visit</span>
              <ArrowRight size={14} className="cta-arrow-icon" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button" 
            className="ref-mobile-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* ── Mobile Menu Drawer ── */}
      {isMobileOpen && (
        <div className="ref-mobile-drawer">
          <div className="container mobile-drawer-inner">
            <NavLink to="/" end className="ref-mob-link">Home</NavLink>
            <NavLink to="/about" className="ref-mob-link">About Centre</NavLink>
            <NavLink to="/fetal-medicine" className="ref-mob-link">Fetal Medicine &amp; Ultrasound</NavLink>
            <NavLink to="/diabetes-care" className="ref-mob-link">Sai Kiran Diabetic Clinic</NavLink>
            <NavLink to="/services" className="ref-mob-link">Clinical Services</NavLink>
            <NavLink to="/doctors" className="ref-mob-link">Meet Our Doctors</NavLink>
            <NavLink to="/patient-guide" className="ref-mob-link">Patient Guide &amp; Prep</NavLink>
            <NavLink to="/reviews" className="ref-mob-link">Patient Reviews</NavLink>
            <NavLink to="/contact" className="ref-mob-link">Contact &amp; Location</NavLink>
            
            <div className="mob-cta-box">
              <Link to="/book-appointment" className="ref-btn-teal full-width">
                <Calendar size={16} />
                <span>Book Appointment Online</span>
                <ArrowRight size={16} />
              </Link>
              <a href={`tel:${siteConfig.contact.phoneDeskRaw}`} className="ref-btn-outline full-width mt-2">
                <Phone size={15} />
                <span>Call Desk: {siteConfig.contact.phoneDesk}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
