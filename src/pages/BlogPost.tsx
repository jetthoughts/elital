import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogCTA from '../components/blog/BlogCTA';
import RelatedPosts from '../components/blog/RelatedPosts';
import { getPostBySlug, getRelatedPosts } from '../lib/blog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) throw new Error('Slug is required');

  const post = getPostBySlug(slug);
  const relatedPosts = getRelatedPosts(slug);

  return (
    <article className="pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
        
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time>{new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</time>
          </div>
          <span>By {post.author}</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">{post.title}</h1>
        
        <div 
          className="prose prose-emerald max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <RelatedPosts posts={relatedPosts} />
        <BlogCTA />
      </div>
    </article>
  );
}