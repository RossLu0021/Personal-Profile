import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/me/navbar';
import Typewriter from '@/components/me/typewriter';

type SectionTheme = 'dark' | 'light';

type Cta = {
  label: string;
  href: string;
  download?: boolean;
};

type HomepageSection = {
  id: string;
  title: string;
  subtitle: string;
  primary: Cta;
  secondary: Cta;
  theme: SectionTheme;
};

const sections: HomepageSection[] = [
  {
    id: 'hero',
    title: 'Lughan Ross',
    subtitle: 'Software Engineer • Product Builder • Problem Solver',
    primary: { label: 'View Resume', href: '/resume' },
    secondary: { label: 'About Me', href: '/about-me' },
    theme: 'dark',
  },
  {
    id: 'projects',
    title: 'Built for impact.',
    subtitle:
      'I design and ship products with clean architecture, thoughtful UX, and measurable outcomes.',
    primary: { label: 'Explore Projects', href: '/about-me' },
    secondary: { label: 'Open Terminal', href: '/terminal' },
    theme: 'light',
  },
  {
    id: 'contact',
    title: 'Let’s build something great.',
    subtitle:
      'Open to full-time SWE opportunities, collaboration, and networking with teams building meaningful products.',
    primary: { label: 'Contact Me', href: '/contact' },
    secondary: {
      label: 'Download Resume',
      href: '/Ross_Lughan_Resume.pdf',
      download: true,
    },
    theme: 'dark',
  },
];

function ctaClassName(isDark: boolean, isPrimary: boolean): string {
  if (isPrimary) {
    return isDark
      ? 'bg-white text-neutral-900 hover:bg-neutral-200'
      : 'bg-neutral-900 text-white hover:bg-black';
  }

  return isDark
    ? 'border-white/80 bg-white/10 text-white hover:bg-white/20'
    : 'border-neutral-900/60 bg-white/50 text-neutral-900 hover:bg-white/80';
}

function renderCta(cta: Cta, isDark: boolean, isPrimary: boolean) {
  const baseClassName = `flex-1 rounded-md border px-8 py-3 text-sm font-semibold tracking-wide transition ${ctaClassName(
    isDark,
    isPrimary,
  )}`;

  if (cta.download) {
    return (
      <a key={cta.href} href={cta.href} download className={baseClassName}>
        {cta.label}
      </a>
    );
  }

  return (
    <Link key={cta.href} href={cta.href} className={baseClassName}>
      {cta.label}
    </Link>
  );
}

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {sections.map((section, index) => {
        const isDark = section.theme === 'dark';

        return (
          <section
            key={section.id}
            className="relative flex min-h-screen items-end justify-center overflow-hidden px-6 pb-18 pt-28 text-center"
          >
            <Image
              src="/pixels.jpg"
              alt="Background texture"
              fill
              sizes="100vw"
              priority={index === 0}
              className={`absolute inset-0 z-0 object-cover object-center ${index % 2 === 0 ? 'scale-105' : 'scale-100'}`}
            />

            <div
              className={`absolute inset-0 z-10 ${
                isDark
                  ? 'bg-gradient-to-b from-black/35 via-black/45 to-black/80'
                  : 'bg-gradient-to-b from-white/35 via-white/45 to-white/80'
              }`}
            />

            <div
              className={`relative z-20 mx-auto flex w-full max-w-3xl flex-col items-center gap-5 ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                {section.title}
              </h1>
              {section.id === 'hero' ? (
                <Typewriter
                  text={section.subtitle}
                  speed={55}
                  delay={2200}
                  className="max-w-2xl text-base md:text-xl"
                />
              ) : (
                <p className="max-w-2xl text-base md:text-xl">
                  {section.subtitle}
                </p>
              )}

              <div className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row">
                {renderCta(section.primary, isDark, true)}
                {renderCta(section.secondary, isDark, false)}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
