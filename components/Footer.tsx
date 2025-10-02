'use client';

import Link from 'next/link';
import { Calendar, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin as LinkedIn } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 lg:mb-6 justify-center sm:justify-start">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-[#2684FC] to-[#4A90E2] flex items-center justify-center">
                <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <span className="font-bold text-xl lg:text-2xl">EXIBY</span>
            </div>
            <p className="text-sm lg:text-base text-gray-300 dark:text-gray-400 mb-4 lg:mb-6 max-w-md leading-relaxed text-center sm:text-left">
              Revolutionizing event management with cutting-edge technology. Connect organizations, companies, and attendees seamlessly.
            </p>
            <div className="flex space-x-3 lg:space-x-4 justify-center sm:justify-start">
              <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-700 hover:bg-[#2684FC] flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-3 h-3 lg:w-4 lg:h-4" />
              </a>
              <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-700 hover:bg-[#2684FC] flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-3 h-3 lg:w-4 lg:h-4" />
              </a>
              <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-700 hover:bg-[#2684FC] flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-3 h-3 lg:w-4 lg:h-4" />
              </a>
              <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-700 hover:bg-[#2684FC] flex items-center justify-center transition-colors duration-300">
                <LinkedIn className="w-3 h-3 lg:w-4 lg:h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base lg:text-lg mb-4 lg:mb-6 text-center sm:text-left">Quick Links</h3>
            <ul className="space-y-2 lg:space-y-3 text-center sm:text-left">
              <li><Link href="#features" className="text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-[#2684FC] transition-colors">Features</Link></li>
              <li><Link href="#companies" className="text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-[#2684FC] transition-colors">Companies</Link></li>
              <li><Link href="#faq" className="text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-[#2684FC] transition-colors">FAQ</Link></li>
              <li><Link href="#contact" className="text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-[#2684FC] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base lg:text-lg mb-4 lg:mb-6 text-center sm:text-left">Contact Us</h3>
            <ul className="space-y-2 lg:space-y-3">
              <li className="flex items-center text-gray-300 dark:text-gray-400 justify-center sm:justify-start">
                <Mail className="w-3 h-3 lg:w-4 lg:h-4 mr-2 lg:mr-3 text-[#2684FC] flex-shrink-0" />
                <span className="text-sm lg:text-base">contact@exiby.com</span>
              </li>
              <li className="flex items-center text-gray-300 dark:text-gray-400 justify-center sm:justify-start">
                <Phone className="w-3 h-3 lg:w-4 lg:h-4 mr-2 lg:mr-3 text-[#2684FC] flex-shrink-0" />
                <span className="text-sm lg:text-base">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start text-gray-300 dark:text-gray-400 justify-center sm:justify-start">
                <MapPin className="w-3 h-3 lg:w-4 lg:h-4 mr-2 lg:mr-3 mt-1 text-[#2684FC] flex-shrink-0" />
                <span className="text-sm lg:text-base text-center sm:text-left">123 Innovation Drive<br />San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-500 text-xs lg:text-sm text-center md:text-left">
              © 2024 EXIBY. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 lg:space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 dark:text-gray-500 hover:text-[#2684FC] text-xs lg:text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 dark:text-gray-500 hover:text-[#2684FC] text-xs lg:text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 dark:text-gray-500 hover:text-[#2684FC] text-xs lg:text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}