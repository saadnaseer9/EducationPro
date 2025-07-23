'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  GraduationCap, 
  Search, 
  PenTool, 
  FileText, 
  Edit3, 
  BarChart3, 
  Users,
  Award,
  CheckSquare,
  Eye,
  Globe
} from 'lucide-react';

export default function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetHelp = (serviceName: string) => {
    // Store selected service in localStorage for the contact form
    localStorage.setItem('selectedService', serviceName);
    scrollToSection('contact');
  };

  const handleCustomService = () => {
    scrollToSection('contact');
  };

  const services = [
    {
      icon: BookOpen,
      title: 'Assignment Help',
      description: 'Expert assistance across all subjects and academic levels',
      features: ['All subjects covered', 'High school to PhD', 'Step-by-step solutions', 'Original work guaranteed'],
      popular: true,
      subjects: ['Math', 'Business', 'Computer Science', 'Nursing', 'Engineering', 'Psychology']
    },
    {
      icon: GraduationCap,
      title: 'Dissertation & Thesis Writing',
      description: 'Complete dissertation support from proposal to final submission',
      features: ['Proposal writing', 'Chapter-wise service', 'Methodology design', 'Statistical analysis'],
      popular: false,
      subjects: ['All Research Areas', 'Quantitative', 'Qualitative', 'Mixed Methods']
    },
    {
      icon: Search,
      title: 'Research Paper Writing',
      description: 'Professional research papers for peer-reviewed journals',
      features: ['Literature review', 'Data analysis', 'Publication support', 'Citation formatting'],
      popular: true,
      subjects: ['STEM', 'Social Sciences', 'Humanities', 'Business']
    },
    {
      icon: PenTool,
      title: 'Essay Writing',
      description: 'All types of essays with perfect structure and flow',
      features: ['Admission essays', 'Scholarship essays', 'Argumentative essays', 'Reflective writing'],
      popular: false,
      subjects: ['Literature', 'History', 'Philosophy', 'Creative Writing']
    },
    {
      icon: FileText,
      title: 'Coursework Help',
      description: 'Comprehensive support for all coursework requirements',
      features: ['Lab reports', 'Case studies', 'Online class support', 'Project assistance'],
      popular: false,
      subjects: ['Sciences', 'Business', 'Medicine', 'Law']
    },
    {
      icon: Edit3,
      title: 'Editing & Proofreading',
      description: 'Professional editing with formatting in all citation styles',
      features: ['Grammar & syntax', 'APA, MLA, Chicago', 'Structure improvement', 'Reference formatting'],
      popular: true,
      subjects: ['All Documents', 'Academic Papers', 'Dissertations', 'Reports']
    },
    {
      icon: BarChart3,
      title: 'Data Analysis Services',
      description: 'Expert statistical analysis using industry-standard software',
      features: ['SPSS, STATA, R, Python', 'Quantitative analysis', 'Qualitative coding', 'Result interpretation'],
      popular: false,
      subjects: ['Statistics', 'Psychology', 'Business', 'Healthcare']
    },
    {
      icon: Users,
      title: 'Homework Help & Tutoring',
      description: 'One-on-one virtual sessions with subject matter experts',
      features: ['Live tutoring', 'STEM subjects', 'Language learning', 'Exam preparation'],
      popular: false,
      subjects: ['Math', 'Physics', 'Chemistry', 'Languages']
    },
    {
      icon: Award,
      title: 'Academic CVs & Personal Statements',
      description: 'Professional documents for graduate school applications',
      features: ['CV writing', 'Personal statements', 'Fellowship applications', 'PhD program support'],
      popular: false,
      subjects: ['All Fields', 'Graduate School', 'Fellowship', 'PhD Programs']
    },
    {
      icon: CheckSquare,
      title: 'Plagiarism Checking & Removal',
      description: 'Comprehensive plagiarism detection and content improvement',
      features: ['Turnitin reports', 'Similarity reduction', 'Paraphrasing service', 'Originality guarantee'],
      popular: true,
      subjects: ['All Documents', 'Research Papers', 'Assignments', 'Dissertations']
    },
    {
      icon: Eye,
      title: 'Literature Review Services',
      description: 'Systematic literature reviews with comprehensive analysis',
      features: ['Source gathering', 'Critical analysis', 'Synthesis writing', 'Citation management'],
      popular: false,
      subjects: ['All Research Areas', 'Systematic Reviews', 'Meta-analysis']
    },
    {
      icon: Globe,
      title: 'University Application Support',
      description: 'Complete guidance for university and program applications',
      features: ['SOP writing', 'Letter of recommendation', 'Application forms', 'Interview preparation'],
      popular: false,
      subjects: ['Undergraduate', 'Graduate', 'International Students', 'Scholarships']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            Our Academic Services
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Academic Support for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From assignment help to dissertation writing, we provide expert academic services 
            across all subjects and educational levels worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-all duration-300 group">
              {service.popular && (
                <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Subject Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.subjects.slice(0, 3).map((subject, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                  {service.subjects.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{service.subjects.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 group-hover:scale-105 transition-transform"
                  onClick={() => handleGetHelp(service.title)}
                >
                  Get Help Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Service?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We offer custom academic solutions for unique requirements. 
              Contact us to discuss your specific needs.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={handleCustomService}
            >
              Contact Us for Custom Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}