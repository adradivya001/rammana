import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Baby, 
  Activity, 
  Scan, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare
} from 'lucide-react';
import { siteConfig } from '../data/siteData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './BookAppointment.css';

export default function BookAppointment() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialDivision = queryParams.get('division') || 'fetal';
  const initialService = queryParams.get('service') || '';

  const [step, setStep] = useState(1);
  const [careDivision, setCareDivision] = useState(initialDivision);
  const [selectedService, setSelectedService] = useState(initialService);
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM – 11:30 AM');
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    phone: '',
    age: '',
    notes: ''
  });
  const [bookingRef, setBookingRef] = useState('');

  const pageRef = useScrollReveal();

  // Service list mapping based on care division
  const getServicesForDivision = () => {
    if (careDivision === 'fetal') {
      return [
        { id: 'fetal-nt', name: 'NT Scan & First Trimester Risk Assessment (11–13+6 Weeks)' },
        { id: 'fetal-tiffa', name: 'Targeted Anomaly Scan (TIFFA / Level II Scan, 18–22 Weeks)' },
        { id: 'fetal-dating', name: 'Early Pregnancy / Dating & Viability Scan (6–10 Weeks)' },
        { id: 'fetal-doppler', name: 'Fetal Growth, Wellbeing & Doppler Studies (28–36 Weeks)' },
        { id: 'fetal-consult', name: 'Specialized Fetal Medicine Consultation with Dr. N. Vasundhara' }
      ];
    } else if (careDivision === 'diabetes') {
      return [
        { id: 'dm-consult', name: 'Comprehensive Diabetes Evaluation with Dr. V. Sai Kiran Reddy' },
        { id: 'dm-hba1c', name: 'HbA1c Glycemic Profiling & Fasting Blood Sugar Monitoring' },
        { id: 'dm-gestational', name: 'Gestational Diabetes Management (During Pregnancy)' },
        { id: 'dm-screening', name: 'Diabetic Preventive Complication Screening (Foot & Vascular)' },
        { id: 'dm-followup', name: 'Periodic Diabetes Review & Treatment Adjustment' }
      ];
    } else {
      return [
        { id: 'diag-abdomen', name: 'Whole Abdomen & Pelvis Ultrasound Scan' },
        { id: 'diag-kub', name: 'Kidney, Ureter & Bladder (KUB) Sonography' },
        { id: 'diag-thyroid', name: 'Thyroid & Neck Soft Tissue Ultrasound' },
        { id: 'diag-pelvic', name: 'Female Pelvic / Gynaecological Ultrasound' }
      ];
    }
  };

  const handleNext = () => {
    if (step === 1 && !careDivision) return;
    if (step === 2 && !selectedService) {
      // Default to first service
      const services = getServicesForDivision();
      setSelectedService(services[0].name);
    }
    if (step === 4) {
      // Generate reference
      const ref = `VAS-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(ref);
    }
    setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const isStepValid = () => {
    if (step === 1) return !!careDivision;
    if (step === 2) return true;
    if (step === 3) return !!preferredDate;
    if (step === 4) return patientDetails.name.trim() !== '' && patientDetails.phone.trim().length >= 10;
    return true;
  };

  return (
    <div className="booking-page" ref={pageRef}>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="booking-hero-section text-center">
        <div className="container">
          <div className="eyebrow hero-animate-sub">
            <Calendar size={14} /> ONLINE APPOINTMENT REQUEST
          </div>
          <h1 className="booking-hero-title hero-animate-title">Book Your Appointment</h1>
          <p className="booking-hero-subtitle mx-auto hero-animate-sub">
            Schedule your prenatal scan, ultrasound examination, or diabetes consultation in a few simple steps.
          </p>
        </div>
      </section>

      {/* ── BOOKING CONTAINER ───────────────────────────── */}
      <section className="booking-wizard-section section-padding">
        <div className="container">
          <div className="booking-wizard-card premium-card reveal-scale">
            {/* Progress Bar */}
            <div className="wizard-stepper-bar">
              <div className={`step-node ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
                <span className="step-circle">{step > 1 ? <CheckCircle2 size={16} /> : '1'}</span>
                <span className="step-title-text">Care Division</span>
              </div>
              <div className={`stepper-line ${step >= 2 ? 'active' : ''}`}></div>

              <div className={`step-node ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
                <span className="step-circle">{step > 2 ? <CheckCircle2 size={16} /> : '2'}</span>
                <span className="step-title-text">Service / Scan</span>
              </div>
              <div className={`stepper-line ${step >= 3 ? 'active' : ''}`}></div>

              <div className={`step-node ${step >= 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''}`}>
                <span className="step-circle">{step > 3 ? <CheckCircle2 size={16} /> : '3'}</span>
                <span className="step-title-text">Date &amp; Time</span>
              </div>
              <div className={`stepper-line ${step >= 4 ? 'active' : ''}`}></div>

              <div className={`step-node ${step >= 4 ? 'active' : ''} ${step > 4 ? 'completed' : ''}`}>
                <span className="step-circle">{step > 4 ? <CheckCircle2 size={16} /> : '4'}</span>
                <span className="step-title-text">Patient Details</span>
              </div>
              <div className={`stepper-line ${step >= 5 ? 'active' : ''}`}></div>

              <div className={`step-node ${step === 5 ? 'active' : ''}`}>
                <span className="step-circle">5</span>
                <span className="step-title-text">Confirmation</span>
              </div>
            </div>

            {/* STEP 1: CHOOSE CARE DIVISION */}
            {step === 1 && (
              <div className="wizard-step-content">
                <h2 className="step-heading">Step 1: Choose Your Care Division</h2>
                <p className="step-instructions">Select the clinical division that best matches your healthcare requirement.</p>

                <div className="care-options-grid">
                  <div 
                    className={`care-choice-card ${careDivision === 'fetal' ? 'selected' : ''}`}
                    onClick={() => { setCareDivision('fetal'); setSelectedService(''); }}
                  >
                    <div className="care-choice-icon teal-bg">
                      <Baby size={28} />
                    </div>
                    <div className="care-choice-info">
                      <span className="care-subtag">DIVISION 01</span>
                      <h3 className="care-choice-name">Fetal Medicine &amp; Pregnancy Care</h3>
                      <p className="care-choice-desc">Prenatal ultrasound scans, NT scans, TIFFA anomaly evaluation &amp; fetal Doppler with Dr. N. Vasundhara.</p>
                    </div>
                  </div>

                  <div 
                    className={`care-choice-card ${careDivision === 'diabetes' ? 'selected' : ''}`}
                    onClick={() => { setCareDivision('diabetes'); setSelectedService(''); }}
                  >
                    <div className="care-choice-icon navy-bg">
                      <Activity size={28} />
                    </div>
                    <div className="care-choice-info">
                      <span className="care-subtag">DIVISION 02</span>
                      <h3 className="care-choice-name">Sai Kiran Diabetic Clinic</h3>
                      <p className="care-choice-desc">Comprehensive diabetes evaluation, HbA1c tracking, gestational diabetes &amp; treatment plans with Dr. V. Sai Kiran Reddy.</p>
                    </div>
                  </div>

                  <div 
                    className={`care-choice-card ${careDivision === 'diagnostic' ? 'selected' : ''}`}
                    onClick={() => { setCareDivision('diagnostic'); setSelectedService(''); }}
                  >
                    <div className="care-choice-icon mint-bg">
                      <Scan size={28} />
                    </div>
                    <div className="care-choice-info">
                      <span className="care-subtag">DIAGNOSTIC LAB</span>
                      <h3 className="care-choice-name">General Ultrasound &amp; Sonography</h3>
                      <p className="care-choice-desc">Whole abdomen, pelvis, KUB, thyroid, and general diagnostic ultrasound imaging.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: CHOOSE SERVICE */}
            {step === 2 && (
              <div className="wizard-step-content">
                <h2 className="step-heading">Step 2: Select Specific Service or Scan</h2>
                <p className="step-instructions">Choose the scan or consultation recommended by your doctor.</p>

                <div className="services-options-list">
                  {getServicesForDivision().map((svc) => (
                    <label 
                      key={svc.id} 
                      className={`service-option-item ${selectedService === svc.name ? 'selected' : ''}`}
                    >
                      <input 
                        type="radio" 
                        name="booking-service" 
                        checked={selectedService === svc.name} 
                        onChange={() => setSelectedService(svc.name)}
                      />
                      <div className="option-text-group">
                        <strong>{svc.name}</strong>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: CHOOSE DATE & TIME */}
            {step === 3 && (
              <div className="wizard-step-content">
                <h2 className="step-heading">Step 3: Choose Preferred Date &amp; Time</h2>
                <p className="step-instructions">Select your preferred date and time slot for visiting the centre.</p>

                <div className="datetime-selection-grid">
                  <div className="date-picker-group">
                    <label>Preferred Visit Date *</label>
                    <input 
                      type="date" 
                      required 
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="wizard-input-date"
                    />
                  </div>

                  <div className="time-slots-group">
                    <label>Select Preferred Time Window *</label>
                    <div className="time-slots-grid">
                      {[
                        "Morning: 9:30 AM – 11:00 AM",
                        "Morning: 11:00 AM – 1:00 PM",
                        "Evening: 4:30 PM – 6:00 PM",
                        "Evening: 6:00 PM – 8:00 PM"
                      ].map((slot, i) => (
                        <button
                          key={i}
                          type="button"
                          className={`time-slot-pill ${timeSlot === slot ? 'selected' : ''}`}
                          onClick={() => setTimeSlot(slot)}
                        >
                          <Clock size={14} />
                          <span>{slot}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: PATIENT DETAILS */}
            {step === 4 && (
              <div className="wizard-step-content">
                <h2 className="step-heading">Step 4: Patient Information</h2>
                <p className="step-instructions">Please provide patient details for appointment reservation.</p>

                <div className="patient-form-grid">
                  <div className="p-form-group">
                    <label>Patient Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. S. Lakshmi"
                      value={patientDetails.name}
                      onChange={(e) => setPatientDetails({ ...patientDetails, name: e.target.value })}
                    />
                  </div>

                  <div className="p-form-group">
                    <label>Mobile Number (For SMS/Call Confirmation) *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="10-digit mobile number"
                      value={patientDetails.phone}
                      onChange={(e) => setPatientDetails({ ...patientDetails, phone: e.target.value })}
                    />
                  </div>

                  <div className="p-form-group">
                    <label>Patient Age (Optional)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 28"
                      value={patientDetails.age}
                      onChange={(e) => setPatientDetails({ ...patientDetails, age: e.target.value })}
                    />
                  </div>

                  <div className="p-form-group">
                    <label>Doctor Referral / Clinical Notes (Optional)</label>
                    <textarea 
                      rows="2" 
                      placeholder="Mention your gestational week or referring physician name..."
                      value={patientDetails.notes}
                      onChange={(e) => setPatientDetails({ ...patientDetails, notes: e.target.value })}
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: CONFIRMATION */}
            {step === 5 && (
              <div className="wizard-step-content text-center confirmation-block">
                <div className="confirmation-success-icon">
                  <CheckCircle2 size={48} className="text-teal mx-auto" />
                </div>
                <h2 className="confirmation-heading">Your Appointment Request Has Been Submitted</h2>
                <p className="confirmation-sub">
                  Thank you, <strong>{patientDetails.name}</strong>. Your request has been registered at our reception desk.
                </p>

                <div className="confirmation-summary-card">
                  <div className="summary-row">
                    <span>Reference ID:</span>
                    <strong>{bookingRef}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Care Division:</span>
                    <strong>
                      {careDivision === 'fetal' ? 'Fetal Medicine & Diagnostics' : careDivision === 'diabetes' ? 'Sai Kiran Diabetic Clinic' : 'General Diagnostics'}
                    </strong>
                  </div>
                  <div className="summary-row">
                    <span>Service:</span>
                    <strong>{selectedService || 'General Consultation'}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Preferred Date &amp; Slot:</span>
                    <strong>{preferredDate} ({timeSlot})</strong>
                  </div>
                  <div className="summary-row">
                    <span>Contact Number:</span>
                    <strong>{patientDetails.phone}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Location:</span>
                    <strong>Vasundhara Diagnostics, Sai Nagar, Anantapur</strong>
                  </div>
                </div>

                <div className="confirmation-actions">
                  <a 
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello%20Vasundhara%20Diagnostics,%20I%20have%20submitted%20an%20appointment%20request%20with%20Ref%20ID:%20${bookingRef}%20for%20${patientDetails.name}.`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-teal hero-btn-pulse link-arrow-anim"
                  >
                    <MessageSquare size={17} />
                    <span>Confirm Instantly on WhatsApp</span>
                  </a>

                  <Link to="/" className="btn btn-secondary link-arrow-anim">
                    <span>Return to Home</span>
                  </Link>
                </div>
              </div>
            )}

            {/* Navigation Controls */}
            {step < 5 && (
              <div className="wizard-footer-nav">
                {step > 1 && (
                  <button type="button" onClick={handlePrev} className="btn btn-secondary btn-wizard-back link-arrow-anim">
                    <ArrowLeft size={16} />
                    <span>Back</span>
                  </button>
                )}

                <button 
                  type="button" 
                  onClick={handleNext} 
                  disabled={!isStepValid()}
                  className="btn btn-teal btn-wizard-next ml-auto hero-btn-pulse link-arrow-anim"
                >
                  <span>{step === 4 ? "Submit Appointment Request" : "Continue to Next Step"}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
