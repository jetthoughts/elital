import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Pagination from '../components/shared/Pagination';
import { getAllPosts } from '../lib/blog';

const POSTS_PER_PAGE = 6;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const posts = getAllPosts();
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="pt-32 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest Insights</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visiblePosts.map((post) => (
            <Link 
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="group block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <article>
                <div className="relative w-full h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <time>{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</time>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-emerald-600 transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="text-sm text-gray-500">By {post.author}</div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}