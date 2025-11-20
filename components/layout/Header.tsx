'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';
import { CONTACT_INFO } from '@/lib/constants';

const navigation = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hakkımda', href: '/hakkimda' },
  { name: 'Hizmetler', href: '/hizmetler' },
  { name: 'Blog', href: '/blog' },
  { 
    name: 'Araçlar', 
    href: '/hesaplama-araclari',
    submenu: [
      { name: 'BMI Hesaplama', href: '/hesaplama-araclari#bmi' },
      { name: 'BMR Hesaplama', href: '/hesaplama-araclari#bmr' },
      { name: 'Kalori Hesaplama', href: '/hesaplama-araclari#kalori' },
      { name: 'İdeal Kilo', href: '/hesaplama-araclari#ideal-kilo' },
      { name: 'Su İhtiyacı', href: '/hesaplama-araclari#su' },
    ]
  },
  { name: 'SSS', href: '/sss' },
  { name: 'İletişim', href: '/iletisim' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Info */}
      <div className="bg-gradient-primary text-white py-2.5 hidden lg:block border-b border-white/10">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium">{CONTACT_INFO.phone}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Mail className="w-4 h-4" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Süleymanpaşa, Tekirdağ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-xl' 
            : 'bg-white shadow-sm'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex-shrink-0 group"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text-primary transition-all group-hover:scale-105">
                  Oğuz Yolyapan
                </span>
                <span className="text-xs text-gray-600 font-medium tracking-wide">
                  Uzman Diyetisyen
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        className="flex items-center gap-1 px-4 py-2 text-gray-700 font-medium hover:text-primary-600 transition-colors rounded-lg hover:bg-primary-50"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fade-in-up"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors text-sm font-medium"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 font-medium hover:text-primary-600 transition-colors rounded-lg hover:bg-primary-50"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/randevu">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
                >
                  Randevu Al
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menüyü Aç"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navigation={navigation} />
    </>
  );
}
