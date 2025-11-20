'use client';

import { useState } from 'react';
import { Calculator, Activity, TrendingUp, Scale, Droplets } from 'lucide-react';
import BMICalculator from '@/components/calculators/BMICalculator';
import BMRCalculator from '@/components/calculators/BMRCalculator';
import CalorieCalculator from '@/components/calculators/CalorieCalculator';
import IdealWeightCalculator from '@/components/calculators/IdealWeightCalculator';
import WaterIntakeCalculator from '@/components/calculators/WaterIntakeCalculator';
import { motion } from 'framer-motion';

const calculators = [
  {
    id: 'bmi',
    name: 'BMI Hesaplama',
    icon: Scale,
    description: 'Vücut kitle indeksinizi hesaplayın',
    component: BMICalculator,
  },
  {
    id: 'bmr',
    name: 'BMR Hesaplama',
    icon: Activity,
    description: 'Bazal metabolizma hızınızı öğrenin',
    component: BMRCalculator,
  },
  {
    id: 'calorie',
    name: 'Kalori Hesaplama',
    icon: TrendingUp,
    description: 'Günlük kalori ihtiyacınızı bulun',
    component: CalorieCalculator,
  },
  {
    id: 'ideal-weight',
    name: 'İdeal Kilo',
    icon: Scale,
    description: 'İdeal kilo aralığınızı keşfedin',
    component: IdealWeightCalculator,
  },
  {
    id: 'water',
    name: 'Su İhtiyacı',
    icon: Droplets,
    description: 'Günlük su tüketim hedefini belirleyin',
    component: WaterIntakeCalculator,
  },
];

export default function HesaplamaAraclariPage() {
  const [activeTab, setActiveTab] = useState('bmi');
  const ActiveComponent = calculators.find((c) => c.id === activeTab)?.component || BMICalculator;

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
            className="inline-flex p-6 bg-gradient-primary rounded-2xl mb-6 shadow-lg"
          >
            <Calculator size={48} className="text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-6 text-white"
          >
            Hesaplama Araçları
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Sağlığınız hakkında bilgi edinmek için ücretsiz hesaplama araçlarımızı kullanın
          </motion.p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          {/* Desktop Tabs */}
          <div className="hidden md:flex gap-3 mb-8 p-2 bg-gray-100 rounded-2xl overflow-x-auto">
            {calculators.map((calc, index) => {
              const Icon = calc.icon;
              return (
                <motion.button
                  key={calc.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveTab(calc.id)}
                  className={`flex-1 min-w-[140px] px-4 py-4 rounded-xl font-medium transition-all ${
                    activeTab === calc.id
                      ? 'bg-white text-primary-600 shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon size={24} className="mx-auto mb-2" />
                  <div className="text-sm">{calc.name}</div>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden mb-8">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl font-medium text-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
            >
              {calculators.map((calc) => (
                <option key={calc.id} value={calc.id}>
                  {calc.name}
                </option>
              ))}
            </select>
          </div>

          {/* Active Calculator */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ActiveComponent />
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-6 bg-linear-to-br from-blue-50 to-primary-50 rounded-xl border border-primary-200"
          >
            <p className="text-sm text-gray-700 text-center">
              <strong>Not:</strong> Bu hesaplamalar genel bilgi amaçlıdır ve profesyonel tıbbi tavsiyenin 
              yerini tutmaz. Detaylı değerlendirme için{' '}
              <a href="/randevu" className="text-primary-600 hover:text-primary-700 font-medium underline">
                randevu alabilirsiniz
              </a>.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
