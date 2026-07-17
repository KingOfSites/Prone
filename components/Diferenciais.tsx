import Reveal from "./ui/Reveal";
import { Icon, type IconName } from "./ui/Icons";
import { diferenciais } from "@/data/site";

export default function Diferenciais() {
  return (
    <section id="sobre" className="bg-white py-24">
      <div className="container-p">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange">
              Por que a PRONE
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              Proteção de verdade, sem o preço do seguro tradicional
            </h2>
            <p className="mt-4 text-graphite">
              Somos uma associação sem fins lucrativos. Você e milhares de associados
              formam um fundo comum e dividem os custos de forma justa e transparente.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid border-t border-paper-200 sm:grid-cols-2">
          {diferenciais.map((d, i) => (
            <Reveal
              key={d.title}
              i={i % 2}
              className="group border-b border-paper-200 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:pr-10 sm:[&:nth-child(even)]:pl-10"
            >
              <div className="flex gap-5 py-8">
                <span className="font-display text-sm font-extrabold tabular-nums text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex items-center gap-2.5">
                    <Icon
                      name={d.icon as IconName}
                      className="h-5 w-5 text-graphite transition-colors duration-300 group-hover:text-orange"
                    />
                    <h3 className="font-display text-lg font-bold text-ink-800">
                      {d.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-graphite">{d.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
