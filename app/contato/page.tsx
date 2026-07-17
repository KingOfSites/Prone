import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContatoContent from "@/components/ContatoContent";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a PRONE Associação Mutualista pelo WhatsApp ou Instagram e peça sua cotação de proteção veicular gratuita.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos proteger o seu veículo?"
        subtitle="Peça uma cotação gratuita ou tire suas dúvidas. A gente responde rápido, de gente para gente."
        breadcrumb="Contato"
      />
      <ContatoContent />
    </>
  );
}
