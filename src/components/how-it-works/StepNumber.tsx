import React from 'react';

interface StepNumberProps {
  number: number;
}

export default function StepNumber({ number }: StepNumberProps) {
  return (
    <div className="absolute -top-4 left-4 w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-emerald-200">
      {number}
    </div>
  );
}