export interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  fullDescription?: unknown;
  features: string[];
  price?: number;
  duration?: string;
  image?: unknown;
  icon?: string;
  featured?: boolean;
  order: number;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  body?: unknown;
  mainImage?: unknown;
  publishedAt: string;
  author?: Author;
  categories?: Category[];
  relatedPosts?: BlogPost[];
  seo?: SEO;
}

export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  image?: unknown;
  bio?: unknown;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  testimonial: string;
  rating: number;
  location: string;
  photo?: unknown;
  featured?: boolean;
  order: number;
}

export interface FAQ {
  _id: string;
  question: string;
  answer: unknown;
  category: string;
  order: number;
}

export interface Appointment {
  _id?: string;
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  location: string;
  message?: string;
  status?: 'pending' | 'confirmed' | 'cancelled';
}

export interface Contact {
  _id?: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  status?: 'new' | 'read' | 'replied';
}

export interface AboutPage {
  profileImage?: unknown;
  bio: unknown;
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
  philosophy: unknown;
  specialties: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

export interface SiteSettings {
  siteTitle: string;
  description: string;
  logo?: unknown;
  contactInfo: {
    email: string;
    phone: string;
    izmirAddress: string;
    tekirdagAddress: string;
    socialMedia: {
      instagram?: string;
      facebook?: string;
      linkedin?: string;
      youtube?: string;
    };
  };
  seo: SEO;
}
