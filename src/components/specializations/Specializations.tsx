import React from 'react';
import { Code2, CloudCog, Database, PenTool, KanbanSquare, TestTube } from 'lucide-react';
import SpecializationCard from './SpecializationCard';

const specializations = [
  {
    title: 'Developers',
    description: 'Highly skilled Frontend, Backend and Fullstack Developers covering all relevant programming languages and frameworks.',
    Icon: Code2
  },
  {
    title: 'DevOps & Cloud Engineers',
    description: 'Specialists who focus on setting up and running scalable IT infrastructure that let businesses use cloud computing effectively',
    Icon: CloudCog
  },
  {
    title: 'Data Scientists',
    description: 'Experts for gathering, storing, and analyzing large amounts of data in order to enable fact-based decision making',
    Icon: Database
  },
  {
    title: 'UI/UX Designers',
    description: 'Experienced UI and UX designers for web and mobile projects as well as research, prototyping, wireframes, and interface design',
    Icon: PenTool
  },
  {
    title: 'Project/Product Managers',
    description: 'Qualified managers with extensive experience in developing products and leading agile teams, as well as Product Owners and Scrum Masters',
    Icon: KanbanSquare
  },
  {
    title: 'QA Engineers',
    description: 'Professionals in assembling and maintaining automated test systems that enable stable and reliable product development',
    Icon: TestTube
  }
];

export default function Specializations() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Specializations</h2>
          <p className="text-xl text-gray-600">
            Access pre-vetted professionals across various technology domains
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec) => (
            <SpecializationCard key={spec.title} {...spec} />
          ))}
        </div>
      </div>
    </section>
  );
}