import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Navbar from '../../components/sections/Navbar';
import HeroSection from '../../components/sections/HeroSection';
import TrustMarquee from '../../components/sections/TrustMarquee';
import ServicesSection from '../../components/sections/ServicesSection';
import PackageSpotlight from '../../components/sections/PackageSpotlight';
import StatsBar from '../../components/sections/StatsBar';
import GalleryPreview from '../../components/sections/GalleryPreview';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import ContactSection from '../../components/sections/ContactSection';
import Footer from '../../components/sections/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-cream text-brown-dark">
      <PageMeta 
        title="Jyodha Royal Brides | Premium Bridal Care in Pune" 
        description="Experience luxury bridal services with Jyodha Royal Brides. We offer HD makeup, pre-bridal skincare, ayurvedic treatments, and holistic guidance for your perfect day."
      />
      
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <TrustMarquee />
        <ServicesSection />
        <PackageSpotlight />
        <StatsBar />
        <GalleryPreview />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
