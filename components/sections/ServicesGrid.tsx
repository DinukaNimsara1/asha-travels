'use client';

import { motion, Variants } from 'framer-motion';
import { Plane, FileCheck, ShieldCheck, Hotel, Palmtree, Briefcase } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-6 h-6" />,
  FileCheck: <FileCheck className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Hotel: <Hotel className="w-6 h-6" />,
  Palmtree: <Palmtree className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
};

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

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-bold">What We Offer</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">
            Expert travel solutions tailored to your journey
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {siteConfig.services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-xl border border-slate-100 p-8 hover:shadow-xl hover:shadow-teal-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-teal-50 flex items-center justify-center mb-6 text-teal-600">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-semibold text-xl text-slate-900">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mt-3">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
