'use client';

import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ArrowRight, Users, Video, Building, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Online Diyet Programı',
    description: 'Bulunduğunuz yerden online görüşme ile kişiye özel beslenme programı ve sürekli takip.',
    icon: Video,
    features: ['Online görüşme', 'Haftalık takip', 'WhatsApp desteği', 'Yemek listeleri'],
    slug: 'online-diyet',
  },
  {
    title: 'Yüz Yüze Danışmanlık',
    description: 'İzmir ve Tekirdağ ofislerimizde birebir görüşme ve detaylı sağlık analizi.',
    icon: Users,
    features: ['Vücut analizi', 'Detaylı ölçüm', 'Kişisel program', 'Aylık kontrol'],
    slug: 'yuz-yuze-danismanlık',
  },
  {
    title: 'Kurumsal Hizmetler',
    description: 'Şirketler için toplu beslenme eğitimleri ve çalışan sağlığı programları.',
    icon: Building,
    features: ['Eğitim seminerleri', 'Toplu programlar', 'Sağlık taraması', 'Raporlama'],
    slug: 'kurumsal',
  },
  {
    title: 'Özel Durumlar',
    description: 'Hamilelik, spor beslenmesi, kronik hastalıklar için özel beslenme programları.',
    icon: Heart,
    features: ['Hamilelik diyeti', 'Spor beslenmesi', 'Hastalık diyeti', 'Özel takip'],
    slug: 'ozel-durumlar',
  },
];

export default function ServicesGrid() {
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
              Hizmetlerimiz
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Size Özel Beslenme Çözümleri
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İhtiyaçlarınıza uygun profesyonel hizmet seçeneklerimiz
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100 group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 bg-gradient-primary rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0"></span>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/hizmetler/${service.slug}`}>
                    <Button variant="outline" className="w-full group/btn border-2 hover:bg-primary-50 hover:border-primary-500">
                      Detaylı Bilgi
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </Link>
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
              Tüm Hizmetleri Gör
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
