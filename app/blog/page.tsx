'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import { Calendar, ArrowRight, BookOpen, Search, Tag, Clock } from 'lucide-react';
import { formatDate } from '@/lib/utils/format';
import { useState, useEffect } from 'react';
import { client } from '@/lib/sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

const builder = imageUrlBuilder(client);

function urlFor(source: unknown) {
  return builder.image(source as Parameters<typeof builder.image>[0]);
}

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  color: string;
}

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  mainImage?: unknown;
  categories?: Category[];
  tags?: string[];
  readingTime?: number;
  featured?: boolean;
  author?: {
    name: string;
    image?: unknown;
  };
}

const badgeColorMap: Record<string, string> = {
  primary: 'bg-primary-100 text-primary-700 border-primary-200',
  emerald: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  blue: 'bg-blue-100 text-blue-700 border-blue-200',
  purple: 'bg-purple-100 text-purple-700 border-purple-200',
  orange: 'bg-orange-100 text-orange-700 border-orange-200',
  pink: 'bg-pink-100 text-pink-700 border-pink-200',
  teal: 'bg-teal-100 text-teal-700 border-teal-200',
  red: 'bg-red-100 text-red-700 border-red-200',
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      client.fetch<BlogPost[]>(`
        *[_type == "blog"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          publishedAt,
          mainImage,
          readingTime,
          featured,
          tags,
          categories[]-> {
            _id,
            title,
            slug,
            color
          },
          author-> {
            name,
            image
          }
        }
      `),
      client.fetch<Category[]>('*[_type == "category"] | order(title asc)')
    ])
      .then(([postsData, categoriesData]) => {
        setPosts(postsData);
        setCategories(categoriesData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = !selectedCategory || post.categories?.some(cat => cat._id === selectedCategory);
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-flex p-6 bg-gradient-primary rounded-2xl mb-6 shadow-lg"
          >
            <BookOpen size={48} className="text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-6 text-white drop-shadow-lg"
          >
            Blog
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-white max-w-2xl mx-auto font-semibold drop-shadow"
          >
            Sağlıklı beslenme ve yaşam hakkında güncel bilgiler
          </motion.p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 w-full lg:max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Blog yazılarında ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 items-center justify-center lg:justify-end">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  !selectedCategory
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-300 hover:border-primary-500'
                }`}
              >
                Tümü
              </button>
              {categories.map((category) => (
                <button
                  key={category._id}
                  onClick={() => setSelectedCategory(category._id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all border ${
                    selectedCategory === category._id
                      ? badgeColorMap[category.color] || badgeColorMap.primary
                      : 'bg-white text-gray-600 border-gray-300 hover:border-primary-500'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6 text-gray-600"
          >
            {filteredPosts.length} yazı bulundu
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Sonuç bulunamadı</h3>
              <p className="text-gray-500">Arama kriterlerinize uygun blog yazısı bulunamadı.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug.current}`} className="block group h-full">
                    <Card className="hover:shadow-2xl transition-all hover:-translate-y-2 h-full flex flex-col">
                      {/* Image */}
                      <div className="aspect-video bg-gradient-primary rounded-xl mb-4 relative overflow-hidden">
                        {post.mainImage ? (
                          <Image
                            src={urlFor(post.mainImage).width(600).height(400).url()}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-white font-medium">
                            <BookOpen size={48} />
                          </div>
                        )}
                        {post.featured && (
                          <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                            ⭐ Öne Çıkan
                          </div>
                        )}
                      </div>

                      {/* Categories */}
                      {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.map((cat) => (
                            <span
                              key={cat._id}
                              className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                                badgeColorMap[cat.color] || badgeColorMap.primary
                              }`}
                            >
                              {cat.title}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                        {post.readingTime && (
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readingTime} dk</span>
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="flex items-center gap-1 text-xs text-gray-500">
                              <Tag size={12} />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Read More */}
                      <div className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 mt-auto">
                        Devamını Oku
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
