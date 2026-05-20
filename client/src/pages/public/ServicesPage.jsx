import React from 'react';
import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import PageMeta from '../../components/ui/PageMeta';
import ServiceDetailBlock from '../../components/ui/ServiceDetailBlock';
import GoldButton from '../../components/ui/GoldButton';
import bridalImages from '../../lib/bridalImages.json';

// 14 Services specified by user
const detailedServicesRaw = [
  {
    id: 1,
    category: "Makeup",
    title: "Bridal HD Makeup",
    description: "Our signature high-definition makeup service ensures a flawless, camera-ready finish that lasts over 12 hours. We use international luxury brands specifically chosen for the Indian climate to give you a natural, skin-like glow.",
    benefits: ["Sweat and tear-resistant formulation", "Customized base matching your exact skin tone", "Includes premium mink lashes and contouring"],
    image: "/assets/services/bridal-makeup.webp"
  },
  {
    id: 2,
    category: "Skincare",
    title: "Pre-Bridal Skincare",
    description: "A comprehensive skin preparation journey starting 3-6 months before your wedding. We focus on deep cleansing, hydration, and treating specific concerns to reveal your natural, radiant bridal glow.",
    benefits: ["Personalized skin analysis and timeline", "Deep pore cleansing and extraction", "Intense hydration and barrier repair"],
    image: "/assets/services/skincare.webp"
  },
  {
    id: 3,
    category: "Hair",
    title: "Hair Styling & Treatments",
    description: "From traditional braids adorned with fresh flowers to modern Hollywood waves, our expert stylists create looks that complement your face shape, attire, and personal style while maintaining hair health.",
    benefits: ["Pre-event keratin or spa treatments", "Trial sessions to finalize your look", "Secure pinning that lasts all night"],
    image: "/assets/services/hair-styling.webp"
  },
  {
    id: 4,
    category: "Wellness",
    title: "Full Body Spa & Polishing",
    description: "Melt away pre-wedding stress with our ultimate relaxation rituals. Our body polishing treatments remove dead skin cells leaving your body smooth, soft, and visibly brighter for your special day.",
    benefits: ["Organic scrubs and essential oils", "Reduces tanning and uneven skin tone", "Includes deep tissue relaxation techniques"],
    image: "/assets/services/body-spa.webp"
  },
  {
    id: 5,
    category: "Skincare",
    title: "Gold Facial & Face Bleach",
    description: "Harness the ancient beauty secrets of 24k gold. This premium facial improves blood circulation, accelerates cell renewal, and gives your skin a luminous golden glow that traditional facials cannot match.",
    benefits: ["Uses pure 24k gold leaf and serum", "Anti-aging and skin tightening properties", "Safe herbal bleach for seamless radiance"],
    image: "/assets/services/gold-facial.webp"
  },
  {
    id: 6,
    category: "Wellness",
    title: "Ayurvedic Head Massage",
    description: "A traditional 'champi' using warm, herb-infused oils customized to your hair type. It stimulates the scalp, stops hair fall, promotes growth, and profoundly relaxes the nervous system.",
    benefits: ["Relieves wedding planning tension", "Uses authentic cold-pressed Ayurvedic oils", "Improves sleep quality before the wedding"],
    image: "/assets/services/head-massage.webp"
  },
  {
    id: 7,
    category: "Grooming",
    title: "Waxing & Full Body Grooming",
    description: "Painless, hygienic full-body grooming using premium imported waxes (like RICA). We ensure a smooth, bump-free finish with post-wax cooling treatments to prevent redness and irritation.",
    benefits: ["Liposoluble wax for sensitive skin", "Strict hygiene and single-use spatulas", "In-grown hair prevention treatment"],
    image: "/assets/services/waxing.webp"
  },
  {
    id: 8,
    category: "Bridal",
    title: "Bridal Jewellery",
    description: "Complete your look with our curated collection of bridal jewelry. From premium Kundan and Polki sets to minimalist modern designs, we help you select pieces that perfectly match your attire.",
    benefits: ["Exclusive premium rental or purchase options", "Styling consultation to match your lehenga", "High-quality hypoallergenic materials"],
    image: "/assets/services/jewellery.webp"
  },
  {
    id: 9,
    category: "Bridal",
    title: "Real Flower Hair Accessories",
    description: "Nothing compares to the charm of fresh flowers. We source premium blooms to create custom Gajras, floral netting, and delicate hair accessories that stay fresh throughout the ceremony.",
    benefits: ["Orchids, jasmines, roses, and exotic blooms", "Custom color matching with your outfit", "Special treatment to prevent wilting"],
    image: "/assets/services/flower-accessories.webp"
  },
  {
    id: 10,
    category: "Bridal",
    title: "Saree Draping",
    description: "Our professional drapers specialize in all regional Indian styles—Gujarati, Bengali, Maharashtrian, South Indian, or modern contemporary drapes. We ensure your saree or dupatta stays perfectly pinned and comfortable.",
    benefits: ["Flawless pleats that won't budge", "Quick and efficient dressing on the D-Day", "Expertise in double dupatta styling"],
    image: "/assets/services/saree-draping.webp"
  },
  {
    id: 11,
    category: "Guidance",
    title: "Diet & Nutrition Guidance",
    description: "True bridal glow comes from within. Our holistic nutrition experts design a specialized diet plan to detoxify your system, improve skin clarity, and help you feel energetic leading up to the wedding.",
    benefits: ["Customized meal plans based on your body type", "Focus on skin-clearing and bloating reduction", "Sustainable routines without crash dieting"],
    image: "/assets/services/diet-nutrition.webp"
  },
  {
    id: 12,
    category: "Guidance",
    title: "Yoga & Pranayam Programme",
    description: "Cultivate inner calm and physical grace. Our specialized yoga routines focus on posture correction, stress relief breathing techniques, and building stamina for long wedding ceremonies.",
    benefits: ["Guided meditation for bridal anxiety", "Posture improvement for photos", "1-on-1 virtual or in-studio sessions"],
    image: "/assets/services/yoga.webp"
  },
  {
    id: 13,
    category: "Guidance",
    title: "Pre & Post-Marriage Counselling",
    description: "A unique offering from Jyodha. Transitioning into married life comes with emotional shifts. Our certified counselors offer a safe space to discuss expectations, manage stress, and build a strong emotional foundation.",
    benefits: ["Confidential one-on-one sessions", "Stress management and communication tools", "Post-wedding adjustment support"],
    image: "/assets/services/counselling.webp"
  },
  {
    id: 14,
    category: "Guidance",
    title: "Natural Home Care Tips",
    description: "We empower you with traditional kitchen-beauty secrets. From bespoke Ubtan recipes to nightly oiling routines, we provide you with natural remedies to maintain your care regime between studio visits.",
    benefits: ["Grandma-approved effective DIY recipes", "Customized to your skin and hair type", "Zero chemical exposure maintenance"],
    image: "/assets/services/home-care.webp"
  }
];

