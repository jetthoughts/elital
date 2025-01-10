import React from 'react';
import { Clock, Users, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Clock,
    text: 'Get 5 best-matching candidates within 24 hours'
  },
  {
    icon: Users,
    text: 'All candidates pre-vetted by industry experts'
  },
  {
    icon: CheckCircle,
    text: 'Start risk-free trial with selected candidates'
  }
];

export default function ProcessPreview() {
  return (
    <div className="border-t pt-6">
      <h4 className="text-sm font-medium text-gray-900 mb-4">What happens next?</h4>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3 text-sm text-gray-600">
            <step.icon className="w-5 h-5 text-indigo-600" />
            <span>{step.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}