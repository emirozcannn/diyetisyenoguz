'use client';

import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatDate } from '@/lib/utils/format';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/image';

interface BlogPreviewProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  posts?: Array<{
    _id: string;
    title: string;
    slug: { current: string };
    excerpt?: string;
    publishedAt: string;
    mainImage?: unknown;
  }>;
}

export default function BlogPreview({ title: propTitle, subtitle: propSubtitle, ctaText, posts }: BlogPreviewProps) {
  const title = propTitle || 'Blog Yazılarım';
  const subtitle = propSubtitle || 'Sağlıklı beslenme ve yaşam hakkında güncel bilgiler';
  const buttonText = ctaText || 'Tüm Blog Yazıları';

  const defaultPosts = [
    {
      _id: '1',
      title: 'Sağlıklı Kilo Vermenin 10 Altın Kuralı',
      slug: { current: 'saglikli-kilo-vermenin-10-altin-kurali' },
      excerpt: 'Hızlı değil, kalıcı sonuçlar için bilmeniz gereken temel prensipler.',
      publishedAt: '2024-11-15',
      mainImage: null,
    },
    {
      _id: '2',
      title: 'Protein Nedir ve Neden Önemlidir?',
      slug: { current: 'protein-nedir-ve-neden-onemlidir' },
      excerpt: 'Vücudunuzun yapı taşı protein hakkında bilmeniz gerekenler.',
      publishedAt: '2024-11-10',
      mainImage: null,
    },
    {
      _id: '3',
      title: 'Metabolizma Hızlandırmanın Doğal Yolları',
      slug: { current: 'metabolizma-hizlandirmanin-dogal-yollari' },
      excerpt: 'İlaçsız ve doğal yöntemlerle metabolizmanızı hızlandırın.',
      publishedAt: '2024-11-05',
      mainImage: null,
    },
  ];

  const displayPosts = posts && posts.length > 0 ? posts : defaultPosts;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayPosts.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                {/* Blog Image */}
                {post.mainImage ? (
                  <div className="aspect-video rounded-lg mb-4 overflow-hidden relative">
                    <Image
                      src={urlFor(post.mainImage).width(400).height(225).url()}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-linear-to-br from-emerald-200 to-teal-200 rounded-lg mb-4 flex items-center justify-center text-gray-600">
                    Blog Görseli
                  </div>
                )}

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Link href={`/blog/${post.slug.current}`}>
                  <Button variant="ghost" className="w-full justify-between group">
                    Devamını Oku
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button size="lg" className="group">
              {buttonText}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
