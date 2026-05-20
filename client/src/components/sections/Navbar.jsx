import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import GoldButton from '../ui/GoldButton';

const NavLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-40 transition-all duration-300 transform-gpu",
          scrolled
            ? "py-2 border-b border-border/50 bg-cream/98 shadow-soft"
            : "py-4 bg-cream/80"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <img
              src="/assets/logo/logo-jyodha.webp"
              alt="Jyodha Royal Brides"
              className={cn(
                "w-auto object-contain transition-all duration-300 origin-left scale-[1.5] md:scale-[1.8]",
                scrolled ? "h-10" : "h-14"
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-[13px] font-semibold text-brown tracking-wide uppercase hover:text-gold relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <GoldButton variant="filled" size="sm" href="#contact">
              Book Now
            </GoldButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gold hover:text-gold-dark transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-cream z-50 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out px-6",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-6 right-6 text-gold p-2 hover:bg-gold/10 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        <div className="absolute top-8 left-0 w-full flex justify-center">
          <img src="/assets/logo/logo-jyodha.webp" alt="Jyodha Royal Brides" className="h-24 w-auto object-contain opacity-60" />
        </div>

        <nav className="flex flex-col items-center gap-8 mt-12 w-full max-w-sm">
          {NavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-4xl text-brown hover:text-gold transition-colors w-full text-center border-b border-border/30 pb-4"
            >
              {link.label}
            </a>
          ))}
          <GoldButton variant="filled" size="lg" className="w-full mt-4" href="#contact" onClick={() => setMobileMenuOpen(false)}>
            Book a Consultation
          </GoldButton>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
