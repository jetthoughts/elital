import React from 'react';
import { FileText, Search, Users } from 'lucide-react';
import WorkflowStep from './WorkflowStep';

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

export default function ProcessSteps() {
  return (
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
  );
}