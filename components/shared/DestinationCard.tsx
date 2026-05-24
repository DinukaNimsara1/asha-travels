'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  destination: {
    title: string;
    slug: string;
    price: number;
    region: string;
    includesVisa: boolean;
    image: string;
  };
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="rounded-xl overflow-hidden bg-white shadow-md group block h-full"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {destination.includesVisa && (
          <div className="absolute top-3 right-3 z-10 bg-teal-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            Visa Included
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg text-slate-900 group-hover:text-teal-600 transition-colors">
          {destination.title}
        </h3>
        <p className="text-sm text-slate-400 mt-1">{destination.region}</p>
        <div className="text-teal-600 font-bold text-base mt-2">
          From LKR {new Intl.NumberFormat('en-LK').format(destination.price)}
        </div>
        <div className="text-amber-500 text-sm font-medium mt-3 flex items-center gap-1">
          Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
