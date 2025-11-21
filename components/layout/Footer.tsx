import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterData {
  title: string;
  description: string;
  servicesLinks: FooterLink[];
  corporateLinks: FooterLink[];
  legalLinks: FooterLink[];
  copyrightText: string;
}

interface FooterProps {
  data?: FooterData;
}

export default function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Default fallback data
  const footerData = data || {
    title: 'Oğuz Yolyapan',
    description: 'Profesyonel beslenme danışmanlığı ve kişiye özel diyet programları ile sağlıklı yaşam yolculuğunuzda yanınızdayız.',
    servicesLinks: [
      { name: 'Online Diyet', href: '/hizmetler/online-diyet' },
      { name: 'Yüz Yüze Danışmanlık', href: '/hizmetler/yuz-yuze-danismanlık' },
      { name: 'Kurumsal Hizmetler', href: '/hizmetler/kurumsal' },
    ],
    corporateLinks: [
      { name: 'Hakkımda', href: '/hakkimda' },
      { name: 'Blog', href: '/blog' },
      { name: 'SSS', href: '/sss' },
      { name: 'İletişim', href: '/iletisim' },
    ],
    legalLinks: [
      { name: 'KVKK', href: '/kvkk' },
      { name: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
    ],
    copyrightText: 'Tüm hakları saklıdır.',
  };

  return (
    <footer className="bg-gradient-dark text-gray-300 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-400">
              {footerData.title}
            </h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              {footerData.description}
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
            <h4 className="text-gray-900 font-semibold mb-6 text-lg">Hizmetler</h4>
            <ul className="space-y-3">
              {footerData.servicesLinks && Array.isArray(footerData.servicesLinks) && footerData.servicesLinks.map((link) => (
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
            <h4 className="text-gray-900 font-semibold mb-6 text-lg">Kurumsal</h4>
            <ul className="space-y-3">
              {footerData.corporateLinks && Array.isArray(footerData.corporateLinks) && footerData.corporateLinks.map((link) => (
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
            <h4 className="text-gray-900 font-semibold mb-6 text-lg">İletişim</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-black leading-relaxed">{CONTACT_INFO.address}</span>
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
              &copy; {currentYear} <span className="text-primary-400 font-medium">{footerData.title}</span>. {footerData.copyrightText}
            </p>
            <div className="flex items-center gap-6">
              {footerData.legalLinks && Array.isArray(footerData.legalLinks) && footerData.legalLinks.map((link, index) => (
                <>
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < footerData.legalLinks.length - 1 && (
                    <span key={`separator-${index}`} className="text-gray-600">•</span>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
