import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/lib/sanity/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { fullName, email, phone, subject, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Ad Soyad, Email ve Mesaj alanları zorunludur' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir email adresi giriniz' },
        { status: 400 }
      );
    }

    // Create contact document in Sanity
    const contact = await client.create({
      _type: 'contact',
      fullName,
      email,
      phone: phone || '',
      subject: subject || 'Genel Soru',
      message,
      status: 'new',
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mesajınız başarıyla iletildi. En kısa sürede size dönüş yapacağız.',
        contactId: contact._id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu, lütfen tekrar deneyin veya telefon ile iletişime geçin' },
      { status: 500 }
    );
  }
}
