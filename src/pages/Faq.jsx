import React, { useState } from 'react';
import { Sparkles, ChevronDown, Search, Calendar, Phone, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Faq.css';

export default function Faq() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState({});
  const pageRef = useScrollReveal();

  const toggleItem = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredFaqs = siteConfig.faqs.map((category, catIdx) => {
    const matchingQuestions = category.questions.filter(q => 
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
      q.a.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...category,
      questions: matchingQuestions,
      catIdx
    };
  }).filter(category => category.questions.length > 0);

  return (
    <div className="faq-page" ref={pageRef}>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="faq-hero-section text-center">
        <div className="container">
          <div className="eyebrow hero-animate-sub">
            <HelpCircle size={14} /> PATIENT SUPPORT
          </div>
          <h1 className="faq-hero-title hero-animate-title">Frequently Asked Questions</h1>
          <p className="faq-hero-subtitle mx-auto hero-animate-sub">
            Find clear answers about fetal medicine scans, pregnancy ultrasound preparation, diabetes care, appointment bookings, and clinic timings.
          </p>

          {/* Search Box */}
          <div className="faq-search-box-wrap hero-animate-cta">
            <Search size={20} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search for scans, diabetes test prep, timings..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="faq-search-input"
            />
          </div>
        </div>
      </section>

      {/* ── ACCORDION CATEGORIES ────────────────────────── */}
      <section className="faq-content-section section-padding">
        <div className="container">
          <div className="faq-category-blocks">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((cat, cIdx) => (
                <div key={cat.catIdx} className={`faq-cat-group reveal delay-${cIdx + 1}`}>
                  <h2 className="faq-cat-title">{cat.category}</h2>
                  <div className="faq-questions-list">
                    {cat.questions.map((item, qIdx) => {
                      const key = `${cat.catIdx}-${qIdx}`;
                      const isOpen = !!openItems[key];
                      return (
                        <div key={qIdx} className={`faq-row-item ${isOpen ? 'open' : ''}`}>
                          <button 
                            type="button" 
                            className="faq-row-trigger"
                            onClick={() => toggleItem(cat.catIdx, qIdx)}
                          >
                            <span className="q-text">{item.q}</span>
                            <ChevronDown size={18} className={`q-chevron ${isOpen ? 'rotated' : ''}`} />
                          </button>
                          {isOpen && (
                            <div className="faq-row-body">
                              <p>{item.a}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="faq-no-results text-center">
                <p>No answers matched your query "{searchTerm}".</p>
                <button onClick={() => setSearchTerm('')} className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                  Clear Search
                </button>
              </div>
            )}
          </div>

          {/* Still Have Questions? */}
          <div className="faq-help-card premium-card reveal-scale">
            <div className="faq-help-text">
              <h3 className="help-title">Have a Specific Diagnostic Question?</h3>
              <p className="help-sub">
                Our front desk team is happy to assist with scan schedules, preparation guidelines, and doctor consultation slots.
              </p>
            </div>
            <div className="faq-help-actions">
              <Link to="/contact" className="btn btn-teal hero-btn-pulse link-arrow-anim">
                <Phone size={16} />
                <span>Contact Clinic Desk</span>
              </Link>
              <Link to="/book-appointment" className="btn btn-secondary link-arrow-anim">
                <Calendar size={16} />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
