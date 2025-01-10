import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SpecializationCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function SpecializationCard({ title, description, Icon }: SpecializationCardProps) {
  return (
    <div className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition">
      <Icon className="w-16 h-16 mb-6 text-indigo-600" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}