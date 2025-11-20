import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    hizmetler: [
      { name: 'Online Diyet', href: '/hizmetler/online-diyet' },
      { name: 'Yüz Yüze Danışmanlık', href: '/hizmetler/yuz-yuze-danismanlık' },
      { name: 'Kurumsal Hizmetler', href: '/hizmetler/kurumsal' },
    ],
    hakkinda: [
      { name: 'Hakkımda', href: '/hakkimda' },
      { name: 'Blog', href: '/blog' },
      { name: 'SSS', href: '/sss' },
      { name: 'İletişim', href: '/iletisim' },
    ],
    yasal: [
      { name: 'KVKK', href: '/kvkk' },
      { name: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
    ],
  };

  return (
    <footer className="bg-gradient-dark text-gray-300 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom py-16 relative z-10">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Sağlıklı Yaşam İpuçlarını Kaçırmayın
            </h3>
            <p className="text-gray-400 mb-8">
              Beslenme tavsiyeleri, diyet programları ve özel fırsatlardan haberdar olmak için e-bültene kayıt olun.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 backdrop-blur-sm"
              />
              <Button className="bg-gradient-primary hover:scale-105 transition-all">
                Kayıt Ol
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4 gradient-text-primary">
              Oğuz Yolyapan
            </h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Profesyonel beslenme danışmanlığı ve kişiye özel diyet programları ile sağlıklı yaşam yolculuğunuzda yanınızdayız.
            </p>
            <div className="flex gap-3">
              <a 
                href={CONTACT_INFO.socialMedia.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gradient-primary flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={CONTACT_INFO.socialMedia.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gradient-primary flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={CONTACT_INFO.socialMedia.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gradient-primary flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={CONTACT_INFO.socialMedia.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gradient-primary flex items-center justify-center transition-all hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Hizmetler</h4>
            <ul className="space-y-3">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Kurumsal</h4>
            <ul className="space-y-3">
              {footerLinks.hakkinda.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">İletişim</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-gray-400 leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li>
                <a 
                  href={`tel:${CONTACT_INFO.phone}`} 
                  className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-gradient-primary flex items-center justify-center transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-gradient-primary flex items-center justify-center transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              &copy; {currentYear} <span className="text-white font-medium">Oğuz Yolyapan</span>. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.yasal.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">Made with ❤️</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
