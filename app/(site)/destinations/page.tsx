import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import DestinationsContent from '@/components/sections/DestinationsContent';

export const metadata: Metadata = {
  title: 'Explore Destinations',
  description: 'Discover our curated travel destinations across the globe.',
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        title="Explore Destinations"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations' }]}
        backgroundImage="/images/destinations-hero.png"
      />
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <DestinationsContent />
        </div>
      </div>
    </>
  );
}
