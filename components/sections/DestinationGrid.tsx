'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function DestinationGrid() {
  const featuredDestinations = siteConfig.destinations.slice(0, 6);

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-bold">Popular Destinations</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">
            Curated experiences in the world&apos;s finest cities
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {featuredDestinations.map((dest, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link
                href={`/destinations/${dest.slug}`}
                className="rounded-xl overflow-hidden bg-white shadow-md group block h-full"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {dest.includesVisa && (
                    <div className="absolute top-3 right-3 z-10 bg-teal-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      Visa Included
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-slate-900 group-hover:text-teal-600 transition-colors">
                    {dest.title}
                  </h3>
                  <div className="text-teal-600 font-bold mt-1">
                    From LKR {new Intl.NumberFormat('en-LK').format(dest.price)}
                  </div>
                  <div className="text-amber-500 font-medium mt-3 flex items-center gap-1 text-sm">
                    Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-flex items-center text-teal-600 font-medium border border-teal-200 rounded-lg px-6 py-3 hover:bg-teal-50 transition-colors"
          >
            View All Destinations <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
