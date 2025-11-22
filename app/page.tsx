import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import AboutPreview from '@/components/sections/AboutPreview';
import Testimonials from '@/components/sections/Testimonials';
import BlogPreview from '@/components/sections/BlogPreview';
import CTASection from '@/components/sections/CTASection';
import { client } from '@/lib/sanity/client';

async function getHomePageData() {
  try {
    const data = await client.fetch(
      `*[_type == "homePage"][0] {
        hero,
        stats,
        aboutSection,
        servicesSection,
        testimonialsSection,
        blogPreviewSection,
        ctaSection,
        seo
      }`,
      {},
      { next: { revalidate: 60 } }
    );
    return data;
  } catch {
    return null;
  }
}

async function getServices() {
  try {
    const services = await client.fetch(
      `*[_type == "service"] | order(order asc) {
        _id,
        title,
        slug,
        shortDescription,
        features,
        icon
      }`,
      {},
      { next: { revalidate: 60 } }
    );
    return services;
  } catch {
    return [];
  }
}

async function getTestimonials() {
  try {
    const testimonials = await client.fetch(
      `*[_type == "testimonial"] | order(order asc) {
        _id,
        name,
        testimonial,
        rating,
        location,
        photo
      }`,
      {},
      { next: { revalidate: 60 } }
    );
    return testimonials;
  } catch {
    return [];
  }
}

async function getBlogPosts() {
  try {
    const posts = await client.fetch(
      `*[_type == "post"] | order(publishedAt desc)[0...3] {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        author-> {
          name
        }
      }`,
      {},
      { next: { revalidate: 60 } }
    );
    return posts;
  } catch {
    return [];
  }
}

export default async function Home() {
  const [homeData, services, testimonials, posts] = await Promise.all([
    getHomePageData(),
    getServices(),
    getTestimonials(),
    getBlogPosts()
  ]);

  return (
    <>
      <Hero 
        data={{
          title: homeData?.hero?.title,
          subtitle: homeData?.hero?.subtitle,
          description: homeData?.hero?.description,
          highlightedText: homeData?.hero?.highlightedText,
          image: homeData?.hero?.image,
          features: homeData?.hero?.features,
          primaryButtonText: homeData?.hero?.primaryButtonText,
          primaryButtonLink: homeData?.hero?.primaryButtonLink,
          secondaryButtonText: homeData?.hero?.secondaryButtonText,
          secondaryButtonPhone: homeData?.hero?.secondaryButtonPhone,
        }}
        stats={homeData?.stats}
      />
      
      <ServicesGrid 
        title={homeData?.servicesSection?.title}
        subtitle={homeData?.servicesSection?.subtitle}
        ctaText={homeData?.servicesSection?.ctaText}
        services={services}
      /> 
      
      <AboutPreview 
        title={homeData?.aboutSection?.title}
        subtitle={homeData?.aboutSection?.subtitle}
        description={homeData?.aboutSection?.description}
        image={homeData?.aboutSection?.image}
        ctaText={homeData?.aboutSection?.ctaText}
        highlights={homeData?.aboutSection?.highlights}
        floatingStats={homeData?.aboutSection?.floatingStats}
      />
      
      <Testimonials 
        title={homeData?.testimonialsSection?.title}
        subtitle={homeData?.testimonialsSection?.subtitle}
        testimonials={testimonials}
      />
      
      <BlogPreview 
        title={homeData?.blogPreviewSection?.title}
        subtitle={homeData?.blogPreviewSection?.subtitle}
        ctaText={homeData?.blogPreviewSection?.ctaText}
        posts={posts}
      />
      
      <CTASection 
        title={homeData?.ctaSection?.title}
        description={homeData?.ctaSection?.description}
        primaryButtonText={homeData?.ctaSection?.primaryButtonText}
        primaryButtonLink={homeData?.ctaSection?.primaryButtonLink}
        secondaryButtonText={homeData?.ctaSection?.secondaryButtonText}
        secondaryButtonLink={homeData?.ctaSection?.secondaryButtonLink}
      />
    </>
  );
}