import { Metadata } from 'next';
import Privacy from '@/pages/legal/Privacy';

export const metadata: Metadata = {
  title: 'Privacy Policy - Elital',
  description: 'Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return <Privacy />;
}