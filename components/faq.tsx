'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MessageCircle, Shield, Clock, Users, HelpCircle, Zap } from 'lucide-react';

export default function FAQ() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLiveChat = () => {
    // In a real implementation, this would open a chat widget
    alert('Live chat feature would open here. For now, please scroll to the contact section.');
    scrollToSection('contact');
  };

  const handleContactUs = () => {
    scrollToSection('contact');
  };

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: Zap,
      faqs: [
        {
          question: 'How do I place an order?',
          answer: 'Placing an order is simple! Click on "Order Now", fill out the order form with your requirements, upload any relevant files, choose your deadline and writer level, then proceed to payment. You\'ll receive confirmation and be matched with an expert within 30 minutes.'
        },
        {
          question: 'What information do I need to provide?',
          answer: 'Please provide detailed instructions, topic, academic level, deadline, number of pages, citation style, and any specific requirements. The more information you provide, the better we can tailor the work to your needs.'
        },
        {
          question: 'How long does it take to get matched with a writer?',
          answer: 'Our system typically matches you with a qualified expert within 30 minutes of placing your order. For urgent orders, this process can be even faster.'
        }
      ]
    },
    {
      title: 'Quality & Originality',
      icon: Shield,
      faqs: [
        {
          question: 'Is the work 100% original?',
          answer: 'Yes, absolutely! All work is written from scratch by our expert writers. We provide a free plagiarism report with every order, and our work is guaranteed to pass Turnitin and other plagiarism detection tools.'
        },
        {
          question: 'What if I\'m not satisfied with the quality?',
          answer: 'Your satisfaction is our priority. We offer unlimited free revisions for 14 days after delivery. If you\'re still not satisfied, we provide a full money-back guarantee.'
        },
        {
          question: 'Do you offer plagiarism reports?',
          answer: 'Yes, we provide a detailed plagiarism report with every order at no extra cost. The report shows that your work is 100% original and properly cited.'
        }
      ]
    },
    {
      title: 'Writers & Experts',
      icon: Users,
      faqs: [
        {
          question: 'Who are your writers?',
          answer: 'Our writers are qualified professionals with advanced degrees (Master\'s and PhD) in their respective fields. All writers go through a rigorous screening process and must demonstrate expertise in their subject areas.'
        },
        {
          question: 'Can I communicate with my writer?',
          answer: 'Yes! We provide a secure messaging system that allows you to communicate directly with your assigned writer. You can ask questions, provide additional instructions, or request updates on your order.'
        },
        {
          question: 'How do you match me with the right expert?',
          answer: 'We use an intelligent matching system that considers your subject area, academic level, and specific requirements to pair you with the most qualified expert for your project.'
        }
      ]
    },
    {
      title: 'Pricing & Payment',
      icon: Clock,
      faqs: [
        {
          question: 'How is pricing calculated?',
          answer: 'Pricing depends on academic level, deadline, writer level, and service type. Use our price calculator for an instant quote. We offer competitive rates and regular discounts for new and returning customers.'
        },
        {
          question: 'Do you offer discounts?',
          answer: 'Yes! New customers get 20% off their first order. We also offer bulk discounts for large orders and loyalty discounts for returning customers. Follow us on social media for special promotions.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, and other secure payment methods. All payments are processed through encrypted, secure channels to protect your financial information.'
        }
      ]
    },
    {
      title: 'Delivery & Deadlines',
      icon: Clock,
      faqs: [
        {
          question: 'Can you handle urgent orders?',
          answer: 'Yes, we can handle orders with deadlines as short as 6 hours. However, we recommend placing orders in advance when possible for the best quality and lower prices.'
        },
        {
          question: 'What if you miss my deadline?',
          answer: 'We have a 99% on-time delivery rate. In the rare case of a delay, we\'ll notify you immediately and offer compensation. Our guarantee covers on-time delivery for all orders.'
        },
        {
          question: 'Can I get a draft before the final deadline?',
          answer: 'For longer projects (dissertations, theses), we can provide chapter drafts or progress updates. Just mention this requirement when placing your order.'
        }
      ]
    },
    {
      title: 'Privacy & Security',
      icon: Shield,
      faqs: [
        {
          question: 'Is my personal information safe?',
          answer: 'Absolutely. We use advanced encryption and follow strict privacy policies. Your personal information is never shared with third parties, and all communication is secure and confidential.'
        },
        {
          question: 'Will anyone know I used your service?',
          answer: 'No, your privacy is completely protected. We maintain strict confidentiality, and there\'s no way for anyone to know you used our services unless you choose to tell them.'
        },
        {
          question: 'Do you keep my work after completion?',
          answer: 'Your completed work belongs to you. While we may keep a copy for quality assurance purposes, we never resell or reuse your work. Each order is unique and confidential.'
        }
      ]
    }
  ];

  const quickStats = [
    { icon: Users, number: '500+', label: 'Expert Writers' },
    { icon: Shield, number: '99.9%', label: 'Privacy Protected' },
    { icon: Clock, number: '24/7', label: 'Customer Support' },
    { icon: MessageCircle, number: '<2hrs', label: 'Response Time' }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Got Questions? We Have Answers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our academic services, pricing, 
            quality guarantees, and how we can help you succeed.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <category.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>

                <Accordion type="single" collapsible className="space-y-2">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Our friendly support team is here to help 24/7. 
                Get in touch and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={handleLiveChat}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Live Chat Support
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleContactUs}
                >
                  Contact Us
                </Button>
              </div>
              <div className="mt-6 text-sm text-gray-500">
                <p>📧 support@eduproScholars.com | 📱 +1 (555) 123-4567</p>
                <p className="mt-1">Average response time: Less than 2 hours</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}