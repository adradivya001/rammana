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
  Sparkles,
  Navigation
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: 'fetal-medicine',
    date: '',
    time: 'Morning (9 AM - 1 PM)',
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
        <div className="contact-header-block text-center">
          <span className="section-eyebrow-pill">REACH OUT &amp; VISIT</span>
          <h1 className="section-title-serif">Connect With Our Medical Team</h1>
          <p className="section-subtitle-sans">
            Book an appointment, get driving directions to Sai Nagar Anantapur, or speak directly with our reception desk.
          </p>
        </div>

        <div className="contact-main-grid">
          
          {/* Left Column: Clinic Contact Details & Map */}
          <div className="contact-info-col">
            <div className="contact-info-card global-card">
              
              <div className="contact-detail-row">
                <div className="contact-icon-circle">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Centre Address</h4>
                  <p>Sai Nagar Double Road, Anantapur, Andhra Pradesh – 515001</p>
                  <a 
                    href={siteConfig.contact.googleMapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="directions-link"
                  >
                    <Navigation size={13} />
                    <span>Get Driving Directions</span>
                  </a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-circle">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Reception Desk &amp; Helpline</h4>
                  <p>
                    Desk: <a href={`tel:${siteConfig.contact.phoneDeskRaw}`}>+91 {siteConfig.contact.phoneDesk}</a><br />
                    Hotline: <a href={`tel:${siteConfig.contact.hotlineRaw}`}>{siteConfig.contact.hotline}</a>
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
                  <span>Instant WhatsApp Desk</span>
                </a>
              </div>

            </div>

            {/* Google Map View */}
            <div className="contact-map-container">
              <iframe
                title="Vasundhara Diagnostics Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.918987627718!2d77.59868777598466!3d14.686036085810057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b09cf9326d9%3A0xb3e12be8f3b2554e!2sSai%20Nagar%2C%20Anantapur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: '20px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Request an Appointment Form */}
          <div className="contact-form-col">
            <div className="appointment-request-card global-card">
              <span className="form-kicker">QUICK BOOKING REQUEST</span>
              <h3 className="form-heading-serif">Request an Appointment</h3>
              <p className="form-sub-desc">Fill out the details below and our clinic reception will confirm your slot promptly.</p>
              
              {submitted ? (
                <div className="form-success-alert">
                  <CheckCircle2 size={46} className="success-icon" />
                  <h4>Appointment Request Received!</h4>
                  <p>Thank you <strong>{formData.fullName}</strong>. Our care coordinator will call you shortly at <strong>{formData.phone}</strong> to confirm your appointment time.</p>
                  <button 
                    type="button" 
                    className="btn-primary-navy mt-3"
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
                    <label htmlFor="service">Select Specialty / Service</label>
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
                      <label htmlFor="time">Preferred Time Slot</label>
                      <select 
                        id="time" 
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      >
                        <option value="Morning (9 AM - 1 PM)">Morning (9:30 AM – 1:00 PM)</option>
                        <option value="Afternoon (1 PM - 4 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                        <option value="Evening (4 PM - 8 PM)">Evening (4:30 PM – 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group-wrap">
                    <label htmlFor="message">Clinical Notes / Comments (Optional)</label>
                    <textarea 
                      id="message" 
                      rows="3" 
                      placeholder="Any specific symptoms or doctor recommendations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary-navy full-width submit-btn">
                    <Calendar size={18} />
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
