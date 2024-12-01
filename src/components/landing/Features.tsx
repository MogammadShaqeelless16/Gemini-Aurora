import React from 'react';
import { Shield, Accessibility, Globe, Sparkles, Zap, Users, Lock, Code } from 'lucide-react';

const Features = () => {
  return (
    <section className="container mx-auto px-6 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Powerful Features for Everyone
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<Accessibility className="w-6 h-6 text-purple-600" />}
          title="Real-time Accessibility"
          description="Instant WCAG compliance checks and detailed reports as you browse."
          image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        />
        <FeatureCard
          icon={<Shield className="w-6 h-6 text-purple-600" />}
          title="Content Safety"
          description="Advanced content filtering and inappropriate content detection."
          image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        />
        <FeatureCard
          icon={<Zap className="w-6 h-6 text-purple-600" />}
          title="Performance Impact"
          description="Check how accessibility features affect page performance."
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        />
        <FeatureCard
          icon={<Code className="w-6 h-6 text-purple-600" />}
          title="Developer Tools"
          description="Detailed technical reports and code suggestions for fixes."
          image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        />
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const FeatureCard = ({ icon, title, description, image }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden group">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt="" 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6">
        <div className="mb-4 transform group-hover:scale-110 transition-transform">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Features;