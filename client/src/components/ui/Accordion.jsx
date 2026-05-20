import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ title, children, defaultOpen = false, className }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("border border-gold/30 rounded-lg bg-white overflow-hidden transition-all duration-300", className)}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-4 bg-cream/50 hover:bg-cream transition-colors text-left"
      >
        <span className="font-serif text-lg text-brown-dark font-medium">{title}</span>
        <ChevronDown 
          size={20} 
          className={cn("text-gold transition-transform duration-300", isOpen ? "rotate-180" : "rotate-0")} 
        />
      </button>
      
      <div 
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 py-5 bg-white font-sans text-sm text-brown leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
