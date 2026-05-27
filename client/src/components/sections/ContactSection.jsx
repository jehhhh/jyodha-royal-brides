import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import SectionTitle from '../ui/SectionTitle';
import GoldButton from '../ui/GoldButton';
import { MapPin, Phone } from 'lucide-react';

const serviceOptions = [
  "Bridal HD Makeup", "Pre-Bridal Skincare", "Hair Styling & Treatment", 
  "Spa & Body Wellness", "Ayurvedic Massages", "Saree Draping"
];

const packageOptions = ["Platinum Package", "Gold Package", "Pearl Package", "Silver Package", "Custom Package", "Not Sure Yet"];
const sourceOptions = ["Instagram", "Facebook", "Google Search", "Friend / Family Reference", "Other"];

// Validation Schema
const schema = z.object({
  name: z.string().min(2, { message: "Name is required (at least 2 characters)" }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: "Valid Indian mobile number required" }),
  email: z.union([z.literal(""), z.string().email({ message: "Invalid email" })]).optional(),
  weddingDate: z.string().optional(),
  servicesInterested: z.array(z.string()).optional(),
  packageInterest: z.string().min(1, { message: "Please select an option" }),
  hearAboutUs: z.string().optional(),
  message: z.string().max(500, { message: "Message is too long" }).optional()
});

