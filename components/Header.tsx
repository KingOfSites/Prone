"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import { Icon } from "./ui/Icons";
import { nav, cotacaoUrl, areaAssociadoUrl } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  // fecha o menu ao trocar de rota
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-p flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="PRONE — início">
          <Logo priority variant={solid ? "dark" : "light"} className="h-10 w-auto md:h-11" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-orange"
                    : solid
                      ? "text-graphite hover:text-orange"
                      : "text-white/85 hover:text-white"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={areaAssociadoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              solid ? "text-graphite hover:text-orange" : "text-white/85 hover:text-white"
            }`}
          >
            <Icon name="user" className="h-4 w-4" />
            Área do associado
          </a>
          <Button
            href={cotacaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="!px-5 !py-3"
          >
            Fazer cotação
          </Button>
        </div>

        <button
          className={`grid h-11 w-11 place-items-center rounded-xl lg:hidden ${
            solid ? "text-ink-800" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-6 bg-current transition-all ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-6 bg-current transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {/* menu mobile */}
      <div
        className={`overflow-hidden border-t border-paper-200 bg-white lg:hidden transition-[max-height] duration-300 ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="container-p flex flex-col gap-1 py-4">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`rounded-xl px-3 py-3 text-base font-medium hover:bg-paper-100 ${
                pathname === n.href ? "text-orange" : "text-ink-800"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={areaAssociadoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl px-3 py-3 text-base font-medium text-ink-800 hover:bg-paper-100"
          >
            <Icon name="user" className="h-5 w-5 text-graphite" />
            Área do associado
          </a>
          <Button
            href={cotacaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="mt-2 w-full"
          >
            Fazer cotação
          </Button>
        </nav>
      </div>
    </header>
  );
}
