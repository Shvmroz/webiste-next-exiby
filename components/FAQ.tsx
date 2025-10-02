'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How does EXIBY help organizations manage events?',
    answer: 'EXIBY provides a comprehensive platform for organizations to create, manage, and track events. Features include event creation tools, attendee management, QR code check-ins, analytics, and real-time reporting.'
  },
  {
    question: 'What is the QR code functionality?',
    answer: 'Our QR code system allows for seamless event check-ins. Attendees receive unique QR codes upon registration, which can be scanned at the event for quick and efficient entry tracking.'
  },
  {
    question: 'Can companies join events created by organizations?',
    answer: 'Yes! Companies can browse and join events created by organizations. They can manage their team participation, track attendance, and receive event updates through their company dashboard.'
  },
  {
    question: 'Is there a difference between Organization, Company, and Individual accounts?',
    answer: 'Yes. Organizations can create and manage events, Companies can join events and manage team participation, and Individuals can discover and attend events. Each account type has tailored features and permissions.'
  },
  {
    question: 'How secure is the platform?',
    answer: 'EXIBY uses enterprise-grade security measures including data encryption, secure authentication, and regular security audits to protect your event data and attendee information.'
  },
  {
    question: 'Can I track event analytics and attendance?',
    answer: 'Absolutely! EXIBY provides detailed analytics including attendance rates, check-in times, participant demographics, and engagement metrics to help you measure event success.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-[#2684FC] to-[#4A90E2] bg-clip-text text-transparent ml-3">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about EXIBY and how it can help streamline your event management.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#2684FC] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#2684FC] flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}