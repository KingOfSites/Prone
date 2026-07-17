import Reveal from "./ui/Reveal";
import { Icon, type IconName } from "./ui/Icons";
import { site, whatsappLink, cotacaoUrl, areaAssociadoUrl } from "@/data/site";

const canais: { icon: IconName; title: string; value: string; href: string; hint: string }[] = [
  {
    icon: "whatsapp",
    title: "WhatsApp",
    value: site.whatsappLabel,
    href: whatsappLink(),
    hint: "Atendimento direto com o time",
  },
  {
    icon: "instagram",
    title: "Instagram",
    value: "@proneassociacao",
    href: site.instagram,
    hint: "Novidades e bastidores da associação",
  },
  {
    icon: "user",
    title: "Área do associado",
    value: "Acessar minha conta",
    href: areaAssociadoUrl,
    hint: "2ª via, boletos e acompanhamento",
  },
];

const passosCotacao = [
  "Você preenche a solicitação de orçamento",
  "Um vendedor recebe o pedido no nosso sistema",
  "A gente entra em contato pelo WhatsApp com o seu valor",
];

export default function ContatoContent() {
  return (
    <section className="bg-white py-24">
      <div className="container-p grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {/* canais */}
        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange">
              Fale com a gente
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              A PRONE está a uma mensagem de distância
            </h2>
            <p className="mt-4 text-graphite">
              Escolha o canal que preferir. Nosso time responde rápido e sem enrolação —
              e a assistência funciona 24 horas, todos os dias.
            </p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {canais.map((c, i) => (
              <Reveal key={c.title} i={i}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-card border border-paper-200 bg-paper-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-card"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl brand-gradient text-white">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-ink-800">{c.title}</p>
                    <p className="text-sm font-medium text-orange">{c.value}</p>
                    <p className="text-xs text-graphite">{c.hint}</p>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal i={3}>
              <div className="flex items-center gap-4 rounded-card border border-paper-200 bg-ink p-5 text-white">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10">
                  <Icon name="lifebuoy" className="h-6 w-6 text-orange" />
                </span>
                <div>
                  <p className="font-display text-base font-bold">Assistência 24h</p>
                  <p className="text-sm text-white/60">
                    Guincho e socorro a qualquer hora, em todo o Brasil.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* solicitação de orçamento */}
        <Reveal i={1}>
          <div className="relative overflow-hidden rounded-card brand-gradient p-8 text-white shadow-glow md:p-10">
            <div className="pointer-events-none absolute inset-0 grid-mask opacity-15" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                Cotação gratuita
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                Solicite seu orçamento
              </h3>
              <p className="mt-3 text-white/85">
                Preencha a solicitação e um consultor prepara o seu valor. Leva menos de 2
                minutos e não tem compromisso.
              </p>

              <ol className="mt-7 space-y-3">
                {passosCotacao.map((p, i) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/20 font-display text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-sm text-white/90">{p}</span>
                  </li>
                ))}
              </ol>

              <a
                href={cotacaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold font-display text-ink-800 transition-all duration-300 hover:bg-paper-100 active:scale-[0.98]"
              >
                Fazer solicitação de cotação
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <p className="mt-3 text-center text-xs text-white/70">
                Você será direcionado ao nosso sistema de cotação.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
