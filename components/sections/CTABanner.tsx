'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileEdit, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/constants';

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 py-20 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold">
            Ready to Start Your Journey?
          </h2>
          <p className="text-teal-100 text-lg mt-4 max-w-2xl mx-auto">
            Get a personalized travel quote in under 24 hours
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg px-8 py-4 transition-colors"
            >
              <FileEdit className="w-5 h-5 mr-2" />
              Request a Quote
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 rounded-lg px-6 py-4 transition-colors backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
