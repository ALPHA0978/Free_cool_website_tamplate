/**
 * Software Development Website Template
 * 
 * A modern, responsive React website template for software development agencies.
 * Built with React 19, Vite, Tailwind CSS, and Framer Motion.
 * 
 * Features:
 * - Responsive design with mobile-first approach
 * - Dark/Light mode support with system preference detection
 * - Smooth animations and transitions
 * - SEO optimized structure
 * - Modular component architecture
 * 
 * @author Manish Raj
 * @version 1.0.0
 * @license MIT
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";

// Home page components
import HeroSection from "./components/sections/HeroSection";
import ProofSection from "./components/sections/ProofSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import PricingSection from "./components/sections/PricingSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";

// Individual pages
import WebDevelopment from "./pages/WebDevelopment";
import MobileApps from "./pages/MobileApps";
import CloudSolutions from "./pages/CloudSolutions";
import Consulting from "./pages/Consulting";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Demo from "./pages/Demo";

// Home page component
function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ProofSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/mobile-apps" element={<MobileApps />} />
            <Route path="/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;