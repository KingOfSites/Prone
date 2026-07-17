import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { passos, cotacaoUrl } from "@/data/site";

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-white py-24">
      <div className="container-p">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange">
              Como funciona
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              Do orçamento à proteção em 4 passos
            </h2>
            <p className="mt-4 text-graphite">
              Simples, rápido e sem burocracia. Você fala com a gente e sai com o
              veículo protegido.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-orange/0 via-orange/40 to-red/0 md:block" />
          {passos.map((p, i) => (
            <Reveal key={p.n} i={i} className="relative text-center md:text-left">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl brand-gradient font-display text-xl font-extrabold text-white shadow-glow md:mx-0">
                {p.n}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-800">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">{p.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href={cotacaoUrl} target="_blank" rel="noopener noreferrer" variant="primary" className="!px-8 !py-4 text-base">
            Começar minha cotação
          </Button>
        </div>
      </div>
    </section>
  );
}
