'use client';

import React from 'react';
import Button from '../shared/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Discover Pre-vetted Freelancers
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10">
              The top freelance software developers, designers, marketing experts, finance experts, 
              product managers, and project managers are pre-vetted by leading companies and platforms.
            </p>
            <Button 
              href="/contact" 
              className="text-lg px-10"
            >
              Hire Top Talent
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              No commitment required - Review profiles for free
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2000"
                alt="Professional"
                fill
                className="object-cover rounded-lg shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}