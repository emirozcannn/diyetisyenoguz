'use client';

import { MapPin } from 'lucide-react';

interface GoogleMapsEmbedProps {
  showDirections?: boolean;
  className?: string;
}

export default function GoogleMapsEmbed({ 
  showDirections = true, 
  className = '' 
}: GoogleMapsEmbedProps) {
  // Google Maps embed URL for Barbaros Mah. Sahilkent Sok. B Kısım No:20, Süleymanpaşa/Tekirdağ
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.956!2d27.5167!3d40.9833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU4JzU5LjkiTiAyN8KwMzEnMDAuMSJF!5e0!3m2!1str!2str!4v1234567890";
  
  // Google Maps directions URL
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Barbaros+Mah.+Sahilkent+Sok.+B+Kısım+No:20+Süleymanpaşa+Tekirdağ";
  
  return (
    <div className={`w-full ${className}`}>
      {/* Map Embed */}
      <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-4">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Diyetisyen Oğuz Yolyapan - Tekirdağ Konum"
          className="w-full h-full"
        />
      </div>

      {/* Directions Button */}
      {showDirections && (
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
        >
          <MapPin className="w-5 h-5" />
          Yol Tarifi Al
        </a>
      )}
    </div>
  );
}
