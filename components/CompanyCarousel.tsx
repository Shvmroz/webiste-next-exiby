'use client';

import { useEffect, useState } from 'react';

const companies = [
  { name: 'TechCorp', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
  { name: 'InnovateLab', logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
  { name: 'StartupHub', logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
  { name: 'DigitalWorks', logo: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
  { name: 'CloudTech', logo: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
  { name: 'DataFlow', logo: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
  { name: 'AIVentures', logo: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
  { name: 'BlockChain Co', logo: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
];

export default function CompanyCarousel() {
  return (
    <section id="companies" className="py-24 pb-32 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent ml-3">
              Leading Organizations
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of organizations and companies that trust EXIBY for their event management needs.
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12">
            {/* First set */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-64 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#2684FC] to-[#4A90E2] rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{company.name.charAt(0)}</span>
                  </div>
                  <span className="text-gray-800 dark:text-gray-200 font-semibold text-base">{company.name}</span>
                </div>
              </div>
            ))}
            {/* Second set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-64 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#2684FC] to-[#4A90E2] rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{company.name.charAt(0)}</span>
                  </div>
                  <span className="text-gray-800 dark:text-gray-200 font-semibold text-base">{company.name}</span>
                </div>
              </div>
            ))}
            {/* Third set for truly endless loop */}
            {companies.map((company, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 w-64 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#2684FC] to-[#4A90E2] rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{company.name.charAt(0)}</span>
                  </div>
                  <span className="text-gray-800 dark:text-gray-200 font-semibold text-base">{company.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
      `}</style>
    </section>
  );
}