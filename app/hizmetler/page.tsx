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

         

          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">

            Hizmetlerim

          </h1>

          <p className="text-xl text-white max-w-2xl mx-auto font-semibold drop-shadow">

            Size en uygun beslenme programı için çeşitli hizmet seçenekleri sunuyorum

          </p>

        </div>

      </section>



      {/* Services Grid */}

      <section className="section-padding">

        <div className="container-custom">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (

              <div key={service._id} className="h-full">

                <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full flex flex-col overflow-hidden border border-gray-100">

                  {/* Gradient header with improved design */}

                  <div className={`-m-6 mb-6 p-8 bg-linear-to-br ${gradients[index % gradients.length]} rounded-t-2xl relative overflow-hidden`}>

                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                    <h2 className="text-2xl font-bold text-white relative z-10 drop-shadow-lg">

                      {service.title}

                    </h2>

                  </div>

                 

                  <p className="text-gray-600 mb-6 leading-relaxed">

                    {service.shortDescription}

                  </p>

                 

                  {service.features && service.features.length > 0 && (

                    <div className="mb-6 flex-1">

                      <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">

                        <CheckCircle className="text-primary-600" size={20} />

                        Paket İçeriği

                      </h3>

                      <ul className="space-y-3">

                        {service.features.map((feature, idx) => (

                          <li key={idx} className="flex items-start group">

                            <span className="w-2 h-2 bg-gradient-primary rounded-full mr-3 mt-2 group-hover:scale-150 transition-transform"></span>

                            <span className="text-gray-700 text-sm">{feature}</span>

                          </li>

                        ))}

                      </ul>

                    </div>

                  )}

                  <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-gray-100">

                    <Link href={`/hizmetler/${service.slug.current}`}>

                      <Button variant="outline" className="w-full group hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300">

                        Detaylı Bilgi

                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />

                      </Button>

                    </Link>

                    <Link href="/randevu">

                      <Button className="w-full group shadow-lg hover:shadow-xl">

                        Randevu Al

                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />

                      </Button>

                    </Link>

                  </div>

                </Card>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>

  );

}