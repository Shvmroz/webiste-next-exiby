'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Calendar, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userType: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    organizationName: '',
    companyName: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-6">
      <Card className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6 text-[#2684FC] hover:text-[#1E6DE8] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2684FC] to-[#4A90E2] flex items-center justify-center">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">EXIBY</h1>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Create Your Account
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Join EXIBY and start managing events today
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="userType" className="text-gray-700 dark:text-gray-300">Account Type</Label>
            <Select value={formData.userType} onValueChange={(value) => updateFormData('userType', value)}>
              <SelectTrigger className="mt-1 dark:bg-gray-700 dark:border-gray-600">
                <SelectValue placeholder="Select your account type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="organization">Organization</SelectItem>
                <SelectItem value="company">Company</SelectItem>
                <SelectItem value="user">Individual</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {formData.userType === 'organization' && (
            <div>
              <Label htmlFor="organizationName" className="text-gray-700 dark:text-gray-300">Organization Name</Label>
              <Input
                id="organizationName"
                type="text"
                value={formData.organizationName}
                onChange={(e) => updateFormData('organizationName', e.target.value)}
                required
                className="mt-1 dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter organization name"
              />
            </div>
          )}

          {formData.userType === 'company' && (
            <div>
              <Label htmlFor="companyName" className="text-gray-700 dark:text-gray-300">Company Name</Label>
              <Input
                id="companyName"
                type="text"
                value={formData.companyName}
                onChange={(e) => updateFormData('companyName', e.target.value)}
                required
                className="mt-1 dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter company name"
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300">First Name</Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => updateFormData('firstName', e.target.value)}
                required
                className="mt-1 dark:bg-gray-700 dark:border-gray-600"
                placeholder="First name"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => updateFormData('lastName', e.target.value)}
                required
                className="mt-1 dark:bg-gray-700 dark:border-gray-600"
                placeholder="Last name"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              required
              className="mt-1 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              required
              className="mt-1 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</Label>
            <div className="relative mt-1">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => updateFormData('password', e.target.value)}
                required
                className="dark:bg-gray-700 dark:border-gray-600"
                placeholder="Create a password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => updateFormData('confirmPassword', e.target.value)}
              required
              className="mt-1 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Confirm your password"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#2684FC] to-[#4A90E2] text-white hover:from-[#1E6DE8] hover:to-[#3B82E6] transition-all duration-300 py-3 rounded-xl shadow-lg"
          >
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-[#2684FC] hover:text-[#1E6DE8] font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}