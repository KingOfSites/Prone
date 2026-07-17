import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  nextDark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumb: string;
  nextDark?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 grid-mask opacity-[0.12]" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full brand-gradient opacity-25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-red opacity-20 blur-[120px]" />

      <div className="container-p relative z-10 pb-20 pt-36 md:pt-44">
        <nav className="flex items-center gap-2 text-sm text-white/50">
          <Link href="/" className="transition-colors hover:text-orange">
            Início
          </Link>
          <span>/</span>
          <span className="text-white/80">{breadcrumb}</span>
        </nav>

        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-orange">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{subtitle}</p>
        )}
      </div>

      {!nextDark && (
        <div className="relative z-10">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-[56px] w-full fill-white">
            <path d="M0 90 L1440 90 L1440 34 C1080 90 360 4 0 42 Z" />
          </svg>
        </div>
      )}
    </section>
  );
}
