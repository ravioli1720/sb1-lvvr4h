import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Cloud className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">CloudSpan</span>
            </div>
            <p className="text-gray-400">
              Empowering businesses with innovative cloud solutions and software distribution services.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/#cloud-infrastructure" className="hover:text-blue-400">Cloud Infrastructure</Link></li>
              <li><Link to="/#software-distribution" className="hover:text-blue-400">Software Distribution</Link></li>
              <li><Link to="/#security-services" className="hover:text-blue-400">Security Services</Link></li>
              <li><Link to="/#it-consulting" className="hover:text-blue-400">IT Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/#about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/#careers" className="hover:text-blue-400">Careers</Link></li>
              <li><Link to="/#blog" className="hover:text-blue-400">Blog</Link></li>
              <li><Link to="/#contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-blue-400">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-blue-400">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CloudSpan Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}