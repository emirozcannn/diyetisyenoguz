'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils/format';
import { useState, useEffect } from 'react';
import { client } from '@/lib/sanity/client';
import { PortableText, PortableTextComponents } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

const builder = imageUrlBuilder(client);

function urlFor(source: unknown) {
  return builder.image(source as Parameters<typeof builder.image>[0]);
}

// Custom components for PortableText
const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value?: { asset?: { _ref: string }; alt?: string } }) => {
      if (!value?.asset) return null;
      return (
        <div className="relative w-full aspect-video my-8">
          <Image
            src={urlFor(value.asset).width(1200).height(675).url()}
            alt={value.alt || ''}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-4xl font-bold mt-10 mb-4">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-primary-500 pl-4 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-outside ml-6 mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-outside ml-6 mb-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }: { children?: React.ReactNode }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string } }) => {
      const rel = value?.href && !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a 
          href={value?.href} 
          rel={rel} 
          target={value?.href && !value.href.startsWith('/') ? '_blank' : undefined}
          className="text-primary-600 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

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
  body: unknown; 
  categories?: Category[];
  tags?: string[];
  readingTime?: number;
  author?: {
    name: string;
    image?: unknown;
    bio?: unknown;
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.slug) return;

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
          }
        }`,
        { slug: params.slug }
      )
      .then((result) => {
        setPost(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
        setLoading(false);
      });
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog yazısı bulunamadı</h2>
          <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-medium">
            Blog&apos;a dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom max-w-4xl relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 font-medium mb-6"
          >
            <ArrowLeft size={20} />
            Blog&apos;a Dön
          </Link>
          
          {post.mainImage ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-2xl"
            >
              <Image
                src={urlFor(post.mainImage).width(1200).height(630).url()}
                alt={post.title}
                fill
                className="object-cover"
              />
            </motion.div>
          ) : null}
          
          {post.categories && post.categories.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-8"
            >
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
            </motion.div>
          ) : null}
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-6 text-white drop-shadow-lg"
          >
            {post.title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
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
                <span>{post.readingTime} dk</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content and Sidebar Section (Grid Layout) */}
      <section className="section-padding">
        {/* max-w-4xl'den max-w-6xl'e genişletildi ve Grid eklendi */}
        <div className="container-custom max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Sol Sütun: Ana İçerik (2/3 Genişlik) */}
          <div className="lg:col-span-2">
            
            {post.excerpt ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 p-6 bg-gray-50 rounded-2xl border-l-4 border-primary-500"
              >
                {post.excerpt}
              </motion.div>
            ) : null}

            {post.body ? (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg"
              >
                <PortableText value={post.body as never} components={portableTextComponents} />
              </motion.article>
            ) : null}

            {post.tags && post.tags.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Tag size={20} className="text-primary-600" />
                  Etiketler
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ) : null}

          </div>

          {/* Sağ Sütun: Sidebar (1/3 Genişlik) */}
          <div className="lg:col-span-1 space-y-8 mt-10 lg:mt-0">
            
            {post.readingTime ? (
               <div className="flex items-center gap-2 p-4 bg-primary-50 rounded-lg text-primary-800 font-semibold border border-primary-100">
                 <Clock size={18} className="shrink-0" />
                 <span>Okuma Süresi: {post.readingTime} dk</span>
               </div>
            ) : null}
            
            {post.author && post.author.bio ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200"
              >
                <h4 className="text-md font-bold text-gray-900 mb-4 border-b pb-2">Yazar Hakkında</h4>
                <div className="flex flex-col items-center text-center">
                  {post.author.image ? (
                    <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 mx-auto mb-3">
                      <Image
                        src={urlFor(post.author.image).width(80).height(80).url()}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{post.author.name}</h3>
                  <div className="prose prose-sm max-w-none text-gray-600">
                    <PortableText value={post.author.bio as never} />
                  </div>
                </div>
              </motion.div>
            ) : null}

            {/* CTA (Yan Sütun) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-primary rounded-xl text-white text-center shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3">Randevu Alın</h3>
              <p className="mb-4 text-sm">Size özel hazırlanacak program için hemen randevu alın.</p>
              <Link
                href="/randevu"
                className="inline-block w-full px-6 py-2 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
              >
                Randevu Al
              </Link>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* CTA Section (Eski CTA kısmı kaldırıldı, sidebar'a taşındı) */}

    </div>
  );
}