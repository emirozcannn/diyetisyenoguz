'use client';

import Card from '@/components/ui/Card';
import { Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ayşe Yılmaz',
    location: 'İzmir',
    rating: 5,
    text: '3 ayda 12 kilo verdim. Oğuz Bey çok ilgili ve programları gerçekten çalışıyor. Kendimi çok daha iyi hissediyorum!',
    image: null,
  },
  {
    name: 'Mehmet Demir',
    location: 'Tekirdağ',
    rating: 5,
    text: 'Online danışmanlık alıyordum, süreç boyunca sürekli desteklendi. Sağlıklı beslenme alışkanlığı kazandım.',
    image: null,
  },
  {
    name: 'Zeynep Kaya',
    location: 'İstanbul',
    rating: 5,
    text: 'Hamilelik dönemimde çok yardımcı oldu. Hem sağlıklı kaldım hem de gereksiz kilo almadım. Teşekkürler!',
    image: null,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-soft relative overflow-hidden">
      {/* Quote Mark Decoration */}
      <div className="absolute top-10 left-10 text-primary-200 opacity-20 text-9xl font-serif">“</div>
      <div className="absolute bottom-10 right-10 text-secondary-200 opacity-20 text-9xl font-serif rotate-180">“</div>

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
              Danışanlarımız Ne Diyor?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Gerçek başarı hikayeleri ve mutlu müşterilerimizin deneyimleri
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white relative group">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-serif">“</span>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-white rounded-2xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-white"></div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Mutlu Danışan</div>
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-left">
              <div className="flex items-center gap-1 mb-1">
                <Star size={20} className="fill-yellow-400 text-yellow-400" />
                <span className="text-2xl font-bold text-gray-900">4.9</span>
              </div>
              <div className="text-sm text-gray-600">Google Yorumları</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
