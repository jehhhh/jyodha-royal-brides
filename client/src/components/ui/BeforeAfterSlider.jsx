import React, { useState, useRef } from 'react';
import { cn } from '../../lib/utils';

const BeforeAfterSlider = ({ beforeImage, afterImage, className }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (event) => {
    setSliderPosition(event.target.value);
  };

  return (
    <div className={cn("relative w-full aspect-[4/5] rounded-xl overflow-hidden select-none", className)}>
      {/* Before Image (Background) */}
      <img src={beforeImage} alt="Before" className="absolute top-0 left-0 w-full h-full object-cover" draggable={false} />
      
      {/* After Image (Clipped) */}
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={afterImage} alt="After" className="absolute top-0 left-0 w-full h-full object-cover" draggable={false} />
      </div>

      {/* Range Slider */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition} 
        onChange={handleSliderChange}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize z-20"
      />

      {/* Custom Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white text-gold rounded-full flex items-center justify-center shadow-lg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="scale-x-[-1] absolute ml-2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-sans z-10 pointer-events-none">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-sans z-10 pointer-events-none">
        After
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
