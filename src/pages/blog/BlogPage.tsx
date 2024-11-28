import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';
import Logo from '../../components/Logo';

function BlogPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog</h1>
          <p className="text-xl text-gray-600 mb-12">
            Latest insights, updates, and best practices for web accessibility and content safety.
          </p>

          <div className="space-y-12">
            <BlogPost
              title="The Future of Web Accessibility"
              excerpt="Exploring upcoming trends and technologies that will shape the future of web accessibility..."
              author="Sarah Johnson"
              date="Mar 15, 2024"
              readTime="5 min read"
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <BlogPost
              title="Content Safety in the Age of AI"
              excerpt="How artificial intelligence is revolutionizing content moderation and safety measures..."
              author="Michael Chen"
              date="Mar 10, 2024"
              readTime="7 min read"
              image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <BlogPost
              title="WCAG 3.0: What You Need to Know"
              excerpt="A comprehensive overview of the upcoming changes in Web Content Accessibility Guidelines..."
              author="Alex Rivera"
              date="Mar 5, 2024"
              readTime="6 min read"
              image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function BlogPost({ title, excerpt, author, date, readTime, image }: {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}) {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img src={image} alt="" className="h-48 w-full object-cover md:h-full" />
        </div>
        <div className="p-6 md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <a href="#" className="hover:text-purple-600">{title}</a>
          </h2>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {author}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {readTime}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogPage;