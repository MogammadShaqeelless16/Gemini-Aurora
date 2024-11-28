import React from 'react';
import Sidebar from '../components/layout/Sidebar';

function DemoPage() {
  return (
    <div className="flex">
      <main className="flex-1 min-h-screen bg-gray-100 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Accessibility Testing Demo</h1>
            <p className="text-lg text-gray-700 mb-8">
              This demo page showcases various accessibility and content issues that Gemini Aurora can detect.
              Use the sidebar tools to analyze this page.
            </p>
          </section>

          {/* Accessibility Issues Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Common Accessibility Issues</h2>
            
            {/* Missing Alt Text */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Missing Alt Text</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  className="w-full rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Low Contrast Text */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Low Contrast Text</h3>
              <p className="text-gray-300 mb-4">
                This text has very low contrast and is hard to read.
              </p>
              <p style={{ color: '#A1A1A1' }} className="mb-4">
                This text also has insufficient contrast with the background.
              </p>
            </div>

            {/* Missing Form Labels */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Form Accessibility Issues</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name (missing label)"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="email"
                  placeholder="Email (missing label)"
                  className="w-full p-2 border rounded"
                />
                <button
                  style={{ backgroundColor: '#666' }}
                  className="px-4 py-2 text-white rounded"
                >
                  Submit (low contrast button)
                </button>
              </form>
            </div>
          </section>

          {/* Content Safety Issues Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Content Safety Examples</h2>
            
            {/* External Links */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">External Links</h3>
              <div className="space-y-2">
                <a href="http://example.com" className="text-blue-600 hover:underline">
                  Unsecured External Link (http)
                </a>
                <br />
                <a href="https://example.com" className="text-blue-600 hover:underline">
                  External Link without Warning
                </a>
              </div>
            </div>

            {/* Inappropriate Content */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Content Analysis</h3>
              <p className="mb-4">
                This section contains words that might be flagged: violence, hate, drugs
                (These are example keywords for the content filter to detect)
              </p>
            </div>
          </section>
        </div>
      </main>
      <Sidebar />
    </div>
  );
}

export default DemoPage;