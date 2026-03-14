'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  className?: string;
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-me' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
  { label: 'Terminal', href: '/terminal' },
] as const;

export default function Navbar({ className = '' }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateScrolledState = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrolledState();
    window.addEventListener('scroll', updateScrolledState, { passive: true });

    return () => window.removeEventListener('scroll', updateScrolledState);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const bgClasses = className
    ? className
    : isScrolled
      ? 'bg-black/55 backdrop-blur-md'
      : 'bg-transparent';

  return (
    <header
      className={`fixed top-0 z-50 w-full px-4 py-3 md:px-8 transition-colors duration-300 ${bgClasses}`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.26em] text-white uppercase"
        >
          Lughan Ross
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main menu"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white uppercase transition hover:bg-white/15"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="mt-3 border-t border-white/20 bg-black/80 backdrop-blur-md lg:hidden"
          aria-label="Mobile menu"
        >
          <ul className="flex flex-col px-2 py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-4 py-3 text-sm font-semibold tracking-[0.12em] text-white uppercase hover:bg-white/10"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
