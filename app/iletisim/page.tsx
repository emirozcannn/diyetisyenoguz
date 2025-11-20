'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Linkedin, Youtube, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex p-6 bg-white/10 backdrop-blur-xl rounded-3xl mb-6 shadow-2xl border border-white/20"
          >
            <MessageSquare size={48} className="text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            İletişim
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Sağlıklı yaşam yolculuğunuza başlamak için bizimle iletişime geçin
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-10 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="text-center h-full bg-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Telefon</h3>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
                  {CONTACT_INFO.phone}
                </a>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="text-center h-full bg-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">E-posta</h3>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 hover:text-primary-600 transition-colors font-medium break-all">
                  {CONTACT_INFO.email}
                </a>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="text-center h-full bg-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Adres</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Süleymanpaşa, Tekirdağ
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="text-center h-full bg-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Çalışma Saatleri</h3>
                <p className="text-gray-600 text-sm">
                  Pzt-Cmt: 09:00-14:00
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="p-8 shadow-xl">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold gradient-text-primary mb-2">
                    Mesaj Gönderin
                  </h2>
                  <p className="text-gray-600">
                    Formu doldurun, en kısa sürede size geri dönelim
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Adınızı girin"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta Adresiniz *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="0555 555 55 55"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary hover:shadow-xl transition-all group">
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                    Mesaj Gönder
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Location & Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              {/* Map */}
              <Card className="p-0 overflow-hidden shadow-xl">
                <div className="aspect-video relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.8!2d27.5!3d40.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU4JzQ4LjAiTiAyN8KwMzAnMDAuMCJF!5e0!3m2!1str!2str!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </Card>

              {/* Address Details */}
              <Card className="p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 gradient-text-primary">
                  Adres Bilgileri
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-600 rounded-xl flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-lg">Kliniğimiz</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {CONTACT_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex-shrink-0">
                        <Clock className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-3 text-lg">Çalışma Saatleri</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                            <span className="text-gray-700 font-medium">Pazartesi - Cuma</span>
                            <span className="text-gray-600">09:00 - 18:00</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                            <span className="text-gray-700 font-medium">Cumartesi</span>
                            <span className="text-gray-600">09:00 - 14:00</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                            <span className="text-gray-700 font-medium">Pazar</span>
                            <span className="text-red-600 font-medium">Kapalı</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-4 text-lg">Sosyal Medya</h4>
                    <div className="flex gap-3">
                      <a
                        href={CONTACT_INFO.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-3 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center"
                      >
                        <Instagram size={22} />
                      </a>
                      <a
                        href={CONTACT_INFO.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-3 bg-blue-600 text-white rounded-xl hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center"
                      >
                        <Facebook size={22} />
                      </a>
                      <a
                        href={CONTACT_INFO.socialMedia.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-3 bg-blue-700 text-white rounded-xl hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center"
                      >
                        <Linkedin size={22} />
                      </a>
                      <a
                        href={CONTACT_INFO.socialMedia.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-3 bg-red-600 text-white rounded-xl hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center"
                      >
                        <Youtube size={22} />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
