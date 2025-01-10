import React from 'react';
import { Shield, Brain, Award, Target } from 'lucide-react';
import FeatureCard from './FeatureCard';
import CompanyLogos from './company-logos/CompanyLogos';

const features = [
  {
    icon: Shield,
    title: 'Comprehensive Discovery',
    description: 'Access the largest database of pre-vetted freelance profiles with multi-platform talent search and advanced matching.'
  },
  {
    icon: Brain,
    title: 'Quality Assurance',
    description: 'Every freelancer is verified by top companies with proven track records and industry-recognized credentials.'
  },
  {
    icon: Award,
    title: 'Efficient Process',
    description: 'Receive weekly curated matches with detailed profile information and direct contact access.'
  },
  {
    icon: Target,
    title: 'Time-Saving',
    description: 'No profile browsing needed - get pre-screened freelancers delivered on a regular schedule.'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Access Our Elite Freelance Network
          </h2>
          <p className="text-xl text-gray-600">
            15,000+ pre-vetted professionals from the world's most innovative companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <CompanyLogos />
      </div>
    </div>
  );
}