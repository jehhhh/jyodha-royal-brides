import React, { useRef, useEffect, useCallback, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import GoldButton from '../ui/GoldButton';
import { 
  Brush, Droplets, Scissors, Flower2, Sparkles, Feather, 
  CheckCircle, Gem, Crown, Star, Apple, Wind, MessageCircle,
  ChevronLeft, ChevronRight
} from 'lucide-react';

const servicesList = [
  { id: 1, name: "Bridal HD Makeup", desc: "Hollywood-finish, camera-ready looks for your biggest day", Icon: Brush,
    gradient: "from-[#F9E4D4] to-[#F5D0B5]", accent: "#C4836A" },
  { id: 2, name: "Pre-Bridal Skincare", desc: "Customised skin prep for a luminous, natural glow", Icon: Droplets,
    gradient: "from-[#E8E0F0] to-[#D8CCE8]", accent: "#9B7DB8" },
  { id: 3, name: "Hair Styling & Treatment", desc: "Elegant updos, cascading waves & deep treatments", Icon: Scissors,
    gradient: "from-[#F5E6D3] to-[#EDD5B8]", accent: "#B8935A" },
  { id: 4, name: "Spa & Body Wellness", desc: "Full body rituals for deep relaxation & radiance", Icon: Flower2,
    gradient: "from-[#D9EDE4] to-[#C2DED2]", accent: "#6B9E85" },
  { id: 5, name: "Gold Facial & Bleach", desc: "Luxurious 24K gold formulas for ethereal skin", Icon: Sparkles,
    gradient: "from-[#F7EDDA] to-[#F0DFC0]", accent: "#C9973B" },
  { id: 6, name: "Ayurvedic Head Massage", desc: "Traditional scalp wellness rooted in ancient wisdom", Icon: Feather,
    gradient: "from-[#F0E4D8] to-[#E4D4C2]", accent: "#A07850" },
  { id: 7, name: "Waxing & Grooming", desc: "Smooth, flawless finish from head to toe", Icon: CheckCircle,
    gradient: "from-[#FCE4EC] to-[#F8C8D8]", accent: "#C06080" },
  { id: 8, name: "Bridal Jewellery", desc: "Hand-curated sets to complement every outfit", Icon: Gem,
    gradient: "from-[#FFF3E0] to-[#FFE0B2]", accent: "#D4A04A" },
  { id: 9, name: "Flower Accessories", desc: "Fresh floral hairpieces crafted for brides", Icon: Crown,
    gradient: "from-[#FCE4EC] to-[#F3D4DE]", accent: "#D4728C" },
  { id: 10, name: "Saree Draping", desc: "Expert draping in every regional style", Icon: Star,
    gradient: "from-[#FFF8E1] to-[#FFEEB8]", accent: "#C8A830" },
  { id: 11, name: "Diet & Nutrition", desc: "Glow-from-within bridal nutrition plans", Icon: Apple,
    gradient: "from-[#E8F5E9] to-[#C8E6C9]", accent: "#5C9B62" },
  { id: 12, name: "Yoga & Pranayam", desc: "Find inner calm & radiance before the big day", Icon: Wind,
    gradient: "from-[#E0F0F8] to-[#C8E0F0]", accent: "#5A90B0" },
  { id: 13, name: "Bridal Counselling", desc: "Compassionate pre & post-marriage guidance", Icon: MessageCircle,
    gradient: "from-[#F3E5F5] to-[#E1BEE7]", accent: "#9C6CB0" },
];

const ServicesSection = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollTimer = useRef(null);
  const resumeTimer = useRef(null);

  const scroll = useCallback((direction) => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      const scrollAmount = 300;

      if (direction === 'right') {
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 50) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      } else {
        el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  }, []);

  // Auto-scroll every 2.5 seconds
  useEffect(() => {
    autoScrollTimer.current = setInterval(() => {
      if (!isPaused) {
        scroll('right');
      }
    }, 2500);

    return () => clearInterval(autoScrollTimer.current);
  }, [isPaused, scroll]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    clearTimeout(resumeTimer.current);
  };

  const handleMouseLeave = () => {
    resumeTimer.current = setTimeout(() => setIsPaused(false), 3000);
  };

  // Also handle touch for mobile
  const handleTouchStart = () => {
    setIsPaused(true);
    clearTimeout(resumeTimer.current);
  };

  const handleTouchEnd = () => {
    resumeTimer.current = setTimeout(() => setIsPaused(false), 4000);
  };

  const handleManualScroll = (direction) => {
    setIsPaused(true);
    scroll(direction);
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsPaused(false), 4000);
  };

  return (
    <section id="services" className="py-14 md:py-20 bg-cream relative">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionTitle 
          script="What We Offer" 
          title="Everything For Your Perfect Day" 
          subtitle="From radiant skin to the perfect drape — we handle every detail." 
          centered 
          className="mb-10 md:mb-14"
        />
      </div>

      {/* Carousel Navigation */}
      <div className="container mx-auto px-6 md:px-8 max-w-7xl flex justify-end gap-3 mb-5">
        <button 
          onClick={() => handleManualScroll('left')}
          className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300 hover:shadow-gold-sm"
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} strokeWidth={1.5} />
        </button>
        <button 
          onClick={() => handleManualScroll('right')}
          className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300 hover:shadow-gold-sm"
          aria-label="Scroll right"
        >
          <ChevronRight size={18} strokeWidth={1.5} />
        </button>
      </div>

      {/* Horizontal Scroll Carousel */}
      <div 
        ref={scrollRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex gap-4 md:gap-5 overflow-x-auto pb-4 px-6 md:px-8 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {/* Left spacer */}
        <div className="flex-shrink-0 w-0 lg:w-[calc((100vw-80rem)/2)]" />

        {servicesList.map((service) => {
          const IconComponent = service.Icon;
          return (
            <a
              key={service.id}
              href="#contact"
              className={`group flex-shrink-0 w-[220px] md:w-[260px] snap-start rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl bg-gradient-to-br ${service.gradient}`}
            >
              <div className="p-5 md:p-7 h-full flex flex-col">
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: `${service.accent}15`, border: `1px solid ${service.accent}30` }}
                >
                  <IconComponent className="w-5 h-5" style={{ color: service.accent }} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg md:text-xl text-brown-dark mb-2 leading-tight">
                  {service.name}
                </h3>

                {/* Line */}
                <div className="w-8 h-px mb-3 transition-all duration-500 group-hover:w-14" style={{ backgroundColor: `${service.accent}40` }} />

                {/* Description */}
                <p className="font-sans text-xs text-brown/55 leading-relaxed flex-1">
                  {service.desc}
                </p>

                {/* Hover CTA */}
                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-sans text-[10px] tracking-[0.15em] uppercase font-semibold" style={{ color: service.accent }}>Enquire</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={service.accent} strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </div>
            </a>
          );
        })}

        {/* Right spacer */}
        <div className="flex-shrink-0 w-4 lg:w-[calc((100vw-80rem)/2)]" />
      </div>

      {/* Bottom CTA */}
      <div className="flex justify-center mt-10 px-6">
        <GoldButton variant="filled" size="lg" shimmer href="#contact">
          Book Your Bridal Consultation
        </GoldButton>
      </div>
    </section>
  );
};

export default ServicesSection;
