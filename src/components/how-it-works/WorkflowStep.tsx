import React from 'react';
import { LucideIcon } from 'lucide-react';
import StepNumber from './StepNumber';
import StepList from './StepList';

interface WorkflowStepProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  number: number;
}

export default function WorkflowStep({ icon: Icon, title, items, number }: WorkflowStepProps) {
  return (
    <div className="relative">
      <StepNumber number={number} />
      <div className="bg-gradient-to-br from-emerald-50 to-white rounded-lg p-8 h-full">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 blur-xl opacity-20 rounded-full" />
          <Icon className="relative w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-2.5 text-white mb-6 shadow-lg shadow-emerald-200" />
        </div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <StepList items={items} />
      </div>
    </div>
  );
}