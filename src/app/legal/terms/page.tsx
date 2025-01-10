import { Metadata } from 'next';
import Terms from '@/components/pages/legal/Terms';

export const metadata: Metadata = {
  title: 'Terms of Service - Elital',
  description: 'Our terms and conditions for using the platform.',
};

export default function TermsPage() {
  return <Terms />;
}