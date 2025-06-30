import { Link } from 'wouter';
import { Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogCategories } from '@/lib/constants';
import { useTranslation } from 'react-i18next';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  date: string;
  author: string;
  slug: string;
  category: string;
  readingTime?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { t } = useTranslation();
  // Get category details
  const category = blogCategories[post.category] || {
    name: t('blog.categories.general'),
    color: 'bg-gray-600',
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl">
      <div className="relative h-56 w-full overflow-hidden">
        <img 
          src={post.featuredImage} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Category badge */}
        <div className={`absolute top-4 left-4 ${category.color} text-white text-xs font-semibold px-2 py-1 rounded`}>
          {post.category ? t(`blog.categories.${post.category}`) : category.name}
        </div>
      </div>
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          {post.readingTime && (
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readingTime}</span>
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
        <div className="mt-auto">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <User className="h-4 w-4 mr-1" />
            <span>{post.author}</span>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <Button className="w-full bg-[#30B4F2] hover:bg-[#2090c5]">{t('blog.readArticle')}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}