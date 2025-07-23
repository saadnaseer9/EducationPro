'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Check, 
  Star, 
  Clock, 
  Zap,
  Shield,
  Users,
  Calculator,
  TrendingUp
} from 'lucide-react';

export default function Pricing() {
  const [selectedLevel, setSelectedLevel] = useState('undergraduate');
  const [selectedDeadline, setSelectedDeadline] = useState('7-days');
  const [selectedWriter, setSelectedWriter] = useState('standard');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetCustomQuote = () => {
    // Store pricing preferences in localStorage
    localStorage.setItem('pricingPreferences', JSON.stringify({
      academicLevel: selectedLevel,
      deadline: selectedDeadline,
      writerLevel: selectedWriter
    }));
    scrollToSection('contact');
  };

  const handleOrderService = (serviceName: string, price: number) => {
    localStorage.setItem('selectedService', serviceName);
    localStorage.setItem('estimatedPrice', price.toString());
    scrollToSection('contact');
  };

  const academicLevels = [
    { id: 'high-school', name: 'High School', multiplier: 1.0 },
    { id: 'undergraduate', name: 'Undergraduate', multiplier: 1.2 },
    { id: 'masters', name: 'Masters', multiplier: 1.5 },
    { id: 'phd', name: 'PhD', multiplier: 2.0 }
  ];

  const deadlines = [
    { id: '14-days', name: '14+ Days', basePrice: 12, urgent: false },
    { id: '7-days', name: '7 Days', basePrice: 15, urgent: false },
    { id: '3-days', name: '3 Days', basePrice: 20, urgent: false },
    { id: '24-hours', name: '24 Hours', basePrice: 30, urgent: true },
    { id: '12-hours', name: '12 Hours', basePrice: 40, urgent: true },
    { id: '6-hours', name: '6 Hours', basePrice: 55, urgent: true }
  ];

  const writerLevels = [
    {
      id: 'standard',
      name: 'Standard Writer',
      multiplier: 1.0,
      features: ['Bachelor\'s degree', 'Native English speaker', 'Quality guarantee', '24/7 support'],
      popular: false
    },
    {
      id: 'advanced',
      name: 'Advanced Writer',
      multiplier: 1.3,
      features: ['Master\'s degree', 'Subject specialist', 'Premium quality', 'Priority support'],
      popular: true
    },
    {
      id: 'top',
      name: 'Top Writer',
      multiplier: 1.6,
      features: ['PhD qualification', 'Published author', 'Exceptional quality', 'VIP support'],
      popular: false
    }
  ];

  const services = [
    {
      category: 'Writing Services',
      items: [
        { name: 'Essay Writing', basePrice: 12, popular: true },
        { name: 'Research Paper', basePrice: 15, popular: true },
        { name: 'Dissertation Chapter', basePrice: 20, popular: false },
        { name: 'Thesis Writing', basePrice: 25, popular: false },
        { name: 'Assignment Help', basePrice: 10, popular: true },
        { name: 'Coursework', basePrice: 12, popular: false }
      ]
    },
    {
      category: 'Specialized Services',
      items: [
        { name: 'Data Analysis', basePrice: 30, popular: false },
        { name: 'PowerPoint Presentation', basePrice: 8, popular: false },
        { name: 'Lab Report', basePrice: 15, popular: false },
        { name: 'Case Study', basePrice: 18, popular: false },
        { name: 'Literature Review', basePrice: 20, popular: false },
        { name: 'Editing & Proofreading', basePrice: 5, popular: true }
      ]
    }
  ];

  const calculatePrice = (basePrice: number, academicLevel: string, writerLevel: string) => {
    const levelMultiplier = academicLevels.find(l => l.id === academicLevel)?.multiplier || 1.2;
    const writerMultiplier = writerLevels.find(w => w.id === writerLevel)?.multiplier || 1.0;
    return Math.round(basePrice * levelMultiplier * writerMultiplier);
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Affordable Academic Help for Every Budget
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality academic assistance doesn't have to break the bank. 
            Choose from flexible pricing options that fit your needs and budget.
          </p>
        </div>

        {/* Price Calculator */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-8">
            <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Price Calculator</h3>
            <p className="text-gray-600">Get an instant quote for your academic project</p>
          </div>

          <Tabs defaultValue="quick-quote" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="quick-quote">Quick Quote</TabsTrigger>
              <TabsTrigger value="detailed">Detailed Pricing</TabsTrigger>
            </TabsList>

            <TabsContent value="quick-quote" className="space-y-8">
              {/* Academic Level Selection */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Academic Level</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {academicLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSelectedLevel(level.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedLevel === level.id
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium">{level.name}</div>
                      <div className="text-sm text-gray-500">×{level.multiplier}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Deadline Options */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Deadline</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {deadlines.map((deadline) => (
                    <Card 
                      key={deadline.id} 
                      className={`cursor-pointer hover:shadow-lg transition-all ${
                        deadline.urgent ? 'border-orange-200' : ''
                      } ${
                        selectedDeadline === deadline.id ? 'border-blue-500 bg-blue-50' : ''
                      }`}
                      onClick={() => setSelectedDeadline(deadline.id)}
                    >
                      <CardContent className="p-4 text-center">
                        {deadline.urgent && (
                          <Badge className="mb-2 bg-orange-100 text-orange-700">Urgent</Badge>
                        )}
                        <div className="font-medium text-gray-900">{deadline.name}</div>
                        <div className="text-lg font-bold text-blue-600">
                          ${calculatePrice(deadline.basePrice, selectedLevel, 'standard')}
                        </div>
                        <div className="text-xs text-gray-500">per page</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="detailed" className="space-y-8">
              {/* Writer Levels */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Writer Level</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {writerLevels.map((writer) => (
                    <Card 
                      key={writer.id} 
                      className={`relative hover:shadow-lg transition-all cursor-pointer ${
                        writer.popular ? 'border-blue-200 border-2' : ''
                      } ${
                        selectedWriter === writer.id ? 'border-blue-500 bg-blue-50' : ''
                      }`}
                      onClick={() => setSelectedWriter(writer.id)}
                    >
                      {writer.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white">
                          Most Popular
                        </Badge>
                      )}
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <span>{writer.name}</span>
                          <Badge variant="outline">+{Math.round((writer.multiplier - 1) * 100)}%</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {writer.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Check className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Service Pricing */}
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h4>
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          {category.items.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                              <div className="flex items-center space-x-2">
                                <span className="text-gray-900">{item.name}</span>
                                {item.popular && (
                                  <Star className="w-4 h-4 text-yellow-500" />
                                )}
                              </div>
                              <div className="text-right">
                                <button 
                                  className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                                  onClick={() => handleOrderService(item.name, calculatePrice(item.basePrice, selectedLevel, selectedWriter))}
                                >
                                  ${calculatePrice(item.basePrice, selectedLevel, 'standard')}
                                </button>
                                <div className="text-xs text-gray-500">per page</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA */}
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 px-8"
              onClick={handleGetCustomQuote}
            >
              Get Custom Quote
            </Button>
          </div>
        </div>

        {/* Pricing Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: 'Money-Back Guarantee',
              description: '100% refund if not satisfied'
            },
            {
              icon: Clock,
              title: 'On-Time Delivery',
              description: 'Never miss a deadline'
            },
            {
              icon: Users,
              title: 'Expert Writers',
              description: 'PhD qualified professionals'
            },
            {
              icon: TrendingUp,
              title: 'Best Value',
              description: 'Competitive pricing guaranteed'
            }
          ].map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl text-center">
          <Zap className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Limited Time Offers</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold">20%</div>
              <div className="text-green-200">OFF First Order</div>
              <div className="text-sm text-green-100 mt-2">New customers only</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold">15%</div>
              <div className="text-blue-200">OFF Bulk Orders</div>
              <div className="text-sm text-blue-100 mt-2">5+ pages discount</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold">FREE</div>
              <div className="text-yellow-200">Revisions</div>
              <div className="text-sm text-yellow-100 mt-2">Unlimited changes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}