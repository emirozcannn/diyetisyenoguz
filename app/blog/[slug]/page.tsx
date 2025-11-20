'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils/format';

// Mock data - will be replaced with Sanity data
const blogPost = {
  title: 'Sağlıklı Kilo Vermenin 10 Altın Kuralı',
  publishedAt: '2024-11-15',
  author: 'Oğuz Yolyapan',
  readTime: '8 dakika',
  excerpt: 'Hızlı değil, kalıcı sonuçlar için bilmeniz gereken temel prensipler.',
  content: `
    <h2>Giriş</h2>
    <p>Sağlıklı kilo vermek, sadece estetik kaygılardan değil, aynı zamanda genel sağlığınızı korumak ve iyileştirmek için önemlidir. Ancak doğru yaklaşım olmadan kilo vermek zorlaşabilir ve kazanılan sonuçlar kalıcı olmayabilir.</p>
    
    <h2>1. Gerçekçi Hedefler Belirleyin</h2>
    <p>Ayda 2-4 kg kilo kaybı sağlıklı kabul edilir. Hızlı kilo kayıpları genellikle kas kaybına ve metabolizmanın yavaşlamasına neden olur.</p>
    
    <h2>2. Aç Kalmayın</h2>
    <p>Düzenli öğünler yeyin ve açlığınızı kontrol altında tutun. Aşırı açlık, metabolizmayı yavaşlatır ve fazla yemeye neden olabilir.</p>
    
    <h2>3. Su İçin</h2>
    <p>Günde en az 2-2.5 litre su için. Su, metabolizmayı hızlandırır ve tokluk hissi verir.</p>
    
    <h2>4. Protein Tüketimini Artırın</h2>
    <p>Protein, tokluk sağlar, kas kütlesini korur ve metabolizmayı hızlandırır. Her öğününüzde kaliteli protein kaynakları bulundurun.</p>
    
    <h2>5. Hareket Edin</h2>
    <p>Haftada en az 150 dakika orta yoğunlukta egzersiz yapın. Yürüyüş, jogging, yüzme gibi aktiviteler harikadır.</p>
    
    <h2>Sonuç</h2>
    <p>Sağlıklı kilo kaybı bir maraton, sprint değildir. Sabırlı olun ve uzun vadeli düşünün. Profesyonel destek almak, hedeflerinize ulaşmanızı kolaylaştırır.</p>
  `,
};

export default function BlogDetailPage() {
  const params = useParams();

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom max-w-4xl relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-6"
          >
            <ArrowLeft size={20} />
            Blog'a Dön
          </Link>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-white"
          >
            {blogPost.title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-gray-600"
          >
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-primary-600" />
              <span>{formatDate(blogPost.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} className="text-primary-600" />
              <span>{blogPost.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-primary-600" />
              <span>{blogPost.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-lg max-w-none prose-headings:text-gradient prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gradient-primary rounded-2xl text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Kişiye Özel Beslenme Programı İçin
            </h3>
            <p className="mb-6">
              Size özel hazırlanacak beslenme programı için hemen randevu alın
            </p>
            <Link
              href="/randevu"
              className="inline-block px-8 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Randevu Al
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
