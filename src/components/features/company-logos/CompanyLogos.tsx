import React from 'react';
import CompanyLogo from './CompanyLogo';

const companies = [
  { name: 'Google', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Microsoft', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Meta', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Apple', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Netflix', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' }
];

export default function CompanyLogos() {
  return (
    <div className="mt-16">
      <p className="text-center text-gray-600 mb-8">Our talent comes from leading tech companies</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {companies.map((company) => (
          <CompanyLogo key={company.name} {...company} />
        ))}
      </div>
    </div>
  );
}