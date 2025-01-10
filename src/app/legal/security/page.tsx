import { Metadata } from 'next';
import Security from '@/components/pages/legal/Security';

export const metadata: Metadata = {
  title: 'Security - Elital',
  description: 'How we protect your data and maintain platform security.',
};

export default function SecurityPage() {
  return <Security />;
}