import React, { useState, useEffect, useRef } from 'react';

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    if (hasStarted) {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing out function
        const easeOutQuad = progress * (2 - progress);
        setCount(Math.floor(easeOutQuad * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      animationFrame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, ref };
};

const StatItem = ({ end, suffix, label }) => {
  const { count, ref } = useCountUp(end);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-4">
      <div className="font-serif text-5xl md:text-6xl text-cream mb-2 font-bold tracking-tight">
        {count}{suffix}
      </div>
      <div className="font-sans text-cream/90 text-sm md:text-base uppercase tracking-wider font-semibold">
        {label}
      </div>
    </div>
  );
};

const StatsBar = () => {
  return (
    <section className="bg-gold-gradient py-16 relative overflow-hidden">
      {/* Decorative overlays */}
      <div className="absolute inset-0 bg-shimmer opacity-30 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-cream/20">
          <StatItem end={2000} suffix="+" label="Happy Brides" />
          <StatItem end={20} suffix="+" label="Years of Excellence" />
          <StatItem end={4} suffix=".7★" label="Average Rating" />
          <StatItem end={10} suffix="+" label="Expert Artists" />
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
