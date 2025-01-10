import { Metadata } from 'next';
import Cookies from '@/components/pages/legal/Cookies';

export const metadata: Metadata = {
  title: 'Cookie Policy - Elital',
  description: 'How we use cookies and similar technologies.',
};

export default function CookiesPage() {
  return <Cookies />;
}