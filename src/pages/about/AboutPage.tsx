import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Globe, Award } from 'lucide-react';
import Logo from '../../components/Logo';

function AboutPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 mb-12">
            We're on a mission to make the web more accessible and safer for everyone.
          </p>

          <div className="space-y-16">
            <section className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2024, Gemini Aurora was born from a simple idea: that everyone deserves equal access to the web, 
                  and that content should be safe for all users.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to help thousands of websites become more accessible and content-aware, 
                  making the internet a better place for everyone.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <ValueCard
                icon={<Users />}
                title="Our Team"
                description="A diverse group of passionate individuals working together to create innovative solutions."
              />
              <ValueCard
                icon={<Heart />}
                title="Our Values"
                description="Committed to accessibility, privacy, and creating positive impact in the digital world."
              />
              <ValueCard
                icon={<Globe />}
                title="Our Impact"
                description="Helping millions of users access and navigate the web safely and efficiently."
              />
              <ValueCard
                icon={<Award />}
                title="Our Vision"
                description="A web that's truly accessible and safe for everyone, regardless of their abilities or age."
              />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function ValueCard({ icon, title, description }: {
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

export default AboutPage;