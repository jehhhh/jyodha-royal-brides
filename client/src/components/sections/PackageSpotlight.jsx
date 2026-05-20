import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import GoldButton from '../ui/GoldButton';
import ScallopedCard from '../ui/ScallopedCard';
import GoldDivider from '../ui/GoldDivider';
import { Check, Info } from 'lucide-react';
import { cn } from '../../lib/utils';

const packages = [
  {
    name: "Platinum Package",
    price: "₹1,04,000",
    subtitle: "Free trial makeup (Only for Bridal)",
    features: [
      "4 HD Makeup (Air brush)",
      "3 pre face settings",
      "2 pre Aroma body spa settings",
      "International brand face bleach",
      "CASMARA facial",
      "Full body whitening bleach",
      "Full body Rika wax",
      "Full body spa with polishing",
    ],
    touchUp: "₹10,000",
    footer: "Hairstyle, Saree Draping, Jewellery included with all types of makeup"
  },
  {
    name: "Gold Package",
    price: "₹77,000",
    subtitle: "Free trial makeup (Only for bridal)",
    features: [
      "3 HD Makeup",
      "3 pre face settings",
      "2 pre hand settings",
      "Gold face bleach",
      "Gold facial",
      "Full body gold bleach",
      "Full body gold wax",
      "Full body spa with polishing",
    ],
    touchUp: "₹7,700",
    footer: "Hairstyling, Saree Draping, Jewellery included with all types of makeup",
    isPopular: true
  },
  {
    name: "Pearl Package",
    price: "₹50,000",
    subtitle: "Only for bridal",
    features: [
      "2 HD Makeup (air brush)",
      "3 pre settings",
      "Pearl face bleach",
      "Pearl facial",
      "Full body bleach",
      "Full body wax",
      "Full body spa with polishing",
    ],
    touchUp: "₹5,000",
    footer: "Hair styling, Saree Draping, Jewellery included with all makeup"
  },
  {
    name: "Silver Package",
    price: "₹25,000",
    subtitle: "Free trial makeup (Only for bridal)",
    features: [
      "2 HD Makeup",
      "2 pre settings",
      "Silver face bleach",
      "Silver facial",
      "Full body bleach",
      "Full body wax",
      "Full body spa",
    ],
    touchUp: "₹2,500",
    footer: "Hair styling, Saree Draping, Jewellery included with all makeup"
  }
];

const trackPackageIntent = (packageName) => {
  if (typeof window !== 'undefined') {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'intent_package', package_name: packageName });
    }
    if (window.fbq) {
      window.fbq('trackCustom', 'PackageIntent', { package_name: packageName });
    }
  }
};

const PackageSpotlight = () => {
  return (
    <section id="packages" className="section-padding bg-blush">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          script="Curated For You" 
          title="Bridal Packages" 
          subtitle="Choose the perfect care and styling package for your special day." 
          centered 
          className="mb-10 md:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-12 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <ScallopedCard 
              key={idx} 
              className={cn(
                "w-full bg-white relative flex flex-col h-full",
                pkg.isPopular ? "border-2 border-gold shadow-gold-lg lg:scale-105 z-10" : "border border-border/50 shadow-soft mt-0"
              )}
              scallop="bottom"
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-0 w-full flex justify-center z-10">
                  <span className="bg-gold-gradient text-white text-xs font-bold tracking-widest px-6 py-2 rounded-b-xl shadow-gold-sm">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className={cn("text-center mb-6 flex-grow-0", pkg.isPopular ? "pt-10" : "pt-4")}>
                <h3 className="font-serif text-2xl md:text-3xl text-brown-dark mb-2">{pkg.name}</h3>
                <div className="font-serif text-3xl md:text-4xl text-gold mb-2">{pkg.price}</div>
                {pkg.subtitle && (
                  <p className="text-sm font-sans text-brown/70 h-8">{pkg.subtitle}</p>
                )}
              </div>

              <GoldDivider className="mb-8 w-3/4 mx-auto" />

              <div className="flex-grow">
                <ul className="space-y-4 mb-8 px-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm font-sans text-brown">
                      <div className="mt-0.5 flex-shrink-0 text-gold bg-gold/10 p-1 rounded-full">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-border/50 flex flex-col items-center">
                <div className="bg-blush/50 w-full p-4 rounded-lg mb-4 text-center border border-gold/10">
                  <span className="font-sans font-bold text-brown block text-sm mb-1 uppercase tracking-wide">Per Touch Up</span>
                  <span className="font-serif text-gold text-2xl">{pkg.touchUp}</span>
                </div>
                <p className="text-xs text-brown/80 text-center mb-6 px-2 h-10 flex items-center justify-center font-medium">
                  {pkg.footer}
                </p>
                <GoldButton variant={pkg.isPopular ? "filled" : "outlined"} size="lg" className="w-full" href="#contact" onClick={() => trackPackageIntent(pkg.name)}>
                  Enquire About {pkg.name.split(' ')[0]}
                </GoldButton>
              </div>
            </ScallopedCard>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="mt-14 md:mt-20 max-w-4xl mx-auto text-center bg-white border border-gold/30 rounded-2xl p-6 md:p-12 shadow-gold-sm relative overflow-hidden group hover:shadow-gold-lg transition-all duration-500">
          <div className="absolute -left-16 -top-16 w-64 h-64 bg-[radial-gradient(circle,_rgba(212,175,55,0.15)_0%,_transparent_70%)] group-hover:bg-[radial-gradient(circle,_rgba(212,175,55,0.25)_0%,_transparent_70%)] transition-all duration-500 rounded-full" />
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[radial-gradient(circle,_rgba(212,175,55,0.15)_0%,_transparent_70%)] group-hover:bg-[radial-gradient(circle,_rgba(212,175,55,0.25)_0%,_transparent_70%)] transition-all duration-500 rounded-full" />
          
          <div className="relative z-10">
            <h3 className="font-script text-4xl text-gold mb-3">Looking for something else?</h3>
            <h4 className="font-serif text-2xl md:text-3xl text-brown-dark mb-4">Customisable Bridal Packages</h4>
            <p className="text-brown/80 font-sans max-w-2xl mx-auto mb-8 leading-relaxed">
              We understand that every bride is unique. That's why we offer fully customisable packages tailored specifically to your exact needs, preferences, and budget. Let us design the perfect bridal care regimen just for you.
            </p>
            <GoldButton variant="filled" shimmer size="lg" href="#contact" onClick={() => trackPackageIntent('Custom Package')}>
              Create My Custom Package
            </GoldButton>
          </div>
        </div>

        <div className="mt-10 md:mt-16 max-w-4xl mx-auto bg-brown-dark text-cream p-5 md:p-8 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 shadow-xl border border-gold/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle,_rgba(212,175,55,0.1)_0%,_transparent_70%)] rounded-full pointer-events-none" />
          <div className="bg-gold/20 p-3 rounded-full flex-shrink-0">
            <Info className="text-gold" size={28} />
          </div>
          <div className="text-center md:text-left relative z-10">
            <h4 className="font-serif text-xl text-gold mb-2">Important Disclaimer</h4>
            <p className="text-sm font-sans text-cream/80 leading-relaxed max-w-2xl">
              Travel and miscellaneous charges may apply depending on your venue location and specific requirements. You will be notified clearly about any such additional charges at the time of booking for your consent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSpotlight;
