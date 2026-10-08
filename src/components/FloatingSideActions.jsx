import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import './FloatingSideActions.css';

export default function FloatingSideActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-actions-container">
      {/* WhatsApp Action */}
      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn"
        aria-label="Chat on WhatsApp"
        title="Chat with Reception on WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="floating-tooltip">WhatsApp Help</span>
      </a>

      {/* Call Hotline */}
      <a
        href={`tel:${siteConfig.contact.phoneDeskRaw}`}
        className="floating-btn phone-btn"
        aria-label="Call Reception Desk"
        title="Call 79893 30974"
      >
        <Phone size={22} />
        <span className="floating-tooltip">Call Desk</span>
      </a>

      {/* Scroll to top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="floating-btn top-btn"
          aria-label="Scroll to top of page"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
