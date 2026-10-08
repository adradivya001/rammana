import React, { useState } from 'react';
import Hero from '../components/Hero';
import SpecialtySelector from '../components/SpecialtySelector';
import AboutTrust from '../components/AboutTrust';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import Facility from '../components/Facility';
import WhyVasundharaReviews from '../components/WhyVasundharaReviews';
import BookAppointmentSection from '../components/BookAppointmentSection';
import AppointmentModal from '../components/AppointmentModal';
import './Home.css';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home-page-container">
      {/* 01. CINEMATIC HERO SECTION */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* 02. IMMERSIVE CARE SHOWCASE */}
      <SpecialtySelector />

      {/* 03. EDITORIAL ABOUT STORY */}
      <AboutTrust />

      {/* 04. INTERACTIVE SERVICES SHOWCASE */}
      <Services />

      {/* 05. CARE TEAM STORY (DOCTORS HIERARCHY) */}
      <Doctors onOpenBooking={handleOpenBooking} />

      {/* 06. FACILITY STORYTELLING (PANORAMIC CLINIC & JOURNEY) */}
      <Facility />

      {/* 07. PATIENT EXPERIENCE (FEATURED TESTIMONIAL) */}
      <WhyVasundharaReviews />

      {/* 08. CINEMATIC FINAL CTA BANNER */}
      <BookAppointmentSection onOpenBooking={handleOpenBooking} />

      {/* APPOINTMENT BOOKING MODAL */}
      <AppointmentModal isOpen={isModalOpen} onClose={handleCloseBooking} />
    </div>
  );
}
