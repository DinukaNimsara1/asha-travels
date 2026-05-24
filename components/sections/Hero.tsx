'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Travel Destination"
          fill
          priority
          className="object-cover animate-[ken-burns_20s_ease-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center mb-4">
            <Sparkles className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
            Your Gateway to the World
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mt-6"
        >
          Discover unforgettable destinations with Sri Lanka&apos;s most trusted travel partner. Expert guidance, best prices, seamless experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg px-8 py-4 text-lg transition-colors"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Plan My Trip
          </Link>
          <Link
            href="/destinations"
            className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white font-semibold rounded-lg px-8 py-4 text-lg transition-colors backdrop-blur-sm"
          >
            Explore Destinations
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-60 animate-bounce">
        <ChevronDown className="w-10 h-10 text-white" />
      </div>
    </section>
  );
}
