import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import DestinationsContent from '@/components/sections/DestinationsContent';
import { getDestinations } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Explore Destinations',
  description: 'Discover our curated travel destinations across the globe.',
};

export const revalidate = 60;

export default async function DestinationsPage() {
  const destinations = await getDestinations();

  return (
    <>
      <PageHero
        title="Explore Destinations"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations' }]}
        backgroundImage="/images/destinations-hero.png"
      />
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <DestinationsContent destinations={destinations} />
        </div>
      </div>
    </>
  );
}
