import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ClinicalServices } from "@/components/clinical-services";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ValueProposition } from "@/components/value-proposition";

const PsicoWorkPlus = dynamic(() => import("@/components/psico-work-plus").then(mod => mod.PsicoWorkPlus), {
  loading: () => <p className="py-20 text-center text-muted-foreground">Cargando...</p>,
  ssr: true
});

const CorporateServices = dynamic(() => import("@/components/corporate-services").then(mod => mod.CorporateServices), {
  loading: () => <p className="py-20 text-center text-muted-foreground">Cargando...</p>,
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
