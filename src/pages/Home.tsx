import React from 'react';
import Hero from '../components/hero/Hero';
import Features from '../components/features/Features';
import Specializations from '../components/specializations/Specializations';
import HowItWorks from '../components/how-it-works/HowItWorks';
import ComparisonTable from '../components/comparison/ComparisonTable';
import CTA from '../components/cta/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Specializations />
      <HowItWorks />
      <ComparisonTable />
      <CTA />
    </main>
  );
}