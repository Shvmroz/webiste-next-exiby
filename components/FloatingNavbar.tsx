'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, Users, Building, Moon, Sun, Menu, X } from 'lucide-react';

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

  return (
    <>
      <nav className={`fixed top-3 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 backdrop-blur-xl ${
        isScrolled 
          ? 'bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10' 
          : 'bg-white/5 dark:bg-black/5 border-white/10 dark:border-white/5'
      } rounded-xl sm:rounded-2xl border shadow-2xl px-4 sm:px-8 py-3 sm:py-4 w-[95%] sm:w-auto max-w-6xl`}>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#2684FC] to-[#4A90E2] flex items-center justify-center">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="font-bold text-lg sm:text-xl text-gray-800 dark:text-white">EXIBY</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="#features" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors">
              Features
            </Link>
            <Link href="#companies" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors">
              Companies
            </Link>
            <Link href="#faq" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors">
              FAQ
            </Link>
            <Link href="#contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-600 dark:text-gray-300 hover:text-[#2684FC] hover:bg-white/10"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Link href="/login">
              <Button variant="ghost" className="text-[#2684FC] hover:bg-[#2684FC]/10 backdrop-blur-sm text-sm">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-[#2684FC] to-[#4A90E2] text-white hover:from-[#1E6DE8] hover:to-[#3B82E6] transition-all duration-300 rounded-xl shadow-lg text-sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-600 dark:text-gray-300 hover:text-[#2684FC] hover:bg-white/10 p-2"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-[#2684FC] hover:bg-white/10 p-2"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl p-6">
            <div className="space-y-4">
              <Link 
                href="#features" 
                className="block text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors py-2 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#companies" 
                className="block text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors py-2 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Companies
              </Link>
              <Link 
                href="#faq" 
                className="block text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors py-2 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="#contact" 
                className="block text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors py-2 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full text-[#2684FC] hover:bg-[#2684FC]/10 backdrop-blur-sm">
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
        </div>
      )}
    </>
  );
}