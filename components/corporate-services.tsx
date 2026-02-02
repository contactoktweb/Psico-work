"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  ClipboardCheck,
  Search,
  Activity,
  Eye,
  GraduationCap,
  Brain,
  Users
} from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Batería Psicosociales",
    description: "Aplicamos la batería de riesgo psicosocial conforme a la normativa colombiana, permitiendo identificar factores intra y extralaborales que afectan el bienestar y desempeño de los trabajadores, con informes claros y planes de intervención efectivos.",
  },
  {
    icon: ShieldCheck,
    title: "Diseño e Implementación del SG-SST",
    description: "Acompañamos a tu empresa en el diseño, ejecución y mejora del Sistema de Gestión de Seguridad y Salud en el Trabajo, garantizando cumplimiento legal, prevención de riesgos y una cultura organizacional saludable.",
  },
  {
    icon: Search,
    title: "Análisis de Puestos de Trabajo en Riesgo Psicosocial",
    description: "Evaluación ergonómica y psicosocial de las condiciones laborales para la prevención de riesgos y una cultura organizacional saludable.",
  },
  {
    icon: Activity,
    title: "Evaluación del Riesgo Psicosocial",
    description: "Realizamos diagnósticos integrales que permiten identificar, medir y priorizar los factores de riesgo psicosocial, generando estrategias de intervención ajustadas a las necesidades reales de la organización.",
  },
  {
    icon: Eye,
    title: "Programa de Vigilancia Epidemiológica en Riesgo Psicosocial",
    description: "Diseñamos e implementamos programas de vigilancia que permiten el seguimiento continuo de los factores psicosociales, promoviendo la prevención, el control y la mejora permanente del clima laboral.",
  },
  {
    icon: GraduationCap,
    title: "Formación Empresarial",
    description: "Desarrollamos procesos de capacitación en habilidades blandas, liderazgo, comunicación, manejo del estrés y bienestar laboral, fortaleciendo equipos de trabajo más sanos, productivos y comprometidos.",
  },
  {
    icon: Brain,
    title: "Psicología Ocupacional",
    description: "Desarrollamos procesos de capacitación en PREVENCION DEL ACOSO LABORAL, habilidades blandas, liderazgo, comunicación, manejo del estrés y bienestar laboral, fortaleciendo equipos de trabajo más sanos, productivos y comprometidos.",
  },
  {
    icon: Users,
    title: "Gestión del Talento Humano y Bienestar",
    description: "Reclutamiento, selección y contratación de empleados en misión. Antecedentes judiciales, visitas domiciliarias, polígrafo y administración de nómina para empresas.",
  },
];

export function CorporateServices() {
  return (
    <section id="empresas" className="py-32 bg-white border-t border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center lg:text-left"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] bg-accent w-16 opacity-80" />
            <span className="text-xs font-bold tracking-[0.3em] text-secondary uppercase block font-sans">
              Servicios Corporativos
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary mb-8 leading-[1.1] font-light">
            SST y Recursos <span className="italic font-normal text-secondary">Humanos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed tracking-wide">
            Soluciones integrales para la gestión del talento y el bienestar organizacional, diseñadas para potenciar el rendimiento y la salud de tu equipo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col sm:flex-row gap-6 p-8 border border-gray-100 hover:bg-secondary/10 hover:border-secondary/20 hover:shadow-lg hover:shadow-secondary/5 hover:-translate-y-1 transition-all duration-300 rounded-xl bg-white"
              >
                <div className="shrink-0 w-14 h-14 bg-secondary/10 flex items-center justify-center text-primary rounded-full group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div>
                  {/* Decorative Line in Card */}
                  <div className="h-[1px] w-12 bg-secondary/30 my-4" />

                  <h3 className="font-serif text-xl sm:text-2xl text-primary mb-3 font-medium transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
