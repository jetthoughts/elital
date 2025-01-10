import React from 'react';
import { Check } from 'lucide-react';

interface StepListProps {
  items: string[];
}

export default function StepList({ items }: StepListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  );
}