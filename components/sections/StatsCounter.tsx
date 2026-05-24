'use client';

import { useEffect, useState } from 'react';
import { useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/lib/constants';

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    springValue.on('change', (latest) => {
      setDisplayValue(new Intl.NumberFormat('en-US').format(latest));
    });
  }, [springValue]);

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 2,
        ease: 'easeOut',
      });
    }
  }, [isInView, motionValue, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function StatsCounter() {
  return (
    <section className="bg-white py-16 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center ${
                idx !== siteConfig.stats.length - 1
                  ? 'md:border-r md:border-slate-200'
                  : ''
              }`}
            >
              <div className="font-serif text-4xl md:text-5xl font-bold text-teal-600 flex items-center justify-center">
                <Counter value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-sm text-slate-500 uppercase tracking-wider mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
