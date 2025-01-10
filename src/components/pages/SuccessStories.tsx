import React from 'react';
import PageHeader from '@/components/shared/PageHeader';
import Image from 'next/image';
import { Star, Users, Clock } from 'lucide-react';
import Button from '@/components/shared/Button';

const successStories = [
  {
    company: 'TechFlow',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80',
    title: 'Scaling Engineering Team with Pre-vetted Talent',
    description: 'TechFlow successfully scaled their engineering team from 5 to 25 developers in just 6 months using our platform.',
    metrics: [
      { icon: Users, value: '20+', label: 'Engineers Hired' },
      { icon: Clock, value: '6', label: 'Months' },
      { icon: Star, value: '98%', label: 'Retention Rate' }
    ],
    quote: {
      text: "The quality of talent and speed of hiring exceeded our expectations. We found perfect matches for our team culture.",
      author: "Sarah Chen",
      role: "CTO at TechFlow"
    }
  },
  {
    company: 'DataSphere',
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80',
    title: 'Building a Remote Data Science Team',
    description: 'DataSphere built their entire data science division using pre-vetted talent from our platform.',
    metrics: [
      { icon: Users, value: '15', label: 'Data Scientists' },
      { icon: Clock, value: '4', label: 'Months' },
      { icon: Star, value: '95%', label: 'Project Success' }
    ],
    quote: {
      text: "The pre-vetted talent pool saved us countless hours in the hiring process. Every candidate was top-notch.",
      author: "Michael Roberts",
      role: "Head of Data at DataSphere"
    }
  },
  {
    company: 'FinTech Pro',
    logo: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80',
    title: 'Rapid Product Development with Elite Engineers',
    description: 'FinTech Pro accelerated their product development by hiring senior engineers through our platform.',
    metrics: [
      { icon: Users, value: '12', label: 'Senior Engineers' },
      { icon: Clock, value: '3', label: 'Months' },
      { icon: Star, value: '100%', label: 'On-time Delivery' }
    ],
    quote: {
      text: "The engineers we hired were instrumental in launching our product ahead of schedule. Exceptional talent.",
      author: "Emma Thompson",
      role: "VP of Engineering at FinTech Pro"
    }
  }
];

export default function SuccessStories() {
  return (
    <main>
      <PageHeader 
        title="Success Stories" 
        description="See how companies are scaling their teams with pre-vetted talent"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {successStories.map((story, index) => (
            <div 
              key={story.company}
              className={`flex flex-col md:flex-row gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={story.logo}
                    alt={story.company}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold">{story.title}</h2>
                <p className="text-lg text-gray-600">{story.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  {story.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <metric.icon className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="text-sm text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <blockquote className="border-l-4 border-emerald-500 pl-4 italic">
                  <p className="text-lg mb-2">{story.quote.text}</p>
                  <footer>
                    <div className="font-semibold">{story.quote.author}</div>
                    <div className="text-sm text-gray-500">{story.quote.role}</div>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Ready to Scale Your Team?</h2>
          <p className="text-lg text-gray-600 mb-8">Join these successful companies and find your perfect talent match.</p>
          <Button href="/contact" size="lg">
            Get Started Today
          </Button>
        </div>
      </div>
    </main>
  );
}