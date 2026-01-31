"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_soft_wellness.png"
          alt="Psicólogo profesional en ambiente moderno"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mr-auto text-left"
        >
          {/* Minimalist Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-start gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-accent opacity-80" />
            <span className="text-secondary font-bold text-xs tracking-[0.3em] uppercase opacity-90">
              Salud Mental y Bienestar
            </span>
          </motion.div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-10 text-balance font-light">
            Bienestar Integral para <br />
            <span className="text-secondary italic font-normal">Personas</span> <span className="font-serif italic font-light text-accent text-6xl md:text-8xl align-middle mr-2 ml-1">&</span> <span className="text-secondary italic font-normal">Empresas.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-14 font-sans font-light leading-loose max-w-xl mr-auto tracking-wide">
            Psicología Clínica, Organizacional y Gestión del Talento Humano. Transformamos vidas y potenciamos entornos laborales.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-start items-center sm:items-start">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-secondary/20 hover:text-primary rounded-none h-14 px-12 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 border border-transparent hover:border-secondary"
            >
              <Link href="#servicios">
                Nuestros Servicios
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-secondary/20 hover:text-primary rounded-none h-14 px-12 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 border border-transparent hover:border-secondary"
            >
              <Link href="#contacto">Contactar</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
