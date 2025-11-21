'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

// Mock data - will be replaced with Sanity data
const service = {
  title: 'Online Diyet Programı',
  shortDescription: 'Bulunduğunuz yerden online görüşme ile kişiye özel beslenme programı ve sürekli takip.',
  longDescription: `
    <p>Online diyet programımız, fiziksel mesafe fark etmeksizin profesyonel beslenme danışmanlığı almanızı sağlar. Video görüşme teknolojisi sayesinde, nerede olursanız olun size en uygun programı hazırlıyoruz.</p>
    
    <h3>Nasıl Çalışır?</h3>
    <p>İlk görüşmemizde detaylı anamnez alıyoruz - yaşam tarzınız, hastalık geçmişiniz, beslenme alışkanlıklarınız ve hedefleriniz hakkında konuşuyoruz. Ardından size özel bir beslenme programı hazırlıyoruz.</p>
    
    <h3>Takip Süreci</h3>
    <p>Haftalık online kontroller ile ilerlemenizi takip ediyoruz. WhatsApp üzerinden 7/24 destek veriyoruz, sorularınızı yanıtlıyoruz ve motivasyonunuzu yüksek tutuyoruz.</p>
    
    <h3>Kimler İçin Uygun?</h3>
    <ul>
      <li>Yoğun iş temposu olan profesyoneller</li>
      <li>Farklı şehirlerde yaşayanlar</li>
      <li>Evden çıkmakta zorlananlar</li>
      <li>Seyahat eden kişiler</li>
    </ul>
  `,
  features: [
    'İlk görüşme ve detaylı anamnez',
    'Kişiye özel beslenme programı',
    'Haftalık online kontroller',
    'WhatsApp üzerinden 7/24 destek',
    'Yemek listeleri ve tarifler',
    'Aylık ilerleme raporları',
  ],
  duration: '3 Ay',
  sessions: 12,
  support: '7/24 WhatsApp',
};

export default function ServiceDetailPage() {
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
            href="/hizmetler"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-6"
          >
            <ArrowLeft size={20} />
            Hizmetler&apos;e Dön
          </Link>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-white drop-shadow-lg"
          >
            {service.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            {service.shortDescription}
          </motion.p>
          
          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-primary-200">
              <Clock className="text-primary-600" size={20} />
              <span className="font-medium">{service.duration}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-primary-200">
              <Users className="text-primary-600" size={20} />
              <span className="font-medium">{service.sessions} Görüşme</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-primary-200">
              <CheckCircle className="text-primary-600" size={20} />
              <span className="font-medium">{service.support}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              <article
                className="prose prose-lg max-w-none prose-headings:text-gradient prose-a:text-primary-600"
                dangerouslySetInnerHTML={{ __html: service.longDescription }}
              />
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              {/* Features Card */}
              <div className="p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-200">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="text-primary-600" />
                  Paket İçeriği
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start group">
                      <span className="w-2 h-2 bg-gradient-primary rounded-full mr-3 mt-2 group-hover:scale-150 transition-transform"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="p-6 bg-gradient-primary rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-3">
                  Hemen Başlayın
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  İlk görüşme ücretsiz! Hemen randevu alın.
                </p>
                <Link href="/randevu">
                  <Button className="w-full bg-white text-primary-600 hover:bg-gray-100">
                    Randevu Al
                  </Button>
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
}
