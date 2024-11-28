import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';
import Logo from '../../components/Logo';

function CareersPage() {
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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600">
              Help us make the web more accessible and safer for everyone
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Open Positions</h2>
            <div className="space-y-6">
              <JobCard
                title="Senior Frontend Developer"
                location="Remote (Worldwide)"
                type="Full-time"
                salary="$120k - $160k"
                description="We're looking for an experienced frontend developer to help build the next generation of web accessibility tools."
              />
              <JobCard
                title="Machine Learning Engineer"
                location="Remote (Worldwide)"
                type="Full-time"
                salary="$130k - $170k"
                description="Join us in developing cutting-edge AI models for content safety and accessibility analysis."
              />
              <JobCard
                title="Product Designer"
                location="Remote (Worldwide)"
                type="Full-time"
                salary="$100k - $140k"
                description="Help design beautiful and accessible user interfaces that make a difference in people's lives."
              />
              <JobCard
                title="Technical Writer"
                location="Remote (Worldwide)"
                type="Full-time"
                salary="$80k - $110k"
                description="Create comprehensive documentation and guides for our growing suite of accessibility tools."
              />
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Join Us?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <BenefitCard
                title="Remote-First Culture"
                description="Work from anywhere in the world with flexible hours"
              />
              <BenefitCard
                title="Competitive Benefits"
                description="Health insurance, 401(k) matching, and generous PTO"
              />
              <BenefitCard
                title="Learning Budget"
                description="Annual budget for courses, conferences, and books"
              />
              <BenefitCard
                title="Latest Technology"
                description="Work with cutting-edge tools and technologies"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function JobCard({ title, location, type, salary, description }: {
  title: string;
  location: string;
  type: string;
  salary: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
          Apply Now
        </button>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
        <span className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </span>
        <span className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {type}
        </span>
        <span className="flex items-center">
          <DollarSign className="w-4 h-4 mr-1" />
          {salary}
        </span>
      </div>
    </div>
  );
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default CareersPage;