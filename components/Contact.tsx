'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Get in
            <span className="bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent ml-3">
              Touch
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to revolutionize your event management? Contact us today and let's discuss how EXIBY can help your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8 flex flex-col justify-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6 text-center lg:text-left">
                Let's Start a Conversation
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6 lg:mb-8 text-center lg:text-left">
                Whether you're an organization looking to streamline your events, a company wanting to improve team participation, or an individual seeking better event experiences, we're here to help.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-[#2684FC] to-[#4A90E2] rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
                  <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm lg:text-base font-bold text-gray-900 dark:text-white">Email Us</h4>
                  <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">contact@exiby.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-[#2684FC] to-[#4A90E2] rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm lg:text-base font-bold text-gray-900 dark:text-white">Call Us</h4>
                  <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-[#2684FC] to-[#4A90E2] rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm lg:text-base font-bold text-gray-900 dark:text-white">Visit Us</h4>
                  <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">123 Innovation Drive<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 lg:p-8 mt-8 lg:mt-0">
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm lg:text-base text-gray-800 dark:text-gray-200 font-medium">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  required
                  className="mt-1 lg:mt-2 dark:bg-gray-700 dark:border-gray-600 rounded-lg lg:rounded-xl border-2 focus:border-[#2684FC] transition-colors text-sm lg:text-base"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm lg:text-base text-gray-800 dark:text-gray-200 font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  required
                  className="mt-1 lg:mt-2 dark:bg-gray-700 dark:border-gray-600 rounded-lg lg:rounded-xl border-2 focus:border-[#2684FC] transition-colors text-sm lg:text-base"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-sm lg:text-base text-gray-800 dark:text-gray-200 font-medium">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => updateFormData('subject', e.target.value)}
                  required
                  className="mt-1 lg:mt-2 dark:bg-gray-700 dark:border-gray-600 rounded-lg lg:rounded-xl border-2 focus:border-[#2684FC] transition-colors text-sm lg:text-base"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm lg:text-base text-gray-800 dark:text-gray-200 font-medium">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => updateFormData('message', e.target.value)}
                  required
                  rows={4}
                  className="mt-1 lg:mt-2 dark:bg-gray-700 dark:border-gray-600 rounded-lg lg:rounded-xl border-2 focus:border-[#2684FC] transition-colors text-sm lg:text-base"
                  placeholder="Tell us more about your needs..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#2684FC] to-[#4A90E2] text-white hover:from-[#1E6DE8] hover:to-[#3B82E6] transition-all duration-300 py-3 lg:py-4 rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 font-medium text-sm lg:text-base"
              >
                Send Message
                <Send className="ml-2 w-3 h-3 lg:w-4 lg:h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}