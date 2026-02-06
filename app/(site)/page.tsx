import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";
import { WhatsAppButton } from "@/components/whatsapp-button";

import { PsicoWorkPlus } from "@/components/home-dynamic";
import { client } from "@/sanity/lib/client";
import { HERO_QUERY, CORPORATE_SERVICES_QUERY, VALUE_PROPOSITION_QUERY, PSICO_WORK_PLUS_QUERY, CLINICAL_SERVICES_QUERY, CONTACT_QUERY, GLOBAL_SETTINGS_QUERY } from "@/sanity/lib/queries";

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



export default async function Home() {
    const heroData = await client.fetch(HERO_QUERY);
    const corporateData = await client.fetch(CORPORATE_SERVICES_QUERY);
    const valueData = await client.fetch(VALUE_PROPOSITION_QUERY);
    const psicoData = await client.fetch(PSICO_WORK_PLUS_QUERY);
    const clinicalData = await client.fetch(CLINICAL_SERVICES_QUERY);
    const contactData = await client.fetch(CONTACT_QUERY);
    // globalSettings is already fetched in layout but here we need it for page components if we don't context it.
    // However, for simplicity let's fetch it or assume partial data.
    // Actually, we should fetch global settings here too if needed, OR pass it down.
    // To avoid refetching, we can use the same query or just fetch what we need.
    const globalSettings = await client.fetch(GLOBAL_SETTINGS_QUERY);

    return (
        <main>
            <Hero data={heroData} />
            <CorporateServices data={corporateData} />
            <ValueProposition data={valueData} />
            <PsicoWorkPlus data={psicoData} />
            <ClinicalServices data={clinicalData} />
            <Contact data={contactData} globalSettings={globalSettings} />
            <WhatsAppButton globalSettings={globalSettings} />
        </main>
    );
}
