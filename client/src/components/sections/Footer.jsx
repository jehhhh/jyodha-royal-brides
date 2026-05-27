import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const Footer = () => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919170171170';
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const trackContactClick = (method) => {
    if (typeof window !== 'undefined') {
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'contact_click', contact_method: method });
      }
      if (window.fbq) {
        window.fbq('trackCustom', 'ContactClick', { contact_method: method });
      }
    }
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Packages', href: '/#packages' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'About Us', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ];

  const topServices = [
    "Bridal HD Makeup",
    "Pre-Bridal Skincare",
    "Hair Styling & Spa",
    "Gold Facial & Bleach",
    "Ayurvedic Massages",
    "Bridal Jewellery",
    "Flower Accessories",
    "Saree Draping"
  ];

  return (
    <footer className="bg-brown-dark pt-14 md:pt-20 pb-8 text-cream font-sans border-t-4 border-gold relative overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.08)_0%,_transparent_70%)] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand */}
          <div className="flex flex-col items-start">
            <Link to="/" className="inline-block mb-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col">
                <h2 className="font-serif text-3xl md:text-4xl text-gold tracking-widest uppercase mb-1 drop-shadow-md">Jyodha</h2>
                <div className="w-full h-px bg-gradient-to-r from-gold to-transparent mb-1.5"></div>
                <p className="font-sans text-[10px] md:text-xs text-cream/90 tracking-[0.4em] uppercase font-bold">Royal Brides</p>
              </div>
            </Link>
            <p className="text-cream/70 text-sm mb-6 max-w-xs leading-relaxed">
              Premium Bridal Care — Skin, Hair & Beauty. Your journey to the perfect wedding day starts here.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/jyodharoyalbrides_/" },
                { icon: Facebook, href: "https://www.facebook.com/people/Jyodha-Royal/61584735250368" },
                { icon: WhatsAppIcon, href: whatsappLink },
              ].map(({ icon: Icon, href }, idx) => (
                <a key={idx} href={href} target="_blank" rel="noreferrer" onClick={() => trackContactClick(idx === 2 ? 'whatsapp_social' : 'social')} className="w-10 h-10 rounded-full border border-gold/50 text-gold flex items-center justify-center hover:bg-gold hover:text-brown-dark hover:border-gold transition-all duration-300 hover:scale-110">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-xl text-gold mb-6 border-b border-gold/30 pb-2 inline-block">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-cream/70 hover:text-gold text-sm transition-colors flex items-center gap-2 hover:translate-x-1 transform duration-200">
                    <span className="text-gold text-[10px]">♦</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-serif text-xl text-gold mb-6 border-b border-gold/30 pb-2 inline-block">Top Services</h4>
            <ul className="flex flex-col gap-3">
              {topServices.map((service, idx) => (
                <li key={idx}>
                  <a href="/#services" className="text-cream/70 hover:text-gold text-sm transition-colors flex items-center gap-2 hover:translate-x-1 transform duration-200">
                    <span className="text-gold text-[10px]">♦</span> {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-serif text-xl text-gold mb-6 border-b border-gold/30 pb-2 inline-block">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-cream/70 text-sm">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Jyodha Royal Brides, Office No. 2A+2B, 1st floor, Laukik Apartments, 870, Bhandarkar Rd, Pune 411004</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a href={`tel:+919170171170`} target="_blank" rel="noreferrer" onClick={() => trackContactClick('phone')} className="hover:text-gold transition-colors">+91 91701 71170</a>
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a href="mailto:jyodharoyalbrides@gmail.com" target="_blank" rel="noreferrer" onClick={() => trackContactClick('email')} className="hover:text-gold transition-colors">jyodharoyalbrides@gmail.com</a>
              </li>
            </ul>
            <a href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => trackContactClick('whatsapp_primary')} className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#128C7E] transition-all duration-300 shadow-soft hover:shadow-lg hover:scale-105">
              <WhatsAppIcon size={18} /> Chat on WhatsApp
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Jyodha Royal Brides. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/terms" className="hover:text-gold transition-colors">T&C</a>
            <span className="text-cream/20">|</span>
            <a href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
