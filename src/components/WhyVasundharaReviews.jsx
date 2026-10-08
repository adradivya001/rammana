import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';
import './WhyVasundharaReviews.css';

const FEATURED_REVIEW = {
  quote: "Dr. Vasundhara is remarkably gentle and explained every detail of our 20-week anomaly scan on the screen. The clinic environment is exceptionally clean and peaceful. We felt completely reassured throughout the scan.",
  patient: "Lakshmi P.",
  tag: "Targeted Anomaly Scan (TIFFA)",
  rating: 5,
  location: "Anantapur"
};

const SUPPORTING_REVIEWS = [
  {
    quote: "Dr. Sai Kiran Reddy explained my blood sugar readings with immense patience. His structured diet guidance and medication review helped stabilize my numbers.",
    patient: "Ramesh K.",
    tag: "Diabetes Consultation & HbA1c",
    rating: 5
  },
  {
    quote: "We travelled for the NT scan and fetal doppler. The clarity of images and calm consultation gave us complete confidence.",
    patient: "Sowmya G.",
    tag: "NT Scan & Fetal Doppler",
    rating: 5
  }
];

export default function WhyVasundharaReviews() {
  return (
    <section id="reviews" className="patient-experience-section">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="reviews-header text-center">
          <span className="section-eyebrow-pill">PATIENT EXPERIENCES</span>
          <h2 className="section-title-serif">What Our Patients Say</h2>
          <p className="section-subtitle-sans">
            Real experiences from patients who visited our centre.
          </p>
        </div>

        {/* EDITORIAL TESTIMONIAL SHOWCASE (MAIN FEATURED + 2 SUPPORTING) */}
        <div className="testimonial-editorial-grid">
          
          {/* MAIN FEATURED QUOTE CARD */}
          <div className="testimonial-featured-card">
            <div className="quote-icon-wrap">
              <Quote size={32} />
            </div>

            <div className="star-rating-row">
              {[...Array(FEATURED_REVIEW.rating)].map((_, i) => (
                <Star key={i} size={18} className="star-gold" />
              ))}
              <span className="rating-num-label">5.0 Star Verified Visit</span>
            </div>

            <p className="featured-quote-text">
              "{FEATURED_REVIEW.quote}"
            </p>

            <div className="featured-patient-info">
              <div>
                <h3 className="patient-name-title">{FEATURED_REVIEW.patient}</h3>
                <span className="patient-tag-sub">{FEATURED_REVIEW.tag} • {FEATURED_REVIEW.location}</span>
              </div>
              <div className="verified-badge-chip">
                <CheckCircle2 size={15} />
                <span>Verified Patient</span>
              </div>
            </div>
          </div>

          {/* SUPPORTING TESTIMONIALS COLUMN */}
          <div className="supporting-reviews-column">
            {SUPPORTING_REVIEWS.map((rev, idx) => (
              <div key={idx} className="supporting-review-card">
                <div className="star-rating-mini">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} className="star-gold" />
                  ))}
                </div>
                <p className="supporting-quote-text">"{rev.quote}"</p>
                <div className="supporting-meta">
                  <span className="sup-patient-name">{rev.patient}</span>
                  <span className="sup-patient-tag">{rev.tag}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="text-center" style={{ marginTop: '2.75rem' }}>
          <Link to="/reviews" className="btn-primary-navy">
            <span>View All Reviews</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
