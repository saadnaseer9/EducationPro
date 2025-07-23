'use client';

import Link from 'next/link';
import { 
  GraduationCap, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Shield,
  Award,
  Clock,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    if (email) {
      alert(`Thank you for subscribing with email: ${email}`);
      form.reset();
    }
  };

  const handleCustomService = () => {
    scrollToSection('contact');
  };

  const footerSections = [
    {
      title: 'Our Services',
      links: [
        { name: 'Assignment Help', href: '#services' },
        { name: 'Dissertation Writing', href: '#services' },
        { name: 'Research Papers', href: '#services' },
        { name: 'Essay Writing', href: '#services' },
        { name: 'Data Analysis', href: '#services' },
        { name: 'Editing & Proofreading', href: '#services' }
      ]
    },
    {
      title: 'Academic Levels',
      links: [
        { name: 'High School', href: '#pricing' },
        { name: 'Undergraduate', href: '#pricing' },
        { name: 'Masters', href: '#pricing' },
        { name: 'PhD', href: '#pricing' },
        { name: 'Professional', href: '#pricing' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Live Chat', href: '#contact' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Blog', href: '#blog' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Writers', href: '/writers' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Samples', href: '#samples' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' }
      ]
    }
  ];

  const trustBadges = [
    { icon: Shield, text: '100% Secure' },
    { icon: Award, text: 'Top Rated' },
    { icon: Clock, text: '24/7 Support' },
    { icon: Users, text: '50K+ Students' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-blue-600">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Academic Tips & Offers
            </h3>
            <p className="text-blue-100 mb-8">
              Subscribe to our newsletter for study tips, writing guides, and exclusive discounts.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                name="email"
                placeholder="Enter your email" 
                className="bg-white text-gray-900 border-0 flex-1"
                required
              />
              <Button type="submit" className="bg-blue-800 hover:bg-blue-900 px-8">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-blue-200 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <div>
                <h1 className="text-2xl font-bold text-white">EduPro Scholars</h1>
                <p className="text-sm text-gray-400">Academic Excellence Guaranteed</p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering students worldwide with premium academic support services. 
              Join 50,000+ successful students who trust us for their academic journey.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">support@eduproScholars.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">New York, London, Sydney</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <badge.icon className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => link.href.startsWith('#') ? scrollToSection(link.href.slice(1)) : window.location.href = link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400">
                © {currentYear} EduPro Scholars. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Trusted by students worldwide for academic excellence.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-gray-400 hover:text-blue-400 transition-colors">
                Refund Policy
              </Link>
              <Link href="/plagiarism" className="text-gray-400 hover:text-blue-400 transition-colors">
                Anti-Plagiarism
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => alert(`${social.name} page would open here`)}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Security Badges */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-300">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-300">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-gray-300">PCI DSS Certified</span>
            </div>
            <div className="text-sm text-gray-400">
              🔒 Your data is safe and encrypted
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}