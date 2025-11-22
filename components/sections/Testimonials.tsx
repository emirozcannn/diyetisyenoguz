'use client';

import Card from '@/components/ui/Card';
import { Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/image';
import { useState, useEffect, useCallback } from 'react';

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Array<{
    _id: string;
    name: string;
    testimonial: string;
    rating: number;
    location?: string;
    photo?: unknown;
  }>;
}

export default function Testimonials({ title: propTitle, subtitle: propSubtitle, testimonials }: TestimonialsProps) {
  const title = propTitle || 'Danışanlarımız Ne Diyor?';
  const subtitle = propSubtitle || 'Gerçek başarı hikayeleri ve mutlu danışanlarımın deneyimleri';
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Default testimonials if none provided
  const defaultTestimonials = [
    {
      _id: '1',
      name: 'Ayşe Yılmaz',
      location: 'İzmir',
      rating: 5,
      testimonial: '3 ayda 12 kilo verdim. Oğuz Bey çok ilgili ve programları gerçekten çalışıyor. Kendimi çok daha iyi hissediyorum!',
      photo: null,
    },
    {
      _id: '2',
      name: 'Mehmet Demir',
      location: 'Tekirdağ',
      rating: 5,
      testimonial: 'Online danışmanlık alıyordum, süreç boyunca sürekli desteklendi. Sağlıklı beslenme alışkanlığı kazandım.',
      photo: null,
    },
    {
      _id: '3',
      name: 'Zeynep Kaya',
      location: 'İstanbul',
      rating: 5,
      testimonial: 'Hamilelik dönemimde çok yardımcı oldu. Hem sağlıklı kaldım hem de gereksiz kilo almadım. Teşekkürler!',
      photo: null,
    },
  ];

  const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;

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
  const canScrollNext = currentIndex < displayTestimonials.length - itemsPerView;

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

  return (
    <section className="section-padding bg-gradient-soft relative overflow-hidden">
      {/* Quote Mark Decoration */}
      <div className="absolute top-10 left-10 text-primary-200 opacity-20 text-9xl font-serif">&quot;</div>
      <div className="absolute bottom-10 right-10 text-secondary-200 opacity-20 text-9xl font-serif rotate-180">&quot;</div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Referanslar
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {displayTestimonials.length > itemsPerView && (
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

          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {displayTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial._id}
                  className="shrink-0 px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white relative group">
                      {/* Quote Icon - Fully Rounded */}
                      <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-3xl font-serif leading-none">&quot;</span>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-gray-700 mb-6 leading-relaxed italic">
                        {testimonial.testimonial}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                        {testimonial.photo ? (
                          <div className="w-14 h-14 rounded-full overflow-hidden relative">
                            <Image
                              src={urlFor(testimonial.photo).width(56).height(56).url()}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-md">
                            {testimonial.name.charAt(0)}
                          </div>
                        )}
                        <div>
                          <div className="font-semibold text-gray-900 text-lg">
                            {testimonial.name}
                          </div>
                          {testimonial.location && (
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <MapPin size={14} />
                              <span>{testimonial.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
