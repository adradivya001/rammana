import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import './TrustStrip.css';

export default function TrustStrip() {
  return (
    <section className="trust-strip-wrapper">
      <div className="container">
        <div className="trust-strip-inner">
          <div className="trust-label-box">
            <ShieldCheck size={18} className="trust-shield-icon" />
            <span>CLINICAL PILLARS</span>
          </div>

          <div className="trust-items-row">
            {siteConfig.trustItems.map((item, idx) => (
              <div key={idx} className={`trust-item-pill delay-${idx + 1}`}>
                <span className="trust-dot"></span>
                <span className="trust-item-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
