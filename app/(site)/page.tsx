import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import StatsCounter from '@/components/sections/StatsCounter';
import ServicesGrid from '@/components/sections/ServicesGrid';
import DestinationGrid from '@/components/sections/DestinationGrid';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTABanner from '@/components/sections/CTABanner';
import { getDestinations, getTestimonials } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: "Asha Travels | Sri Lanka's Trusted Travel Partner",
};

export const revalidate = 60;

export default async function Home() {
  const destinations = await getDestinations();
  const testimonials = await getTestimonials();

  return (
    <>
      <Hero />
      <TrustBar />
      <StatsCounter />
      <ServicesGrid />
      <DestinationGrid destinations={destinations} />
      <TestimonialsSection testimonials={testimonials} />
      <CTABanner />
    </>
  );
}
