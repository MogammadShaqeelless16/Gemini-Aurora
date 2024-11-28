import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Code, Terminal, FileText } from 'lucide-react';
import Logo from '../../components/Logo';

function DocumentationPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Documentation</h1>
          <p className="text-xl text-gray-600 mb-12">
            Learn how to use Gemini Aurora effectively with our comprehensive guides and API documentation.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <DocSection
              icon={<Book />}
              title="Getting Started"
              description="Learn the basics of Gemini Aurora and how to set it up for your project."
              links={[
                { text: "Installation Guide", href: "#installation" },
                { text: "Quick Start Tutorial", href: "#quickstart" },
                { text: "Basic Concepts", href: "#concepts" }
              ]}
            />
            <DocSection
              icon={<Code />}
              title="API Reference"
              description="Detailed documentation of our API endpoints and parameters."
              links={[
                { text: "API Overview", href: "#api-overview" },
                { text: "Authentication", href: "#authentication" },
                { text: "Endpoints", href: "#endpoints" }
              ]}
            />
            <DocSection
              icon={<Terminal />}
              title="CLI Documentation"
              description="Learn how to use our command-line interface for automation."
              links={[
                { text: "CLI Installation", href: "#cli-install" },
                { text: "Commands", href: "#commands" },
                { text: "Configuration", href: "#config" }
              ]}
            />
            <DocSection
              icon={<FileText />}
              title="Guides & Tutorials"
              description="Step-by-step tutorials and best practices for common use cases."
              links={[
                { text: "Best Practices", href: "#best-practices" },
                { text: "Advanced Features", href: "#advanced" },
                { text: "Troubleshooting", href: "#troubleshooting" }
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function DocSection({ icon, title, description, links }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  links: Array<{ text: string; href: string; }>;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-purple-600 hover:text-purple-700 hover:underline">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentationPage;