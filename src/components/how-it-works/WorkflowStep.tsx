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
      <div className="bg-gray-50 rounded-lg p-8 h-full">
        <Icon className="w-12 h-12 text-indigo-600 mb-6" />
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <StepList items={items} />
      </div>
    </div>
  );
}