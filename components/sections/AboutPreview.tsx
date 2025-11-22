'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { 
  Award, BookOpen, Heart, Users, GraduationCap, Briefcase, FileCheck, 
  Star, Target, Shield, Gem, CheckCircle, Activity, TrendingUp, 
  Clock, Calendar, MessageCircle, Phone, Mail, MapPin 
} from 'lucide-react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/image';

interface AboutPreviewProps {
  title?: string;
  subtitle?: string;
  description?: string[];
  image?: unknown;
  ctaText?: string;
  highlights?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  floatingStats?: {
    value: string;
    label: string;
  };
}

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Award,
  Users,
  Heart,
  BookOpen,
  GraduationCap,
  Briefcase,
  FileCheck,
  Star,
  Target,
  Shield,
  Gem,
  CheckCircle,
  Activity,
  TrendingUp,
  Clock,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
};

export default function AboutPreview({ 
  title: propTitle, 
  subtitle: propSubtitle, 
  description, 
  image, 
  ctaText,
  highlights: propHighlights,
  floatingStats 
}: AboutPreviewProps) {
  const title = propTitle || 'Merhaba! Ben Oğuz Yolyapan';
  const subtitle = propSubtitle || 'Hakkımda';
  const buttonText = ctaText || 'Daha Fazla Bilgi';
  
  // Description - Sanity'den gelen değeri kullan, yoksa boş array
  const descriptions = description && description.length > 0 ? description : [];

  // Highlights - Sanity'den gelen değeri kullan, yoksa boş array
  const highlights = propHighlights || [];
  
  // Floating stats - Sanity'den gelen değeri kullan, yoksa null
  const stats = floatingStats;

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-20"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-4/5 rounded-3xl bg-gradient-hero shadow-2xl overflow-hidden">
                {image ? (
                  <Image
                    src={urlFor(image).width(600).height(750).url()}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-8xl mb-4">👨‍⚕️</div>
                      <div className="text-2xl font-bold">Oğuz Yolyapan</div>
                      <div className="text-sm opacity-90 mt-2">Uzman Diyetisyen</div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Floating Stats */}
              {stats && stats.value && stats.label && (
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text-primary">{stats.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stats.label}</div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold mb-4">
              {subtitle}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title.includes('Oğuz Yolyapan') ? (
                <>
                  Merhaba! Ben <span className="gradient-text-primary">Oğuz Yolyapan</span>
                </>
              ) : (
                title
              )}
            </h2>
            
            {descriptions.map((desc, index) => (
              <p key={index} className="text-lg text-gray-600 mb-6 leading-relaxed">
                {desc}
              </p>
            ))}

            {/* Highlights Grid */}
            {highlights && highlights.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {highlights.map((item, index) => {
                  const Icon = iconMap[item.icon] || Award;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex gap-3 p-4 rounded-xl hover:bg-primary-50 transition-colors group"
                    >
                      <div className="shrink-0">
                        <div className="p-3 bg-gradient-primary rounded-xl shadow-md group-hover:scale-110 transition-transform">
                          <Icon className="text-white" size={24} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            <Link href="/hakkimda">
              <Button size="lg" className="bg-gradient-primary hover:shadow-2xl hover:scale-105 transition-all">
                {buttonText}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
