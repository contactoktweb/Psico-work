"use client";

import { motion } from "framer-motion";
import { Brain, Users, ClipboardCheck, Video, ArrowRight } from "lucide-react";
import Image from "next/image";

const clinicalServices = [
  {
    icon: Brain,
    title: "Psicoterapia Individual",
    description: "Espacio seguro para abordar ansiedad, depresión y crecimiento personal.",
    image: "/images/clinical_individual.webp"
  },
  {
    icon: Users,
    title: "Terapia de Pareja",
    description: "Mejora la comunicación y fortalece el vínculo afectivo.",
    image: "/images/clinical_couple.webp"
  },
  {
    icon: ClipboardCheck,
    title: "Evaluación Psicológica",
    description: "Diagnóstico preciso y orientación profesional.",
    image: "/images/clinical_evaluation.webp"
  },
  {
    icon: Video,
    title: "Atención Virtual",
    description: "Terapia profesional desde la comodidad de tu hogar.",
    image: "/images/premium_teletherapy.webp"
  },
];

export function ClinicalServices() {
  return (
    <section id="servicios" className="py-32 bg-muted relative overflow-hidden border-t border-border/40">
      {/* Editorial Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100/50 -skew-x-12 z-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center lg:text-left"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] bg-accent w-16 opacity-80" />
            <span className="text-xs font-bold tracking-[0.3em] text-secondary uppercase block font-sans">
              Servicios Clínicos
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary mb-8 leading-[1.1] font-light">
            Atención Individual <br /> <span className="italic font-normal text-secondary">y Familiar</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
            Enfoque terapéutico basado en la evidencia para promover tu bienestar emocional y mental.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicalServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border border-border hover:bg-secondary/10 hover:border-secondary/20 transition-all duration-300 bg-card hover:shadow-lg hover:shadow-secondary/5 hover:-translate-y-1 rounded-xl overflow-hidden flex flex-col h-full"
              >
                {/* Service Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6 text-secondary transition-transform duration-300 group-hover:scale-110 origin-left">
                    <IconComponent className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  {/* Decorative Line in Card */}
                  <div className="h-[1px] w-8 bg-secondary/30 mb-6" />

                  <h3 className="font-serif text-xl text-primary mb-3 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed transition-colors duration-300 text-sm mb-6 flex-1">
                    {service.description}
                  </p>

                  <div className="flex items-center text-secondary text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    Ver más <ArrowRight className="ml-2 w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
