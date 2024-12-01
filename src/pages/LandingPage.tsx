import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Accessibility, Globe, Sparkles, Check, ArrowRight, Filter, FileText } from 'lucide-react';
import Logo from '../components/Logo';
import Features from '../components/landing/Features';
import About from '../components/landing/About';
import Hero from '../components/landing/Hero';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="py-6">
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Logo size="default" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Gemini Leda
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="/features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <Link
              to="/demo"
              className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium"
            >
              Try Demo
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <Hero />
      <Features />
      <About />


      {/* Social Proof Section */}
      <section className="container mx-auto px-6 py-16 bg-gradient-to-b from-white to-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Trusted by Developers Worldwide
        </h2>
        <p className="text-center text-gray-600 mb-12">
          "Gemini Aurora has transformed how we ensure our web projects are both
          accessible and safe for users."
        </p>
      </section>

 {/* Footer */}
 <footer className="bg-gray-50 py-12 mt-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Logo size="small" />
                <span className="font-semibold text-gray-900">Gemini Leda</span>
              </div>
              <p className="text-gray-600 text-sm">
                A Soft Glitch Solutions Product
              </p>
              <p className="text-gray-600 text-sm">
                Making the web accessible and safe for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
                <li><Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
                <li><Link to="/documentation" className="text-gray-600 hover:text-gray-900">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
                <li><Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            © 2024 Gemini Leda by Soft Glitch Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
