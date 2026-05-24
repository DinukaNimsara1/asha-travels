'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm'
            : 'bg-white/80 backdrop-blur-lg border-b border-slate-100'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-1 group">
              <span className="text-2xl font-bold font-serif text-slate-900 tracking-tight">
                Asha
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mb-0.5 group-hover:scale-125 transition-transform" />
              <span className="text-2xl font-semibold font-sans text-slate-700 tracking-tight">
                Travels
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-1">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                    isActiveLink(link.href)
                      ? 'text-teal-600'
                      : 'text-slate-600 hover:text-teal-600'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-teal-600 hover:bg-slate-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-opacity duration-300',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={cn(
            'absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100">
            <Link
              href="/"
              className="flex items-center space-x-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-xl font-bold font-serif text-slate-900">
                Asha
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mb-0.5" />
              <span className="text-xl font-semibold font-sans text-slate-700">
                Travels
              </span>
            </Link>
            <button
              type="button"
              className="p-2 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Panel Links */}
          <div className="px-5 py-6 space-y-1">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200',
                  isActiveLink(link.href)
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Panel CTAs */}
          <div className="px-5 pt-4 border-t border-slate-100 space-y-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200"
            >
              {/* WhatsApp Icon */}
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
