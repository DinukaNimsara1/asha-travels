import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig, getWhatsAppUrl } from '@/lib/constants';
import PageHero from '@/components/shared/PageHero';
import DestinationCard from '@/components/shared/DestinationCard';
import { CheckCircle, Calendar, MapPin, FileCheck } from 'lucide-react';
import Link from 'next/link';
import { getDestinationBySlug, getDestinations } from '@/sanity/lib/queries';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dest = await getDestinationBySlug(params.slug) || siteConfig.destinations.find((d) => d.slug === params.slug);
  if (!dest) return { title: 'Destination Not Found' };
  return { title: `${dest.title} Packages | Asha Travels` };
}

export const revalidate = 60;

export default async function DestinationDetail({ params }: Props) {
  // Try fetching from Sanity CMS, fallback to static config
  let dest = await getDestinationBySlug(params.slug);
  
  let fallback = false;
  if (!dest) {
    const staticDest = siteConfig.destinations.find((d) => d.slug === params.slug);
    if (!staticDest) {
      notFound();
    }
    dest = {
      _id: 'static-' + staticDest.slug,
      title: staticDest.title,
      slug: staticDest.slug,
      region: staticDest.region,
      price: staticDest.price,
      includesVisa: staticDest.includesVisa,
      image: staticDest.image,
      description: `Experience the magic of ${staticDest.title} with our expertly curated travel packages. From iconic landmarks to hidden gems, we ensure your journey is seamless and unforgettable.`,
      highlights: [
        'Return flights from Colombo',
        'Hotel accommodation (3-5 star options)',
        'Return airport transfers',
        'Half-day city tour',
        staticDest.includesVisa ? 'Visa processing assistance' : null,
        'Comprehensive travel insurance',
      ].filter(Boolean) as string[],
    };
    fallback = true;
  }

  // Get related destinations (CMS if available, else static fallback)
  let relatedDestinations: any[] = [];
  if (!fallback) {
    const cmsDestinations = await getDestinations();
    relatedDestinations = cmsDestinations
      .filter((d) => d.slug !== dest!.slug)
      .slice(0, 3);
  }
  
  if (relatedDestinations.length === 0) {
    relatedDestinations = siteConfig.destinations
      .filter((d) => d.slug !== dest!.slug)
      .slice(0, 3)
      .map(d => ({
        _id: 'static-' + d.slug,
        title: d.title,
        slug: d.slug,
        region: d.region,
        price: d.price,
        includesVisa: d.includesVisa,
        image: d.image
      }));
  }

  const highlights = dest.highlights && dest.highlights.length > 0 
    ? dest.highlights 
    : [
        'Return flights from Colombo',
        'Hotel accommodation (3-5 star options)',
        'Return airport transfers',
        'Half-day city tour',
        dest.includesVisa ? 'Visa processing assistance' : null,
        'Comprehensive travel insurance',
      ].filter(Boolean) as string[];

  return (
    <>
      <PageHero
        title={dest.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: dest.title },
        ]}
        backgroundImage={dest.image}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12">
          
          {/* Main Content */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
              About {dest.title}
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4 whitespace-pre-line">
              {dest.description || `Experience the magic of ${dest.title} with our expertly curated travel packages. From iconic landmarks to hidden gems, we ensure your journey is seamless and unforgettable.`}
            </div>

            <h3 className="font-serif text-2xl font-bold text-slate-900 mt-12 mb-6">
              Package Highlights
            </h3>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <ul className="space-y-3">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 bg-white rounded-xl shadow-xl shadow-slate-200/40 border border-slate-100 p-6">
              <div className="text-sm text-slate-500 font-medium">Starting from</div>
              <div className="font-serif text-4xl font-bold text-teal-600 mt-1">
                LKR {new Intl.NumberFormat('en-LK').format(dest.price)}
              </div>
              
              <hr className="border-slate-100 my-6" />
              
              <div className="space-y-4">
                <div className="flex gap-3 items-center text-slate-600">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Region</div>
                    <div className="font-medium">{dest.region}</div>
                  </div>
                </div>
                <div className="flex gap-3 items-center text-slate-600">
                  <FileCheck className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Visa</div>
                    <div className="font-medium">{dest.includesVisa ? 'Included/Assisted' : 'Not Included'}</div>
                  </div>
                </div>
                <div className="flex gap-3 items-center text-slate-600">
                  <Calendar className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Best Time</div>
                    <div className="font-medium">Year-round</div>
                  </div>
                </div>
              </div>

              <hr className="border-slate-100 my-6" />

              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="w-full flex justify-center py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Get a Quote
                </Link>
                <a
                  href={getWhatsAppUrl(`Hi, I'm interested in the ${dest.title} package.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center py-3.5 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-semibold rounded-lg transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Related Destinations */}
        <div className="mt-24">
          <h3 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
            You May Also Like
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedDestinations.map((d) => (
              <DestinationCard key={d.slug} destination={d} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
