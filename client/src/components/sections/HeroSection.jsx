import React from 'react';
import GoldButton from '../ui/GoldButton';
import GoldDivider from '../ui/GoldDivider';
import LotusIcon from '../ui/LotusIcon';
import bridalImages from '../../lib/bridalImages.json';

const HeroSection = () => {
  const randomHeroImage = React.useMemo(() => `/assets/gallery/bridal-makeup/${bridalImages[Math.floor(Math.random() * bridalImages.length)]}`, []);
  
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-cream">
      
      {/* Image Panel (Top on Mobile, Right on Desktop) */}
      <div className="relative w-full h-[50vh] md:h-screen md:absolute md:right-0 md:top-0 md:w-[55%] z-0">
        <img 
          src={randomHeroImage} 
          alt="Royal Indian Bride" 
          fetchpriority="high"
          className="w-full h-full object-cover object-[center_15%] md:object-[center_30%]"
        />
        
        {/* Mobile Gradient Blending (Fades image into the cream background below) */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent md:hidden" />
        
        {/* Desktop Gradient Blending (Left to Cream) */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-cream to-transparent" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-cream/30 via-transparent to-cream/20" />
        
        {/* Watermark (Desktop Only) */}
        <div className="hidden md:block absolute -bottom-20 -right-20 opacity-[0.07] pointer-events-none transform -rotate-12">
          <LotusIcon size={400} />
        </div>
      </div>

      {/* Content Panel (Bottom on Mobile, Left on Desktop) */}
      <div className="relative z-10 w-full md:w-[45%] flex flex-col justify-start md:justify-center items-center md:items-start px-6 pt-0 pb-16 md:py-16 md:px-12 lg:px-20 text-center md:text-left bg-transparent md:bg-cream min-h-[50vh] md:min-h-screen">
        <span className="font-script text-3xl md:text-4xl text-gold mb-2 md:mb-3 animate-fade-up mt-4 md:mt-0">
          Welcome to
        </span>
        
        <h1 className="font-serif text-4xl sm:text-4xl md:text-6xl text-brown-dark leading-tight mb-4 md:mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
          Your <span className="text-gold-shimmer font-semibold">Royal</span> Bridal Journey Begins Here
        </h1>
        
        <p className="font-sans text-base md:text-xl text-brown/80 mb-6 md:mb-8 max-w-md animate-fade-up" style={{ animationDelay: '200ms' }}>
          Premium bridal care — skin, hair, makeup & more
        </p>
        
        <div className="mb-6 md:mb-10 animate-fade-up w-full md:w-auto flex justify-center md:justify-start" style={{ animationDelay: '300ms' }}>
          <GoldDivider className="self-center md:self-start w-24 md:w-32" />
        </div>
        
        <div className="flex flex-row gap-3 mb-6 md:mb-8 w-full sm:w-auto animate-fade-up" style={{ animationDelay: '400ms' }}>
          <GoldButton variant="filled" size="md" href="#packages" className="flex-1 sm:flex-none shadow-gold hover:shadow-gold-lg hover:scale-[1.02] transition-all duration-300 text-sm md:text-base">
            Explore Packages
          </GoldButton>
          <GoldButton variant="outlined" size="md" href="#gallery" className="flex-1 sm:flex-none bg-white hover:bg-cream hover:scale-[1.02] transition-all duration-300 text-sm md:text-base">
            View Gallery
          </GoldButton>
        </div>
        
        <div className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-4 py-2.5 rounded-full border border-gold/40 bg-white/50 md:bg-cream shadow-gold-sm animate-fade-up" style={{ animationDelay: '500ms' }}>
          <span className="text-gold text-sm">⭐</span>
          <span className="font-sans text-xs md:text-sm font-semibold text-brown-dark">Limited: 50% OFF on 6-Month Bridal Package</span>
        </div>
      </div>

      {/* Bottom Scalloped Waves and Scroll Indicator */}
      <div className="absolute bottom-0 w-full left-0 z-20 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-8 md:h-20 fill-gold" style={{ opacity: 0.08 }}>
          <path d="M0,50 C120,80 240,20 360,50 C480,80 600,20 720,50 C840,80 960,20 1080,50 C1200,80 1320,20 1440,50 L1440,100 L0,100 Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-8 md:h-16 fill-cream absolute bottom-0">
          <path d="M0,50 C120,80 240,20 360,50 C480,80 600,20 720,50 C840,80 960,20 1080,50 C1200,80 1320,20 1440,50 L1440,100 L0,100 Z" />
        </svg>

        {/* Bouncing Arrow — hidden on mobile */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex-col items-center hidden md:flex">
          <span className="text-[10px] text-brown/60 uppercase tracking-widest font-bold mb-2">Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold stroke-2 flex-shrink-0">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
