import React from 'react';
import WorkflowStep from './WorkflowStep';
import { FileText, Search, Users } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Submit Requirements',
    items: [
      'Fill our standardized job description template',
      'Specify key skills and experience needed',
      'Define project scope and timeline'
    ]
  },
  {
    icon: Search,
    title: 'Receive Curated Matches',
    items: [
      'AI analyzes requirements and candidate profiles',
      'Smart matching based on skills and experience',
      'Quality verification of each match'
    ]
  },
  {
    icon: Users,
    title: 'Weekly Candidate Delivery',
    items: [
      '2 best-matched candidates every week',
      'Detailed profile information',
      'Direct contact information provided'
    ]
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Start receiving matched profiles within 24 hours of submission</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <WorkflowStep
              key={index}
              icon={step.icon}
              title={step.title}
              items={step.items}
              number={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}