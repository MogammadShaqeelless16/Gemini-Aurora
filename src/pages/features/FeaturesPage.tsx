import React from 'react';
import { Shield, Accessibility, Globe, Sparkles, Zap, Lock, LineChart, Workflow } from 'lucide-react';
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';

function FeaturesPage() {
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Features</h1>
          <p className="text-xl text-gray-600 mb-12">
            Discover all the powerful features that make Gemini Aurora the perfect tool for web accessibility and content safety.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<Accessibility />}
              title="WCAG Compliance Scanner"
              description="Automatically scan web pages for WCAG 2.1 compliance issues and get detailed reports with fix suggestions."
            />
            <FeatureCard
              icon={<Shield />}
              title="Content Safety Analysis"
              description="Protect users from inappropriate content with advanced content filtering and real-time analysis."
            />
            <FeatureCard
              icon={<Globe />}
              title="Multi-language Support"
              description="Use Gemini Aurora in multiple languages to serve a global audience effectively."
            />
            <FeatureCard
              icon={<Sparkles />}
              title="Real-time Feedback"
              description="Get instant feedback about accessibility and content issues as you browse."
            />
            <FeatureCard
              icon={<Zap />}
              title="Performance Optimization"
              description="Lightweight extension that won't slow down your browsing experience."
            />
            <FeatureCard
              icon={<Lock />}
              title="Privacy First"
              description="All analysis happens locally in your browser, ensuring your data stays private."
            />
            <FeatureCard
              icon={<LineChart />}
              title="Detailed Analytics"
              description="Track your website's accessibility improvements over time with detailed analytics."
            />
            <FeatureCard
              icon={<Workflow />}
              title="Custom Workflows"
              description="Create custom scanning workflows tailored to your specific needs."
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeaturesPage;