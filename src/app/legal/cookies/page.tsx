import { Metadata } from 'next';
import Cookies from '@/pages/legal/Cookies';

export const metadata: Metadata = {
  title: 'Cookie Policy - Elital',
  description: 'How we use cookies on our website.',
};

export default function CookiesPage() {
  return <Cookies />;
}