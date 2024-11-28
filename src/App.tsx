import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DemoPage from './pages/DemoPage';
import FeaturesPage from './pages/features/FeaturesPage';
import PricingPage from './pages/pricing/PricingPage';
import DocumentationPage from './pages/docs/DocumentationPage';
import AboutPage from './pages/about/AboutPage';
import BlogPage from './pages/blog/BlogPage';
import CareersPage from './pages/careers/CareersPage';
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage';
import TermsOfServicePage from './pages/legal/TermsOfServicePage';
import ContactPage from './pages/contact/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;