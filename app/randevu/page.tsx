'use client';

import { motion } from 'framer-motion';
import AppointmentForm from '@/components/forms/AppointmentForm';
import { Calendar, MapPin, Clock, Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function RandevuPage() {
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
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex p-6 bg-gradient-primary rounded-2xl mb-6 shadow-lg"
          >
            <Calendar size={48} className="text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-6 text-gradient"
          >
            Randevu Al
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            İlk görüşme ücretsiz! Hemen randevu alarak sağlıklı yaşama ilk adımı atın.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="p-6 bg-emerald-50 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <MapPin className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Adres</h3>
                    <p className="text-sm text-gray-600">{CONTACT_INFO.address}</p>
                    <p className="text-sm text-gray-900 font-medium mt-2">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-teal-50 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 rounded-lg">
                    <Clock className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Çalışma Saatleri</h3>
                    <p className="text-sm text-gray-600">{CONTACT_INFO.workingHours.weekdays}</p>
                    <p className="text-sm text-gray-600">{CONTACT_INFO.workingHours.saturday}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-blue-50 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Çalışma Saatleri</h3>
                    <p className="text-sm text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                    <p className="text-sm text-gray-600">Cumartesi: 09:00 - 14:00</p>
                    <p className="text-sm text-gray-600">Pazar: Kapalı</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Hemen Arayın</h3>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg font-bold">
                      {CONTACT_INFO.phone}
                    </a>
                    <p className="text-sm mt-2 opacity-90">Telefonla da randevu alabilirsiniz</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
