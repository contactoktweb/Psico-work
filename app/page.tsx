import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WhatsAppButton } from "@/components/whatsapp-button";

import { PsicoWorkPlus } from "@/components/home-dynamic";
import { client } from "@/sanity/lib/client";
import { GLOBAL_SETTINGS_QUERY, HERO_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60; // Revalidate every 60 seconds

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

export default async function Home() {
  const globalSettings = await client.fetch(GLOBAL_SETTINGS_QUERY);
  const heroData = await client.fetch(HERO_QUERY);

  return (
    <main>
      <Header
        logo={globalSettings?.logo}
        menuItems={globalSettings?.headerMenuItems}
      />
      <Hero data={heroData} />
      <CorporateServices />
      <ValueProposition />
      <PsicoWorkPlus />
      <ClinicalServices />
      <Contact />
      <Footer
        logo={globalSettings?.footerLogo}
        description={globalSettings?.footerDescription}
        columns={globalSettings?.footerColumns}
        socialLinks={globalSettings?.socialLinks}
        copyright={globalSettings?.copyrightText}
      />
      <WhatsAppButton />
    </main>
  );
}
