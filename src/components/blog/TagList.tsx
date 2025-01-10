import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TagListProps {
  tags: string[];
  className?: string;
}

export default function TagList({ tags, className = '' }: TagListProps) {
  const pathname = usePathname();
  
  if (!tags.length) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`} onClick={(e) => e.stopPropagation()}>
      {tags.map(tag => {
        const isActive = pathname === `/blog/tag/${encodeURIComponent(tag)}`;
        return (
          <Link
            key={tag}
            href={`/blog/tag/${encodeURIComponent(tag)}`}
            className={`px-3 py-1 text-sm rounded-full transition ${
              isActive 
                ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            #{tag}
          </Link>
        );
      })}
    </div>
  );
}