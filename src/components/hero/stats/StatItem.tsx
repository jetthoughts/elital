import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatItemProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
}

export default function StatItem({ icon: Icon, value, label, color }: StatItemProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white/50 rounded-lg backdrop-blur-sm">
      <Icon className={`h-6 w-6 ${color} mb-2`} />
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}