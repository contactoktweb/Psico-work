import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ClinicalServices } from "@/components/clinical-services";
import { CorporateServices } from "@/components/corporate-services";
import { PsicoWorkPlus } from "@/components/psico-work-plus";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ValueProposition } from "@/components/value-proposition";

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
