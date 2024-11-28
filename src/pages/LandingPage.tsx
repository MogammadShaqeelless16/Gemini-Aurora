import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Accessibility, Globe, Sparkles, Check, ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';

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

      {/* Rest of the component remains the same until the footer */}
      
      {/* Footer */}
      <footer className="bg-gray-50 py-12 mt-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Logo size="small" />
                <span className="font-semibold text-gray-900">Gemini Aurora</span>
              </div>
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
            © 2024 Gemini Aurora. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// FeatureCard component remains the same
export default LandingPage;