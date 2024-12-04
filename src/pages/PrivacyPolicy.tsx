import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              At CloudSpan Technology, we collect various types of information to provide and improve our services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Business information</li>
              <li>Usage data and analytics</li>
              <li>Technical information about your devices and systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Protection</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate data collection, storage, and processing practices and security 
              measures to protect against unauthorized access, alteration, disclosure, or destruction 
              of your personal information and data stored on our systems.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}