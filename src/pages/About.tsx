import React from 'react';
import PageHeader from '../components/shared/PageHeader';

export default function About() {
  return (
    <main>
      <PageHeader 
        title="About Us" 
        description="We're on a mission to connect companies with the world's best tech talent."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Add about page content here */}
      </div>
    </main>
  );
}