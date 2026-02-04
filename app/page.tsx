import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ClinicalServices } from "@/components/clinical-services";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ValueProposition } from "@/components/value-proposition";

import { PsicoWorkPlus } from "@/components/home-dynamic";

const CorporateServices = dynamic(() => import("@/components/corporate-services").then(mod => mod.CorporateServices), {
  loading: () => <p className="py-20 text-center text-muted-foreground">Cargando...</p>,
  ssr: true
});

const Contact = dynamic(() => import("@/components/contact").then(mod => mod.Contact), {
  loading: () => <div className="h-96" />, // Placeholder height
  ssr: true
});

const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer), {
  ssr: true
});

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ClinicalServices />
      <ValueProposition />
      <PsicoWorkPlus />
      <CorporateServices />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
