import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Calendar,
  MessageCircle,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: 'fetal-medicine',
    date: '',
    time: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-ref-page">
      <div className="container">
        
        {/* Header */}
        <div className="ref-section-header text-center pt-5">
          <span className="ref-section-tag">Reach Out &amp; Visit</span>
          <h1 className="ref-section-heading">We're Here to Help</h1>
          <p className="ref-section-sub">Book an appointment, get driving directions, or connect directly with our desk reception.</p>
        </div>

        <div className="contact-main-grid">
          
          {/* Left Column: Clinic Contact Details & Map */}
          <div className="contact-info-col">
            <div className="contact-info-card">
              
              <div className="contact-detail-row">
                <div className="contact-icon-circle">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Centre Address</h4>
                  <p>Sai Nagar Main Double Road Avenue, Anantapur, Andhra Pradesh – 515001</p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-circle">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Reception Desk &amp; Helpline</h4>
                  <p>
                    Desk: <a href={`tel:${siteConfig.contact.phoneDeskRaw}`}>{siteConfig.contact.phoneDesk}</a><br />
                    Helpline: <a href={`tel:${siteConfig.contact.hotlineRaw}`}>{siteConfig.contact.hotline}</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-circle">
                  <Clock size={20} />
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon – Sat: 9:00 AM – 8:00 PM<br />Sun: 9:00 AM – 1:00 PM</p>
                </div>
              </div>

              <div className="contact-whatsapp-row">
                <a 
                  href={siteConfig.contact.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-wa-btn"
                >
                  <MessageCircle size={18} />
                  <span>Instant WhatsApp Helpdesk</span>
                </a>
              </div>

            </div>

            {/* Stylized Google Map View */}
            <div className="contact-map-container">
              <iframe
                title="Vasundhara Diagnostics Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.918987627718!2d77.59868777598466!3d14.686036085810057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b09cf9326d9%3A0xb3e12be8f3b2554e!2sSai%20Nagar%2C%20Anantapur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Request an Appointment Form */}
          <div className="contact-form-col">
            <div className="appointment-request-card">
              <span className="form-kicker">Quick Booking Request</span>
              <h3>Request an Appointment</h3>
              <p className="form-sub-desc">Fill out the details below and our clinic reception will confirm your time slot promptly.</p>
              
              {submitted ? (
                <div className="form-success-alert">
                  <CheckCircle2 size={42} className="success-icon" />
                  <h4>Appointment Request Received!</h4>
                  <p>Thank you, {formData.fullName}. Our clinic reception will call you shortly at <strong>{formData.phone}</strong> to confirm your slot.</p>
                  <button 
                    type="button" 
                    className="ref-btn-teal mt-3"
                    onClick={() => setSubmitted(false)}
                  >
                    <span>Submit Another Request</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-actual-form">
                  <div className="form-group-wrap">
                    <label htmlFor="fullName">Patient Full Name *</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      required 
                      placeholder="e.g. Sowmya Devi" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="form-group-wrap">
                    <label htmlFor="phone">Mobile Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      placeholder="e.g. 98765 43210" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group-wrap">
                    <label htmlFor="service">Care Division / Service</label>
                    <select 
                      id="service" 
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="fetal-nt">First Trimester NT Scan (11–13+6 Weeks)</option>
                      <option value="fetal-tiffa">Targeted Anomaly Scan (TIFFA / Level II)</option>
                      <option value="fetal-doppler">Fetal Growth &amp; Doppler Studies</option>
                      <option value="fetal-dating">Early Dating / Viability Ultrasound</option>
                      <option value="dm-consult">Comprehensive Diabetes Consultation</option>
                      <option value="dm-gdm">Gestational Diabetes Care</option>
                      <option value="diag-ultrasound">General Diagnostic Ultrasound</option>
                    </select>
                  </div>

                  <div className="form-row-two">
                    <div className="form-group-wrap">
                      <label htmlFor="date">Preferred Date</label>
                      <input 
                        type="date" 
                        id="date" 
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div className="form-group-wrap">
                      <label htmlFor="time">Preferred Time</label>
                      <select 
                        id="time" 
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      >
                        <option value="morning">Morning (9:30 AM – 1:00 PM)</option>
                        <option value="afternoon">Afternoon (1:00 PM – 4:00 PM)</option>
                        <option value="evening">Evening (4:30 PM – 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group-wrap">
                    <label htmlFor="message">Clinical Notes / Comments (Optional)</label>
                    <textarea 
                      id="message" 
                      rows="3" 
                      placeholder="Any specific symptoms or referring doctor recommendations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="ref-btn-teal full-width submit-btn">
                    <Calendar size={17} />
                    <span>Send Appointment Request</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
