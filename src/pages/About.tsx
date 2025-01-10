import React from 'react';
import PageHeader from '@/components/shared/PageHeader';

export default function About() {
  return (
    <main>
      <PageHeader 
        title="About Us" 
        description="We're on a mission to connect companies with the world's best tech talent."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              We believe in connecting exceptional talent with innovative companies. 
              Our platform makes it easy to find and hire pre-vetted professionals 
              who have been verified by leading tech companies.
            </p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500">•</span>
                <span>Access to 15,000+ pre-vetted professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500">•</span>
                <span>Verified by top tech companies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500">•</span>
                <span>Streamlined hiring process</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500">•</span>
                <span>Dedicated support team</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}