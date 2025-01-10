import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import { Check } from 'lucide-react';
import Button from '../components/shared/Button';

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for exploring our talent pool",
    features: [
      "Browse pre-vetted profiles",
      "Direct messaging with talent",
      "Basic support",
      "Pay-as-you-go hiring"
    ]
  },
  {
    name: "Pro",
    price: "$299",
    period: "/month",
    description: "Ideal for growing teams",
    features: [
      "All Basic features",
      "Priority profile access",
      "Dedicated account manager",
      "Custom talent matching",
      "Bulk hiring discounts",
      "Advanced reporting"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "All Pro features",
      "Custom integration",
      "Volume discounts",
      "SLA guarantees",
      "Compliance support",
      "Strategic advisory"
    ]
  }
];

export default function Pricing() {
  return (
    <main>
      <PageHeader 
        title="Simple, Transparent Pricing" 
        description="Choose the plan that best fits your hiring needs"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`bg-white rounded-lg p-8 ${plan.popular ? 'ring-2 ring-emerald-500' : 'border'}`}>
              {plan.popular && (
                <span className="inline-block bg-emerald-50 text-emerald-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-500">{plan.period}</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <Button 
                variant={plan.popular ? 'primary' : 'secondary'}
                onClick={openProjectModal}
                className="w-full mb-6"
              >
                Get Started
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}