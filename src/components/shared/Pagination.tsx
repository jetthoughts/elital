'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    if (page === 1) return baseUrl;
    return `${baseUrl}?page=${page}`;
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <Link
        href={getPageUrl(currentPage - 1)}
        className={`p-2 rounded-lg hover:bg-gray-100 ${
          currentPage === 1 ? 'pointer-events-none opacity-50' : ''
        }`}
        aria-disabled={currentPage === 1}
      >
        <ChevronLeft className="w-5 h-5" />
      </Link>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={getPageUrl(page)}
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            currentPage === page
              ? 'bg-emerald-500 text-white'
              : 'hover:bg-gray-100'
          }`}
        >
          {page}
        </Link>
      ))}
      
      <Link
        href={getPageUrl(currentPage + 1)}
        className={`p-2 rounded-lg hover:bg-gray-100 ${
          currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
        }`}
        aria-disabled={currentPage === totalPages}
      >
        <ChevronRight className="w-5 h-5" />
      </Link>
    </div>
  );
}