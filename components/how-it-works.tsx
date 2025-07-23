'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  CreditCard, 
  Users, 
  FileCheck, 
  Download,
  Clock,
  Shield,
  Repeat
} from 'lucide-react';

export default function HowItWorks() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlaceOrder = () => {
    scrollToSection('pricing');
  };

  const handleCalculatePrice = () => {
    scrollToSection('pricing');
  };

  const steps = [
    {
      icon: MessageSquare,
      title: 'Submit Your Requirements',
      description: 'Share your assignment details, deadline, and specific instructions through our secure form.',
      details: ['Upload files & resources', 'Set your deadline', 'Specify requirements', 'Choose your expert level'],
      time: '2 minutes'
    },
    {
      icon: CreditCard,
      title: 'Make Secure Payment',
      description: 'Choose from flexible payment options with our secure, encrypted payment system.',
      details: ['Multiple payment methods', 'Secure SSL encryption', 'Money-back guarantee', 'Transparent pricing'],
      time: '1 minute'
    },
    {
      icon: Users,
      title: 'Expert Assignment',
      description: 'We match you with the most qualified expert in your subject area and academic level.',
      details: ['PhD qualified writers', 'Subject matter experts', 'Native English speakers', 'Verified credentials'],
      time: '30 minutes'
    },
    {
      icon: FileCheck,
      title: 'Work in Progress',
      description: 'Track your order progress and communicate directly with your assigned expert.',
      details: ['Real-time updates', 'Direct communication', 'Draft previews', 'Quality monitoring'],
      time: 'Ongoing'
    },
    {
      icon: Download,
      title: 'Receive Your Work',
      description: 'Get your completed assignment with quality report, plagiarism check, and free revisions.',
      details: ['Plagiarism report', 'Quality guarantee', 'Free revisions', 'On-time delivery'],
      time: 'On deadline'
    }
  ];

  const guarantees = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We guarantee delivery before your deadline, every time.'
    },
    {
      icon: Shield,
      title: '100% Original Work',
      description: 'All work is written from scratch with plagiarism reports.'
    },
    {
      icon: Repeat,
      title: 'Free Revisions',
      description: 'Unlimited revisions until you are completely satisfied.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
            Simple Process
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How It Works - 5 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting academic help has never been easier. Follow our streamlined process 
            and get expert assistance in just a few clicks.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-all duration-300 group">
                {/* Step Number */}
                <div className="absolute -top-4 left-6 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                <CardContent className="pt-8 pb-6">
                  <div className="space-y-4">
                    {/* Icon & Time */}
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <step.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {step.time}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    
                    {/* Details */}
                    <div className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Guarantees Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Guarantees to You</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We stand behind our work with industry-leading guarantees that ensure your success and satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-green-200">
                <CardContent className="pt-8 pb-6">
                  <div className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <guarantee.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">{guarantee.title}</h4>
                    <p className="text-gray-600">{guarantee.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who trust us with their academic success. 
              Submit your first order and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={handlePlaceOrder}
              >
                Place Your Order Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={handleCalculatePrice}
              >
                Calculate Price
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}