import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";

export const metadata: Metadata = {
  title: "Dúvidas frequentes",
  description:
    "O que é associação mutualista, como funciona o rateio, carência, vistoria e cobertura nacional. Tire suas dúvidas sobre a PRONE.",
};

export default function DuvidasPage() {
  return (
    <>
      <PageHero
        eyebrow="Dúvidas frequentes"
        title="Tudo que você precisa saber antes de aderir"
        subtitle="Reunimos as perguntas que mais recebemos. Se a sua não estiver aqui, fale com um consultor no WhatsApp."
        breadcrumb="Dúvidas"
      />
      <Faq />
      <CtaFinal />
    </>
  );
}
