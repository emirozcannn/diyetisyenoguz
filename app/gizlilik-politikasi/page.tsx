import { Metadata } from 'next';
import { client } from '@/lib/sanity/client';
import { PortableText } from '@portabletext/react';
import { Lock } from 'lucide-react';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'Web sitesi gizlilik politikası ve kişisel verilerinizin korunması.',
};

interface LegalPage {
  title: string;
  content: unknown;
  lastUpdated: string;
}

async function getPrivacyContent(): Promise<LegalPage | null> {
  const query = `*[_type == "legalPage" && slug.current == "gizlilik-politikasi"][0] {
    title,
    content,
    lastUpdated
  }`;
  
  return client.fetch(query);
}

export default async function GizlilikPolitikasiPage() {
  const page = await getPrivacyContent();

  if (!page) {
    return (
      <div className="bg-white">
        <section className="section-padding">
          <div className="container-custom max-w-4xl text-center">
            <Lock className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h1 className="text-4xl font-bold mb-4">İçerik Yükleniyor</h1>
            <p className="text-gray-600">Gizlilik politikası içeriği henüz eklenmemiş.</p>
          </div>
        </section>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom text-center relative z-10">
          <div className="inline-flex p-6 bg-white/10 backdrop-blur-xl rounded-3xl mb-6 shadow-2xl border border-white/20">
            <Lock size={48} className="text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            {page.title}
          </h1>
          
          <p className="text-white/90 text-sm">
            Son Güncelleme: {formatDate(page.lastUpdated)}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <Card className="p-8 md:p-12 shadow-xl">
            <div className="prose prose-lg max-w-none">
              <PortableText value={page.content as any} />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
