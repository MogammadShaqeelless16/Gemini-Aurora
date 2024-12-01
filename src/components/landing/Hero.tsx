import React from 'react';
import { ArrowRight } from 'lucide-react';
import Logo from '../Logo';

const Hero = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('/extension/gemini-leda.zip');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'gemini-leda.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
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
            Gemini Leda is your intelligent companion for web accessibility and content safety.
            Perfect for developers, content creators, and families.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={handleDownload}
              className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 flex items-center"
            >
              Download Extension
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <a
              href="/demo"
              className="px-8 py-3 bg-white text-purple-600 rounded-lg border border-purple-200 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              View Demo
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-8 right-4 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team working on accessibility"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <Logo size="small" />
              <div className="mt-2 flex items-center space-x-1 text-sm text-gray-600">
                <span className="font-semibold">Gemini Leda</span>
                <span>•</span>
                <span>v1.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;