const ContactSection = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      servicesInterested: [],
      packageInterest: ""
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('phone', data.phone);
      formData.append('email', data.email || '');
      formData.append('weddingdate', data.weddingDate || '');
      formData.append('message', data.message || '');
      formData.append('services', data.servicesInterested ? data.servicesInterested.join(', ') : '');
      formData.append('package', data.packageInterest || '');
      formData.append('source', data.hearAboutUs || '');

      // 1. Fire Conversion Tracking Events Immediately (before fetch to ensure it records)
      if (typeof window !== 'undefined') {
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'generate_lead',
            form_name: 'bridal_consultation',
            package_interest: data.packageInterest || 'Custom'
          });
        }
        if (window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Bridal Consultation Enquiry',
            content_category: data.packageInterest || 'Custom'
          });
        }
      }

      const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      
      if (!scriptURL) {
        console.warn("No VITE_GOOGLE_SCRIPT_URL found in .env. Faking submission for preview.");
        await new Promise(r => setTimeout(r, 1500));
      } else {
        // Use no-cors to prevent Google Apps Script from throwing a CORS error
        await fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' });
      }

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 md:py-20 px-4 md:px-8 bg-gradient-to-b from-blush to-cream">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle 
          script="Let's Begin" 
          title="Book Your Consultation" 
          subtitle="Fill in your details or visit our studio in Pune. We'll reach out shortly." 
          centered 
          className="mb-6 md:mb-8"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          
          {/* Map & Contact Info Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-soft border border-border/50">
              <h3 className="font-serif text-xl text-brown-dark mb-4">Visit Our Studio</h3>
              <p className="text-brown/80 font-sans text-sm mb-6 flex items-start gap-3">
                <MapPin size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Jyodha Royal Brides<br/>Office No. 2A+2B, 1st floor, Laukik Apartments, 870, Bhandarkar Rd, near Deccan, Shreeman Society, Deccan Gymkhana, Pune, Maharashtra 411004</span>
              </p>
              
              <div className="w-full h-56 sm:h-64 lg:h-72 rounded-xl overflow-hidden border border-gold/20 mb-6 shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2347199357278!2d73.83596610000001!3d18.5182923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf9db010a4af%3A0x42faaab0ad3f2128!2sJYODHA%20ROYAL%20BRIDES%20%7C%20Bridal%20Makeup%20in%20Pune!5e0!3m2!1sen!2sin!4v1779118405846!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>

              <div className="mt-4 pt-6 border-t border-border/50">
                <h3 className="font-serif text-xl text-brown-dark mb-3">Direct Contact</h3>
                <p className="text-brown/80 font-sans flex items-center gap-3">
                  <Phone size={18} className="text-gold flex-shrink-0" />
                  <a 
                    href="tel:+919170171170" 
                    className="hover:text-gold transition-colors font-medium tracking-wide"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        if (window.dataLayer) window.dataLayer.push({ event: 'contact_click', contact_method: 'phone_direct' });
                        if (window.fbq) window.fbq('trackCustom', 'ContactClick', { contact_method: 'phone_direct' });
                      }
                    }}
                  >
                    +91 9170171170
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-3 bg-white shadow-soft rounded-2xl p-6 md:p-8 lg:p-10 border border-border/50 relative overflow-hidden">
            {/* Success Overlay */}
            {isSuccess && (
              <div className="absolute inset-0 z-20 bg-cream/95 backdrop-blur-sm flex flex-col items-center justify-center animate-fade-up">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold stroke-2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="font-serif text-3xl text-brown-dark mb-4">Thank you!</h3>
                <p className="font-sans text-brown text-center max-w-md">
                  We'll be in touch within 24 hours. 🌸
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              
              {/* 2-Column Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs font-semibold text-brown mb-1.5">Full Name *</label>
                  <input type="text" {...register("name")} className={`w-full bg-cream border p-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors text-sm ${errors.name ? 'border-red-500' : 'border-border'}`} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-brown mb-1.5">Mobile Number *</label>
                  <input type="tel" {...register("phone")} className={`w-full bg-cream border p-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors text-sm ${errors.phone ? 'border-red-500' : 'border-border'}`} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              {/* 2-Column Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs font-semibold text-brown mb-1.5">Email Address</label>
                  <input type="email" {...register("email")} className={`w-full bg-cream border p-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors text-sm ${errors.email ? 'border-red-500' : 'border-border'}`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-brown mb-1.5">Event / Wedding Date</label>
                  <input type="date" {...register("weddingDate")} className="w-full bg-cream border border-border p-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors text-brown text-sm" />
                </div>
              </div>

              {/* Services Multi-Select */}
              <div>
                <label className="block font-sans text-xs font-semibold text-brown mb-2">Services Interested In</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {serviceOptions.map((service, idx) => (
                    <label key={idx} className="flex items-center gap-2 p-2.5 border border-border rounded-lg cursor-pointer hover:bg-gold/5 transition-colors group">
                      <input type="checkbox" value={service} {...register("servicesInterested")} className="w-3.5 h-3.5 text-gold focus:ring-gold border-gold/50 rounded" />
                      <span className="font-sans text-[13px] text-brown">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 2-Column Dropdowns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs font-semibold text-brown mb-1.5">Package Interest *</label>
                  <select {...register("packageInterest")} className={`w-full bg-cream border p-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors text-brown text-sm appearance-none ${errors.packageInterest ? 'border-red-500' : 'border-border'}`}>
                    <option value="">Select a package</option>
                    {packageOptions.map((pkg, idx) => (
                      <option key={idx} value={pkg}>{pkg}</option>
                    ))}
                  </select>
                  {errors.packageInterest && <p className="text-red-500 text-xs mt-1">{errors.packageInterest.message}</p>}
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-brown mb-1.5">How did you hear about us?</label>
                  <select {...register("hearAboutUs")} className="w-full bg-cream border border-border p-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors text-brown text-sm appearance-none">
                    <option value="">Please select</option>
                    {sourceOptions.map((src, idx) => (
                      <option key={idx} value={src}>{src}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message Area */}
              <div>
                <label className="block font-sans text-xs font-semibold text-brown mb-1.5">Additional Details / Message</label>
                <textarea {...register("message")} rows="3" className={`w-full bg-cream border p-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors text-sm resize-none ${errors.message ? 'border-red-500' : 'border-border'}`}></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              {/* Submit */}
              <GoldButton variant="filled" shimmer className="w-full text-sm py-3" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send My Enquiry →'}
              </GoldButton>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
