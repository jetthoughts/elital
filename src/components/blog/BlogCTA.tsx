'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../shared/Button';

export default function BlogCTA() {
  return (
    <div className="bg-gray-50 rounded-lg p-8 mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Hire Top Tech Talent?
      </h2>
      <p className="text-gray-600 mb-6">
        Get access to pre-vetted developers, designers, and tech experts from leading companies.
      </p>
      <Button href="/contact" icon={ArrowRight}>
        Contact Us
      </Button>
    </div>
  );
}