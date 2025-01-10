import { getPostBySlug, getAllPosts, getAdjacentPosts } from '@/lib/blog';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BlogCTA from '@/components/blog/BlogCTA';
import PostNavigation from '@/components/blog/PostNavigation';
import { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }]
    }
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);
  const { previous, next } = getAdjacentPosts(params.slug);

  return (
    <article className="pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
        
        <div className="relative w-full aspect-[16/9] mb-8">
          <Image 
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 768px"
            priority
          />
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time>{post.date}</time>
          </div>
          <span>By {post.author}</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">{post.title}</h1>
        
        <div 
          className="prose prose-emerald max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <PostNavigation previous={previous} next={next} />
        <BlogCTA />
      </div>
    </article>
  );
}