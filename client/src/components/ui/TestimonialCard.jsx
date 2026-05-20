import React from 'react';
import { cn } from '../../lib/utils';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ name, service, quote, className }) => {
  return (
    <div className={cn(
      "bg-white shadow-soft rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col items-center text-center h-full border border-gold/10 relative overflow-hidden group hover:shadow-gold-sm transition-all duration-700",
      className
    )}>
      {/* Decorative Quote Marks */}
      <div className="absolute top-6 left-6 md:top-8 md:left-10 text-gold/10 group-hover:text-gold/20 transition-colors duration-700">
        <Quote size={64} className="rotate-180" />
      </div>
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-10 text-gold/10 group-hover:text-gold/20 transition-colors duration-700">
        <Quote size={64} />
      </div>
      
      {/* Stars */}
      <div className="flex text-gold mb-8 gap-1.5 relative z-10">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} size={22} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      
      {/* Quote */}
      <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-brown-dark leading-relaxed flex-1 mb-8 relative z-10 max-w-3xl mx-auto px-4 md:px-8">
        "{quote}"
      </p>
      
      {/* Divider */}
      <div className="w-16 h-px bg-gold/50 mb-6 relative z-10"></div>
      
      {/* Author */}
      <div className="relative z-10 mt-auto">
        <h4 className="font-serif text-2xl text-brown-dark mb-1">{name}</h4>
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold font-semibold">{service}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
