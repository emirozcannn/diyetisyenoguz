'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sağlıklı Yaşama İlk Adımı Atın
          </h2>
          
          <p className="text-xl mb-10 opacity-90">
            Kişiye özel beslenme programınız için hemen randevu alın. 
            İlk görüşme ücretsiz!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/randevu">
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-gray-100 shadow-xl group"
              >
                Ücretsiz Randevu Al
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            
            <a href="tel:+905551234567">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Phone className="mr-2" size={20} />
                Hemen Ara
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-80 mt-1">Mutlu Danışan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">%95</div>
              <div className="text-sm opacity-80 mt-1">Başarı Oranı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm opacity-80 mt-1">Yıllık Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm opacity-80 mt-1">WhatsApp Destek</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
