import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

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
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Youtube, href: "https://youtube.com" },
                { icon: MessageCircle, href: whatsappLink },
              ].map(({ icon: Icon, href }, idx) => (
                <a key={idx} href={href} target="_blank" rel="noreferrer" onClick={() => trackContactClick(idx === 3 ? 'whatsapp_social' : 'social')} className="w-10 h-10 rounded-full border border-gold/50 text-gold flex items-center justify-center hover:bg-gold hover:text-brown-dark hover:border-gold transition-all duration-300 hover:scale-110">
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
                <a href={`tel:+919170171170`} onClick={() => trackContactClick('phone')} className="hover:text-gold transition-colors">+91 91701 71170</a>
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a href="mailto:jyodharoyalbrides@gmail.com" onClick={() => trackContactClick('email')} className="hover:text-gold transition-colors">jyodharoyalbrides@gmail.com</a>
              </li>
            </ul>
            <a href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => trackContactClick('whatsapp_primary')} className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#128C7E] transition-all duration-300 shadow-soft hover:shadow-lg hover:scale-105">
              <MessageCircle size={18} fill="currentColor" /> Chat on WhatsApp
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
