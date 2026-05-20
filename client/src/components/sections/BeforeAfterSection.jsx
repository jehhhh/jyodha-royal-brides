import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';

const pairs = [
  { id: 1, before: "/assets/before-after/ba-1-before.webp", after: "/assets/before-after/ba-1-after.webp" },
  { id: 2, before: "/assets/before-after/ba-2-before.webp", after: "/assets/before-after/ba-2-after.webp" },
  { id: 3, before: "/assets/before-after/ba-3-before.webp", after: "/assets/before-after/ba-3-after.webp" },
  { id: 4, before: "/assets/before-after/ba-4-before.webp", after: "/assets/before-after/ba-4-after.webp" },
];

const BeforeAfterSection = () => {
  return (
    <section className="section-padding bg-blush">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle 
          script="The Jyodha Transformation" 
          title="See the Difference" 
          centered 
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pl-4 pr-4">
          {pairs.map((pair) => (
            <div key={pair.id} className="relative shadow-gold-lg rounded-xl overflow-hidden group">
              {/* Slider Component */}
              <BeforeAfterSlider 
                beforeImage={pair.before} 
                afterImage={pair.after} 
              />
              
              {/* Optional Placeholder for missing images to maintain bounds during dev */}
              <div className="absolute inset-0 bg-cream/50 pointer-events-none -z-10 flex flex-col items-center justify-center text-brown font-serif border border-border/50 rounded-xl">
                 <p className="opacity-40">Add images to /assets/before-after/</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
