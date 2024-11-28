import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';

function TermsOfServicePage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <div className="prose prose-purple max-w-none">
            <p className="text-gray-600 mb-8">Last updated: March 15, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using Gemini Aurora's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
              <p className="text-gray-600 mb-4">
                Permission is granted to temporarily download one copy of Gemini Aurora for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained in Gemini Aurora</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Disclaimer</h2>
              <p className="text-gray-600 mb-4">
                The materials on Gemini Aurora are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitations</h2>
              <p className="text-gray-600 mb-4">
                In no event shall Gemini Aurora or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Revisions and Errata</h2>
              <p className="text-gray-600">
                The materials appearing on Gemini Aurora could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our service are accurate, complete, or current. We may make changes to the materials contained on our service at any time without notice.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TermsOfServicePage;