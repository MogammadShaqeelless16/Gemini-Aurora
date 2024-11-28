import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="py-6 border-b">
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <Logo size="default" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Gemini Aurora
            </span>
          </Link>
          <Link to="/demo" className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium">
            Try Demo
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <div className="prose prose-purple max-w-none">
            <p className="text-gray-600 mb-8">Last updated: March 15, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Account information (name, email, password)</li>
                <li>Usage data and preferences</li>
                <li>Technical information about your browser and device</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide and improve our services</li>
                <li>Send you updates and marketing communications</li>
                <li>Protect against fraud and abuse</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicyPage;