import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-white hover:from-emerald-100 hover:to-emerald-50 transition-all duration-300 shadow-sm hover:shadow">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 blur-xl opacity-20 rounded-full" />
        <Icon className="relative w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-2.5 text-white mb-4 shadow-lg shadow-emerald-200" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
