'use client';

import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { client } from '@/lib/sanity/client';
import { PortableText } from '@portabletext/react';

interface FAQ {
  _id: string;
  question: string;
  answer: Array<{ _type: 'block'; [key: string]: unknown }>;
  category: string;
  categoryColor: string;
  order: number;
}

const colorMap: Record<string, { border: string; text: string; hover: string; bg: string }> = {
  red: { border: 'border-red-500', text: 'text-red-600', hover: 'hover:border-red-400', bg: 'bg-red-50' },
  blue: { border: 'border-blue-500', text: 'text-blue-600', hover: 'hover:border-blue-400', bg: 'bg-blue-50' },
  emerald: { border: 'border-emerald-500', text: 'text-emerald-600', hover: 'hover:border-emerald-400', bg: 'bg-emerald-50' },
  purple: { border: 'border-purple-500', text: 'text-purple-600', hover: 'hover:border-purple-400', bg: 'bg-purple-50' },
  orange: { border: 'border-orange-500', text: 'text-orange-600', hover: 'hover:border-orange-400', bg: 'bg-orange-50' },
  pink: { border: 'border-pink-500', text: 'text-pink-600', hover: 'hover:border-pink-400', bg: 'bg-pink-50' },
  teal: { border: 'border-teal-500', text: 'text-teal-600', hover: 'hover:border-teal-400', bg: 'bg-teal-50' },
  primary: { border: 'border-primary-500', text: 'text-primary-600', hover: 'hover:border-primary-400', bg: 'bg-primary-50' },
};

const categoryLabels: Record<string, string> = {
  genel: 'Genel',
  randevu: 'Randevu',
  beslenme: 'Beslenme',
  ucretlendirme: 'Ücretlendirme',
  online: 'Online Danışmanlık',
};

export default function SSSPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch<FAQ[]>('*[_type == "faq"] | order(category asc, order asc)')
      .then((data) => {
        setFaqs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  // Group FAQs by category
  const groupedFaqs = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = { faqs: [], color: faq.categoryColor };
    }
    acc[faq.category].faqs.push(faq);
    return acc;
  }, {} as Record<string, { faqs: FAQ[]; color: string }>);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="inline-flex p-6 bg-gradient-primary rounded-2xl mb-6 shadow-lg"
          >
            <HelpCircle size={48} className="text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-6 text-white drop-shadow-lg"
          >
            Sık Sorulan Sorular
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Merak ettiklerinizin cevapları burada
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {Object.keys(groupedFaqs).length === 0 ? (
            <div className="text-center py-16">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">Henüz soru eklenmemiş.</p>
            </div>
          ) : (
            Object.entries(groupedFaqs).map(([category, { faqs: categoryFaqs, color }], idx) => {
              const colors = colorMap[color] || colorMap.primary;
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="mb-12"
                >
                  <div className={`inline-block px-6 py-2 ${colors.bg} ${colors.border} border-2 rounded-full mb-6`}>
                    <h2 className={`text-2xl font-bold ${colors.text}`}>
                      {categoryLabels[category] || category}
                    </h2>
                  </div>

                  <Accordion.Root type="single" collapsible className="space-y-4">
                    {categoryFaqs.map((faq) => (
                      <Accordion.Item
                        key={faq._id}
                        value={faq._id}
                        className={`bg-white border-2 ${colors.border} rounded-xl overflow-hidden ${colors.hover} transition-all hover:shadow-lg`}
                      >
                        <Accordion.Header>
                          <Accordion.Trigger className={`group w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-gray-900 ${colors.text} transition-colors data-[state=open]:${colors.bg}`}>
                            <span className="pr-4">{faq.question}</span>
                            <ChevronDown className="shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" size={24} />
                          </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="px-6 pb-5 pt-2 text-gray-600 prose prose-sm max-w-none">
                          <PortableText value={faq.answer} />
                        </Accordion.Content>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>
                </motion.div>
              );
            })
          )}

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-linear-to-r from-emerald-600 to-teal-600 rounded-2xl text-white text-center shadow-xl"
          >
            <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-3 text-white">Sorunuzun cevabını bulamadınız mı?</h3>
            <p className="mb-6 text-white/90">Bana ulaşın!, size yardımcı olmaktan mutluluk duyarız!</p>
            <a
              href="/iletisim"
              className="inline-block px-8 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              İletişime Geçin
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
