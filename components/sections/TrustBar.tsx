import { siteConfig } from '@/lib/constants';

export default function TrustBar() {
  const duplicatedAirlines = [...siteConfig.airlines, ...siteConfig.airlines];

  return (
    <section className="bg-slate-50 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-400 text-center mb-6">
          Trusted by travelers. Partnered with the world&apos;s best airlines.
        </p>
        
        <div className="relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group">
          <div className="flex gap-16 items-center animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap min-w-full">
            {duplicatedAirlines.map((airline, idx) => (
              <span
                key={`${airline}-${idx}`}
                className="text-slate-400 font-semibold text-lg hover:text-teal-600 transition-colors cursor-default"
              >
                {airline}
              </span>
            ))}
          </div>
          <div className="flex gap-16 items-center animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap min-w-full absolute top-0" style={{ transform: 'translateX(100%)' }}>
            {duplicatedAirlines.map((airline, idx) => (
              <span
                key={`dup-${airline}-${idx}`}
                className="text-slate-400 font-semibold text-lg hover:text-teal-600 transition-colors cursor-default"
              >
                {airline}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
