import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, ArrowRight, Sparkles, Activity, X, ChevronRight, CheckCircle2, Stethoscope, Info, Clock, HelpCircle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import { servicesCategoryData, allServicesMap } from '../data/servicesData';
import AppointmentModal from '../components/AppointmentModal';
import './Services.css';

export default function Services() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceTitle, setBookingServiceTitle] = useState('');

  // Filter Category Cards
  const filteredCategories = servicesCategoryData.filter(cat => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'fetal-medicine') return cat.filterGroup === 'fetal-medicine';
    if (selectedFilter === 'diagnostics') return cat.filterGroup === 'diagnostics';
    if (selectedFilter === 'diabetes-care') return cat.filterGroup === 'diabetes-care';
    return true;
  });

  const handleOpenCategory = (category) => {
    setSelectedCategory(category);
    setSelectedService(null);
  };

  const handleOpenServiceDetails = (serviceId) => {
    const serviceData = allServicesMap[serviceId];
    if (serviceData) {
      setSelectedService(serviceData);
    }
  };

  const handleStartBooking = (serviceTitle) => {
    setBookingServiceTitle(serviceTitle || 'Diagnostic Service');
    setIsBookingOpen(true);
  };

  return (
    <div className="services-directory-page">
      {/* 1. TOP PAGE HEADER BANNER */}
      <section className="services-page-header">
        <div className="container text-center">
          <div className="services-header-badge">
            <Sparkles size={14} />
            <span>VASUNDHARA &amp; SAI KIRAN CLINICAL SERVICES</span>
          </div>
          <h1 className="services-header-title">Diagnostic &amp; Clinical Services Grid</h1>
          <p className="services-header-desc">
            Complete range of specialized fetal medicine scans, prenatal diagnostic ultrasound, HbA1c testing, and comprehensive diabetes care in Sai Nagar, Anantapur.
          </p>
          <div className="services-header-actions">
            <button 
              onClick={() => handleStartBooking('General Diagnostic Service')} 
              className="btn-services-primary"
            >
              <Calendar size={17} />
              <span>Book Appointment for Service</span>
              <ArrowRight size={16} />
            </button>
            <a href={`tel:${siteConfig.contact.phoneDeskRaw}`} className="btn-services-outline">
              <Phone size={16} />
              <span>Call Helpline: {siteConfig.contact.phoneDesk}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS + 8-CATEGORY GRID SECTION */}
      <section className="services-grid-section">
        <div className="container">
          
          {/* Filter Tabs */}
          <div className="services-filter-tabs">
            <button 
              className={`filter-tab-btn ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              ALL SERVICES
            </button>
            <button 
              className={`filter-tab-btn ${selectedFilter === 'fetal-medicine' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('fetal-medicine')}
            >
              FETAL MEDICINE
            </button>
            <button 
              className={`filter-tab-btn ${selectedFilter === 'diagnostics' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('diagnostics')}
            >
              DIAGNOSTICS
            </button>
            <button 
              className={`filter-tab-btn ${selectedFilter === 'diabetes-care' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('diabetes-care')}
            >
              DIABETES CARE
            </button>
          </div>

          {/* Primary 8-Category Cards Grid (4x2 Desktop Layout) */}
          <div className="services-category-grid">
            {filteredCategories.map((category) => (
              <div 
                key={category.id} 
                className="category-card"
                onClick={() => handleOpenCategory(category)}
              >
                <div className="category-card-img-wrapper">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="category-card-img"
                    loading="lazy"
                  />
                  <div className="category-img-overlay"></div>
                </div>

                <div className="category-card-content">
                  <h3 className="category-card-title">{category.title}</h3>
                  <p className="category-card-desc">{category.shortDescription}</p>
                  
                  <div className="category-card-cta">
                    <span>Explore Services</span>
                    <ArrowRight size={16} className="cta-arrow" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action Strip */}
          <div className="services-bottom-cta-strip">
            <div className="services-strip-info">
              <Activity size={20} className="services-strip-icon" />
              <div>
                <strong>Vasundhara Diagnostics &amp; Sai Kiran Diabetic Clinic</strong>
                <p>Advanced diagnostic scans &amp; specialized physician consultations under one trusted roof.</p>
              </div>
            </div>
            <button 
              onClick={() => handleStartBooking('Clinical Appointment')} 
              className="btn-services-primary"
            >
              <Calendar size={16} />
              <span>Book Appointment Now</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* 3. CATEGORY DETAIL MODAL / DRAWER */}
      {selectedCategory && (
        <div className="services-modal-overlay" onClick={() => setSelectedCategory(null)}>
          <div className="services-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="services-modal-close" onClick={() => setSelectedCategory(null)} aria-label="Close">
              <X size={20} />
            </button>

            <div className="category-modal-header">
              <span className="category-modal-eyebrow">{selectedCategory.title}</span>
              <h2 className="category-modal-title">{selectedCategory.title} Services</h2>
              <p className="category-modal-desc">{selectedCategory.shortDescription}</p>
              <div className="category-modal-count-badge">
                <Stethoscope size={14} />
                <span>{selectedCategory.serviceIds.length} {selectedCategory.serviceIds.length === 1 ? 'Service' : 'Services'} Available</span>
              </div>
            </div>

            <div className="category-services-list-grid">
              {selectedCategory.serviceIds.map((serviceId) => {
                const service = allServicesMap[serviceId];
                if (!service) return null;
                return (
                  <div key={serviceId} className="subservice-item-card">
                    <div className="subservice-info">
                      <h4 className="subservice-title">{service.title}</h4>
                      <p className="subservice-desc">{service.shortDescription}</p>
                    </div>
                    <button 
                      className="btn-subservice-details"
                      onClick={() => handleOpenServiceDetails(serviceId)}
                    >
                      <span>View Details</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 4. INDIVIDUAL SERVICE COMPLETE DETAIL MODAL */}
      {selectedService && (
        <div className="services-modal-overlay service-detail-level" onClick={() => setSelectedService(null)}>
          <div className="services-modal-container detail-view-container" onClick={(e) => e.stopPropagation()}>
            <button className="services-modal-close" onClick={() => setSelectedService(null)} aria-label="Close">
              <X size={20} />
            </button>

            <div className="service-detail-top">
              <div className="service-detail-badge">{selectedService.categoryTitle}</div>
              <h2 className="service-detail-title">{selectedService.title}</h2>
              <p className="service-detail-short-lead">{selectedService.shortDescription}</p>
            </div>

            <div className="service-detail-body">
              {selectedService.image && (
                <div className="service-detail-img-box">
                  <img src={selectedService.image} alt={selectedService.title} className="service-detail-img" />
                </div>
              )}

              <div className="service-detail-sections">
                {selectedService.whatIsIt && (
                  <div className="detail-section-block">
                    <div className="section-block-title">
                      <Info size={18} className="block-icon" />
                      <h3>What is this scan / service?</h3>
                    </div>
                    <p>{selectedService.whatIsIt}</p>
                  </div>
                )}

                {selectedService.whyPerformed && (
                  <div className="detail-section-block">
                    <div className="section-block-title">
                      <HelpCircle size={18} className="block-icon" />
                      <h3>Why is it performed?</h3>
                    </div>
                    <p>{selectedService.whyPerformed}</p>
                  </div>
                )}

                {selectedService.whenPerformed && (
                  <div className="detail-section-block">
                    <div className="section-block-title">
                      <Clock size={18} className="block-icon" />
                      <h3>When is it performed?</h3>
                    </div>
                    <p>{selectedService.whenPerformed}</p>
                  </div>
                )}

                {selectedService.clinicalDetails && (
                  <div className="detail-section-block">
                    <div className="section-block-title">
                      <ShieldCheck size={18} className="block-icon" />
                      <h3>Clinical Standard &amp; Details</h3>
                    </div>
                    <p>{selectedService.clinicalDetails}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="service-detail-footer-cta">
              <button 
                onClick={() => {
                  setSelectedService(null);
                  setSelectedCategory(null);
                  handleStartBooking(selectedService.title);
                }} 
                className="btn-services-primary btn-full-width"
              >
                <Calendar size={18} />
                <span>Book an Appointment for {selectedService.title}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. APPOINTMENT BOOKING MODAL */}
      <AppointmentModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialService={bookingServiceTitle}
      />
    </div>
  );
}

