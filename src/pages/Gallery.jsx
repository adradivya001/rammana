import React, { useState } from 'react';
import { Sparkles, Eye, X, Image as ImageIcon } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Gallery.css';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);
  const pageRef = useScrollReveal();

  const filteredItems = selectedCategory === 'all'
    ? siteConfig.galleryItems
    : siteConfig.galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="gallery-page" ref={pageRef}>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="gallery-hero-section text-center">
        <div className="container">
          <div className="eyebrow hero-animate-sub">
            <Sparkles size={14} /> CENTRE ENVIRONMENT
          </div>
          <h1 className="gallery-hero-title hero-animate-title">Centre &amp; Technology Gallery</h1>
          <p className="gallery-hero-subtitle mx-auto hero-animate-sub">
            Take a look inside Vasundhara Diagnostics &amp; Sai Kiran Diabetic Clinic in Sai Nagar, Anantapur.
          </p>
        </div>
      </section>

      {/* ── GALLERY SECTION ─────────────────────────────── */}
      <section className="gallery-main-section section-padding">
        <div className="container">
          {/* Category Tabs */}
          <div className="gallery-filter-tabs reveal">
            {siteConfig.galleryCategories.map((cat) => (
              <button
                key={cat.id}
                className={`gallery-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id} 
                className={`gallery-item-card premium-card reveal-scale delay-${(idx % 4) + 1}`}
                onClick={() => setLightboxImg(item)}
              >
                <div className="gallery-img-container">
                  <img src={item.image} alt={item.title} className="gallery-img" />
                  <div className="gallery-hover-overlay">
                    <Eye size={24} className="text-white" />
                    <span className="view-text">Click to Expand</span>
                  </div>
                </div>
                <div className="gallery-item-caption">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-desc">{item.description}</p>
                </div>
                <div className="card-shine-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close-btn"
              onClick={() => setLightboxImg(null)}
              aria-label="Close image modal"
            >
              <X size={26} />
            </button>
            <img src={lightboxImg.image} alt={lightboxImg.title} className="lightbox-full-img" />
            <div className="lightbox-caption-bar">
              <h4>{lightboxImg.title}</h4>
              <p>{lightboxImg.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
