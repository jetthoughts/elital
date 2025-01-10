import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import { CheckCircle2, Clock, Users, FileCheck } from 'lucide-react';

const steps = [
  {
    icon: FileCheck,
    title: "1. Submit Requirements",
    description: "Fill out our standardized job description template with your project requirements, team size, timeline, and technical needs."
  },
  {
    icon: Clock,
    title: "2. Get Matched",
    description: "Within 24 hours, receive your first batch of pre-vetted candidates that match your specific requirements."
  },
  {
    icon: Users,
    title: "3. Start Working",
    description: "Begin your risk-free trial with selected candidates and scale your team with confidence."
  }
];

export default function HowItWorks() {
  return (
    <main>
      <PageHeader 
        title="How It Works" 
        description="Our streamlined process helps you find and hire top tech talent quickly and efficiently."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => (
            <div key={step.title} className="bg-white p-6 rounded-lg shadow-sm">
              <step.icon className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Platform?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Access to pre-vetted talent from top companies",
              "Risk-free trial period with all candidates",
              "Direct communication with talent",
              "No long-term contracts required",
              "Transparent pricing with no hidden fees",
              "Dedicated support throughout the process"
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}