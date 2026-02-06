"use client";


import { motion } from "framer-motion";




export function CorporateServices({ data }: { data?: any }) {
  if (!data) return null;

  const { title, description, services } = data;

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
              {title || "Servicios Corporativos"}
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary mb-8 leading-[1.1] font-light">
            SST y Recursos <span className="italic font-normal text-secondary">Humanos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed tracking-wide">
            {description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services?.map((service: any, index: number) => {
            const IconComponent = getIconByName(service.iconName);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col sm:flex-row gap-6 p-8 border border-gray-100 hover:bg-secondary/10 hover:border-secondary/20 hover:shadow-lg hover:shadow-secondary/5 hover:-translate-y-1 transition-all duration-300 rounded-xl bg-white"
              >
                {IconComponent && ( // Only render if icon exists
                  <div className="shrink-0 w-14 h-14 bg-secondary/10 flex items-center justify-center text-primary rounded-full group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                )}

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

// Helper to map string name to Lucide component
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

const getIconByName = (name: string) => {
  const icons: any = {
    ClipboardCheck,
    ShieldCheck,
    Search,
    Activity,
    Eye,
    GraduationCap,
    Brain,
    Users
  };
  return icons[name] || null;
};
