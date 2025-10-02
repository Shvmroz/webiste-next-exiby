'use client';

import { Calendar, QrCode, Users, Building, ChartBar as BarChart3, Shield } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Event Creation',
    description: 'Organizations can easily create and manage professional events with our intuitive interface.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: QrCode,
    title: 'QR Code Integration',
    description: 'Seamless check-in process with QR codes for quick and efficient attendee management.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Multi-User Support',
    description: 'Support for organizations, companies, and individual users with tailored experiences.',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: Building,
    title: 'Organization Management',
    description: 'Complete organizational tools for managing multiple events and team collaboration.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Detailed analytics and reporting to track event performance and attendee engagement.',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Enterprise-grade security ensuring your event data and attendee information is protected.',
    gradient: 'from-gray-500 to-slate-600'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent">
              Every Event
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Everything you need to create, manage, and execute successful events with modern technology and seamless user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Floating Bubbles */}
              <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-r from-[#2684FC]/20 to-[#4A90E2]/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 lg:-bottom-2 lg:-left-2 w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-[#2684FC]/30 to-[#4A90E2]/30 rounded-full animate-bounce delay-300"></div>
              
              <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-r ${feature.gradient} p-3 lg:p-4 mb-4 lg:mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
                {feature.title}
              </h3>
              
              <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}