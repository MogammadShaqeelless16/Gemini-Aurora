import React from 'react';
import { Target, Compass, Building2 } from 'lucide-react';

const About = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Vision */}
        <div className="space-y-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Target className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To create a web where accessibility and safety are not afterthoughts but fundamental aspects of every digital experience, ensuring equal access and protection for all users regardless of their abilities or age.
          </p>
        </div>

        {/* Mission */}
        <div className="space-y-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Compass className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To empower developers, content creators, and organizations with cutting-edge tools that seamlessly integrate accessibility standards and content safety measures into their digital products, making the web better for everyone.
          </p>
        </div>

        {/* About Us */}
        <div className="space-y-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">About Us</h3>
          <p className="text-gray-600 leading-relaxed">
            Developed by Soft Glitch Solutions, Gemini Leda represents our commitment to innovation in web accessibility and content safety. We combine technical expertise with a deep understanding of user needs to create solutions that make the web more inclusive and secure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;