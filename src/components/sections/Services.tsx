import React from 'react';
import { Cloud, Server, Shield, Globe } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Enterprise-grade cloud infrastructure and migration services for seamless operations.'
  },
  {
    icon: Server,
    title: 'Software Distribution',
    description: 'Efficient software deployment and management across your organization.'
  },
  {
    icon: Shield,
    title: 'Security Services',
    description: 'Advanced security measures to protect your digital assets and data.'
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: '24/7 technical support and maintenance for your IT infrastructure.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition border border-gray-100"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}