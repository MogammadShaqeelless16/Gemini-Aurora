import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Accessibility, Globe, Sparkles, Check, ArrowRight, Filter, FileText } from 'lucide-react';
import Logo from '../components/Logo';
import Features from '../components/landing/Features';
import About from '../components/landing/About';


function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="py-6">
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Logo size="default" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Gemini Aurora
            </span>
          </div>
          <Link
            to="/demo"
            className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium"
          >
            Try Demo
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Make the Web{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Accessible
              </span>{' '}
              and{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Safe
              </span>{' '}
              for Everyone
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Powered by Google's Gemini Nano, Gemini Aurora delivers real-time
              AI-driven insights for web accessibility and content safety.
            </p>
            <div className="flex space-x-4">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 flex items-center">
                Download Extension
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <Link
                to="/demo"
                className="px-8 py-3 bg-white text-purple-600 rounded-lg border border-purple-200 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                View Demo
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team working on accessibility"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <Logo size="small" />
              <div className="mt-2 flex items-center space-x-1">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">WCAG Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
