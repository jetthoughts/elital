import { Metadata } from 'next';
import Press from '@/components/pages/Press';

export const metadata: Metadata = {
  title: 'Press - Elital',
  description: 'Latest news and media coverage about Elital.',
};

export default function PressPage() {
  return <Press />;
}