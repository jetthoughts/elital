'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrainCircuit, Mail, Menu, X } from 'lucide-react';
import Button from './shared/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BrainCircuit className="h-8 w-8 text-emerald-500" />
            <span className="text-2xl font-bold text-emerald-500">Elital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/blog" 
              className="text-gray-600 hover:text-emerald-500 transition"
            >
              Blog
            </Link>
            <Button href="/contact">Contact Us</Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/contact" className="text-emerald-500 hover:text-emerald-600">
              <Mail className="h-6 w-6" />
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <Link 
              href="/blog" 
              className="block py-2 text-gray-600 hover:text-emerald-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}