const shuffledServices = [...bridalImages].sort(() => 0.5 - Math.random());
const detailedServices = detailedServicesRaw.map((service, idx) => ({
  ...service,
  image: `/assets/gallery/bridal-makeup/${shuffledServices[idx % shuffledServices.length]}`
}));

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-cream text-brown-dark">
      <PageMeta title="Services | Jyodha Royal Brides" description="Explore our 14 premium bridal services." />
      <Navbar />

      <main className="flex-1 mt-[72px]">
        {/* Hero */}
        <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center pt-10">
          <div className="absolute inset-0 z-0">
            <img src="/assets/backgrounds/services-hero.webp" alt="Services Hero" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <div className="absolute inset-0 bg-brown-dark/70"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-4 animate-fade-up">Our Services</h1>
            <div className="font-sans text-sm text-cream/70 tracking-wider uppercase animate-fade-up" style={{ animationDelay: '100ms' }}>
              <a href="/" className="hover:text-gold transition-colors">Home</a> <span className="mx-2">/</span> Services
            </div>
          </div>
        </div>

        {/* Services List */}
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6 max-w-6xl">
            {detailedServices.map((service, idx) => (
              <ServiceDetailBlock 
                key={service.id}
                title={service.title}
                category={service.category}
                description={service.description}
                benefits={service.benefits}
                image={service.image}
                reverse={idx % 2 !== 0} // Alternating layout
              />
            ))}
          </div>
        </section>

        {/* Bottom CTA Strip */}
        <section className="bg-gold-gradient py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-shimmer opacity-30 mix-blend-overlay"></div>
          <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Not sure which services you need? Let us guide you.
            </h3>
            <GoldButton variant="filled" size="lg" className="bg-white text-gold-dark hover:bg-cream hover:scale-105" href="/contact">
              Book a Free Consultation
            </GoldButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
