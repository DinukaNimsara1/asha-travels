import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import StatsCounter from '@/components/sections/StatsCounter';
import ServicesGrid from '@/components/sections/ServicesGrid';
import DestinationGrid from '@/components/sections/DestinationGrid';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: "Asha Travels | Sri Lanka's Trusted Travel Partner",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatsCounter />
      <ServicesGrid />
      <DestinationGrid />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
