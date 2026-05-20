import React from 'react';
import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import PageMeta from '../../components/ui/PageMeta';
import SectionTitle from '../../components/ui/SectionTitle';
import TeamCard from '../../components/ui/TeamCard';
import GoldButton from '../../components/ui/GoldButton';
import bridalImages from '../../lib/bridalImages.json';

// Features / Why Choose Us
const features = [
  { icon: "🌿", title: "Organic Products", desc: "We use only premium, certified organic formulations" },
  { icon: "👑", title: "Experienced Artists", desc: "Over 10 years of bridal expertise" },
  { icon: "🏆", title: "Award-Winning", desc: "Recognised as a top bridal studio" },
  { icon: "💛", title: "Holistic Approach", desc: "Beauty, wellness, and emotional guidance combined" }
];

// Placeholder Team data
const teamList = [
  { id: 1, name: "Anita Desai", role: "Lead HD Makeup Artist", experience: 12, photo: "/assets/team/t1.webp" },
  { id: 2, name: "Seema Kapoor", role: "Skincare Specialist", experience: 8, photo: "/assets/team/t2.webp" },
  { id: 3, name: "Riya Verma", role: "Senior Hair Stylist", experience: 10, photo: "/assets/team/t3.webp" },
  { id: 4, name: "Dr. Kavita Joshi", role: "Ayurvedic & Wellness Expert", experience: 15, photo: "/assets/team/t4.webp" }
];

const shuffledAbout = [...bridalImages].sort(() => 0.5 - Math.random());

// Studio images placeholders
const studioImages = shuffledAbout.slice(0, 6).map(img => `/assets/gallery/bridal-makeup/${img}`);
const aboutHeroImage = `/assets/gallery/bridal-makeup/${shuffledAbout[6]}`;
const aboutStudioImage = `/assets/gallery/bridal-makeup/${shuffledAbout[7]}`;

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-cream text-brown-dark">
      <PageMeta title="About Us | Jyodha Royal Brides" description="Discover our story and the passionate artists behind Jyodha Royal Brides." />
      <Navbar />

      <main className="flex-1 mt-[72px]">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-10">
          <div className="absolute inset-0 z-0">
            <img src={aboutHeroImage} alt="About Jyodha Royal Brides" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <div className="absolute inset-0 bg-brown-dark/70"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 animate-fade-up">About Jyodha Royal Brides</h1>
            <span className="font-script text-3xl md:text-4xl text-gold pb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
               Our Story
            </span>
          </div>
        </div>

        {/* Story Section */}
        <section className="section-padding bg-cream">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
              
              <div className="w-full md:w-1/2 flex flex-col gap-6 font-sans text-base md:text-lg text-brown leading-relaxed">
                <p>
                  At <strong className="font-serif font-medium text-xl text-gold-dark">Jyodha Royal Brides</strong>, 
                  we believe your wedding day should be the most radiant day of your life. 
                  Founded with a passion for authentic beauty and holistic bridal wellness, 
                  we have been transforming brides for over a decade.
                </p>
                <p>
                  We bring together the finest beauty techniques — from HD makeup to ancient 
                  Ayurvedic rituals — with modern skincare science. Every bride who walks through 
                  our doors receives a personalised experience, because no two brides are the same.
                </p>
                <p>
                  Our name, <strong className="text-brown-dark">Jyodha</strong>, is inspired by strength, 
                  royalty, and the timeless grace of an Indian bride. We don't just prepare you 
                  for the photographs; we prepare you for the beautiful journey ahead.
                </p>
              </div>

              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-gold">
                  <img src={aboutStudioImage} alt="Jyodha Studio" loading="lazy" decoding="async" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-cream flex justify-center items-center font-serif text-brown -z-10 border border-border/50">Studio Image Placeholder</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-blush">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 shadow-soft text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h4 className="font-serif text-xl text-brown-dark mb-3">{feature.title}</h4>
                  <p className="font-sans text-sm text-brown leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-cream">
          <div className="container mx-auto max-w-6xl px-6">
            <SectionTitle title="Meet Our Artists" centered className="mb-16" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamList.map((member) => (
                <TeamCard 
                  key={member.id}
                  photo={member.photo}
                  name={member.name}
                  role={member.role}
                  experience={member.experience}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Studio Gallery Grid */}
        <section className="pb-24 pt-8 bg-cream">
          <div className="container mx-auto max-w-6xl px-6">
             <SectionTitle script="Take A Tour" title="Our Studio" centered className="mb-12" />
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {studioImages.map((img, idx) => (
                 <div key={idx} className="aspect-square bg-border/20 rounded-lg overflow-hidden relative">
                    <img src={img} alt={`Studio Area ${idx+1}`} loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    {/* Placeholder fallback */}
                    <div className="absolute inset-0 flex items-center justify-center font-serif text-brown/40 text-sm -z-10">Studio</div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gold-gradient py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-shimmer opacity-30 mix-blend-overlay pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
            <h3 className="font-serif text-2xl md:text-3xl text-white m-0">
              Ready to begin your royal bridal journey?
            </h3>
            <GoldButton variant="filled" size="lg" className="bg-white text-gold-dark hover:bg-cream" href="/contact">
              Book a Consultation
            </GoldButton>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
