'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { calculateBMI } from '@/lib/utils/calculators';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<{ bmi: number; category: string; description: string } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    
    if (w > 0 && h > 0) {
      const bmiResult = calculateBMI(w, h);
      setResult(bmiResult);
    }
  };

  return (
    <Card>
      <h3 className="text-2xl font-bold mb-4">BMI (Vücut Kitle İndeksi) Hesaplama</h3>
      <p className="text-gray-600 mb-6">
        Vücut kitle indeksinizi hesaplayarak ideal kilo aralığınızı öğrenin.
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
        
        <Input
          type="number"
          label="Boyunuz (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Örn: 170"
          required
        />

        <Button type="submit" className="w-full">
          Hesapla
        </Button>
      </form>

      {result && (
        <div className="mt-6 p-6 bg-emerald-50 rounded-xl">
          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-emerald-600 mb-2">
              {result.bmi}
            </div>
            <div className="text-xl font-semibold text-gray-900">
              {result.category}
            </div>
          </div>
          <p className="text-gray-700 text-center">
            {result.description}
          </p>
        </div>
      )}
    </Card>
  );
}
