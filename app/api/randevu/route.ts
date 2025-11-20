import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/lib/sanity/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { fullName, email, phone, preferredDate, location, message } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !preferredDate || !location) {
      return NextResponse.json(
        { error: 'Tüm gerekli alanları doldurunuz' },
        { status: 400 }
      );
    }

    // Create appointment document in Sanity
    const appointment = await client.create({
      _type: 'appointment',
      fullName,
      email,
      phone,
      preferredDate,
      location,
      message: message || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Randevu talebiniz alındı',
        appointmentId: appointment._id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Appointment creation error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu, lütfen tekrar deneyin' },
      { status: 500 }
    );
  }
}
