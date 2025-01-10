import { Metadata } from 'next';
import HowItWorks from '@/components/pages/HowItWorks';

export const metadata: Metadata = {
  title: 'How It Works - Elital',
  description: 'Learn how our platform helps you find and hire top tech talent.',
};

export default function HowItWorksPage() {
  return <HowItWorks />;
}