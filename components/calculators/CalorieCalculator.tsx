'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { calculateBMR, calculateDailyCalories } from '@/lib/utils/calculators';

export default function CalorieCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [result, setResult] = useState<{
    maintenance: number;
    weightLoss: number;
    weightGain: number;
  } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);
    
    if (w > 0 && h > 0 && a > 0) {
      const bmr = calculateBMR(w, h, a, gender);
      const calories = calculateDailyCalories(bmr, activityLevel);
      setResult(calories);
    }
  };

  return (
    <Card>
      <h3 className="text-2xl font-bold mb-4">Günlük Kalori İhtiyacı Hesaplama</h3>
      <p className="text-gray-600 mb-6">
        Aktivite seviyenize göre günlük kalori ihtiyacınızı öğrenin.
      </p>

      <form onSubmit={handleCalculate} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex items-center space-x-3 p-4 border-2 rounded-xl cursor-pointer hover:border-primary-500 transition-colors">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value as 'male' | 'female')}
              className="w-4 h-4 text-primary-600"
            />
            <span className="font-medium">Erkek</span>
          </label>
          <label className="flex items-center space-x-3 p-4 border-2 rounded-xl cursor-pointer hover:border-primary-500 transition-colors">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value as 'male' | 'female')}
              className="w-4 h-4 text-primary-600"
            />
            <span className="font-medium">Kadın</span>
          </label>
        </div>

        <Input
          type="number"
          label="Kilonuz (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Örn: 75"
          required
        />
        
        <Input
          type="number"
          label="Boyunuz (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Örn: 170"
          required
        />

        <Input
          type="number"
          label="Yaşınız"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Örn: 30"
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Aktivite Seviyeniz
          </label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="sedentary">Hareketsiz (Egzersiz yapmam)</option>
            <option value="light">Hafif Aktif (Haftada 1-3 gün)</option>
            <option value="moderate">Orta Aktif (Haftada 3-5 gün)</option>
            <option value="active">Çok Aktif (Haftada 6-7 gün)</option>
            <option value="veryActive">Profesyonel Sporcu</option>
          </select>
        </div>

        <Button type="submit" className="w-full">
          Hesapla
        </Button>
      </form>

      {result && (
        <div className="mt-6 space-y-3">
          <div className="p-4 bg-linear-to-br from-blue-50 to-primary-50 rounded-xl border border-primary-200">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">Kilo Koruma</span>
              <span className="text-2xl font-bold text-primary-600">{result.maintenance} kcal</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Mevcut kilonuzu korumak için</p>
          </div>

          <div className="p-4 bg-linear-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">Kilo Verme</span>
              <span className="text-2xl font-bold text-emerald-600">{result.weightLoss} kcal</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Sağlıklı kilo vermek için (haftalık ~0.5kg)</p>
          </div>

          <div className="p-4 bg-linear-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">Kilo Alma</span>
              <span className="text-2xl font-bold text-orange-600">{result.weightGain} kcal</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Sağlıklı kilo almak için (haftalık ~0.5kg)</p>
          </div>
        </div>
      )}
    </Card>
  );
}
