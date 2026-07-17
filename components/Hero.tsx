"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import { Icon } from "./ui/Icons";
import { cotacaoUrl } from "@/data/site";

const badges = ["Sem análise de perfil", "Adesão rápida", "Cobertura nacional"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      {/* fundo: vídeo + overlays (foto como poster/fallback) */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero/hero-truck.png"
          className="h-full w-full object-cover object-center"
        >
          <source src="/hero/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink" />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full brand-gradient opacity-25 blur-[130px]" />
      </div>

      {/* conteúdo */}
      <div className="container-p relative z-10 flex min-h-[90vh] flex-col justify-center pb-32 pt-32 md:pt-40">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/80 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-orange" />
            ASSOCIAÇÃO MUTUALISTA DE PROTEÇÃO VEICULAR
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Proteja seu patrimônio com quem{" "}
            <span className="text-gradient">cuida de verdade</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            Caminhão, carreta ou frota. Na PRONE o transportador tem proteção completa
            por rateio justo, assistência 24h e rastreamento — por uma mensalidade que
            cabe no seu bolso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              href={cotacaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="!px-7 !py-4 text-base"
            >
              Fazer cotação grátis
            </Button>
            <Button href="/coberturas" variant="ghost" className="!px-7 !py-4 text-base backdrop-blur">
              Ver coberturas
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
          >
            {badges.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-white/70">
                <Icon name="check" className="h-4 w-4 text-orange" />
                {b}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* onda de transição */}
      <div className="relative z-20">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-[60px] w-full fill-white">
          <path d="M0 90 L1440 90 L1440 30 C1080 90 360 0 0 40 Z" />
        </svg>
      </div>
    </section>
  );
}
