import { Metadata } from 'next';
import Enterprise from '@/pages/Enterprise';

export const metadata: Metadata = {
  title: 'Enterprise Solutions - Elital',
  description: 'Scalable talent solutions for large organizations.',
};

export default function EnterprisePage() {
  return <Enterprise />;
}