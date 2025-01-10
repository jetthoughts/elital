import React from 'react';

interface CompanyLogoProps {
  name: string;
  imageUrl: string;
}

export default function CompanyLogo({ name, imageUrl }: CompanyLogoProps) {
  return (
    <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
      <img src={imageUrl} alt={name} className="h-8 object-contain grayscale hover:grayscale-0 transition" />
    </div>
  );
}