import React from 'react';

export function CookiePolicy() {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small pieces of text sent by your web browser by a website you visit. 
              A cookie file is stored in your web browser and allows the service or a third-party 
              to recognize you and make your next visit easier and more useful to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>To enable certain functions of the service</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>To enable advertisements delivery</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Your Choices Regarding Cookies</h2>
            <p className="text-gray-600 mb-4">
              If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, 
              please visit the help pages of your web browser. Please note, however, that if you delete 
              cookies or refuse to accept them, you might not be able to use all of the features we offer.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}