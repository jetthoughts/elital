import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { CheckCircle2 } from 'lucide-react';
import ProcessSteps from '@/components/how-it-works/ProcessSteps';

export default function HowItWorks() {
  return (
    <main>
      <PageHeader 
        title="How It Works" 
        description="Our streamlined process helps you find and hire top tech talent quickly and efficiently."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProcessSteps />

        <div className="bg-gradient-to-br from-emerald-50 to-white rounded-lg p-8 mt-12">
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