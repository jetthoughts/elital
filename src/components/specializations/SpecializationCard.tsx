import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SpecializationCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function SpecializationCard({ title, description, Icon }: SpecializationCardProps) {
  return (
    <div className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 blur-xl opacity-20 rounded-full" />
        <Icon className="relative w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl p-3.5 text-white mb-6 shadow-lg shadow-emerald-200" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
