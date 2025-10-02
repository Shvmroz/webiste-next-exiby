'use client';

import Link from 'next/link';
import { Calendar, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin as LinkedIn } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#2684FC] to-[#4A90E2] flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-2xl">EXIBY</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
              Revolutionizing event management with cutting-edge technology. Connect organizations, companies, and attendees seamlessly.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 hover:bg-[#2684FC] flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 hover:bg-[#2684FC] flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 hover:bg-[#2684FC] flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 hover:bg-[#2684FC] flex items-center justify-center transition-colors duration-300">
                <LinkedIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#features" className="text-gray-300 dark:text-gray-400 hover:text-[#2684FC] transition-colors">Features</Link></li>
              <li><Link href="#companies" className="text-gray-300 dark:text-gray-400 hover:text-[#2684FC] transition-colors">Companies</Link></li>
              <li><Link href="#faq" className="text-gray-300 dark:text-gray-400 hover:text-[#2684FC] transition-colors">FAQ</Link></li>
              <li><Link href="#contact" className="text-gray-300 dark:text-gray-400 hover:text-[#2684FC] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300 dark:text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-[#2684FC]" />
                <span>contact@exiby.com</span>
              </li>
              <li className="flex items-center text-gray-300 dark:text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-[#2684FC]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start text-gray-300 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-[#2684FC]" />
                <span>123 Innovation Drive<br />San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © 2024 EXIBY. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 dark:text-gray-500 hover:text-[#2684FC] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 dark:text-gray-500 hover:text-[#2684FC] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 dark:text-gray-500 hover:text-[#2684FC] text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}