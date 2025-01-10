import { Metadata } from 'next';
import About from '@/pages/About';

export const metadata: Metadata = {
  title: 'About Us - Elital',
  description: 'Learn about our mission to connect companies with top tech talent.',
};

export default function AboutPage() {
  return <About />;
}