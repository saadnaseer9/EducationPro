'use client';

import { useState } from 'react';
import { Star, Shield, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('assignment');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    scrollToSection('services');
  };

  const handleViewSamples = () => {
    // For now, scroll to testimonials as we don't have a samples section
    scrollToSection('testimonials');
  };

  const services = [
    { id: 'assignment', name: 'Assignment Help', icon: '📝' },
    { id: 'dissertation', name: 'Dissertation Writing', icon: '🎓' },
    { id: 'research', name: 'Research Papers', icon: '🔬' },
    { id: 'essay', name: 'Essay Writing', icon: '✍️' },
  ];

  const stats = [
    { icon: Users, number: '50,000+', label: 'Happy Students' },
    { icon: CheckCircle, number: '98%', label: 'Success Rate' },
    { icon: Star, number: '4.9/5', label: 'Average Rating' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="academic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#1e40af"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#academic-pattern)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Badges */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full">
                <Shield className="w-4 h-4" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center space-x-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                <Star className="w-4 h-4" />
                <span>Top Rated Service</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Academic Excellence
                <span className="text-blue-600 block">Made Simple</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get expert help with assignments, dissertations, research papers, and more. 
                Join 50,000+ students who trust us for their academic success.
              </p>
            </div>

            {/* Service Tabs */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      activeTab === service.id
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span>{service.icon}</span>
                    <span>{service.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                onClick={handleGetStarted}
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-lg px-8 py-4"
                onClick={handleViewSamples}
              >
                View Samples
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Card */}
            <Card className="relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Premium Academic Support</h3>
                      <p className="text-sm text-gray-600">Expert writers • PhD qualified</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Plagiarism-free content</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">24/7 customer support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Money-back guarantee</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">On-time delivery</span>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-700">Limited Time</div>
                      <div className="text-green-600">20% OFF your first order</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-200 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-200 rounded-full opacity-80 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}