'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/constants';
import DestinationCard from '@/components/shared/DestinationCard';
import { cn } from '@/lib/utils';
import { Destination } from '@/sanity/lib/queries';

const regions = ['All', 'Asia', 'Middle East', 'Europe', 'Maldives'];

interface DestinationsContentProps {
  destinations?: Destination[];
}

export default function DestinationsContent({ destinations }: DestinationsContentProps) {
  const [selectedRegion, setSelectedRegion] = useState('All');

  const list = destinations && destinations.length > 0 ? destinations : siteConfig.destinations;

  const filteredDestinations = list.filter(
    (dest) => selectedRegion === 'All' || dest.region === selectedRegion
  );

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-colors",
              selectedRegion === region
                ? "bg-teal-600 text-white"
                : "bg-white text-slate-600 hover:bg-slate-100 shadow-sm border border-slate-100"
            )}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredDestinations.map((dest) => (
            <motion.div
              key={dest.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <DestinationCard destination={dest} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredDestinations.length === 0 && (
        <div className="text-center text-slate-500 py-12">
          No destinations found for this region.
        </div>
      )}
    </div>
  );
}
