import React from 'react';
import { cn } from '../../lib/utils';
import GoldButton from './GoldButton';

const pricingData = [
  { service: "Whitening Facial", regular: "₹13,800", offer: "₹6,900" },
  { service: "Deep Cleansing", regular: "₹6,300", offer: "₹3,150" },
  { service: "De-Tan / Bleach", regular: "₹3,600", offer: "₹1,800" },
  { service: "Wax — Hand & Leg", regular: "₹4,400", offer: "₹2,200" },
  { service: "Ayurvedic Head Massage", regular: "₹2,700", offer: "₹1,350" },
];

const PricingTable = ({ className }) => {
  return (
    <div className={cn("relative bg-cream rounded-xl border border-gold shadow-gold-sm overflow-hidden", className)}>
      
      {/* Badge matching physical card style */}
      <div className="absolute -top-3 -right-3 md:top-0 md:right-0 md:-translate-y-1/2 md:translate-x-4 bg-red-600 text-white font-sans font-bold text-xs uppercase tracking-wider py-2 px-6 shadow-lg transform rotate-3 z-10 hidden md:block border-2 border-white">
        BIG DISCOUNT 50% OFF
      </div>
      <div className="absolute top-0 right-0 bg-red-600 text-white font-sans font-bold text-[10px] uppercase pt-1 pb-1 px-3 rounded-bl-xl z-10 md:hidden">
        50% OFF
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left font-sans text-sm">
          <thead>
            <tr className="border-b border-gold/50 bg-gold/10">
              <th className="py-4 px-6 font-serif text-lg text-brown-dark font-medium border-r border-gold/20 w-1/2">Service</th>
              <th className="py-4 px-6 font-serif text-lg text-brown-dark font-medium border-r border-gold/20 text-center">Regular Price</th>
              <th className="py-4 px-6 font-serif text-lg text-gold-deep font-bold text-center">Offer Price (50% OFF)</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((row, idx) => (
              <tr key={idx} className="border-b border-gold/20 last:border-none transition-colors hover:bg-gold/5">
                <td className="py-4 px-6 bg-gold/5 font-medium text-brown-dark border-r border-gold/20">{row.service}</td>
                <td className="py-4 px-6 text-brown text-center border-r border-gold/20 line-through decoration-brown/50 decoration-1">{row.regular}</td>
                <td className="py-4 px-6 text-gold-dark font-bold text-center text-base">{row.offer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default PricingTable;
