import { getAllPosts } from '@/lib/blog';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/components/shared/Pagination';
import { Metadata } from 'next';

interface Props {
  searchParams: { page?: string };
}

export const metadata: Metadata = {
  title: 'Blog - Elital',
  description: 'Latest insights on tech freelancing, remote work, and building engineering teams.',
};

const POSTS_PER_PAGE = 6;

export default function Blog({ searchParams }: Props) {
  const posts = getAllPosts();
  const currentPage = Number(searchParams.page) || 1;
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
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <article>
                <div className="relative w-full h-48">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <time>{post.date}</time>
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
            baseUrl="/blog"
          />
        )}
      </div>
    </div>
  );
}