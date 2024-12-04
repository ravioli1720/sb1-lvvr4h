import React from 'react';

export function TermsOfService() {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using CloudSpan Technology's services, you accept and agree to be bound 
              by the terms and provisions of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily access and use our services for personal, 
              non-commercial transitory viewing only.
            </p>
            <p className="text-gray-600 mb-4">This license shall automatically terminate if you violate any of these restrictions:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Transfer the materials to another person or mirror the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              CloudSpan Technology's services are provided "as is". We make no warranties, expressed 
              or implied, and hereby disclaim and negate all other warranties including, without 
              limitation, implied warranties or conditions of merchantability, fitness for a particular 
              purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}