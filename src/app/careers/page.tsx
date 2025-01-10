import { Metadata } from 'next';
import Careers from '@/pages/Careers';

export const metadata: Metadata = {
  title: 'Careers - Elital',
  description: 'Join us in transforming how companies hire tech talent.',
};

export default function CareersPage() {
  return <Careers />;
}