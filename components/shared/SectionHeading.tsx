import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered ? 'text-center' : '', className)}>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg text-slate-500 mt-4", centered ? "max-w-2xl mx-auto" : "")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
