import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WhatsAppButton } from "@/components/whatsapp-button";

import { PsicoWorkPlus } from "@/components/home-dynamic";

const CorporateServices = dynamic(() => import("@/components/corporate-services").then(mod => mod.CorporateServices), {
  loading: () => <p className="py-20 text-center text-muted-foreground">Cargando...</p>,
  ssr: true
});

const ValueProposition = dynamic(() => import("@/components/value-proposition").then(mod => mod.ValueProposition), {
  ssr: true
});

const ClinicalServices = dynamic(() => import("@/components/clinical-services").then((mod) => mod.ClinicalServices), {
  ssr: true,
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
      <CorporateServices />
      <ValueProposition />
      <PsicoWorkPlus />
      <ClinicalServices />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
