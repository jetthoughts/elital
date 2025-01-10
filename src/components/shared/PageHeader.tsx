import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        {description && (
          <p className="text-xl text-gray-600 max-w-3xl">{description}</p>
        )}
      </div>
    </div>
  );
}