'use client';

import Link from 'next/link';
import { X, Phone, Mail, ChevronDown, ChevronRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navigation: Array<{
    name: string;
    href: string;
    submenu?: Array<{ name: string; href: string }>;
  }>;
}

export default function MobileMenu({ open, onClose, navigation }: MobileMenuProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-primary">
              <div className="text-white">
                <div className="text-xl font-bold">Oğuz Yolyapan</div>
                <div className="text-sm text-white/90">Uzman Diyetisyen</div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors text-white"
                aria-label="Menüyü Kapat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-6 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 font-medium hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform ${
                            openSubmenu === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      <AnimatePresence>
                        {openSubmenu === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-1 ml-4 space-y-1 border-l-2 border-primary-200 pl-4">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={onClose}
                                  className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors text-sm"
                                >
                                  <ChevronRight className="w-4 h-4" />
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block px-4 py-3 text-gray-700 font-medium hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="px-6 pb-6">
              <Link href="/randevu" onClick={onClose}>
                <Button className="w-full bg-gradient-primary text-white font-semibold" size="lg">
                  Randevu Al
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="border-t border-gray-200 p-6 space-y-4 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-3">İletişim Bilgileri</h3>
              <a 
                href="tel:+905010138188" 
                className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Telefon</div>
                  <div className="text-sm">+90 (501) 013-8188</div>
                </div>
              </a>
              <a 
                href="mailto:dyt.oguzyolyapan@gmail.com" 
                className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-secondary-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">E-posta</div>
                  <div className="text-sm">dyt.oguzyolyapan@gmail.com</div>
                </div>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
