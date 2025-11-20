'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { calculateIdealWeight } from '@/lib/utils/calculators';

export default function IdealWeightCalculator() {
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [result, setResult] = useState<{
    devine: number;
    hamwi: number;
    robinson: number;
    average: number;
  } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height);
    
    if (h > 0 && h >= 140) {
      const idealWeight = calculateIdealWeight(h, gender);
      setResult(idealWeight);
    }
  };

  return (
    <Card>
      <h3 className="text-2xl font-bold mb-4">İdeal Kilo Hesaplama</h3>
      <p className="text-gray-600 mb-6">
        Farklı bilimsel formüllere göre ideal kilo aralığınızı öğrenin.
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
          label="Boyunuz (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Örn: 170"
          min="140"
          required
        />

        <Button type="submit" className="w-full">
          Hesapla
        </Button>
      </form>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="text-center p-6 bg-gradient-primary rounded-xl">
            <div className="text-5xl font-bold text-white mb-2">
              {result.average} kg
            </div>
            <div className="text-lg text-white/90">
              Ortalama İdeal Kilonuz
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="text-sm font-medium text-gray-600 mb-1">Devine Formülü</div>
              <div className="text-2xl font-bold text-blue-600">{result.devine} kg</div>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <div className="text-sm font-medium text-gray-600 mb-1">Hamwi Formülü</div>
              <div className="text-2xl font-bold text-emerald-600">{result.hamwi} kg</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
              <div className="text-sm font-medium text-gray-600 mb-1">Robinson Formülü</div>
              <div className="text-2xl font-bold text-purple-600">{result.robinson} kg</div>
            </div>
          </div>

          <div className="p-4 bg-amber-50 rounded-xl">
            <p className="text-sm text-gray-700">
              <strong>Not:</strong> İdeal kilo, vücut yapısı, kas kütlesi ve genel sağlık durumunuza göre değişkenlik gösterebilir. 
              Bu hesaplama sadece genel bir fikir vermek içindir.
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
