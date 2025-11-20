'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Online Diyet Programı',
    slug: 'online-diyet',
    shortDescription: 'Bulunduğunuz yerden online görüşme ile kişiye özel beslenme programı ve sürekli takip.',
    features: [
      'İlk görüşme ve detaylı anamnez',
      'Kişiye özel beslenme programı',
      'Haftalık online kontroller',
      'WhatsApp üzerinden 7/24 destek',
      'Yemek listeleri ve tarifler',
      'Aylık ilerleme raporları',
    ],
    price: 'Ücretlendirme için iletişime geçin',
    gradient: 'from-primary-500 to-accent-500',
  },
  {
    title: 'Yüz Yüze Danışmanlık',
    slug: 'yuz-yuze-danismanlık',
    shortDescription: 'İzmir ve Tekirdağ ofislerimizde birebir görüşme ve detaylı sağlık analizi.',
    features: [
      'Vücut kompozisyon analizi',
      'Detaylı boy-kilo ölçümleri',
      'Biyokimyasal değerlendirme',
      'Kişisel beslenme programı',
      'Aylık kontrol randevuları',
      'Hedef takibi ve motivasyon',
    ],
    price: 'Ücretlendirme için iletişime geçin',
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    title: 'Kurumsal Hizmetler',
    slug: 'kurumsal',
    shortDescription: 'Şirketler için toplu beslenme eğitimleri ve çalışan sağlığı programları.',
    features: [
      'Beslenme eğitim seminerleri',
      'Toplu sağlık taraması',
      'Çalışan beslenme programları',
      'Kafeterya menü danışmanlığı',
      'Sağlıklı yaşam workshopları',
      'Aylık raporlama ve takip',
    ],
    price: 'Ücretlendirme için iletişime geçin',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Özel Durumlar',
    slug: 'ozel-durumlar',
    shortDescription: 'Hamilelik, spor beslenmesi, kronik hastalıklar için özel beslenme programları.',
    features: [
      'Hamilelik ve emzirme dönemi',
      'Spor beslenmesi ve performans',
      'Diyabet yönetimi',
      'Kalp-damar sağlığı',
      'Polikistik over sendromu',
      'Çölyak hastalığı ve alerjiler',
    ],
    price: 'Ücretlendirme için iletişime geçin',
    gradient: 'from-orange-500 to-pink-500',
  },
];

export default function HizmetlerPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-flex p-6 bg-gradient-primary rounded-2xl mb-6 shadow-lg"
          >
            <Sparkles size={48} className="text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-6 text-white"
          >
            Hizmetlerimiz
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Size en uygun beslenme programı için çeşitli hizmet seçeneklerimiz
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-2xl transition-all hover:-translate-y-2 h-full flex flex-col">
                  {/* Gradient header */}
                  <div className={`-m-6 mb-6 p-6 bg-linear-to-br ${service.gradient} rounded-t-2xl`}>
                    <h2 className="text-2xl font-bold text-white">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.shortDescription}
                  </p>
                  
                  <div className="mb-6 flex-1">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="text-primary-600" size={20} />
                      Paket İçeriği:
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

                  <div className="pt-4 border-t mb-6">
                    <p className="text-sm text-gray-600 font-medium">{service.price}</p>
                  </div>

                  <Link href="/randevu" className="mt-auto">
                    <Button className="w-full group">
                      Randevu Al
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
