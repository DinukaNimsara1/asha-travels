import Image from 'next/image';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  backgroundImage: string;
}

export default function PageHero({ title, breadcrumbs, backgroundImage }: PageHeroProps) {
  return (
    <div className="h-[40vh] min-h-[300px] relative flex items-end">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {title}
        </h1>
        
        <nav className="flex gap-2 items-center text-sm text-slate-300 mt-4">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <div key={idx} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={isLast ? 'text-white font-medium' : ''}>
                    {crumb.label}
                  </span>
                )}
                {!isLast && <span>/</span>}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
