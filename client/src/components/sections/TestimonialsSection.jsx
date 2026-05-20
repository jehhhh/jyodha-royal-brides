import React, { useState, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsList = [
  {
    id: 1,
    name: "Priya Sharma",
    service: "Gold Package",
    quote: "Jyodha made me feel like an actual queen. The HD makeup stayed flawless for 12 hours..."
  },
  {
    id: 2,
    name: "Ananya Desai",
    service: "Pre-Bridal Skincare",
    quote: "My skin glowed on my wedding day like never before. The gold facial is magic..."
  },
  {
    id: 3,
    name: "Meera Kulkarni",
    service: "Bridal Guidance",
    quote: "The pre-marriage counselling was unexpected but so valuable. Truly a complete package..."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotating carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsList.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-padding bg-cream overflow-hidden">
      <div className="container mx-auto">
        <SectionTitle 
          script="Heard From Our Brides" 
          title="Words That Warm Our Hearts" 
          centered 
          className="mb-10 md:mb-16"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel Track */}
          <div className="relative h-[320px] sm:h-[340px] md:h-[320px] lg:h-[350px]">
            {testimonialsList.map((test, index) => {
              // Determine class based on position relative to current index
              let positionClass = "opacity-0 translate-x-32 scale-95 pointer-events-none z-0";
              
              if (index === currentIndex) {
                positionClass = "opacity-100 translate-x-0 scale-100 z-20";
              } else if (index === (currentIndex - 1 + testimonialsList.length) % testimonialsList.length) {
                positionClass = "opacity-0 -translate-x-32 scale-95 pointer-events-none z-0 hidden md:block";
              }

              return (
                <div 
                  key={test.id} 
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${positionClass}`}
                >
                  <TestimonialCard 
                    name={test.name}
                    service={test.service}
                    quote={test.quote}
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-cream transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {testimonialsList.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-gold w-8" : "bg-gold/30 hover:bg-gold/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-cream transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
