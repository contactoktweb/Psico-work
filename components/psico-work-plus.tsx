"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Brain } from "lucide-react";

const carouselImages = [
  "/images/premium_tea.webp",
  "/images/formacion_empresarial_new.webp",
  "/images/talento_humano_new.webp",
  "/images/premium_office.webp",
];

export function PsicoWorkPlus() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-[#F9F9F9] border-t border-b border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Text Content */}
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-secondary" />
                <span className="text-secondary text-xs font-bold tracking-[0.3em] uppercase font-sans">
                  Premium Service
                </span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-primary leading-tight">
                PLUS PSICO WORK
              </h2>

              <p className="text-2xl text-muted-foreground mb-8 font-serif italic font-light">
                Bienestar Integral Empresarial y Personal
              </p>

              <p className="text-base text-muted-foreground leading-relaxed mb-10 font-light">
                En PSICO WORK integramos la psicología organizacional con la atención terapéutica individual. No solo evaluamos el riesgo psicosocial en las empresas, sino que acompañamos emocionalmente a sus colaboradores mediante orientación psicológica, intervención clínica breve y seguimiento continuo. Nuestro modelo conecta la salud mental de las personas con los objetivos de la organización, generando entornos laborales más humanos, productivos y sostenibles.
              </p>

              <div>
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-none px-10 h-14 tracking-[0.2em] uppercase shadow-lg shadow-secondary/10 hover:shadow-xl transition-all"
                >
                  <Link href="#contacto">
                    Solicitar Información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Visual/Image Side - Carousel */}
            <div className="relative h-[500px] overflow-hidden">
              <AnimatePresence>
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 z-0"
                >
                  <Image
                    src={carouselImages[currentImage]}
                    alt="Premium Wellness Atmosphere"
                    fill
                    className="object-cover"
                    priority={currentImage === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                </motion.div>
              </AnimatePresence>

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-end pb-2 lg:px-10 lg:pb-4 pointer-events-none items-center">
                <div className="flex flex-row items-center justify-center gap-4 w-full px-6 lg:px-0">
                  <div className="bg-white/10 backdrop-blur-md py-2 px-4 rounded-lg border border-white/20 flex flex-col items-center gap-1 shadow-2xl flex-1 backdrop-brightness-110 pointer-events-auto transition-transform hover:-translate-y-1">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary shadow-lg mb-0.5">
                      <Briefcase className="w-3 h-3" />
                    </div>
                    <span className="font-serif text-[10px] uppercase tracking-widest font-medium text-white">Empresarial</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md py-2 px-4 rounded-lg border border-white/20 flex flex-col items-center gap-1 shadow-2xl flex-1 backdrop-brightness-110 pointer-events-auto transition-transform hover:-translate-y-1">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-primary shadow-lg mb-0.5">
                      <Brain className="w-3 h-3" />
                    </div>
                    <span className="font-serif text-[10px] uppercase tracking-widest font-medium text-white">Personal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
