import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import AboutPreview from '@/components/sections/AboutPreview';
import Testimonials from '@/components/sections/Testimonials';
import BlogPreview from '@/components/sections/BlogPreview';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <AboutPreview />
      <Testimonials />
      <BlogPreview />
      <CTASection />
    </>
  );
}
