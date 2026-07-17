import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Diferenciais from "@/components/Diferenciais";
import Coberturas from "@/components/Coberturas";
import Segmentos from "@/components/Segmentos";
import ComoFunciona from "@/components/ComoFunciona";
import Depoimentos from "@/components/Depoimentos";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import { site, faq } from "@/data/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    description: site.description,
    sameAs: [site.instagram],
    address: { "@type": "PostalAddress", addressCountry: "BR" },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Stats />
      <Diferenciais />
      <Coberturas />
      <Segmentos />
      <ComoFunciona />
      <Depoimentos />
      <Faq />
      <CtaFinal />
    </>
  );
}
