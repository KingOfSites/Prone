import Logo from "./ui/Logo";
import { Icon } from "./ui/Icons";
import { site, nav, coberturas, whatsappLink } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-p grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-[1.3fr_1fr_1fr_1.2fr] md:gap-12 md:py-16">
        <div className="col-span-2 md:col-span-1">
          <Logo variant="light" className="h-11 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Associação mutualista de proteção veicular. Proteção completa por rateio
            justo para caminhões, carretas e frotas em todo o Brasil.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram}
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-orange hover:text-orange"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.3.07 1.68.07 4.9s0 3.6-.07 4.9c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.3.06-1.68.07-4.9.07s-3.6 0-4.9-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.75.07-.9.04-1.4.2-1.72.32-.43.17-.74.37-1.06.7-.32.32-.53.63-.7 1.06-.13.32-.28.82-.32 1.72C3.98 8.5 4 8.85 4 12s0 3.5.07 4.75c.04.9.2 1.4.32 1.72.17.43.37.74.7 1.06.32.32.63.53 1.06.7.32.13.82.28 1.72.32C8.5 20.02 8.85 20 12 20s3.5 0 4.75-.07c.9-.04 1.4-.2 1.72-.32.43-.17.74-.37 1.06-.7.32-.32.53-.63.7-1.06.13-.32.28-.82.32-1.72.07-1.25.07-1.6.07-4.75s0-3.5-.07-4.75c-.04-.9-.2-1.4-.32-1.72a2.85 2.85 0 0 0-.7-1.06 2.85 2.85 0 0 0-1.06-.7c-.32-.13-.82-.28-1.72-.32C15.5 4 15.15 4 12 4Zm0 3.05A4.95 4.95 0 1 1 12 17a4.95 4.95 0 0 1 0-9.9Zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3Zm5.15-.9a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
              </svg>
            </a>
            <a
              href={whatsappLink()}
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-orange hover:text-orange"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wider text-white/40">
            Navegação
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-white/70 transition-colors hover:text-orange">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wider text-white/40">
            Proteção
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {coberturas.slice(0, 6).map((c) => (
              <li key={c.title} className="text-white/70">
                {c.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-sm font-bold uppercase tracking-wider text-white/40">
            Contato
          </p>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>
              <a href={whatsappLink()} className="transition-colors hover:text-orange">
                WhatsApp: {site.whatsappLabel}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-orange"
              >
                Instagram: @proneassociacao
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-p flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName} · CNPJ {site.cnpj}
          </p>
          <p className="max-w-xl text-center md:text-right">
            A PRONE é uma associação de proteção veicular sem fins lucrativos e não se
            enquadra como seguradora, nos termos da legislação vigente.
          </p>
        </div>
      </div>
    </footer>
  );
}
