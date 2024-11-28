import React from 'react';
import { Check, Link } from 'react-router-dom';
import Logo from '../../components/Logo';

function PricingPage() {
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mb-12">
            Choose the plan that best fits your needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Free"
              price="$0"
              description="Perfect for individual users"
              features={[
                'Basic accessibility scanning',
                'Content safety checks',
                'Up to 100 pages per month',
                'Community support'
              ]}
              buttonText="Get Started"
              buttonVariant="secondary"
            />
            <PricingCard
              title="Pro"
              price="$9.99"
              period="/month"
              description="For professional developers"
              features={[
                'Advanced accessibility scanning',
                'Custom content filters',
                'Unlimited pages',
                'Priority support',
                'Detailed reports',
                'API access'
              ]}
              buttonText="Start Free Trial"
              buttonVariant="primary"
              highlighted={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              description="For large organizations"
              features={[
                'Custom deployment options',
                'Advanced security features',
                'Dedicated support',
                'SLA guarantees',
                'Custom integrations',
                'Training sessions'
              ]}
              buttonText="Contact Sales"
              buttonVariant="secondary"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function PricingCard({ 
  title, 
  price, 
  period = '', 
  description, 
  features, 
  buttonText, 
  buttonVariant = 'primary',
  highlighted = false 
}: {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant?: 'primary' | 'secondary';
  highlighted?: boolean;
}) {
  return (
    <div className={`p-8 rounded-lg ${
      highlighted 
        ? 'bg-white shadow-xl border-2 border-purple-500 relative' 
        : 'bg-white shadow-sm border border-gray-100'
    }`}>
      {highlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <Check className="w-5 h-5 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2 px-4 rounded-lg ${
          buttonVariant === 'primary'
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-white text-purple-600 border border-purple-200 hover:border-purple-300'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default PricingPage;