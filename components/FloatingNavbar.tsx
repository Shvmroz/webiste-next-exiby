'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, Menu, X } from 'lucide-react';

export default function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'dark';

  return (
    <>
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 backdrop-blur-xl ${
        isDark 
          ? (isScrolled 
              ? 'bg-white/10 border-white/20' 
              : 'bg-white/5 border-white/10')
          : (isScrolled 
              ? 'bg-black/10 border-black/20' 
              : 'bg-black/5 border-black/10')
      } rounded-2xl border shadow-2xl px-8 py-4 max-w-6xl w-full mx-6`}>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2684FC] to-[#4A90E2] flex items-center justify-center">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <span className={`font-bold text-xl ${isDark ? 'text-white' : 'text-black'}`}>EXIBY</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#features" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors`}>
              Features
            </Link>
            <Link href="#companies" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors`}>
              Companies
            </Link>
            <Link href="#faq" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors`}>
              FAQ
            </Link>
            <Link href="#contact" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors`}>
              Contact
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login">
              <Button variant="outline" className={`${isDark ? 'border-white text-white hover:bg-white/10' : 'border-black text-black hover:bg-black/10'} backdrop-blur-sm`}>
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-[#2684FC] to-[#4A90E2] text-white hover:from-[#1E6DE8] hover:to-[#3B82E6] transition-all duration-300 rounded-xl shadow-lg">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isDark ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/10'} transition-colors`}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-sm mx-6 ${
          isDark ? 'bg-black/90' : 'bg-white/90'
        } backdrop-blur-xl rounded-2xl border ${
          isDark ? 'border-white/20' : 'border-black/20'
        } shadow-2xl p-6 md:hidden`}>
          <div className="flex flex-col space-y-4">
            <Link 
              href="#features" 
              className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#companies" 
              className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Companies
            </Link>
            <Link 
              href="#faq" 
              className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="#contact" 
              className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-300 dark:border-gray-600">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className={`w-full ${isDark ? 'border-white text-white hover:bg-white/10' : 'border-black text-black hover:bg-black/10'}`}>
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-[#2684FC] to-[#4A90E2] text-white hover:from-[#1E6DE8] hover:to-[#3B82E6] transition-all duration-300 rounded-xl shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}