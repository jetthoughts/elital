import PageHeader from '@/components/shared/PageHeader';
import ProjectForm from '@/components/forms/ProjectForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post Your Project - Elital',
  description: 'Get matched with pre-vetted talent for your project needs.',
};

export default function Contact() {
  return (
    <main>
      <PageHeader 
        title="Post Your Project" 
        description="Get matched with pre-vetted talent"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProjectForm />
      </div>
    </main>
  );
}