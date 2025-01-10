'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, BookOpen } from 'lucide-react';
import Button from './shared/Button';

const Logo = () => (
  <svg
    className="h-8 w-8 text-emerald-500"
    viewBox="0 0 1000 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="500" cy="500" r="500" className="fill-emerald-100" />
    <circle
      cx="500"
      cy="500"
      r="400"
      className="fill-emerald-500"
      fillOpacity="0.2"
    />
    <circle
      cx="500"
      cy="500"
      r="300"
      className="fill-emerald-500"
      fillOpacity="0.4"
    />
    <path
      d="M350 500C350 416.157 418.157 348 502 348C585.843 348 654 416.157 654 500C654 583.843 585.843 652 502 652"
      stroke="currentColor"
      strokeWidth="48"
      strokeLinecap="round"
    />
    <path
      d="M502 652C418.157 652 350 583.843 350 500"
      stroke="currentColor"
      strokeWidth="48"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <path
      d="M502 348C585.843 348 654 416.157 654 500"
      stroke="currentColor"
      strokeWidth="48"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <circle
      cx="502"
      cy="500"
      r="40"
      className="fill-emerald-500"
    />
  </svg>
);

export default function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-2xl font-bold text-emerald-500">Elital</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-4 md:gap-8">
            <Link
              href="/blog"
              className="hidden md:block text-gray-600 hover:text-emerald-500 transition"
            >
              Blog
            </Link>
            <Link
              href="/blog"
              className="md:hidden text-gray-600 hover:text-emerald-500"
            >
              <BookOpen className="h-6 w-6" />
            </Link>
            <div className="hidden md:block">
              <Button href="/contact">Contact Us</Button>
            </div>
            <Link
              href="/contact"
              className="md:hidden text-emerald-500 hover:text-emerald-600"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
