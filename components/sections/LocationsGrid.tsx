'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import { client } from '@/lib/sanity/client';

interface LocationData {
  title: string;
  location: string;
  slug: { current: string };
  hero: {
    subtitle: string;
  };
}

export default function LocationsGrid() {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch<LocationData[]>(
        `*[_type == "locationPage" && isActive == true] | order(order asc) {
          title,
          location,
          slug,
          hero {
            subtitle
          }
        }`
      )
      .then((data) => {
        setLocations(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading || locations.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-primary">
              Hizmet Verdiğimiz Bölgeler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tekirdağ ve çevresindeki tüm ilçelere profesyonel diyetisyen hizmeti sunuyoruz
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.slug.current}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/bolge/${location.slug.current}`}>
                <Card className="p-6 hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {location.location}
                  </h3>
                  
                  {location.hero?.subtitle && (
                    <p className="text-gray-600 line-clamp-2">
                      {location.hero.subtitle}
                    </p>
                  )}
                  
                  <div className="mt-4 inline-flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                    Detaylı Bilgi
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* SEO Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto text-center"
        >
          <p className="text-gray-600 leading-relaxed">
            <strong className="text-gray-800">Tekirdağ diyetisyen</strong> hizmeti arıyorsanız doğru yerdesiniz! 
            Uzman diyetisyen Oğuz Yolyapan olarak <strong>Süleymanpaşa</strong>, <strong>Çorlu</strong>, 
            <strong> Çerkezköy</strong>, <strong>Malkara</strong>, <strong>Hayrabolu</strong> ve 
            <strong> Marmaraereğlisi</strong> başta olmak üzere Tekirdağ'ın tüm ilçelerine hizmet veriyoruz.
            Ayrıca <strong>online diyet programları</strong> ile Türkiye'nin her yerinden bize ulaşabilirsiniz.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
