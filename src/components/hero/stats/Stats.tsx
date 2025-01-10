import React from 'react';
import { Users, Building2, Award } from 'lucide-react';
import StatItem from './StatItem';

const stats = [
  {
    icon: Users,
    value: '15K+',
    label: 'Verified Profiles',
    color: 'text-blue-500'
  },
  {
    icon: Building2,
    value: '500+',
    label: 'Partner Companies',
    color: 'text-indigo-500'
  },
  {
    icon: Award,
    value: '98%',
    label: 'Success Rate',
    color: 'text-amber-500'
  }
];

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
}