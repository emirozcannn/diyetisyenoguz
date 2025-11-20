'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { calculateBMR } from '@/lib/utils/calculators';

export default function BMRCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);
    
    if (w > 0 && h > 0 && a > 0) {
      const bmr = calculateBMR(w, h, a, gender);
      setResult(bmr);
    }
  };

  return (
    <Card>
      <h3 className="text-2xl font-bold mb-4">BMR (Bazal Metabolizma Hızı) Hesaplama</h3>
      <p className="text-gray-600 mb-6">
        Vücudunuzun dinlenme halinde yaktığı minimum kaloriyi hesaplayın.
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

        <Button type="submit" className="w-full">
          Hesapla
        </Button>
      </form>

      {result && (
        <div className="mt-6 p-6 bg-gradient-primary rounded-xl">
          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-white mb-2">
              {Math.round(result)} kcal
            </div>
            <div className="text-lg font-medium text-white/90">
              Günlük Bazal Metabolizma Hızınız
            </div>
          </div>
          <p className="text-white/80 text-center text-sm">
            Bu, vücudunuzun hiçbir aktivite yapmadan dinlenme halinde harcadığı kaloridir. 
            Günlük kalori ihtiyacınız için aktivite seviyenizi de hesaba katmalısınız.
          </p>
        </div>
      )}
    </Card>
  );
}
