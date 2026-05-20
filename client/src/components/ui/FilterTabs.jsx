import React from 'react';
import { cn } from '../../lib/utils';

const FilterTabs = ({ categories, activeCategory, onCategoryChange, className }) => {
  return (
    <div className={cn("sticky top-[72px] z-30 bg-cream/95 backdrop-blur-sm shadow-sm py-4 border-b border-border transition-all duration-300", className)}>
      <div className="container mx-auto px-6">
        <div className="flex flex-nowrap overflow-x-auto gap-3 hidden-scrollbar scroll-smooth pb-2 -mb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={cn(
                "whitespace-nowrap px-5 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300 border flex-shrink-0",
                activeCategory === cat.id
                  ? "bg-gold text-white border-gold shadow-gold-sm scale-105"
                  : "bg-transparent text-gold border-gold/50 hover:bg-gold/10"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hidden-scrollbar::-webkit-scrollbar { display: none; }
        .hidden-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default FilterTabs;
