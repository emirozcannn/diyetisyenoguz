'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import { LOCATIONS } from '@/lib/constants';

const appointmentSchema = z.object({
  fullName: z.string().min(2, 'Ad soyad en az 2 karakter olmalıdır'),
  email: z.string().email('Geçerli bir email adresi giriniz'),
  phone: z.string().min(10, 'Geçerli bir telefon numarası giriniz'),
  preferredDate: z.string().min(1, 'Tarih seçiniz'),
  location: z.string().min(1, 'Lokasyon seçiniz'),
  message: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/randevu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <h2 className="text-3xl font-bold mb-6">Randevu Formu</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">
            Randevu talebiniz alındı! En kısa sürede size geri dönüş yapacağız.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">
            Bir hata oluştu. Lütfen tekrar deneyin veya telefon ile iletişime geçin.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          {...register('fullName')}
          label="Ad Soyad"
          placeholder="Adınız ve soyadınız"
          error={errors.fullName?.message}
          required
        />

        <Input
          {...register('email')}
          type="email"
          label="Email"
          placeholder="ornek@email.com"
          error={errors.email?.message}
          required
        />

        <Input
          {...register('phone')}
          type="tel"
          label="Telefon"
          placeholder="05XX XXX XX XX"
          error={errors.phone?.message}
          required
        />

        <Input
          {...register('preferredDate')}
          type="datetime-local"
          label="Tercih Edilen Tarih ve Saat"
          error={errors.preferredDate?.message}
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Lokasyon <span className="text-red-500">*</span>
          </label>
          <select
            {...register('location')}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 outline-none"
          >
            <option value="">Seçiniz</option>
            {LOCATIONS.map((loc) => (
              <option key={loc.value} value={loc.value}>
                {loc.label}
              </option>
            ))}
          </select>
          {errors.location && (
            <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>
          )}
        </div>

        <Textarea
          {...register('message')}
          label="Mesaj (Opsiyonel)"
          placeholder="Özel bir talebiniz veya sormak istediğiniz bir şey var mı?"
          rows={4}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Gönderiliyor...' : 'Randevu Talebi Gönder'}
        </Button>
      </form>
    </Card>
  );
}
