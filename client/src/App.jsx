import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import WhatsAppButton from './components/ui/WhatsAppButton';

// Lazy loading pages for code splitting
const HomePage = lazy(() => import('./pages/public/HomePage'));
const GalleryPage = lazy(() => import('./pages/public/GalleryPage'));
const ServicesPage = lazy(() => import('./pages/public/ServicesPage'));
const PackagesPage = lazy(() => import('./pages/public/PackagesPage'));
const AboutPage = lazy(() => import('./pages/public/AboutPage'));
const PrivacyPage = lazy(() => import('./pages/public/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/public/TermsPage'));

// Placeholders for Other Public Pages
const Contact = () => <div className="p-20 text-center"><h1 className="text-4xl text-gold pb-4">Contact</h1></div>;

// Placeholders for Admin Pages
const AdminLogin = () => <div className="p-20 text-center"><h1 className="text-4xl text-gold pb-4">Admin Login</h1></div>;
const AdminDashboard = () => <div className="p-20 text-center"><h1 className="text-4xl text-gold pb-4">Admin Dashboard</h1></div>;

function App() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-cream"><div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div></div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Suspense>

      {/* Global persistent elements */}
      <WhatsAppButton />
    </>
  );
}

export default App;
