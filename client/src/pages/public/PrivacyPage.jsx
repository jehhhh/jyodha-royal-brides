import React, { useEffect } from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';

const PrivacyPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen flex flex-col font-sans bg-cream text-brown-dark">
      <PageMeta title="Privacy Policy | Jyodha Royal Brides" />
      <Navbar />
      <main className="flex-1 pt-32 pb-20 container mx-auto px-6 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-gold mb-8">Privacy Policy</h1>
        <div className="prose prose-brown max-w-none font-sans text-brown/80 leading-relaxed">
          <p className="mb-4">At Jyodha Royal Brides, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Jyodha Royal Brides and how we use it.</p>
          <h2 className="text-2xl text-brown-dark mt-8 mb-4 font-serif">Information We Collect</h2>
          <p className="mb-4">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
          <p className="mb-4">If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
          <h2 className="text-2xl text-brown-dark mt-8 mb-4 font-serif">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect in various ways, including to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide, operate, and maintain our website and services</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails or SMS regarding your bridal consultation</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default PrivacyPage;
