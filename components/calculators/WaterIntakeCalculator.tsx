'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { calculateWaterIntake } from '@/lib/utils/calculators';
import { Droplets } from 'lucide-react';

export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState<'low' | 'moderate' | 'high'>('moderate');
  const [result, setResult] = useState<{
    liters: number;
    glasses: number;
    description: string;
  } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    
    if (w > 0) {
      const waterIntake = calculateWaterIntake(w, activityLevel);
      setResult(waterIntake);
    }
  };

  return (
    <Card>
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Droplets className="text-blue-500" />
        Günlük Su İhtiyacı Hesaplama
      </h3>
      <p className="text-gray-600 mb-6">
        Kilonuz ve aktivite seviyenize göre günlük su ihtiyacınızı hesaplayın.
      </p>

      <form onSubmit={handleCalculate} className="space-y-4">
        <Input
          type="number"
          label="Kilonuz (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Örn: 75"
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Aktivite Seviyeniz
          </label>
          <div className="grid grid-cols-3 gap-3">
            <label className={`p-4 border-2 rounded-xl cursor-pointer text-center transition-all ${
              activityLevel === 'low' 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-gray-200 hover:border-primary-300'
            }`}>
              <input
                type="radio"
                name="activity"
                value="low"
                checked={activityLevel === 'low'}
                onChange={(e) => setActivityLevel(e.target.value as 'low' | 'moderate' | 'high')}
                className="sr-only"
              />
              <div className="font-medium text-sm">Düşük</div>
              <div className="text-xs text-gray-500 mt-1">Az hareket</div>
            </label>
            <label className={`p-4 border-2 rounded-xl cursor-pointer text-center transition-all ${
              activityLevel === 'moderate' 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-gray-200 hover:border-primary-300'
            }`}>
              <input
                type="radio"
                name="activity"
                value="moderate"
                checked={activityLevel === 'moderate'}
                onChange={(e) => setActivityLevel(e.target.value as 'low' | 'moderate' | 'high')}
                className="sr-only"
              />
              <div className="font-medium text-sm">Orta</div>
              <div className="text-xs text-gray-500 mt-1">Normal</div>
            </label>
            <label className={`p-4 border-2 rounded-xl cursor-pointer text-center transition-all ${
              activityLevel === 'high' 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-gray-200 hover:border-primary-300'
            }`}>
              <input
                type="radio"
                name="activity"
                value="high"
                checked={activityLevel === 'high'}
                onChange={(e) => setActivityLevel(e.target.value as 'low' | 'moderate' | 'high')}
                className="sr-only"
              />
              <div className="font-medium text-sm">Yüksek</div>
              <div className="text-xs text-gray-500 mt-1">Çok aktif</div>
            </label>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Hesapla
        </Button>
      </form>

      {result && (
        <div className="mt-6">
          <div className="p-6 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl text-white">
            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="text-center">
                <Droplets size={32} className="mx-auto mb-2" />
                <div className="text-5xl font-bold">{result.liters}L</div>
                <div className="text-sm text-white/80 mt-1">Litre</div>
              </div>
              <div className="w-px h-16 bg-white/30"></div>
              <div className="text-center">
                <div className="text-5xl font-bold">{result.glasses}</div>
                <div className="text-sm text-white/80 mt-1">Bardak (250ml)</div>
              </div>
            </div>
            <p className="text-center text-white/90 text-sm">
              {result.description}
            </p>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-xl">
            <div className="flex items-start gap-3">
              <Droplets className="text-blue-500 shrink-0 mt-0.5" size={20} />
              <div className="text-sm text-gray-700">
                <strong>İpucu:</strong> Su ihtiyacınız hava sıcaklığı, terlemek gibi faktörlerle artabilir. 
                Sabah uyanır uyanmaz bir bardak su içmeyi alışkanlık haline getirin.
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
