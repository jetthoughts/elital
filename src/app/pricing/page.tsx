import { Metadata } from 'next';
import Pricing from '@/components/pages/Pricing';

export const metadata: Metadata = {
  title: 'Pricing - Elital',
  description: 'Simple, transparent pricing plans for hiring top tech talent.',
};

export default function PricingPage() {
  return <Pricing />;
}