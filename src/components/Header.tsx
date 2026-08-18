'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { primaryNav } from '@/lib/site';

/**
 * Sticky top navigation. Server-rendered links (crawlable); the mobile menu and
 * scroll-state are progressive enhancements. The header sits on a translucent
 * bone background that solidifies once the page is scrolled.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on route change.
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={[
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'bg-bone/95 backdrop-blur border-b border-ink/10'
          : 'bg-bone/80 backdrop-blur border-b border-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={[
                    'text-sm font-sans tracking-wide transition-colors duration-200 hover:text-brass',
                    isActive(item.href) ? 'text-brass' : 'text-ink/80',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact/"
                className="ml-2 inline-flex items-center border border-ink/25 px-4 py-2 text-xs font-sans uppercase tracking-[0.16em] text-ink transition-colors hover:border-brass hover:text-brass"
              >
                Speak with us
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={[
          'lg:hidden overflow-hidden border-t border-ink/10 bg-bone transition-[max-height] duration-300 ease-luxe',
          open ? 'max-h-96' : 'max-h-0 border-t-transparent',
        ].join(' ')}
      >
        <nav aria-label="Mobile" className="px-6 py-4">
          <ul className="flex flex-col divide-y divide-ink/10">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={[
                    'block py-3 text-base font-sans',
                    isActive(item.href) ? 'text-brass' : 'text-ink/85',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
