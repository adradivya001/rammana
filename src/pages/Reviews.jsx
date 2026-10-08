import React, { useState } from 'react';
import { 
  Star, 
  Sparkles, 
  ExternalLink, 
  MessageSquare, 
  CheckCircle2, 
  Calendar,
  Baby,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Reviews.css';

export default function Reviews() {
  const [filter, setFilter] = useState('all');
  const pageRef = useScrollReveal();

  const filteredReviews = filter === 'all' 
    ? siteConfig.reviews 
    : siteConfig.reviews.filter(r => r.division === filter);

  return (
    <div className="reviews-page" ref={pageRef}>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="reviews-hero-section text-center">
        <div className="container">
          <div className="eyebrow hero-animate-sub">
            <Star size={14} /> PATIENT EXPERIENCES
          </div>
          <h1 className="reviews-hero-title hero-animate-title">What Our Patients Say</h1>
          <p className="reviews-hero-subtitle mx-auto hero-animate-sub">
            Authentic experiences from expectant families and diabetes patients who visited Vasundhara Diagnostics &amp; Sai Kiran Diabetic Clinic in Sai Nagar, Anantapur.
          </p>
        </div>
      </section>

      {/* ── REVIEWS MAIN SECTION ────────────────────────── */}
      <section className="reviews-main-section section-padding">
        <div className="container">
          {/* Top Bar with Filter and Google Profile CTA */}
          <div className="reviews-top-bar reveal">
            <div className="reviews-filter-pills">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Experiences
              </button>
              <button 
                className={`filter-btn ${filter === 'Fetal Medicine' ? 'active' : ''}`}
                onClick={() => setFilter('Fetal Medicine')}
              >
                Fetal Medicine
              </button>
              <button 
                className={`filter-btn ${filter === 'Sai Kiran Diabetic Clinic' ? 'active' : ''}`}
                onClick={() => setFilter('Sai Kiran Diabetic Clinic')}
              >
                Sai Kiran Diabetes Care
              </button>
            </div>

            <a 
              href={siteConfig.contact.googleMapsLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-google-review link-arrow-anim"
            >
              <span>View Google Business Profile</span>
              <ExternalLink size={15} />
            </a>
          </div>

          {/* Reviews Grid */}
          <div className="reviews-grid-layout">
            {filteredReviews.map((rev, idx) => (
              <div 
                key={rev.id} 
                className={`review-detailed-card premium-card reveal-scale delay-${(idx % 4) + 1}`}
              >
                <div className="rev-card-top">
                  <div className="rev-stars">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={17} className="star-gold" fill="#F59E0B" />
                    ))}
                  </div>
                  <span className="rev-division-tag">
                    {rev.division === 'Fetal Medicine' ? <Baby size={13} /> : <Activity size={13} />}
                    <span>{rev.division}</span>
                  </span>
                </div>

                <p className="rev-comment">"{rev.comment}"</p>

                <div className="rev-footer-meta">
                  <div className="rev-author-info">
                    <strong className="rev-author-name">{rev.author}</strong>
                    <span className="rev-author-loc">{rev.location}</span>
                  </div>
                  <span className="rev-service-badge">{rev.service}</span>
                </div>
                <div className="card-shine-effect"></div>
              </div>
            ))}
          </div>

          {/* Feedback Invitation Card */}
          <div className="review-invite-card premium-card reveal-scale">
            <div className="invite-content">
              <MessageSquare size={28} className="text-teal invite-icon" />
              <div>
                <h3 className="invite-title">Visited Our Centre Recently?</h3>
                <p className="invite-text">
                  Your feedback helps us continuously improve our diagnostic imaging services and patient care in Anantapur.
                </p>
              </div>
            </div>
            <a 
              href={siteConfig.contact.googleMapsLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-teal hero-btn-pulse link-arrow-anim"
            >
              <span>Leave a Review</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
