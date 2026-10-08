import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  Calendar, 
  ArrowLeft, 
  Phone, 
  Clock, 
  ShieldCheck, 
  FileText, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const pageRef = useScrollReveal();

  // Find service by slug or fallback
  const service = siteConfig.services.find(s => s.slug === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const isFetal = service.division.includes('Fetal');
  const isDiabetes = service.division.includes('Diabetes');

  return (
    <div className="service-detail-page" ref={pageRef}>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className={`detail-hero-section ${isDiabetes ? 'diabetes-theme' : 'fetal-theme'}`}>
        <div className="container">
          <Link to="/services" className="back-link hero-animate-sub">
            <ArrowLeft size={16} />
            <span>Back to All Services</span>
          </Link>

          <div className="detail-hero-inner">
            <span className="detail-eyebrow hero-animate-sub">
              <Sparkles size={14} /> {service.category}
            </span>
            <h1 className="detail-hero-title hero-animate-title">{service.title}</h1>
            <p className="detail-hero-desc hero-animate-sub">{service.shortDesc}</p>

            <div className="detail-hero-actions hero-animate-cta">
              <Link to={`/book-appointment?service=${service.slug}`} className="btn btn-teal hero-btn-pulse">
                <Calendar size={18} />
                <span>Book This Service</span>
              </Link>
              <a href={`tel:${siteConfig.contact.phoneDeskRaw}`} className="btn btn-outline-light link-arrow-anim">
                <Phone size={18} />
                <span>Inquire via Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <section className="detail-body-section section-padding">
        <div className="container detail-body-grid">
          {/* Left: Comprehensive Inclusions & Clinical Protocols */}
          <div className="detail-main-col">
            <div className="detail-card premium-card reveal-left">
              <h2 className="detail-section-title">Clinical Inclusions &amp; Scan Protocols</h2>
              <p className="detail-section-intro">
                Conducted with rigorous adherence to standardized diagnostic ultrasound guidelines and evidence-based protocols:
              </p>

              <div className="inclusions-grid">
                {service.details.map((item, idx) => (
                  <div key={idx} className="inclusion-item">
                    <CheckCircle2 size={18} className="text-teal" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-card premium-card reveal-left delay-2">
              <h2 className="detail-section-title">What Expectant Parents &amp; Patients Should Know</h2>
              <p className="detail-text-p">
                At Vasundhara Diagnostics &amp; Sai Kiran Diabetic Clinic, examinations are conducted in a peaceful, private consultation suite equipped with high-resolution patient-facing viewing displays. The consulting doctor discusses real-time findings to ensure complete reassurance and clarity.
              </p>
              <div className="detail-alert-box">
                <AlertCircle size={20} className="text-teal" />
                <div>
                  <strong>Doctor Verification:</strong>
                  <p>All ultrasound diagnostic reports and diabetes evaluations are personally analyzed and signed by our qualified medical specialists.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Preparation, Turnaround, Timings, Booking */}
          <div className="detail-sidebar-col">
            <div className="sidebar-info-card premium-card reveal-right delay-1">
              <h3 className="sidebar-card-title">Patient Preparation</h3>
              <p className="sidebar-card-text">{service.preparation}</p>

              <div className="sidebar-divider"></div>

              <h3 className="sidebar-card-title">Report Turnaround</h3>
              <p className="sidebar-card-text">{service.turnaround}</p>

              <div className="sidebar-divider"></div>

              <h3 className="sidebar-card-title">Location &amp; OPD</h3>
              <p className="sidebar-card-text">{siteConfig.contact.address}</p>
              <span className="sidebar-timings">Timings: {siteConfig.contact.timings}</span>

              <div className="sidebar-cta-wrap">
                <Link to={`/book-appointment?service=${service.slug}`} className="btn btn-teal btn-full hero-btn-pulse">
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                </Link>
                <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-full link-arrow-anim">
                  <span>WhatsApp Inquiries</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
