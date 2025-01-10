import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div className="bg-indigo-600 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Ready to Build Your Dream Team?
        </h2>
        <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
          Join leading companies who trust us to provide top-tier talent for their most important projects
        </p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-50 transition mx-auto">
          Get Started Today <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}