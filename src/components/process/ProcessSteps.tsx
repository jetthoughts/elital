import React from 'react';
import ProcessStep from './ProcessStep';
import ProcessArrow from './ProcessArrow';

const steps = [
  {
    number: 1,
    title: 'Submit Requirements',
    description: 'Fill our standardized job description template and specify key skills, experience, project scope, and timeline.'
  },
  {
    number: 2,
    title: 'Receive Curated Matches',
    description: 'Our team reviews the extensive database and carefully matches profiles against your requirements.'
  },
  {
    number: 3,
    title: 'Weekly Candidate Delivery',
    description: 'Receive 2 best-matched candidates every week with detailed profiles and direct contact information.'
  }
];

export default function ProcessSteps() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <ProcessStep {...step} />
          {index < steps.length - 1 && <ProcessArrow />}
        </React.Fragment>
      ))}
    </div>
  );
}