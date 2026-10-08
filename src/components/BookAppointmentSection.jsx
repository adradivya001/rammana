import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import './BookAppointmentSection.css';

export default function BookAppointmentSection({ onOpenBooking }) {
  return (
    <section className="cta-banner-section" id="book-section">
      <div className="container cta-banner-container">
        <div className="cta-banner-card">
          
          {/* Background Image Layer (Family Sunset Meadow Banner on Right) */}
          <div 
            className="cta-banner-bg"
            style={{ backgroundImage: `url('/images/family-sunset-meadow-banner.png')` }}
            aria-hidden="true"
          ></div>

          {/* Dark Navy Gradient Overlay for Left Content Readability */}
          <div className="cta-banner-overlay"></div>

          {/* Left-Aligned Editorial CTA Content */}
          <div className="cta-banner-content">
            <h2 className="cta-heading-serif">Your Care Starts With a Visit.</h2>
            <p className="cta-description-lead">
              Book an appointment and take the next step toward clearer answers and confident care.
            </p>

            <div className="cta-buttons-group">
              <button 
                onClick={() => onOpenBooking ? onOpenBooking() : (window.location.href = '/book-appointment')} 
                className="btn-cta-white-pill"
              >
                <Calendar size={18} />
                <span>Book an Appointment</span>
                <ArrowRight size={17} />
              </button>

              <Link to="/contact" className="btn-cta-outline-pill">
                <span>Contact Us</span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
