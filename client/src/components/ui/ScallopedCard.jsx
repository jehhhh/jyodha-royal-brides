import React from 'react';
import { cn } from '../../lib/utils';

const ScallopedCard = ({ children, className, scallop = 'both' }) => {
  // We'll use radial-gradient masks to create the scalloped effect
  const maskStyles = {
    top: {
      WebkitMaskImage: 'radial-gradient(circle at 10px 0, transparent 10px, black 11px)',
      WebkitMaskSize: '20px 100%',
      WebkitMaskPosition: '0 0',
      WebkitMaskRepeat: 'repeat-x',
      maskImage: 'radial-gradient(circle at 10px 0, transparent 10px, black 11px)',
      maskSize: '20px 100%',
      maskPosition: '0 0',
      maskRepeat: 'repeat-x',
    },
    bottom: {
      WebkitMaskImage: 'radial-gradient(circle at 10px 100%, transparent 10px, black 11px)',
      WebkitMaskSize: '20px 100%',
      WebkitMaskPosition: '0 0',
      WebkitMaskRepeat: 'repeat-x',
      maskImage: 'radial-gradient(circle at 10px 100%, transparent 10px, black 11px)',
      maskSize: '20px 100%',
      maskPosition: '0 0',
      maskRepeat: 'repeat-x',
    },
    both: {
      WebkitMaskImage: 'radial-gradient(circle at 10px 0, transparent 10px, black 11px), radial-gradient(circle at 10px 100%, transparent 10px, black 11px)',
      WebkitMaskSize: '20px 51%',
      WebkitMaskPosition: '0 0, 0 100%',
      WebkitMaskRepeat: 'repeat-x, repeat-x',
      maskImage: 'radial-gradient(circle at 10px 0, transparent 10px, black 11px), radial-gradient(circle at 10px 100%, transparent 10px, black 11px)',
      maskSize: '20px 51%',
      maskPosition: '0 0, 0 100%',
      maskRepeat: 'repeat-x, repeat-x',
    }
  };

  return (
    <div 
      className={cn("bg-white shadow-soft rounded-sm p-8 relative overflow-hidden", className)}
      style={maskStyles[scallop]}
    >
      {/* Visual top border fallback or decoration */}
      {(scallop === 'top' || scallop === 'both') && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />
      )}
      {children}
      {/* Visual bottom border fallback or decoration */}
      {(scallop === 'bottom' || scallop === 'both') && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient" />
      )}
    </div>
  );
};

export default ScallopedCard;
