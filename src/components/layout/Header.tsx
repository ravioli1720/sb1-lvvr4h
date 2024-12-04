import React from 'react';
import { Menu, X, Cloud } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">CloudSpan</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#solutions" className="text-gray-600 hover:text-blue-600">Solutions</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#solutions" className="block text-gray-600 hover:text-blue-600 py-2">Solutions</a>
            <a href="#services" className="block text-gray-600 hover:text-blue-600 py-2">Services</a>
            <a href="#about" className="block text-gray-600 hover:text-blue-600 py-2">About</a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-600 py-2">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}