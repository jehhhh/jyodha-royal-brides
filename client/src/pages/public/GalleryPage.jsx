import React, { useState } from 'react';
import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import GoldButton from '../../components/ui/GoldButton';
import PageMeta from '../../components/ui/PageMeta';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import bridalImages from '../../lib/bridalImages.json';

const shuffledPage = [...bridalImages].sort(() => 0.5 - Math.random());
const selectedPageImages = shuffledPage.slice(0, 24);

const mockGallery = selectedPageImages.map((img, idx) => ({
  id: idx + 1,
  src: `/assets/gallery/bridal-makeup/${img}`,
  alt: `Gallery Photo ${idx + 1}`
}));

const GalleryPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const slides = mockGallery.map(img => ({ src: img.src, alt: img.alt }));

  return (
    <div className="min-h-screen flex flex-col font-sans bg-cream text-brown-dark">
      <PageMeta title="Gallery | Jyodha Royal Brides" description="View our portfolio of beautiful brides." />
      <Navbar />

      <main className="flex-1 mt-[72px]">
        {/* Hero */}
        <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center pt-10">
          <div className="absolute inset-0 z-0">
            <img src="/assets/backgrounds/gallery-hero.webp" alt="Gallery Hero" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <div className="absolute inset-0 bg-brown-dark/70"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-4 animate-fade-up">Our Portfolio</h1>
            <div className="font-sans text-sm text-cream/70 tracking-wider uppercase animate-fade-up" style={{ animationDelay: '100ms' }}>
              <a href="/" className="hover:text-gold transition-colors">Home</a> <span className="mx-2">/</span> Gallery
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <section className="section-padding bg-cream min-h-[50vh] pt-12">
          <div className="container mx-auto max-w-7xl">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {mockGallery.map((item, idx) => (
                <div 
                  key={item.id} 
                  className="relative rounded-xl overflow-hidden group cursor-pointer break-inside-avoid shadow-sm hover:shadow-gold transition-shadow duration-300 transform translate-z-0"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <div className="w-full bg-border/20" style={{ aspectRatio: idx % 3 === 0 ? '3/4' : '4/3' }}>
                    <img 
                      src={item.src} 
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gold/40 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-12 h-12 rounded-full border border-white/60 bg-white/20 backdrop-blur-sm shadow-gold flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <GoldButton variant="outlined" size="lg">Load More Photos</GoldButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Lightbox
        index={lightboxIndex}
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={slides}
      />
    </div>
  );
};

export default GalleryPage;
