import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import { Shield, Users, Briefcase, HeartHandshake } from 'lucide-react';
import Button from '../components/shared/Button';

const features = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC 2 Type II certified platform with advanced security features and compliance support."
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Get a dedicated account manager and talent success team to support your hiring needs."
  },
  {
    icon: Briefcase,
    title: "Custom Solutions",
    description: "Tailored workflows, custom integrations, and specialized talent pools for your organization."
  },
  {
    icon: HeartHandshake,
    title: "Strategic Partnership",
    description: "Benefit from strategic advisory, market insights, and priority access to top talent."
  }
];

export default function Enterprise() {
  return (
    <main>
      <PageHeader 
        title="Enterprise Solutions" 
        description="Scalable talent solutions for large organizations"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Scale Your Team with Confidence</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our enterprise solutions provide large organizations with the tools, 
              talent, and support needed to scale development teams efficiently.
            </p>
            <Button onClick={openProjectModal}>
              Schedule a Consultation
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm">
                <feature.icon className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Enterprise Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Flexible Engagement Models",
                items: ["Time & Materials", "Fixed Price", "Dedicated Teams"]
              },
              {
                title: "Enhanced Support",
                items: ["24/7 Priority Support", "Custom SLAs", "Quarterly Reviews"]
              },
              {
                title: "Risk Management",
                items: ["IP Protection", "Compliance Support", "Security Reviews"]
              }
            ].map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-gray-600">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}