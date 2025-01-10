import React from 'react';
import { ArrowRight, CheckCircle2, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          Access the Top 3% of
          <span className="text-indigo-600"> Pre-vetted Talent</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Connect with elite freelancers verified by industry leaders. 
          Scale your team with confidence in just 2 weeks.
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-700 transition">
            Hire Top Talent <ArrowRight size={20} />
          </button>
          <button className="border-2 border-gray-300 px-8 py-3 rounded-lg font-semibold text-gray-700 hover:border-indigo-600 hover:text-indigo-600 transition">
            View Talent Pool
          </button>
        </div>

        <div className="flex justify-center items-center gap-8 text-gray-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-green-500" />
            <span>2 Week Placement</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="text-amber-500" />
            <span>Top 3% Talent</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-green-500" />
            <span>Risk-Free Trial</span>
          </div>
        </div>
      </div>
    </div>
  );
}