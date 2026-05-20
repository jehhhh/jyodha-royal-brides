import React from 'react';
import { cn } from '../../lib/utils';
import LotusIcon from './LotusIcon';

const ServiceCard = ({ icon, name, description, className }) => {
  return (
    <div className={cn(
      "bg-white shadow-soft rounded-2xl border border-border/50 p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-gold group",
      className
    )}>
      <div className="w-16 h-16 mb-4 text-gold flex items-center justify-center">
        {icon ? icon : <LotusIcon size={40} />}
      </div>
      <h3 className="font-serif text-xl text-brown-dark mb-3">{name}</h3>
      <p className="font-sans text-sm text-brown mb-6 flex-1 line-clamp-2 leading-relaxed">{description}</p>
      <a href="#contact" className="text-gold font-sans text-xs tracking-widest uppercase font-semibold hover:text-gold-dark transition-colors inline-block mt-auto group-hover:translate-x-1 duration-300">
        Learn More &rarr;
      </a>
    </div>
  );
};

export default ServiceCard;
