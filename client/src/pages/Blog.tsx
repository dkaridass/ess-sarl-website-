import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import BlogCard, { BlogPost } from '@/components/blog/BlogCard';
import { blogPosts, blogCategories } from '@/lib/constants';
import { useTranslation } from 'react-i18next';
import SEO from '@/components/seo/SEO';

export default function Blog() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // In a real-world scenario, you would fetch the posts from the API
    setPosts(blogPosts);
    setFilteredPosts(blogPosts);
  }, []);

  useEffect(() => {
    let result = [...posts];
    
    // Filter by category if one is selected
    if (selectedCategory) {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    // Filter by search query if one exists
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(result);
  }, [selectedCategory, searchQuery, posts]);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  // Define SEO metadata for blog listing page
  const seoDescription = selectedCategory 
    ? t('blog.categoryDescription', { 
        category: t(`blog.categories.${selectedCategory}`),
        company: 'ESS SARL'
      })
    : t('blog.pageDescription');

  const seoKeywords = selectedCategory
    ? `${t(`blog.categories.${selectedCategory}`)}, environmental consulting, safety solutions, DRC, blog articles, ESS SARL`
    : 'environmental consulting, safety solutions, DRC, blog articles, mining safety, environmental management';

  // Structured data for blog listing
  const blogListingData = {
    "@type": "Blog",
    "headline": t('blog.pageTitle'),
    "description": seoDescription,
    "blogPost": filteredPosts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date ? new Date(post.date).toISOString() : undefined,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `https://www.ess-sarl.com/blog/${post.slug}`
    }))
  };

  return (
    <>
      <SEO
        title={t('blog.pageTitle')}
        description={seoDescription}
        keywords={seoKeywords}
        additionalStructuredData={blogListingData}
      />

      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('blog.pageTitle')}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('blog.pageDescription')}
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              {/* Search Input */}
              <div className="relative w-full md:max-w-md">
                <input
                  type="text"
                  placeholder={t('blog.search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4F2] focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {Object.values(blogCategories).map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className={`${selectedCategory === category.id ? category.color + ' text-white' : 'hover:bg-gray-100'}`}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    {t(`blog.categories.${category.id}`)}
                  </Button>
                ))}
                {selectedCategory && (
                  <Button 
                    variant="ghost" 
                    onClick={() => setSelectedCategory(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {t('blog.resetFilters')}
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              {t('blog.showing', { count: filteredPosts.length, total: posts.length })}
              {selectedCategory && ` ${t('blog.in')} ${t(`blog.categories.${selectedCategory}`)}`}
              {searchQuery && ` ${t('blog.matching')} "${searchQuery}"`}
            </p>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">{t('blog.noArticlesFound')}</h3>
              <p className="text-gray-600 mb-6">{t('blog.tryAdjusting')}</p>
              <Button 
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                }}
                className="bg-[#30B4F2] hover:bg-[#2090c5]"
              >
                {t('blog.resetFilters')}
              </Button>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">{t('blog.subscribeHeading')}</h3>
            <p className="text-gray-600 mb-6 text-center">
              {t('blog.subscribeText')}
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder={t('blog.emailPlaceholder')}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4F2] focus:border-transparent"
                required
              />
              <Button className="bg-[#30B4F2] hover:bg-[#2090c5]">
                {t('blog.subscribe')}
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">
              {t('blog.privacyNotice')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}