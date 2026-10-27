import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesBento } from './components/ServicesBento';
import { CaseStudies } from './components/CaseStudies';
import { QuoteBuilder } from './components/QuoteBuilder';
import { Testimonials } from './components/Testimonials';
import { AboutFounder } from './components/AboutFounder';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('twin_athena_theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Complete Growth Suite');
  const [quoteEstimateForContact, setQuoteEstimateForContact] = useState<number | undefined>(2450);
  const [quoteDetailsForContact, setQuoteDetailsForContact] = useState<string>('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('twin_athena_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('twin_athena_theme', 'light');
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenQuote = () => {
    const pricingEl = document.getElementById('pricing');
    pricingEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectQuoteForContact = (
    packageTitle: string,
    totalEstimate: number,
    details: string
  ) => {
    setSelectedServiceForContact(packageTitle);
    setQuoteEstimateForContact(totalEstimate);
    setQuoteDetailsForContact(details);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 selection:bg-emerald-500/20 selection:text-emerald-500 font-sans antialiased transition-colors duration-200">
      {/* Top Bar Contract Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenContact={handleOpenContact}
      />

      <main>
        {/* Split Screen Hero with Interactive WhatsApp Simulator */}
        <Hero onOpenQuote={handleOpenQuote} onOpenContact={handleOpenContact} />

        {/* Asymmetric Capabilities & Architecture Bento */}
        <ServicesBento onOpenQuote={handleOpenQuote} />

        {/* Selected Quantified Case Studies & Lightbox Modal */}
        <CaseStudies onOpenQuote={handleOpenQuote} />

        {/* Transparent Service Packages & Interactive Quote Estimator */}
        <QuoteBuilder onSelectForContact={handleSelectQuoteForContact} />

        {/* Verified Small Business Testimonials */}
        <Testimonials />

        {/* Studio & Founder Spotlight */}
        <AboutFounder onOpenContact={handleOpenContact} />

        {/* Common Questions Accordion */}
        <FAQ />

        {/* Direct Contact & Lead Intake */}
        <ContactSection
          initialServiceInterest={selectedServiceForContact}
          initialEstimate={quoteEstimateForContact}
          initialDetails={quoteDetailsForContact}
        />
      </main>

      {/* Quiet Editorial Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Speed-Dial */}
      <FloatingWhatsApp />
    </div>
  );
}
