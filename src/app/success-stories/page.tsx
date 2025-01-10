import { Metadata } from 'next';
import SuccessStories from '@/components/pages/SuccessStories';

export const metadata: Metadata = {
  title: 'Success Stories - Elital',
  description: 'See how companies are scaling with pre-vetted talent.',
};

export default function SuccessStoriesPage() {
  return <SuccessStories />;
}