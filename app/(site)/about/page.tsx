import { Metadata } from 'next';
import Image from 'next/image';
import { Award, Clock, DollarSign, Headphones, Users, CreditCard } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Asha Travels, Sri Lanka\'s trusted travel partner.',
};

const reasons = [
  { icon: Award, title: 'IATA Certified', desc: 'Fully accredited by IATA, ensuring the highest standards of travel professionalism.' },
  { icon: Clock, title: '15+ Years Experience', desc: 'Over a decade and a half of expertise in curating perfect journeys.' },
  { icon: DollarSign, title: 'Best Price Guarantee', desc: 'Competitive pricing on flights, hotels, and holiday packages.' },
  { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock assistance throughout your entire journey.' },
  { icon: Users, title: 'Expert Team', desc: 'Seasoned travel consultants who understand your unique needs.' },
  { icon: CreditCard, title: 'Easy Payments', desc: 'Flexible payment plans and secure transactions for peace of mind.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Asha Travels"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        backgroundImage="/images/about-hero.png"
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] relative">
            <Image
              src="/images/about-hero.png"
              alt="Asha Travels Team"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="uppercase tracking-widest text-teal-600 text-sm font-semibold">Our Story</div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Building Dreams, One Journey at a Time
            </h2>
            <div className="text-slate-600 leading-relaxed mt-6 space-y-4">
              <p>
                Founded in Colombo, Sri Lanka, Asha Travels began with a simple yet powerful vision: to make the world accessible to everyone through seamless, personalized travel experiences. Over the past 15 years, we have grown from a small ticketing agency into one of the country&apos;s most trusted comprehensive travel management companies.
              </p>
              <p>
                As an IATA-certified agency, we pride ourselves on delivering not just tickets, but complete peace of mind. Whether you&apos;re planning a complex corporate itinerary, a family holiday to Disneyland, or a serene honeymoon in the Maldives, our dedicated team of travel consultants brings decades of combined experience to ensure every detail is perfect.
              </p>
              <p>
                We believe that travel is more than just moving from one place to another—it&apos;s about the memories you create, the cultures you experience, and the stories you bring back home. Let us take care of the details, so you can focus on the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="Why Choose Asha Travels" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4 text-teal-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900">{reason.title}</h3>
                  <p className="text-slate-500 mt-2 text-sm">{reason.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
