import React from 'react';
import { CheckCircle2, Trophy, Briefcase } from 'lucide-react';

const badges = [
  {
    icon: Trophy,
    text: 'Top 3% Talent',
    color: 'text-amber-500'
  },
  {
    icon: CheckCircle2,
    text: '2 Week Placement',
    color: 'text-green-500'
  },
  {
    icon: Briefcase,
    text: 'Pre-vetted by Industry Leaders',
    color: 'text-blue-500'
  }
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-2">
          <badge.icon className={badge.color} />
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  );
}