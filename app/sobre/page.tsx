import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Stats from "@/components/Stats";
import Diferenciais from "@/components/Diferenciais";
import ComoFunciona from "@/components/ComoFunciona";
import CtaFinal from "@/components/CtaFinal";
import Reveal from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "A PRONE — Quem somos",
  description:
    "Conheça a PRONE Associação Mutualista: propósito, valores e o jeito justo de proteger caminhões, carretas e frotas por rateio.",
};

const valores: { icon: IconName; title: string; text: string }[] = [
  { icon: "handshake", title: "Feita para as pessoas", text: "Somos sem fins lucrativos. Cada real da associação existe para proteger o associado, não para gerar lucro." },
  { icon: "shield", title: "Cuidado de verdade", text: "Do primeiro contato ao acionamento, a gente trata seu problema como se fosse nosso." },
  { icon: "wallet", title: "Preço honesto", text: "Rateio transparente e sem franquias abusivas. Você sempre sabe pelo que está pagando." },
  { icon: "radar", title: "Sempre por perto", text: "Rede de assistência e central de recuperação disponíveis 24 horas, em todo o Brasil." },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="A PRONE"
        title="Uma associação feita para proteger quem vive na estrada"
        subtitle="Nascemos para tornar a proteção veicular acessível de verdade — unindo milhares de associados num modelo de mutualismo justo e transparente."
        breadcrumb="A PRONE"
      />

      {/* missão */}
      <section className="bg-white py-24">
        <div className="container-p grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange">
              Nosso propósito
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              Proteção de verdade não devia ser privilégio de poucos
            </h2>
            <div className="mt-6 space-y-4 text-graphite">
              <p>
                A PRONE é uma associação mutualista de proteção veicular. Na prática,
                juntamos milhares de pessoas que dividem entre si os custos de roubos,
                furtos, acidentes e imprevistos — o famoso rateio.
              </p>
              <p>
                Sem intermediário tirando lucro no meio, a conta fica muito mais leve.
                É proteção de verdade, com regras claras e prestação de contas, para
                caminhão, carreta e frota.
              </p>
              <p>
                Nosso compromisso é simples: estar ao lado do associado quando ele mais
                precisa, com agilidade e respeito.
              </p>
            </div>
          </Reveal>

          <Reveal i={1} className="grid gap-4 sm:grid-cols-2">
            {valores.map((v) => (
              <div
                key={v.title}
                className="rounded-card border border-paper-200 bg-paper-100 p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl brand-gradient text-white">
                  <Icon name={v.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink-800">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{v.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Stats />
      <Diferenciais />
      <ComoFunciona />
      <CtaFinal />
    </>
  );
}
