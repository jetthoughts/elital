import { Metadata } from 'next';
import Hero from '@/components/hero/Hero';
import Features from '@/components/features/Features';
import Specializations from '@/components/specializations/Specializations';
import HowItWorks from '@/components/how-it-works/HowItWorks';
import ComparisonTable from '@/components/comparison/ComparisonTable';
import CTA from '@/components/cta/CTA';

export const metadata: Metadata = {
  title: 'Elital: Find Top Pre-vetted Freelancers From Leading Platforms',
  description: 'Discover freelancers already verified by top companies and platforms. Browse profiles of elite developers and managers. Direct access to top talent.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Specializations />
      <HowItWorks />
      <ComparisonTable />
      <CTA />
    </>
  );
}