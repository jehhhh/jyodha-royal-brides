import React from 'react';

const marqueeItems = [
  "Award-Winning Bridal Studio",
  "2000+ Happy Brides",
  "Premium Beauty Products",
  "HD Makeup Artists",
  "Jewellery & Accessories",
  "Ayurvedic Treatments",
  "Bridal Counselling",
  "Saree Draping Experts"
];

const TrustMarquee = () => {
  // Duplicate items to ensure a seamless infinite scroll loop
  const loopItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full bg-gold py-3 overflow-hidden flex whitespace-nowrap group">
      <div className="flex animate-ticker group-hover:[animation-play-state:paused] w-max">
        {loopItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="text-cream font-sans text-sm font-medium mx-6">
              ★ {item}
            </span>
            {index !== loopItems.length - 1 && (
              <span className="text-cream/60 font-sans text-sm mx-2">·</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TrustMarquee;
