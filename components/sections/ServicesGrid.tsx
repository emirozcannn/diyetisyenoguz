'use client';

import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ArrowRight, Users, Video, Building, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  services?: Array<{
    _id: string;
    title: string;
    slug: { current: string };
    shortDescription?: string;
    features?: string[];
    icon?: string;
  }>;
}

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, React.ElementType> = {
  'Users': Users,
  'Video': Video,
  'Building': Building,
  'Heart': Heart,
};

export default function ServicesGrid({ title, subtitle, ctaText, services }: ServicesGridProps) {
  const sectionTitle = title || 'Hizmetlerimiz';
  const sectionSubtitle = subtitle || 'Size en uygun beslenme programını bulun';
  const buttonText = ctaText || 'Tüm Hizmetleri Gör';

  // Don't render if no services
  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-gradient-soft">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Hizmetlerim
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon && iconMap[service.icon] ? iconMap[service.icon] : Video;
            return (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border border-gray-100 group overflow-hidden">
                  {/* Icon Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 bg-gradient-primary rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Features List */}
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-3 mb-6 flex-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="w-2 h-2 bg-gradient-primary rounded-full mr-3 mt-2 shrink-0 group-hover:scale-150 transition-transform"></span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Button - Positioned at bottom */}
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <Link href={`/hizmetler/${service.slug.current}`}>
                      <Button variant="outline" className="w-full group/btn border-2 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300">
                        Detaylı Bilgi
                        <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/hizmetler">
            <Button size="lg" className="bg-gradient-primary hover:shadow-2xl hover:scale-105 transition-all">
              {buttonText}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
