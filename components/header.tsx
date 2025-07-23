'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, GraduationCap, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleGetQuote = () => {
    scrollToSection('contact');
  };

  const handleOrderNow = () => {
    scrollToSection('pricing');
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Samples', href: '#samples' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-3 h-3" />
              <span>support@eduproScholars.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>🌍 Serving Students Worldwide • 24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">EduPro Scholars</h1>
                <p className="text-xs text-gray-600">Academic Excellence Guaranteed</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => item.href.startsWith('#') ? scrollToSection(item.href.slice(1)) : window.location.href = item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={handleGetQuote}
              >
                Get Quote
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleOrderNow}
              >
                Order Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => item.href.startsWith('#') ? scrollToSection(item.href.slice(1)) : window.location.href = item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium py-2"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    className="border-blue-600 text-blue-600"
                    onClick={handleGetQuote}
                  >
                    Get Quote
                  </Button>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={handleOrderNow}
                  >
                    Order Now
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}