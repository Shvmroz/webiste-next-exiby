'use client';

import { Calendar, QrCode, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 overflow-hidden pt-32 pb-16">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="text-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Event Management
              <span className="block bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
              Empower organizations to create seamless events while enabling attendees 
              to join effortlessly with QR code technology.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="text-left p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                <div className="text-3xl font-bold text-[#2684FC] mb-2">1000+</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Events Created</div>
              </div>
              <div className="text-left p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                <div className="text-3xl font-bold text-[#2684FC] mb-2">50K+</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Happy Attendees</div>
              </div>
              <div className="text-left p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                <div className="text-3xl font-bold text-[#2684FC] mb-2">200+</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Organizations</div>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative lg:pl-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Professional Event Management" 
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2684FC]/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}