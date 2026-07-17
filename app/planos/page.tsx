import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Segmentos from "@/components/Segmentos";
import ComoFunciona from "@/components/ComoFunciona";
import CtaFinal from "@/components/CtaFinal";

export const metadata: Metadata = {
  title: "Planos para cada veículo",
  description:
    "Planos de proteção veicular sob medida para caminhões, carretas e frotas, com rateio justo e assistência 24h.",
};

export default function PlanosPage() {
  return (
    <>
      <PageHero
        eyebrow="Planos"
        title="Um plano certo para cada tipo de veículo"
        subtitle="Caminhão, carreta ou frota: escolha o perfil e descubra as coberturas ideais para você."
        breadcrumb="Planos"
        nextDark
      />
      <Segmentos />
      <ComoFunciona />
      <CtaFinal />
    </>
  );
}
