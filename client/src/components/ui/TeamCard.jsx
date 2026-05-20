import React from 'react';
import { cn } from '../../lib/utils';

const TeamCard = ({ photo, name, role, experience, className }) => {
  return (
    <div className={cn("flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-soft group transition-transform duration-300 hover:-translate-y-2", className)}>
      <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-gold/20 group-hover:border-gold transition-colors duration-300 mb-5 relative">
        <img 
          src={photo} 
          alt={name}
          loading="lazy"
          decoding="async" 
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        {/* Fallback pattern */}
        <div className="absolute inset-0 bg-cream flex items-center justify-center -z-10 text-brown font-serif text-xl">
           {name.charAt(0)}
        </div>
      </div>
      
      <h4 className="font-serif text-xl text-brown-dark mb-1">{name}</h4>
      <p className="font-sans text-sm font-semibold text-gold uppercase tracking-wider mb-2">{role}</p>
      
      <div className="w-10 h-0.5 bg-gold/30 mb-3 block"></div>
      
      <p className="font-sans text-xs text-brown">{experience} yrs experience</p>
    </div>
  );
};

export default TeamCard;
