import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import SectionTitle from '../ui/SectionTitle';
import GoldButton from '../ui/GoldButton';
import bridalImages from '../../lib/bridalImages.json';

// Shuffle the array and pick 6 images
const shuffled = [...bridalImages].sort(() => 0.5 - Math.random());
const selectedImages = shuffled.slice(0, 6);

const galleryItems = [
  { id: 1, src: `/assets/gallery/bridal-makeup/${selectedImages[0]}`, alt: "Bridal HD Makeup 1" },
  { id: 2, src: `/assets/gallery/bridal-makeup/${selectedImages[1]}`, alt: "Bridal Hairstyling 1" },
  { id: 3, src: `/assets/gallery/bridal-makeup/${selectedImages[2]}`, alt: "Bridal Spa 1" },
  { id: 4, src: `/assets/gallery/bridal-makeup/${selectedImages[3]}`, alt: "Bridal HD Makeup 2" },
  { id: 5, src: `/assets/gallery/bridal-makeup/${selectedImages[4]}`, alt: "Bridal Hairstyling 2" },
  { id: 6, src: `/assets/gallery/bridal-makeup/${selectedImages[5]}`, alt: "Bridal Spa 2" },
];

const GalleryPreview = () => {
  const [index, setIndex] = useState(-1);
  const slides = galleryItems.map(item => ({ src: item.src, alt: item.alt }));

  return (
    <section id="gallery" className="section-padding bg-cream">
      <div className="container mx-auto">
        <SectionTitle 
          script="Our Work" 
          title="Real Brides. Real Transformations." 
          centered 
          className="mb-10 md:mb-16"
        />

        {/* Masonry-style Grid - using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mb-12">
          {galleryItems.map((item, idx) => (
            <div 
              key={item.id} 
              className="relative rounded-xl overflow-hidden group cursor-pointer break-inside-avoid"
              onClick={() => setIndex(idx)}
            >
              {/* Force an aspect ratio placeholder if image not found to show the grid working */}
              <div className="w-full bg-border/20" style={{ aspectRatio: idx % 2 === 0 ? '3/4' : '4/3' }}>
                <img 
                  src={item.src} 
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'; // Hide broken image so fallback colored div shows
                  }}
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gold/40 shadow-[inset_0_0_80px_rgba(0,0,0,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-white/60 bg-white/20 backdrop-blur-sm shadow-gold flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:mt-12">
          <GoldButton variant="outlined" size="lg" href="/gallery">
            View Full Gallery
          </GoldButton>
        </div>

        {/* Lightbox Component */}
        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </div>
    </section>
  );
};

export default GalleryPreview;
