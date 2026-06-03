import HeroSection from '@/components/sections/hero-section';
import StatsSection from '@/components/sections/stats-section';
import CategoriesSection from '@/components/sections/categories-section';
import FeaturesSection from '@/components/sections/features-section';
import FeaturedProductsSection from '@/components/sections/featured-products-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import PartnersSection from '@/components/sections/partners-section';
import CTASection from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
}
