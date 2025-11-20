import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { client } from '@/lib/sanity/client';

export const revalidate = 60; // Revalidate every 60 seconds

interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  description?: string;
  features?: string[];
  price?: string;
}

async function getServices(): Promise<Service[]> {
  const query = `*[_type == "service"] | order(_createdAt asc) {
    _id,
    title,
    slug,
    shortDescription,
    description,
    features,
    price
  }`;
  
  return client.fetch(query, {}, { next: { revalidate: 60 } });
}

export default async function HizmetlerPage() {
  const services = await getServices();

  const gradients = [
    'from-primary-500 to-accent-500',
    'from-emerald-500 to-teal-500',
    'from-blue-500 to-indigo-500',
    'from-purple-500 to-pink-500',
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom text-center relative z-10">
          <div className="inline-flex p-6 bg-gradient-primary rounded-2xl mb-6 shadow-lg">
            <Sparkles size={48} className="text-white" />
          </div>
          
          <h1 className="text-5xl font-bold mb-6 text-white">
            Hizmetlerimiz
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Size en uygun beslenme programı için çeşitli hizmet seçeneklerimiz
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service._id}>
                <Card className="hover:shadow-2xl transition-all hover:-translate-y-2 h-full flex flex-col">
                  {/* Gradient header */}
                  <div className={`-m-6 mb-6 p-6 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-t-2xl`}>
                    <h2 className="text-2xl font-bold text-white">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.shortDescription}
                  </p>
                  
                  {service.features && service.features.length > 0 && (
                    <div className="mb-6 flex-1">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle className="text-primary-600" size={20} />
                        Paket İçeriği:
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

                  {service.price && (
                    <div className="pt-4 border-t mb-6">
                      <p className="text-sm text-gray-600 font-medium">{service.price}</p>
                    </div>
                  )}

                  <Link href="/randevu" className="mt-auto">
                    <Button className="w-full group">
                      Randevu Al
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </Link>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
