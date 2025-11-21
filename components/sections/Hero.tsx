'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, CheckCircle, Sparkles, Award } from 'lucide-react';
import { urlFor } from '@/lib/sanity/image';
import Image from 'next/image';

interface HeroProps {
  data?: {
    title?: string;
    subtitle?: string;
    description?: string;
    highlightedText?: string;
    image?: unknown;
    features?: string[];
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonPhone?: string;
  };
  stats?: Array<{
    value: string;
    label: string;
    icon?: string;
  }>;
}

export default function Hero({ data, stats }: HeroProps) {
  const defaultFeatures = [
    '✓ Kişiye Özel Beslenme Programı',
    '✓ 7/24 WhatsApp Destek',
    '✓ Haftalık Kontrol ve Takip',
    '✓ %95 Başarı Garantisi'
  ];

  const defaultStats = [
    { value: '100+', label: 'Mutlu Danışan' },
    { value: '5+', label: 'Yıllık Deneyim' },
    { value: '%95', label: 'Başarı Oranı' }
  ];

  const heroTitle = data?.title || 'Sağlıklı Yaşam İçin';
  const heroHighlight = data?.highlightedText || 'Doğru Beslenme';
  const heroSubtitle = data?.subtitle || 'Uzman diyetisyen desteğiyle kişiye özel beslenme programları. İzmir ve Tekirdağ\'da yüz yüze, online tüm Türkiye\'ye hizmet veriyoruz.';
  const features = data?.features && data.features.length > 0 ? data.features : defaultFeatures;
  const displayStats = stats && stats.length > 0 ? stats : defaultStats;
  const primaryBtnText = data?.primaryButtonText || 'Ücretsiz Randevu Al';
  const primaryBtnLink = data?.primaryButtonLink || '/randevu';
  const secondaryBtnText = data?.secondaryButtonText || 'Hemen Ara';
  const secondaryBtnPhone = data?.secondaryButtonPhone || '+905551234567';
  const heroImage = data?.image;
  
  return (
    <section className="relative bg-white pt-20 pb-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-mesh-gradient"></div>
      
      {/* Animated Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary rounded-full text-white text-sm font-medium mb-6 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Türkiye&apos;nin Güvenilir Diyetisyeni</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              {heroTitle}
              <span className="block gradient-text-primary mt-2">
                {heroHighlight}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {heroSubtitle}
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-gray-700 font-medium"
                >
                  <CheckCircle className="w-5 h-5 text-primary-600 shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={primaryBtnLink}>
                <Button size="lg" className="bg-gradient-primary hover:shadow-2xl hover:scale-105 transition-all group text-lg px-8 py-4">
                  {primaryBtnText}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              
              <a href={`tel:${secondaryBtnPhone}`}>
                <Button variant="outline" size="lg" className="border-2 text-lg px-8 py-4">
                  <Phone className="mr-2" size={20} />
                  {secondaryBtnText}
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-gray-200">
              {displayStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-4xl font-bold gradient-text-primary">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-hero shadow-2xl overflow-hidden relative">
              {/* Hero Image from Sanity or Placeholder */}
              {heroImage ? (
                <Image
                  src={urlFor(heroImage).width(800).height(800).url()}
                  alt={heroTitle}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-lg font-semibold">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍⚕️</div>
                    <div>Oğuz Yolyapan</div>
                    <div className="text-sm opacity-90 mt-2">Uzman Diyetisyen</div>
                  </div>
                </div>
              )}
              
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Sertifikalı</div>
                  <div className="text-lg font-bold text-gray-900">Uzman Diyetisyen</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4"
            >
              
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
