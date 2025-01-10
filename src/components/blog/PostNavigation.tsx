import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

interface PostNavigationProps {
  previous: BlogPost | null;
  next: BlogPost | null;
}

export default function PostNavigation({ previous, next }: PostNavigationProps) {
  return (
    <div className="flex justify-between items-center border-t border-gray-200 mt-12 pt-8">
      {previous ? (
        <Link 
          href={`/blog/${previous.slug}`}
          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <div>
            <div className="text-sm text-gray-500">Previous</div>
            <div className="font-medium">{previous.title}</div>
          </div>
        </Link>
      ) : <div />}

      {next ? (
        <Link 
          href={`/blog/${next.slug}`}
          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 text-right"
        >
          <div>
            <div className="text-sm text-gray-500">Next</div>
            <div className="font-medium">{next.title}</div>
          </div>
          <ArrowRight className="w-4 h-4" />
        </Link>
      ) : <div />}
    </div>
  );
}