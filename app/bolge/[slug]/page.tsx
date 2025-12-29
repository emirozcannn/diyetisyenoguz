'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { MapPin, Phone, ArrowRight, Award, Heart, Users, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { client } from '@/lib/sanity/client';
import { urlFor } from '@/lib/sanity/image';
import { PortableText } from '@portabletext/react';

interface LocationPageData {
  title: string;
  location: string;
  slug: { current: string };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  hero: {
    h1: string;
    subtitle: string;
    description: string;
    image?: any;
    ctaText: string;
  };
  content: {
    mainContent: any[];
    whyChooseUs: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  servicesHighlight: {
    title: string;
    services: any[];
  };
  localInfo: {
    title: string;
    description: string;
    transportInfo: string;
    nearbyLocations: string[];
  };
  faq: {
    showFaq: boolean;
    title: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

const iconMap: { [key: string]: any } = {
  Heart,
  Award,
  Users,
  Clock,
  MapPin,
};

export default function LocationPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const [data, setData] = useState<LocationPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!slug) return;

    const query = `*[_type == "locationPage" && slug.current == $slug && isActive == true][0]{
      title,
      location,
      slug,
      seo,
      hero,
      content,
      servicesHighlight {
        title,
        services[]-> {
          _id,
          title,
          slug,
          shortDescription,
          icon
        }
      },
      localInfo,
      faq,
      cta
    }`;

    client
      .fetch(query, { slug })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Sayfa Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız bölge sayfası bulunamadı.</p>
          <Link href="/">
            <Button>Ana Sayfaya Dön</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-white font-medium">{data.location}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                {data.hero.h1}
              </h1>
              
              {data.hero.subtitle && (
                <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
                  {data.hero.subtitle}
                </p>
              )}
              
              {data.hero.description && (
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  {data.hero.description}
                </p>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/randevu">
                  <Button size="lg" className="w-full sm:w-auto">
                    {data.hero.ctaText || 'Randevu Al'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href={`tel:${CONTACT_INFO.phone}`}>
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    <Phone className="mr-2 w-5 h-5" />
                    Hemen Ara
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Image */}
            {data.hero.image && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={urlFor(data.hero.image).width(800).height(800).url()}
                    alt={data.hero.h1}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      {data.content?.mainContent && data.content.mainContent.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <PortableText value={data.content.mainContent} />
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      {data.content?.whyChooseUs && data.content.whyChooseUs.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 gradient-text-primary">
                Neden Bizi Seçmelisiniz?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.content.whyChooseUs.map((item, index) => {
                const IconComponent = iconMap[item.icon] || Award;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-8 h-full hover:shadow-xl transition-shadow">
                      <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Services Highlight */}
      {data.servicesHighlight?.services && data.servicesHighlight.services.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 gradient-text-primary">
                {data.servicesHighlight.title || 'Hizmetlerimiz'}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.servicesHighlight.services.map((service: any) => (
                <Card key={service._id} className="p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <Link href={`/hizmetler/${service.slug.current}`}>
                    <Button variant="ghost" className="group">
                      Detaylı Bilgi
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local Info */}
      {data.localInfo && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 gradient-text-primary">
                {data.localInfo.title}
              </h2>
              
              {data.localInfo.description && (
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {data.localInfo.description}
                </p>
              )}
              
              {data.localInfo.transportInfo && (
                <div className="bg-white p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    Ulaşım Bilgisi
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{data.localInfo.transportInfo}</p>
                </div>
              )}
              
              {data.localInfo.nearbyLocations && data.localInfo.nearbyLocations.length > 0 && (
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Hizmet Verdiğimiz Yakın Bölgeler</h3>
                  <div className="flex flex-wrap gap-3">
                    {data.localInfo.nearbyLocations.map((location, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium"
                      >
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {data.faq?.showFaq && data.faq.questions && data.faq.questions.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center gradient-text-primary">
                {data.faq.title}
              </h2>
              
              <div className="space-y-4">
                {data.faq.questions.map((item, index) => (
                  <Card key={index} className="overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-lg pr-4">{item.question}</span>
                      <ArrowRight
                        className={`w-5 h-5 shrink-0 transition-transform ${
                          openFaqIndex === index ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {data.cta.title}
            </h2>
            {data.cta.description && (
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {data.cta.description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/randevu">
                <Button size="lg" variant="secondary">
                  {data.cta.buttonText}
                </Button>
              </Link>
              <a href={`tel:${CONTACT_INFO.phone}`}>
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  <Phone className="mr-2 w-5 h-5" />
                  {CONTACT_INFO.phone}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
