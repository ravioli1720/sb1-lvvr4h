import React from 'react';

const partners = [
  {
    name: 'Microsoft',
    logo: 'https://images.unsplash.com/photo-1642132652806-8aa0d7542603?auto=format&fit=crop&q=80&w=200',
    alt: 'Microsoft Logo'
  },
  {
    name: 'Google',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=200',
    alt: 'Google Logo'
  },
  {
    name: 'Ingram Micro',
    logo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=200',
    alt: 'Ingram Micro Logo'
  },
  {
    name: 'Pax8',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=200',
    alt: 'Pax8 Logo'
  },
  {
    name: 'CDW',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200',
    alt: 'CDW Logo'
  }
];

export function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver the best solutions for our clients
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="h-16 w-16 object-contain mb-4 grayscale hover:grayscale-0 transition"
              />
              <span className="text-gray-800 font-medium text-center">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}