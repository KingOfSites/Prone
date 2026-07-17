import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Coberturas from "@/components/Coberturas";
import Depoimentos from "@/components/Depoimentos";
import CtaFinal from "@/components/CtaFinal";

export const metadata: Metadata = {
  title: "Coberturas e proteção",
  description:
    "Roubo, furto, colisão, incêndio, fenômenos naturais, assistência 24h e mais. Veja tudo que a proteção veicular da PRONE cobre.",
};

export default function CoberturasPage() {
  return (
    <>
      <PageHero
        eyebrow="Coberturas"
        title="Proteção completa, do jeito que o seu veículo precisa"
        subtitle="Monte o seu plano combinando as coberturas abaixo. Você paga só pelo que faz sentido para a sua rotina."
        breadcrumb="Coberturas"
      />
      <Coberturas />
      <Depoimentos />
      <CtaFinal />
    </>
  );
}
