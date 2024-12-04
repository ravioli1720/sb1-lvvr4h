import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empower Your Business with Cloud Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Transform your organization with enterprise-grade software distribution and cloud services. 
              Stay ahead in the digital era with CloudSpan Technology.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
              alt="Digital Technology"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}