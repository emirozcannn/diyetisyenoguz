import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle, Clock, Users, Phone } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { client } from '@/lib/sanity/client';
import { PortableText } from '@portabletext/react';
import type { Metadata } from 'next';

interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription?: string;
  fullDescription?: any[];
  features?: string[];
  duration?: string;
  sessions?: number;
  support?: string;
  priceText?: string;
}

async function getService(slug: string): Promise<Service | null> {
  try {
    const query = `*[_type == "service" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      shortDescription,
      fullDescription,
      features,
      duration,
      sessions,
      support,
      priceText
    }`;
    
    return await client.fetch(query, { slug }, { next: { revalidate: 60 } });
  } catch {
    return null;
  }
}

async function getAllServices() {
  try {
    const query = `*[_type == "service"] { "slug": slug.current }`;
    return await client.fetch(query, {}, { cache: 'no-store' });
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service: { slug: string }) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  
  if (!service) {
    return {
      title: 'Hizmet Bulunamadı',
    };
  }

  return {
    title: `${service.title} | Tekirdağ Diyetisyen Oğuz Yolyapan`,
    description: service.shortDescription || `${service.title} hakkında detaylı bilgi.`,
    alternates: {
      canonical: `https://www.diyetisyenoguz.com/hizmetler/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    notFound();
  }

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
            className="inline-flex items-center gap-2 text-white hover:text-white/90 font-medium mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Hizmetler&apos;e Dön
          </Link>
          
          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            {service.title}
          </h1>
          
          {service.shortDescription && (
            <p className="text-xl text-white/90 drop-shadow mb-8">
              {service.shortDescription}
            </p>
          )}
          
          {/* Quick Info */}
          {(service.duration || service.sessions || service.support) && (
            <div className="flex flex-wrap gap-4">
              {service.duration && (
                <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl border border-primary-200">
                  <Clock className="text-primary-600" size={20} />
                  <span className="font-medium text-gray-900">{service.duration}</span>
                </div>
              )}
              {service.sessions && (
                <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl border border-primary-200">
                  <Users className="text-primary-600" size={20} />
                  <span className="font-medium text-gray-900">{service.sessions} Görüşme</span>
                </div>
              )}
              {service.support && (
                <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl border border-primary-200">
                  <Phone className="text-primary-600" size={20} />
                  <span className="font-medium text-gray-900">{service.support}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {service.fullDescription && service.fullDescription.length > 0 ? (
                <article className="prose prose-lg max-w-none prose-headings:text-gradient prose-a:text-primary-600">
                  <PortableText value={service.fullDescription} />
                </article>
              ) : (
                <div className="text-gray-600">
                  <p className="mb-4">Detaylı açıklama yakında eklenecektir.</p>
                  <p>Bu hizmet hakkında daha fazla bilgi almak için lütfen bizimle iletişime geçin.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Features Card */}
              {service.features && service.features.length > 0 && (
                <div className="p-6 bg-linear-to-br from-primary-50 to-white rounded-2xl border border-primary-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="text-primary-600" />
                    Paket İçeriği
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start group">
                        <span className="w-2 h-2 bg-gradient-primary rounded-full mr-3 mt-2 group-hover:scale-150 transition-transform"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Price Card */}
              {service.priceText && (
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">Fiyat</h3>
                  <p className="text-2xl font-bold text-primary-600">{service.priceText}</p>
                </div>
              )}

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
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
