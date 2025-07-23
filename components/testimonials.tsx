'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  GraduationCap,
  MapPin,
  Calendar
} from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartSuccess = () => {
    scrollToSection('contact');
  };

  const handleViewMoreReviews = () => {
    // Cycle through testimonials to show more
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: '/api/placeholder/100/100',
      location: 'University of California, Berkeley',
      degree: 'MBA Student',
      rating: 5,
      date: 'December 2024',
      service: 'Dissertation Writing',
      testimonial: 'EduPro Scholars helped me complete my MBA dissertation on time. The quality was exceptional, and my advisor was impressed with the research depth. The writer understood my requirements perfectly and delivered beyond expectations.',
      highlight: 'Exceptional research depth and quality'
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: '/api/placeholder/100/100',
      location: 'MIT',
      degree: 'PhD Computer Science',
      rating: 5,
      date: 'November 2024',
      service: 'Research Paper Writing',
      testimonial: 'As a PhD student, I needed help with a complex research paper. The expert assigned to me had deep knowledge in machine learning and helped me structure my findings perfectly. Published in a top-tier journal!',
      highlight: 'Published in top-tier journal'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      avatar: '/api/placeholder/100/100',
      location: 'University of Oxford',
      degree: 'Undergraduate Psychology',
      rating: 5,
      date: 'October 2024',
      service: 'Assignment Help',
      testimonial: 'I was struggling with multiple assignments and tight deadlines. EduPro Scholars not only helped me submit everything on time but also improved my understanding of the subjects. Highly recommend!',
      highlight: 'Improved subject understanding'
    },
    {
      id: 4,
      name: 'David Kim',
      avatar: '/api/placeholder/100/100',
      location: 'Stanford University',
      degree: 'Masters in Business',
      rating: 5,
      date: 'September 2024',
      service: 'Case Study Analysis',
      testimonial: 'The case study analysis I received was thorough and well-researched. It helped me understand complex business concepts and scored an A+ on the assignment. The writer was professional and responsive.',
      highlight: 'Scored A+ on assignment'
    },
    {
      id: 5,
      name: 'Priya Patel',
      avatar: '/api/placeholder/100/100',
      location: 'University of Toronto',
      degree: 'Medical Student',
      rating: 5,
      date: 'August 2024',
      service: 'Lab Report Writing',
      testimonial: 'Medical school is demanding, and EduPro Scholars has been a lifesaver. Their lab reports are detailed, accurate, and follow proper scientific format. This service is invaluable for busy medical students.',
      highlight: 'Lifesaver for medical school'
    },
    {
      id: 6,
      name: 'Ahmed Hassan',
      avatar: '/api/placeholder/100/100',
      location: 'University of Melbourne',
      degree: 'Engineering PhD',
      rating: 5,
      date: 'July 2024',
      service: 'Data Analysis',
      testimonial: 'The statistical analysis service was outstanding. Complex SPSS analysis was explained clearly, and the results section was professionally written. This helped me meet my thesis defense deadline.',
      highlight: 'Met thesis defense deadline'
    }
  ];

  const stats = [
    { number: '4.9/5', label: 'Average Rating', icon: Star },
    { number: '50,000+', label: 'Happy Students', icon: GraduationCap },
    { number: '98%', label: 'Success Rate', icon: Badge },
    { number: '24/7', label: 'Support Available', icon: Calendar }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
            Student Success Stories
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Students Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful students who have achieved their academic goals 
            with our expert assistance. Here's what they have to say.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-16">
          <Card className="max-w-4xl mx-auto shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
                {/* Avatar & Info */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <Avatar className="w-24 h-24 mx-auto lg:mx-0 mb-4">
                    <AvatarImage src={testimonials[currentIndex].avatar} />
                    <AvatarFallback className="text-2xl">
                      {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center lg:justify-start space-x-1">
                      <GraduationCap className="w-4 h-4" />
                      <span>{testimonials[currentIndex].degree}</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{testimonials[currentIndex].location}</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{testimonials[currentIndex].date}</span>
                    </div>
                  </div>

                  <Badge className="mt-3 bg-blue-100 text-blue-700">
                    {testimonials[currentIndex].service}
                  </Badge>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <div className="relative">
                    <Quote className="w-8 h-8 text-blue-200 absolute -top-4 -left-4" />
                    
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      "{testimonials[currentIndex].testimonial}"
                    </p>

                    {/* Highlight */}
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                      <p className="text-green-800 font-medium">
                        ✨ {testimonials[currentIndex].highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full shadow-lg bg-white"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full shadow-lg bg-white"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setCurrentIndex(index)}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-gray-600 text-xs">{testimonial.degree}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm line-clamp-3">
                  "{testimonial.testimonial}"
                </p>

                <Badge variant="secondary" className="mt-3 text-xs">
                  {testimonial.service}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the same level of excellence that has helped thousands of students achieve their academic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleStartSuccess}
              >
                Start Your Success Story
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleViewMoreReviews}
              >
                View More Reviews
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}