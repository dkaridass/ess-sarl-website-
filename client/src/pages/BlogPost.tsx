import { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { Calendar, User, ArrowLeft, Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import BlogCard, { BlogPost } from '@/components/blog/BlogCard';
import { blogPosts, blogCategories } from '@/lib/constants';
import { useTranslation } from 'react-i18next';
import SEO from '@/components/seo/SEO';

export default function BlogPostPage() {
  const { t } = useTranslation();
  const [, params] = useRoute('/blog/:slug');
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (params && params.slug) {
      // Find the current post
      const currentPost = blogPosts.find(p => p.slug === params.slug);
      
      if (currentPost) {
        setPost(currentPost);
        
        // Get related posts (excluding current)
        const related = blogPosts
          .filter(p => p.id !== currentPost.id && p.category === currentPost.category)
          .slice(0, 3);
          
        // If we don't have enough related posts by category, add some other posts
        if (related.length < 3) {
          const additionalPosts = blogPosts
            .filter(p => p.id !== currentPost.id && p.category !== currentPost.category)
            .slice(0, 3 - related.length);
            
          setRelatedPosts([...related, ...additionalPosts]);
        } else {
          setRelatedPosts(related);
        }
      }
    }
  }, [params]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <SEO 
          title={t('blog.blogPostNotFound')}
          description={t('blog.blogPostNotFoundDescription')}
        />
        <h1 className="text-2xl font-bold mb-4">{t('blog.blogPostNotFound')}</h1>
        <Link href="/blog">
          <Button>{t('blog.backToBlog')}</Button>
        </Link>
      </div>
    );
  }

  // Format the date for structured data
  const formattedDate = post.date ? new Date(post.date).toISOString() : undefined;

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category}, environmental consulting, safety solutions, DRC, ${blogCategories[post.category]?.name}`}
        image={typeof post.featuredImage === 'string' ? post.featuredImage : ''}
        type="article"
        publishedTime={formattedDate}
        author={post.author}
        section={post.category}
        additionalStructuredData={{
          "wordCount": post.content.split(' ').length,
          "keywords": [
            "ESS SARL",
            post.category,
            "Democratic Republic of Congo",
            "environmental consulting",
            "safety solutions"
          ]
        }}
      />

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 flex items-center gap-2">
              <ArrowLeft size={16} />
              {t('blog.backToBlog')}
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            {post.category && (
              <div className="mb-4">
                <span className={`inline-block ${blogCategories[post.category].color} text-white text-sm font-semibold px-3 py-1 rounded`}>
                  {t(`blog.categories.${post.category}`)}
                </span>
              </div>
            )}
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-gray-500 mb-6 gap-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{t('blog.postInfo.publishedOn')} {post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{t('blog.postInfo.by')} {post.author}</span>
              </div>
              {post.readingTime && (
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{t('blog.postInfo.readingTime')}: {post.readingTime}</span>
                </div>
              )}
            </div>
            
            {/* Post excerpt as intro */}
            <p className="text-lg text-gray-600 font-medium mb-8">
              {post.excerpt}
            </p>

            <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={post.featuredImage} 
                alt={post.title} 
                className="w-full h-auto"
              />
            </div>

            {/* Share buttons */}
            <div className="flex justify-end mb-8">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                {t('blog.shareArticle')}
              </Button>
            </div>

            <Separator className="my-8" />

            <div className="prose prose-lg max-w-none">
              {/* Post content */}
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
            
            <Separator className="my-8" />
            
            {/* Author info */}
            <div className="bg-blue-50 p-6 rounded-lg mt-10">
              <h3 className="font-bold text-gray-800 mb-2">{t('blog.aboutAuthor')}</h3>
              <p className="text-gray-600">
                {post.author} {t('blog.authorBio.part1')} {t(`blog.authorBio.expertise.${post.category || 'default'}`)}
              </p>
            </div>

            {/* Tags section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">{t('blog.relatedTopics')}</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="rounded-full">
                  {blogCategories[post.category]?.name || post.category}
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  {t('blog.tags.environmentalConsulting')}
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  {t('blog.tags.drc')}
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  {post.category === 'mining' ? t('blog.tags.miningSafety') : 
                   post.category === 'environment' ? t('blog.tags.environmentalImpact') : 
                   post.category === 'safety' ? t('blog.tags.safetyManagement') : 
                   post.category === 'training' ? t('blog.tags.professionalDevelopment') : 
                   t('blog.tags.industryNews')}
                </Button>
              </div>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-8 text-center">{t('blog.relatedArticles')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}