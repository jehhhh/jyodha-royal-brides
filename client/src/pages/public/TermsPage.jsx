import React, { useEffect } from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';

const TermsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen flex flex-col font-sans bg-cream text-brown-dark">
      <PageMeta title="Terms & Conditions | Jyodha Royal Brides" />
      <Navbar />
      <main className="flex-1 pt-32 pb-20 container mx-auto px-6 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-gold mb-8">Terms & Conditions</h1>
        <div className="prose prose-brown max-w-none font-sans text-brown/80 leading-relaxed">
          <p className="mb-4">Welcome to Jyodha Royal Brides!</p>
          <p className="mb-4">These terms and conditions outline the rules and regulations for the use of Jyodha Royal Brides's Website and services.</p>
          <h2 className="text-2xl text-brown-dark mt-8 mb-4 font-serif">Bookings and Consultations</h2>
          <p className="mb-4">By booking a consultation or package with Jyodha Royal Brides, you agree to provide accurate and complete information. All bookings are subject to availability and confirmation by our team.</p>
          <h2 className="text-2xl text-brown-dark mt-8 mb-4 font-serif">Travel and Additional Charges</h2>
          <p className="mb-4">As stated in our packages, travel and miscellaneous charges may apply depending on your venue location and specific requirements outside of our standard service radius in Pune. You will be notified clearly about any such additional charges at the time of booking for your consent.</p>
          <h2 className="text-2xl text-brown-dark mt-8 mb-4 font-serif">Cancellations & Refunds</h2>
          <p className="mb-4">Cancellation policies apply to all bridal bookings. Advance payments used to secure your date may be non-refundable depending on the timeframe of the cancellation prior to the event date, as discussed during your consultation.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default TermsPage;
