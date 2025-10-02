'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, QrCode, Users } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 overflow-hidden pt-24">
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-10 animate-bounce delay-100">
          <Calendar className="w-8 h-8 text-[#2684FC]/30" />
        </div>
        <div className="absolute top-48 right-16 animate-pulse delay-300">
          <QrCode className="w-10 h-10 text-[#2684FC]/20" />
        </div>
        <div className="absolute bottom-48 left-20 animate-bounce delay-500">
          <Users className="w-6 h-6 text-[#2684FC]/40" />
        </div>
        <div className="absolute top-60 left-1/3 animate-pulse delay-700">
          <Calendar className="w-5 h-5 text-[#2684FC]/25" />
        </div>
        <div className="absolute bottom-60 right-1/4 animate-bounce delay-1000">
          <QrCode className="w-7 h-7 text-[#2684FC]/30" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Event Management
              <span className="block bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-lg">
              Empower organizations to create seamless events while enabling attendees 
              to join effortlessly with QR code technology.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-[#2684FC] to-[#4A90E2] text-white px-8 py-4 text-base font-medium rounded-lg hover:from-[#1E6DE8] hover:to-[#3B82E6] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Creating Events
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Link href="#features">
                <Button variant="outline" className="border-2 border-[#2684FC] text-[#2684FC] dark:text-[#2684FC] px-8 py-4 text-base font-medium rounded-lg hover:bg-[#2684FC]/10 transition-all duration-300 backdrop-blur-sm">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-left p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#2684FC] mb-2">1000+</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Events Created</div>
              </div>
              <div className="text-left p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#2684FC] mb-2">50K+</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Happy Attendees</div>
              </div>
              <div className="text-left p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#2684FC] mb-2">200+</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Organizations</div>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Event Management Dashboard" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2684FC]/10 to-transparent"></div>
            </div>
            
            {/* Floating QR Code */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center animate-bounce border border-gray-200 dark:border-gray-700">
              <QrCode className="w-10 h-10 text-[#2684FC]" />
            </div>
            
            {/* Floating Event Card */}
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 animate-pulse border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <Calendar className="w-8 h-8 text-[#2684FC]" />
                <div>
                  <div className="text-base font-semibold text-gray-900 dark:text-white">Tech Conference 2024</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">250 Attendees</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}