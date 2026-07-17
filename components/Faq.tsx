"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { Icon } from "./ui/Icons";
import { faq, whatsappLink } from "@/data/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper-100 py-24">
      <div className="container-p grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange">
              Dúvidas frequentes
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              Tudo que você precisa saber antes de aderir
            </h2>
            <p className="mt-4 text-graphite">
              Ficou com alguma dúvida que não está aqui? Fale com um consultor no
              WhatsApp — a gente te responde na hora.
            </p>
            <Button href={whatsappLink()} variant="primary" className="mt-6">
              <Icon name="whatsapp" className="h-4 w-4" />
              Falar com consultor
            </Button>
          </Reveal>
        </div>

        <div className="divide-y divide-paper-200 overflow-hidden rounded-card border border-paper-200 bg-white">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-ink-800">
                    {item.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                      isOpen ? "brand-gradient text-white" : "bg-paper-100 text-graphite"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-graphite">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
