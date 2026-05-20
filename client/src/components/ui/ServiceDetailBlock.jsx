import React from 'react';
import { cn } from '../../lib/utils';
import GoldButton from './GoldButton';

const ServiceDetailBlock = ({ 
  title, 
  category, 
  description, 
  benefits, 
  image, 
  reverse = false 
}) => {
  return (
    <div className={cn(
      "flex flex-col md:flex-row gap-10 md:gap-16 items-center mb-24 last:mb-0",
      reverse ? "md:flex-row-reverse" : ""
    )}>
      
      {/* Image Side */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-soft group">
          <img 
            src={image} 
            alt={title} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gold/5 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500"></div>
          {/* Fallback pattern if image is missing */}
          <div className="absolute inset-0 bg-cream/40 flex items-center justify-center -z-10 border border-border/50 rounded-2xl">
            <span className="font-serif text-brown opacity-50">Image: {title}</span>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold font-sans text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
          {category}
        </span>
        
        <h3 className="font-serif text-3xl md:text-4xl text-brown-dark mb-4">{title}</h3>
        
        <p className="font-sans text-base text-brown mb-6 leading-relaxed max-w-lg">
          {description}
        </p>
        
        <ul className="space-y-3 mb-8 text-left w-full max-w-lg">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-gold mt-1 text-lg leading-none">✦</span>
              <span className="font-sans text-sm text-brown">{benefit}</span>
            </li>
          ))}
        </ul>

        <GoldButton variant="outlined" href="/contact">
          Book This Service &rarr;
        </GoldButton>
      </div>
      
    </div>
  );
};

export default ServiceDetailBlock;
