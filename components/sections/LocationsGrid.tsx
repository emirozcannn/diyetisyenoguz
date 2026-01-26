'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const canScrollPrev = currentIndex > 0;
  const canScrollNext = currentIndex < locations.length - itemsPerView;

  const scrollPrev = useCallback(() => {
    if (canScrollPrev) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [canScrollPrev]);

  const scrollNext = useCallback(() => {
    if (canScrollNext) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [canScrollNext]);

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

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {locations.length > itemsPerView && (
            <>
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary-50 transition-all"
                aria-label="Önceki"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary-50 transition-all"
                aria-label="Sonraki"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </>
          )}

          {/* Locations Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {locations.map((location, index) => (
                <div
                  key={location.slug.current}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={`/bolge/${location.slug.current}`}>
                      <Card className="p-6 hover:shadow-2xl transition-all duration-500 group h-full flex flex-col hover:-translate-y-3 border border-gray-100 overflow-hidden relative">
                        {/* Gradient Accent */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity"></div>
                        
                        <div className="flex items-start justify-between mb-6 relative z-10">
                          <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                            <MapPin className="w-7 h-7 text-white" />
                          </div>
                          <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                            <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors relative z-10">
                          {location.location}
                        </h3>
                        
                        {location.hero?.subtitle && (
                          <p className="text-gray-600 line-clamp-2 mb-6 flex-1 relative z-10 leading-relaxed">
                            {location.hero.subtitle}
                          </p>
                        )}
                        
                        <div className="mt-auto inline-flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all relative z-10 pt-4 border-t border-gray-100">
                          <span>Detaylı Bilgi</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
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
