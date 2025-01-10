import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex-1 relative">
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center mb-4">
          <span className="text-xl font-bold text-indigo-600">{number}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 max-w-sm">{description}</p>
      </div>
    </div>
  );
}