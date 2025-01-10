import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import type { BlogPost } from '@/types/blog';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts(): BlogPost[] {
  const postFiles = fs.readdirSync(postsDirectory)
    .filter(file => file.endsWith('.md'));

  const allPosts = postFiles.map(filename => {
    const slug = filename.replace(/\.md$/, '');
    return getPostBySlug(slug);
  });

  return allPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    excerpt: data.excerpt,
    image: data.image,
    content: md.render(content),
    tags: data.tags || []
  };
}

export function getAdjacentPosts(currentSlug: string): { 
  previous: BlogPost | null; 
  next: BlogPost | null; 
} {
  const posts = getAllPosts();
  const currentIndex = posts.findIndex(post => post.slug === currentSlug);
  
  return {
    previous: currentIndex > 0 ? posts[currentIndex - 1] : null,
    next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  };
}