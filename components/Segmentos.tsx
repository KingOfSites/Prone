"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon, type IconName } from "./ui/Icons";
import Button from "./ui/Button";
import { segmentos, cotacaoUrl } from "@/data/site";

const iconByKey: Record<string, IconName> = {
  caminhao: "truck",
  carreta: "trailer",
  frota: "fleet",
};

export default function Segmentos() {
  const [active, setActive] = useState(0);
  const seg = segmentos[active];

  return (
    <section id="segmentos" className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-red opacity-20 blur-[120px]" />
      <div className="container-p relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange">
            Para quem é
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Um plano certo para cada tipo de veículo
          </h2>
        </div>

        {/* tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {segmentos.map((s, i) => (
            <button
              key={s.key}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? "brand-gradient border-transparent text-white shadow-glow"
                  : "border-white/15 bg-white/5 text-white/70 hover:text-white"
              }`}
            >
              <Icon name={iconByKey[s.key]} className="h-5 w-5" />
              {s.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={seg.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-ink-800/60 p-8 backdrop-blur md:grid-cols-2 md:p-12"
            >
              <div>
                <div className="grid h-16 w-16 place-items-center rounded-2xl brand-gradient">
                  <Icon name={iconByKey[seg.key]} className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">{seg.title}</h3>
                <p className="mt-3 text-white/70">{seg.text}</p>
                <Button href={cotacaoUrl} target="_blank" rel="noopener noreferrer" variant="white" className="mt-7">
                  Cotar {seg.label.toLowerCase()}
                </Button>
              </div>

              <ul className="grid gap-3">
                {seg.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-orange/20 text-orange">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
