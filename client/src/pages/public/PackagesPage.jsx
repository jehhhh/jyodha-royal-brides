import React from 'react';
import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import PageMeta from '../../components/ui/PageMeta';
import ScallopedCard from '../../components/ui/ScallopedCard';
import SectionTitle from '../../components/ui/SectionTitle';
import GoldButton from '../../components/ui/GoldButton';
import PricingTable from '../../components/ui/PricingTable';
import Accordion from '../../components/ui/Accordion';
import { Check } from 'lucide-react';

const includedServices = [
  "Free Trial Makeup (Bridal Only)",
  "3× HD Makeup Sessions",
  "3× Pre-Bridal Face Settings (cleanse, tone, mask, moisturise)",
  "1× Pre-Bridal Hand Spa",
  "1× Pre-Bridal Foot Spa",
  "2× Ayurvedic Head Massage",
  "Gold Face Bleach",
  "Gold Facial",
  "Full Body Gold Bleach",
  "Full Body Gold Wax",
  "Full Body Spa with Body Polishing",
];

const extraServices = [
  "Hairstyling for All Occasions",
  "Saree Draping (all makeup sessions)",
  "Jewellery Consultation",
  "Real Flower Hair Accessories",
];

const guidanceProgramme = [
  { icon: "📋", text: "Personalised Diet Plan" },
  { icon: "🧘", text: "Yoga & Pranayam Routine" },
  { icon: "🌿", text: "Skin Care Regime" },
  { icon: "💬", text: "Pre-Marriage Counselling" },
  { icon: "💑", text: "Post-Marriage Counselling" },
  { icon: "🏡", text: "Natural Home Care Tips" }
];

const PackagesPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-cream text-brown-dark">
      <PageMeta title="Packages | Jyodha Royal Brides" description="Explore our exclusive signature bridal packages and monthly voucher plans." />
      <Navbar />

      <main className="flex-1 mt-[72px]">
        {/* Hero */}
        <div className="relative h-[30vh] min-h-[250px] flex items-center justify-center pt-10 bg-gold-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-shimmer opacity-20 mix-blend-overlay pointer-events-none"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-4 animate-fade-up">Our Packages</h1>
            <div className="font-sans text-sm text-cream/80 tracking-wider uppercase animate-fade-up" style={{ animationDelay: '100ms' }}>
              <a href="/" className="hover:text-gold-light transition-colors">Home</a> <span className="mx-2">/</span> Packages
            </div>
          </div>
        </div>

        {/* Intro */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <p className="font-sans text-lg md:text-xl text-brown leading-relaxed">
              Whether you're looking for a single treatment or the full bridal journey, we have a package crafted for you. All packages include access to our premium organic product line.
            </p>
          </div>
        </section>

        {/* GOLD PACKAGE Spotlight */}
        <section className="pb-24 bg-cream">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <ScallopedCard scallop="both" className="border border-gold/20 shadow-gold p-8 md:p-12 relative">
              
              {/* Header */}
              <div className="text-center mb-10">
                <span className="inline-block bg-gold-gradient text-white text-sm font-bold tracking-widest px-6 py-2 rounded-full mb-6 shadow-gold-sm">
                  ★ GOLD PACKAGE
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-brown-dark mb-4">The Complete Bridal Experience</h2>
                <h3 className="font-script text-3xl text-gold">"Nothing Less Than Royalty"</h3>
                <div className="w-24 h-[1px] bg-gold/50 mx-auto mt-8"></div>
              </div>

              {/* 2-Col Layout */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
                
                {/* Left Col - Included Services */}
                <div className="md:col-span-3">
                  <h4 className="font-sans text-sm font-bold tracking-widest text-gold uppercase mb-6">Included Services</h4>
                  <ul className="space-y-4">
                    {includedServices.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-gold flex-shrink-0 mt-1">✦</span>
                        <span className="font-sans text-base text-brown">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Col - Extra & Guidance */}
                <div className="md:col-span-2 flex flex-col gap-10">
                  <div>
                    <h4 className="font-sans text-sm font-bold tracking-widest text-gold uppercase mb-6">Also Includes</h4>
                    <ul className="space-y-4">
                      {extraServices.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check size={20} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={3} />
                          <span className="font-sans text-base text-brown font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Blush Sub-card */}
                  <div className="bg-blush rounded-xl p-6 border border-gold/10">
                    <h4 className="font-serif text-2xl text-brown-dark mb-4 text-center">Holistic Bridal Guidance</h4>
                    <ul className="grid grid-cols-1 gap-4">
                      {guidanceProgramme.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 bg-white/50 px-4 py-3 rounded-lg text-brown text-sm">
                          <span className="text-xl leading-none">{item.icon}</span> 
                          <span className="font-sans font-medium">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Footer CTA */}
              <div className="text-center pt-8 border-t border-border/50">
                <GoldButton variant="filled" shimmer size="lg" className="mb-4" href="/contact?package=gold">
                  Book Gold Package
                </GoldButton>
                <p className="font-sans text-xs text-brown/60 italic">Package validity: 6 months from date of booking. T&C apply.</p>
              </div>

            </ScallopedCard>
          </div>
        </section>

        {/* Vouchers Section */}
        <section className="section-padding bg-blush">
          <div className="container mx-auto max-w-4xl">
            <SectionTitle 
              title="Monthly Session Vouchers" 
              subtitle="Pay in advance, save 50% across 6 monthly sessions." 
              centered 
              className="mb-12"
            />

            <PricingTable className="mb-8" />

            <div className="text-center mb-12">
              <p className="font-sans text-xs md:text-sm text-brown max-w-3xl mx-auto leading-relaxed italic">
                *50% OFF applies exclusively on advance payment for the 6-month voucher. Services to be availed within allotted monthly slots. Skipped months are not extendable. T&C apply.
              </p>
            </div>

            <div className="flex justify-center mb-16">
              <GoldButton variant="outlined" size="lg" href="/contact?package=vouchers">
                Enquire About Vouchers
              </GoldButton>
            </div>

            {/* Accordion area */}
            <div className="max-w-3xl mx-auto">
              <Accordion title="Terms & Conditions (Monthly Vouchers)">
                <ul className="list-disc list-outside ml-4 space-y-2">
                  <li>Services to be availed with prior appointment only and within a slot of 10 days allotted to you.</li>
                  <li>Skipped months are not extendable and will lapse at the end of the 6-month validity.</li>
                  <li>This voucher is transferable; a nominated guest may avail the service in your place.</li>
                  <li>Services once taken are final and cannot be altered.</li>
                  <li>Missed appointments will not be rescheduled or compensated.</li>
                  <li><strong>Note:</strong> Premium organic care — skin, hair & bridal only.</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default PackagesPage;
