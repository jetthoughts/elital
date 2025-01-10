import React from 'react';
import { Shield, Clock, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Rigorous Vetting Process',
    description: 'Only 3% of applicants pass our comprehensive technical and soft skills assessment'
  },
  {
    icon: Clock,
    title: 'Fast Placement',
    description: 'Get matched with the perfect talent within 2 weeks, not months'
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'Risk-free trial period with our satisfaction guarantee'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 account management and talent success teams'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Leading Companies Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Access pre-vetted developers, managers, and specialists ready to join your team
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}