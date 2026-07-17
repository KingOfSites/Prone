import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { Icon, type IconName } from "./ui/Icons";
import { coberturas, cotacaoUrl } from "@/data/site";

export default function Coberturas() {
  return (
    <section id="coberturas" className="bg-paper-100 py-24">
      <div className="container-p">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange">
              Coberturas
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              Tudo que o seu veículo precisa, num plano só
            </h2>
            <p className="mt-4 text-graphite">
              Monte a proteção do seu jeito. Combine as coberturas abaixo e pague só
              pelo que faz sentido para você.
            </p>
          </Reveal>
          <Reveal className="shrink-0">
            <Button href={cotacaoUrl} target="_blank" rel="noopener noreferrer" variant="primary">
              Montar meu plano
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-paper-200 bg-paper-200 sm:grid-cols-2 lg:grid-cols-4">
          {coberturas.map((c, i) => (
            <Reveal key={c.title} i={i % 4}>
              <div className="group flex h-full flex-col bg-white p-6 transition-colors duration-300 hover:bg-paper-100">
                <div className="flex items-center gap-3">
                  <Icon name={c.icon as IconName} className="h-6 w-6 text-orange" />
                  <h3 className="font-display text-[15px] font-bold text-ink-800">
                    {c.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-graphite">{c.text}</p>
                <span className="mt-4 h-[3px] w-8 rounded-full brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
