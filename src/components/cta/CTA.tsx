'use client';

import React from 'react';
import Button from '../shared/Button';

export default function CTA() {
  return (
    <div className="bg-[#1e2875] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-8">
        <h2 className="text-2xl text-white font-normal">
          Top talent is in high demand.
        </h2>
        <Button href="/contact" className="text-lg">
          Start Hiring
        </Button>
      </div>
    </div>
  );
}