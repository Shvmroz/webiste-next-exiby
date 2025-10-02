'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, Users, Building, Moon, Sun } from 'lucide-react';

export default function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 backdrop-blur-xl ${
      isScrolled 
        ? 'bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10' 
        : 'bg-white/5 dark:bg-black/5 border-white/10 dark:border-white/5'
    } rounded-2xl border shadow-2xl px-8 py-4`}>
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2684FC] to-[#4A90E2] flex items-center justify-center">
            <Calendar className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-xl text-gray-800 dark:text-white">EXIBY</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors">
            Features
          </Link>
          <Link href="#companies" className="text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors">
            Companies
          </Link>
          <Link href="#faq" className="text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors">
            FAQ
          </Link>
          <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-[#2684FC] transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-600 dark:text-gray-300 hover:text-[#2684FC] hover:bg-white/10"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <Link href="/login">
            <Button variant="ghost" className="text-[#2684FC] hover:bg-[#2684FC]/10 backdrop-blur-sm">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-gradient-to-r from-[#2684FC] to-[#4A90E2] text-white hover:from-[#1E6DE8] hover:to-[#3B82E6] transition-all duration-300 rounded-xl shadow-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}