import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingSideActions from './components/FloatingSideActions';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import FetalMedicine from './pages/FetalMedicine';
import DiabetesCare from './pages/DiabetesCare';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Doctors from './pages/Doctors';
import PatientGuide from './pages/PatientGuide';
import Reviews from './pages/Reviews';
import Gallery from './pages/Gallery';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';

export default function App() {
  return (
    <div className="app-layout-wrapper">
      <ScrollToTop />
      <Navbar />
      <main className="main-content-region">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fetal-medicine" element={<FetalMedicine />} />
          <Route path="/diabetes-care" element={<DiabetesCare />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patient-guide" element={<PatientGuide />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <FloatingSideActions />
    </div>
  );
}
