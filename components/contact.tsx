'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send,
  Globe,
  Shield,
  Headphones,
  Zap
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: '',
    message: '',
    urgent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Pre-fill form with data from localStorage if available
    const selectedService = localStorage.getItem('selectedService');
    const pricingPreferences = localStorage.getItem('pricingPreferences');
    
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
      localStorage.removeItem('selectedService');
    }
    
    if (pricingPreferences) {
      const prefs = JSON.parse(pricingPreferences);
      setFormData(prev => ({ 
        ...prev, 
        message: `I'm interested in ${selectedService || 'academic help'} for ${prefs.academicLevel} level with ${prefs.deadline} deadline using a ${prefs.writerLevel} writer.`
      }));
      localStorage.removeItem('pricingPreferences');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        service: '',
        message: '',
        urgent: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleLiveChat = () => {
    alert('Live chat feature would be integrated here with a service like Intercom, Zendesk, or Tawk.to');
  };

  const handlePhoneCall = () => {
    window.open('tel:+15551234567', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:support@eduproScholars.com', '_self');
  };
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team instantly',
      details: 'Available 24/7 • Instant responses',
      action: 'Start Chat',
      primary: true
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      details: '+1 (555) 123-4567 • 24/7 Available',
      action: 'Call Now',
      primary: false
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      details: 'support@eduproScholars.com • <2hr response',
      action: 'Send Email',
      primary: false
    }
  ];

   const services = [
    'Assignment Help',
    'Dissertation Writing',
    'Research Paper',
    'Essay Writing',
    'Data Analysis',
    'Editing & Proofreading',
    'Other'
  ]; // ✅ This is correct and ends the array
  return (
   <>
   adj</>
  );
}