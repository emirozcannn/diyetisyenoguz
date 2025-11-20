'use client';

import { useParams } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils/format';
import { useState, useEffect } from 'react';
import { client } from '@/lib/sanity/client';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import Card from '@/components/ui/Card';

const builder = imageUrlBuilder(client);

function urlFor(source: unknown) {
  return builder.image(source as Parameters<typeof builder.image>[0]);
}

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  mainImage?: unknown;
  body: Array<{ _type: 'block'; [key: string]: unknown }>;
  categories?: Array<{
    _id: string;
    title: string;
    slug: { current: string };
    color: string;
  }>;
  tags?: string[];
  readingTime?: number;
  author?: {
    name: string;
    image?: unknown;
    bio?: unknown;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
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

export default function BlogDetailPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (!params.slug) return;

    client
      .fetch<BlogPost>(
        `*[_type == "post" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          excerpt,
          publishedAt,
          mainImage,
          body,
          readingTime,
          tags,
          categories[]-> {
            _id,
            title,
            slug,
            color
          },
          author-> {
            name,
            image,
            bio
          },
          seo
        }`,
        { slug: params.slug }
      )
      .then((postData) => {
        setPost(postData);

        // Fetch related posts (same category)
        if (postData?.categories && postData.categories.length > 0) {
          const categoryIds = postData.categories.map((cat) => cat._id);
          client
            .fetch<BlogPost[]>(
              `*[_type == "post" && _id != $postId && count((categories[]->_id)[@ in $categoryIds]) > 0] | order(publishedAt desc) [0...3] {
                _id,
                title,
                slug,
                excerpt,
                mainImage,
                publishedAt,
                readingTime,
                categories[]-> {
                  _id,
                  title,
                  slug,
                  color
                }
              }`,
              { postId: postData._id, categoryIds }
            )
            .then((related) => {
              setRelatedPosts(related);
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));
  }, [params.slug]);

  if (loading || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="bg-white">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>

        <div className="container-custom max-w-6xl relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium mb-6"
          >
            <ArrowLeft size={20} />
            Blog&apos;a Dön
          </Link>

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat) => (
                <span
                  key={cat._id}
                  className={`px-3 py-1 text-sm font-semibold rounded-full border ${
                    badgeColorMap[cat.color] || badgeColorMap.primary
                  }`}
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-white leading-tight"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-white/90"
          >
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            {post.author && (
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author.name}</span>
              </div>
            )}
            {post.readingTime && (
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readingTime} dk okuma</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      {post.mainImage && (
        <section className="container-custom max-w-6xl -mt-16 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={urlFor(post.mainImage).width(1200).height(675).url()}
              alt={post.title}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>
      )}

      {/* Content + Sidebar */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg"
              >
                <PortableText value={post.body} />
              </motion.article>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-12 pt-8 border-t border-gray-200"
                >
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Tag size={20} className="text-primary-600" />
                    Etiketler
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Share */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-8 pt-8 border-t border-gray-200"
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Share2 size={20} className="text-primary-600" />
                  Paylaş
                </h3>
                <div className="flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 p-8 bg-gradient-primary rounded-2xl text-white text-center"
              >
                <h3 className="text-2xl font-bold mb-4">Kişiye Özel Beslenme Programı İçin</h3>
                <p className="mb-6">Size özel hazırlanacak beslenme programı için hemen randevu alın</p>
                <Link
                  href="/randevu"
                  className="inline-block px-8 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Randevu Al
                </Link>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Author */}
                {post.author && (
                  <Card>
                    <h3 className="text-lg font-bold mb-4">Yazar</h3>
                    <div className="flex items-center gap-4">
                      {post.author.image ? (
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={urlFor(post.author.image).width(128).height(128).url()}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                          {post.author.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-gray-900">{post.author.name}</p>
                        {post.author.bio && (
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            <PortableText value={post.author.bio} />
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                )}

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <Card>
                    <h3 className="text-lg font-bold mb-4">İlgili Yazılar</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost._id}
                          href={`/blog/${relatedPost.slug.current}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            {relatedPost.mainImage ? (
                              <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                  src={urlFor(relatedPost.mainImage).width(160).height(160).url()}
                                  alt={relatedPost.title}
                                  fill
                                  className="object-cover group-hover:scale-110 transition-transform"
                                />
                              </div>
                            ) : (
                              <div className="w-20 h-20 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                                <Tag className="text-white" size={24} />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-1">
                                {relatedPost.title}
                              </h4>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Calendar size={12} />
                                <span>{formatDate(relatedPost.publishedAt)}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Card>
                )}

                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                  <Card>
                    <h3 className="text-lg font-bold mb-4">Kategoriler</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map((cat) => (
                        <Link
                          key={cat._id}
                          href={`/blog?category=${cat.slug.current}`}
                          className={`px-3 py-1.5 text-sm font-semibold rounded-lg border transition-all hover:shadow-md ${
                            badgeColorMap[cat.color] || badgeColorMap.primary
                          }`}
                        >
                          {cat.title}
                        </Link>
                      ))}
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
