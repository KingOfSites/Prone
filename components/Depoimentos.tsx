import Reveal from "./ui/Reveal";
import { depoimentos } from "@/data/site";

function Stars() {
  return (
    <div className="flex gap-0.5 text-orange">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 15l-5.3 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section className="bg-white py-24">
      <div className="container-p">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange">
              Quem já é PRONE
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              Histórias de quem dirige tranquilo
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal key={d.name} i={i}>
              <figure className="flex h-full flex-col rounded-card border border-paper-200 bg-paper-100 p-7">
                <Stars />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-800">
                  “{d.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-paper-200 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full brand-gradient font-display text-sm font-bold text-white">
                    {d.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink-800">{d.name}</p>
                    <p className="text-xs text-graphite">{d.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
