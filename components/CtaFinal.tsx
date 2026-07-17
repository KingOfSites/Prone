import Image from "next/image";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { Icon } from "./ui/Icons";
import { whatsappLink, cotacaoUrl } from "@/data/site";

export default function CtaFinal() {
  return (
    <section className="bg-white pb-24 pt-4">
      <div className="container-p">
        <div className="relative overflow-hidden rounded-[2.5rem] brand-gradient px-8 py-16 text-center text-white md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 grid-mask opacity-20" />
          <Image
            src="/brand/symbol.svg"
            alt=""
            width={120}
            height={132}
            className="pointer-events-none absolute -bottom-8 -right-4 opacity-20 md:opacity-25"
          />
          <div className="relative mx-auto max-w-2xl">
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                Faça sua cotação gratuita agora
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/85">
                Descubra em minutos quanto custa proteger o seu veículo com a PRONE.
                Sem compromisso e sem enrolação.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  href={cotacaoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="white"
                  className="!px-8 !py-4 text-base"
                >
                  Fazer cotação gratuita
                </Button>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
