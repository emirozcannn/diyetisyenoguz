import { groq } from 'next-sanity';

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    ...,
    logo {
      asset->
    }
  }
`;

// Services
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription,
    features,
    price,
    duration,
    image {
      asset->
    },
    icon,
    featured,
    order
  }
`;

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    ...,
    image {
      asset->
    }
  }
`;

// Blog Posts
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage {
      asset->
    },
    author->,
    categories[]->
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    mainImage {
      asset->
    },
    author->,
    categories[]->,
    "relatedPosts": *[_type == "post" && slug.current != $slug && count((categories[]->slug.current)[@ in ^.^.categories[]->slug.current]) > 0] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      excerpt,
      mainImage {
        asset->
      }
    }
  }
`;

// Testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    testimonial,
    rating,
    location,
    photo {
      asset->
    },
    featured,
    order
  }
`;

// FAQs
export const faqsQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    category,
    order
  }
`;

// About Page
export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    ...,
    profileImage {
      asset->
    }
  }
`;

// Legal Page
export const legalPageQuery = groq`
  *[_type == "legalPage" && slug.current == $slug][0] {
    ...,
    lastUpdated
  }
`;
