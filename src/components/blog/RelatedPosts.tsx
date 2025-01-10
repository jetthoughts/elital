import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import type { BlogPost } from '@/types/blog';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <div className="border-t border-gray-200 mt-12 pt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Posts</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link 
            to={`/blog/${post.slug}`}
            key={post.slug}
            className="group block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <article>
              <div className="relative w-full h-40">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <time>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</time>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-emerald-600 transition line-clamp-2">
                  {post.title}
                </h3>
                <div className="text-sm text-gray-500">By {post.author}</div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}